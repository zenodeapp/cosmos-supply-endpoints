# Cosmos Supply Endpoints

A simple Node implementation that creates endpoints for the circulating supply and the total supply using the Cosmos SDK API.

This has been written by ZENODE and is licensed under the MIT-license (see [LICENSE](./LICENSE)).

## Installation (Local)
1. First create an `.env` file in the root of the repository.
2. Copy and paste the content of the `.env.example` into the `.env` file.
3. Change the `API_ENDPOINT` to one that is up-to-date and stable (no trailing slash!).
4. Change the `COIN_DENOM` Make sure to use the correct denominator for `COIN_DENOM`. It is usually the smallest denom.
5. Change the `COIN_DECIMALS` to make sure your end result gets shown in the right amount of decimals. Default: 6.
6. Run `npm install`.
7. Turn on the server by running `npm start`.
8. Once the server is started, browse to the endpoints `localhost:3000/total-supply` and `localhost:3000/circulating-supply` to see the outcomes.

> [!IMPORTANT]
> **LOGIC: Total Supply - Community Pool = Circulating Supply.**
> 
> The logic or API may not match with your chain, so make the necessary changes if the outcome appears to be incorrect or invalid.

</br>

<p align="right">— ZEN</p>
<p align="right">Copyright (c) 2023 ZENODE</p>
