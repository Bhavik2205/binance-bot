import {
  getOpenOrders,
  limitBuy,
  placeOrder,
  stream,
} from "../controllers/test.binance.js";
import express from "express";

const router = express.Router();

router.get("/placeOrder", placeOrder);
router.get("/getOpenOrders", getOpenOrders);
router.get("/limitBuy", limitBuy);
router.get("/stream", stream);

export default router;
