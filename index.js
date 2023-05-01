const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
