const fs = require("fs");

if(fs.existsSync("./test")) { // 삭제할 디렉터리가 있다면
    fs.rmdir("./test", (err) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log("folder deleted");
        }
    });
}
else { // 삭제할 디렉터리가 없다면
    console.log("folder does not exist");
}