const PORT = 4000;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import timeSlotRoutes from "./routes/timeSlotRoutes.js"
import timeSlotRouter from './routes/timeSlotRoutes.js'
import reservationRoute from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middleware/error.js";


const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
    });

app.use(cors());

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods (you can add more if needed)
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };

  app.use(cors(corsOptions));
  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;");
    next();
  });
  

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
// app.use('/api/timeslots', timeSlotRoutes)
// app.use('/', timeSlotRouter);
app.get('/', (req, res) => {
    res.send("HELLO");
});
app.use("/reservations", timeSlotRouter);


  


app.use(errorMiddleware);


// app.get("/", (req, res) => {
//     res.send("Express App is running")
// });


app.listen(4000, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

//   export default app;