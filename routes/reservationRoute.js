import express from "express";
import { createReservation } from "../controller/reservation.js";

const router = express.Router();

// send reservation form

router.post('/createReservation', createReservation);


export default router;
