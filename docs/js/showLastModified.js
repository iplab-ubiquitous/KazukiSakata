var modified = new Date(document.lastModified);
var year = modified.getFullYear();
var month = modified.getMonth() + 1;
var date = modified.getDate();
document.write(year + "年" + month + "月" + date + "日");
