const axios = require("axios");
const express = require("express");
require("dotenv").config();

const app = express();
const API = process.env.API_ENDPOINT;
const PORT = process.env.PORT || 3000;

async function fetchData(endpoint) {
  try {
    const response = await axios.get(`${API}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.message);
    throw new Error("Internal Server Error");
  }
}

async function fetchTotalSupply() {
  const data = await fetchData(
    `/cosmos/bank/v1beta1/supply/${process.env.COIN_DENOM}`
  );
  return data.amount.amount;
}

async function fetchCirculatingSupply() {
  const communityPool = (
    await fetchData("/cosmos/distribution/v1beta1/community_pool")
  ).pool[0].amount;
  const totalSupply = await fetchTotalSupply();
  return totalSupply - communityPool;
}

app.get("/total-supply", async (_, res) => {
  try {
    const totalSupply = await fetchTotalSupply();
    res.send(`<html><head></head><body>${totalSupply}</body></html>`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/circulating-supply", async (_, res) => {
  try {
    const circulatingSupply = await fetchCirculatingSupply();
    res.send(`<html><head></head><body>${circulatingSupply}</body></html>`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
