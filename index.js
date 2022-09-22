import Binance from "node-binance-api";
//import Binance from "binance-api-node";
import OrderRoute from "./routes/test.binance.route.js";
import express from "express";

const app = express();

export const binance = new Binance().options({
  APIKEY: "0d1e94b104dd54fde98dec9a83f8916b1af3daa0c81c8c754b59ce3d62c8a00a",
  APISECRET: "fd6302c060bdf02d8c5e369cc433eb802f6fa09b22317ae1a113f5ff86c40841",
  useServerTime: true, //binance-api/node_modules/node-binance-api/node-binance-api.js/default_options/recvWindow //default: 5000
  test: true,
});
/*
const client = Binance({
  apiKey: "0d1e94b104dd54fde98dec9a83f8916b1af3daa0c81c8c754b59ce3d62c8a00a",
  apiSecret: "fd6302c060bdf02d8c5e369cc433eb802f6fa09b22317ae1a113f5ff86c40841",
});
*/
//app.use("/api/binance-test/", OrderRoute);

try {
  const port = app.listen(3000);
  console.log("Listening on Port : 3000");
} catch (error) {
  console.log(error);
}

//return await binance.futuresAllOrders();
/*urls: {
  base: "https://testnet.binance.vision/api/v3/time",
  // testnet endpoint or default
},*/

//FOR CHANGING MARGIN TYPE (ISOLATED AND CROSSED)
//return binance.futuresMarginType("BTCUSDT", "ISOLATED");
