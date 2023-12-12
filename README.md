# Cosmos Supply Endpoints
A simple Node implementation to get the circulating supply and total supply for Cosmos-based ecosystems.

## Installation (Local)

1. First create an `.env` file in the root of the repository.
2. Copy and paste the content of the `.env.example` into the `.env` file.
3. Change the `COIN_DENOM` Make sure to use the correct denominator for `COIN_DENOM`. It is usually the smallest denom.
4. Change the `API_ENDPOINT` to one that is up-to-date and stable (no trailing slash!).
5. Run `npm install`.
6. Turn on the server by running `npm start`.
7. Once the server is started, browse to the endpoints `localhost:3000/total-supply` and `localhost:3000/circulating-supply` to see the outcomes and double-check if they're correct.
