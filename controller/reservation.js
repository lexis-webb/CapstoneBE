import { Reservation } from "../models/reservationSchemas.js"

// Controller to create a reservation
export const createReservation = async (req, res) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
  
    // Validate required fields
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (firstName, lastName, email, date, time, phone)"
      });
    }
  
    try {
      const reservation = new Reservation({
        firstName,
        lastName,
        email,
        date,
        time,
        phone,
      });
  
      // Save the reservation to the database
      await reservation.save();
  
      res.status(201).json({
        success: true,
        message: "Reservation created successfully!",
        data: reservation,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error creating reservation",
        error: error.message,
      });
    }
  };