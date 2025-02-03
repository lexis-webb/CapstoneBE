const PORT = 4000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


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



// app.get("/", (req, res) => {
//     res.send("Express App is running")
// });


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

//   export default app;