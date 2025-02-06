import express from 'express';
import {
  createTimeSlot,
  getTimeSlots,
  getTimeSlotsByEmail,
  updateTimeSlot,
  deleteTimeSlot,
  createTimeSlots
} from '../controller/timeslot.js';


const router = express.Router();

//  find timeslot
router.post('/create-slots', createTimeSlots);

//  create a new TimeSlot
router.post('/timeslots', createTimeSlot);

//  get all TimeSlots
router.get('/timeslot', getTimeSlots);

//  get TimeSlots by email
router.get('/timeslots/email/:email', getTimeSlotsByEmail);

//  update a TimeSlot by ID
router.put('/timeslots/edit', updateTimeSlot);

//  delete a TimeSlot 
router.delete('/timeslots/delete', deleteTimeSlot);


export default router;
