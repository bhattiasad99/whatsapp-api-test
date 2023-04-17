import { Router } from "express";
import {
  testTwilio,
  sendMessage,
  sendQrCode,
  getMessage,
} from "../controllers/twilio/index.js";

const router = Router();
router.get("/", testTwilio);
router.post("/send", sendMessage);
router.post("/send-qr-code", sendQrCode);
router.post("/get-message", getMessage);
export default router;
