import { binance } from "../index.js";

export const placeOrder = async (req, res) => {
  let orders = [
    {
      symbol: "BTCUSDT",
      side: "BUY",
      type: "MARKET",
      quantity: "0.01",
    },
  ];

  const result = await binance.futuresMultipleOrders(orders);
  res.status(200).json(result); /*  .then((res) => {
      res.status(200).json(res);
    })
    .catch((error) => {
      res.status(409).json(error);
    });
    */
};

export const getOpenOrders = async (req, res) => {
  const result = await binance
    .futuresOpenOrders("BTCUSDT")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(409).json(err);
      console.log(err);
    });
  //res.status(200).json(result);
};

export const limitBuy = async (req, res) => {
  const buy = await binance.futuresBuy("BTCUSDT", 0.1, 8222);
  res.status(201).json(buy);
};
/*
return await binance.futuresGetDataStream();
test().then((res) => console.log(res));
  //return await binance.futuresAllOrders();
*/
