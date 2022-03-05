const router = require("express").Router();
const Model = require("../model/Student");
const { exportStutendsToExcel } = require("../service/StudentService");

router.post("/students", (req, res) => {
  Model.create(req.body);
  res.send({ message: "Ogrenci eklendi." });
});

router.get("/students/export-excel", (req, res) => {
  Model.find({}).then((data) => {
    exportStutendsToExcel(data);
    res.send({ message: "Excel'e aktarıldı." });
  });
});

module.exports = router;
