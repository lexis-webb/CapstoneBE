import { Reservation } from "../models/reservationSchemas.js"

export const createReservation = async (req, res) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
  
    // Validate request data
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }
  
    try {
      const reservation = await Reservation.create({ firstName, lastName, email, date, time, phone });
      res.status(201).json({
        success: true,
        message: "Reservation created successfully!",
        reservation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };