const ExcelJS = require("exceljs");
var fs = require("fs");

const exportToExcel = async (data, columns) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Student Sheet");

  worksheet.columns = columns;

  for (const item of data) {
    worksheet.addRow(item);
  }

  var dir = "./exports";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const fileName = `${dir}/export_${new Date().toJSON().slice(0, 10)}.xlsx`;
  await workbook.xlsx
    .writeFile(fileName)
    .then(() => {
      console.log("saved");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

module.exports = { exportToExcel };
