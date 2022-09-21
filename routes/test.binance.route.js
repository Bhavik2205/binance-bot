import {
  getOpenOrders,
  limitBuy,
  placeOrder,
} from "../controllers/test.binance.js";
import express from "express";

const router = express.Router();

router.get("/placeOrder", placeOrder);
router.get("/getOpenOrders", getOpenOrders);
router.get("/limitBuy", limitBuy);

export default router;
