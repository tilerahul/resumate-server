const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require('./router/auth-router');
const resumeRoute = require('./router/resume-router');
const sectionRoute = require('./router/section-router');
const contactRoute = require('./router/contact-router');
const reviewRoute = require('./router/review-router');
const otpRoute = require('./router/otp-router');
const dbConnect = require("./DBconnection/db");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello This is new Home Page of Resumate - The resume builder !!!")
})

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api v1/resume", resumeRoute);
app.use("/api/v1/section", sectionRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/otp", otpRoute);

dbConnect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})