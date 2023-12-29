const fs = require("fs");

if(!fs.existsSync("./text-1.txt")) { // 파일이 없다면
    console.log("file does not exist");
}
else {
    fs.unlinkSync("./text-1.txt");
    console.log("file deleted");
}