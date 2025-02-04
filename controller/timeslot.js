import TimeSlot from "../models/timeslotSchema.js";
import { slots } from "../data.js";

export const createTimeSlots = async (req, res) => {
    try {
      // Loop through the slots and create documents in MongoDB
      const timeSlots = slots.map(slot => ({ slot }));
  
      // Insert all time slots into the MongoDB collection
      await TimeSlot.insertMany(timeSlots);
  
      res.status(201).json({
        success: true,
        message: 'Time slots added successfully!',
        data: timeSlots,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to add time slots',
        error: error.message,
      });
    }
  };
export const createTimeSlot = async (req, res, next) => {
    const { date, slot, people, email } = req.body;
  
    // Check if all necessary fields are provided
    if (!date || !slot || !people || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields."
      });
    }
  
    try {
      // Create a new TimeSlot
      const newTimeSlot = await TimeSlot.create({ date, slot, people, email });
  
      // Respond with the newly created time slot
      res.status(201).json({
        success: true,
        message: "TimeSlot created successfully",
        data: newTimeSlot
      });
    } catch (error) {
      next(error);  // Handle any errors, pass them to the error handler
    }
  };

  export const getTimeSlots = async (req, res, next) => {
    try {
      // Fetch all time slots
      const timeSlots = await TimeSlot.find();
  
      // Return the time slots in the response
      res.status(200).json({
        success: true,
        data: timeSlots
      });
    } catch (error) {
      next(error);  // Handle any errors
    }
  };

  export const getTimeSlotsByEmail = async (req, res, next) => {
    const { email } = req.params;  // Get email from URL parameters
  
    try {
      // Fetch time slots for the given email
      const timeSlots = await TimeSlot.find({ email });
  
      // If no time slots found for the email, send a 404 response
      if (!timeSlots.length) {
        return res.status(404).json({
          success: false,
          message: `No time slots found for ${email}`
        });
      }
  
      // Return the time slots for the given email
      res.status(200).json({
        success: true,
        data: timeSlots
      });
    } catch (error) {
      next(error);  // Handle any errors
    }
  };
  export const updateTimeSlot = async (req, res, next) => {
    const { id } = req.params;  // Get the ID of the time slot to update from URL parameters
    const { date, slot, people, email } = req.body;
  
    try {
      // Find the time slot by ID and update it
      const updatedTimeSlot = await TimeSlot.findByIdAndUpdate(
        id,
        { date, slot, people, email },
        { new: true }  // Ensure the updated document is returned
      );
  
      // If no time slot is found, return 404
      if (!updatedTimeSlot) {
        return res.status(404).json({
          success: false,
          message: "TimeSlot not found"
        });
      }
  
      // Return the updated time slot
      res.status(200).json({
        success: true,
        message: "TimeSlot updated successfully",
        data: updatedTimeSlot
      });
    } catch (error) {
      next(error);  // Handle any errors
    }
  };
  export const deleteTimeSlot = async (req, res, next) => {
    const { id } = req.params;  // Get the ID from the URL parameters
  
    try {
      // Find the time slot by ID and delete it
      const deletedTimeSlot = await TimeSlot.findByIdAndDelete(id);
  
      // If no time slot is found, return 404
      if (!deletedTimeSlot) {
        return res.status(404).json({
          success: false,
          message: "TimeSlot not found"
        });
      }
  
      // Send success response
      res.status(200).json({
        success: true,
        message: "TimeSlot deleted successfully"
      });
    } catch (error) {
      next(error);  // Handle any errors
    }
  };
  
  
  