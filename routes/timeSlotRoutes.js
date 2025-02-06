import express from 'express';
import {
  createTimeSlot,
  getTimeSlots,
  getTimeSlotsByEmail,
  updateTimeSlot,
  deleteTimeSlot,
  createTimeSlots
} from '../controller/timeslot.js';
import { createReservation } from '../controller/reservation.js';

const router = express.Router();

//  find timeslot
router.post('/create-slots', createTimeSlots);

//  create a new TimeSlot
router.post('/timeslots', createTimeSlot);

//  get all TimeSlots
router.get('/timeslots', getTimeSlots);

//  get TimeSlots by email
router.get('/timeslots/email/:email', getTimeSlotsByEmail);

//  update a TimeSlot by ID
router.put('/timeslots/:id', updateTimeSlot);

//  delete a TimeSlot by ID
router.delete('/timeslots/:id', deleteTimeSlot);


export default router;
