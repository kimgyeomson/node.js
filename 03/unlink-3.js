const fs = require("fs");

if(!fs.existsSync("./text-2.txt")) { // 파일이 없다면
    console.log("file does not exist");
}
else { //파일이 있다면
    fs.unlink("./text-2.txt", () => {
        console.log("file deleted");
    });
}