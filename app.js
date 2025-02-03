const PORT = 4000;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middleware/error.js";



const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use("api/v1/reservations", reservationRouter)

app.use(errorMiddleware);



// app.get("/", (req, res) => {
//     res.send("Express App is running")
// });


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

//   export default app;