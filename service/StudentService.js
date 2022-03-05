const { exportToExcel } = require("../utils/ExcelUtil");

const exportStutendsToExcel = (data) => {
  const columns = [
    { header: "Id", key: "_id", width: 20 },
    { header: "Name", key: "name", width: 20 },
    { header: "Surname", key: "surname", width: 20 },
    { header: "School", key: "school", width: 20 },
    ];
    exportToExcel(data, columns);
};

module.exports = { exportStutendsToExcel };
