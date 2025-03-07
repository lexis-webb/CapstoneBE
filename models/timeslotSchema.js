import mongoose from "mongoose";
import validator from "validator";

const timeSlotSchema = new mongoose.Schema(
    {
        date: {
          type: Date,
          required: true,
        },
        slot: {
          type: String,
          required: true,
        },
        people: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
          validate: [validator.isEmail, "Provide a valid email"],
        },
      },
    //   { timestamps: true }
    );

export default mongoose.model("TimeSlot", timeSlotSchema);