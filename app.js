const express = require("express");
const mongoose = require("mongoose");
const StudentRouter = require("./routes/StudentRouter");

const app = express();
app.use(express.json());

app.use(StudentRouter);

mongoose.connect("mongodb://localhost/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("çalıştı");
});