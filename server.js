require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const esewaRoutes = require("./routes/esewa");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/esewa", esewaRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));
