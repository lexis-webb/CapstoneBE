import TimeSlot from "../models/timeslotSchema.js";
import { slots } from "../data.js";

export const checkAvailableSlots = async(req, res, next) => {
    const date = req.params.date;
    const restId = req.params.id;
    try {
      const reservations = await TimeSlot.find({
        email: email 
      });