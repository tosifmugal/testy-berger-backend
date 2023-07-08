import express from "express";
import {

  placeOrder,
  
} from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder",  placeOrder);



export default router;
