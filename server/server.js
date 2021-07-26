import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import csrf from "csurf";
import cookieParser from "cookie-parser";
const morgan = require("morgan");
const mysql = require("mysql");
require("dotenv").config();


const csrfProtection = csrf({cookie: true});

//create express app
const app = express();

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

//route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

//csrf
app.use(csrfProtection)

app.get('/api/csrf-token', (req,res) => {
  res.json({csrfToken: req.csrfToken()});
})

//db
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected...");
  }
});

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
