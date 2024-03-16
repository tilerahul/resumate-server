const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require('./router/auth-router');
const resumeRoute = require('./router/resume-router');
const sectionRoute = require('./router/section-router');
const contactRoute = require('./router/contact-router');
const dbConnect = require("./DBconnection/db");
const cors = require('cors');

app.use(express.json());
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello This is new Home page of Resumate - The resume builder !!!")
})

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api v1/resume", resumeRoute);
app.use("/api/v1/section", sectionRoute);

dbConnect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})