const fs = require("fs");

if(fs.existsSync("./mine")) {
    console.log("folder already exists");
}
else {
    fs.mkdir("./mine", (err) => {
        if(err) {
            console.err(err);
        }
        console.log("folder created");
    });
}