const path = require("path");

// 경로 연결하기
const fullpath = path.join('some', 'work', 'ex.txt');
console.log(fullpath); // some\work\ex.txt

// 절대 경로
console.log(`파일 절대 경로: ${__filename}`);
// window는 \ , mac은 /

// 경로 추출하기
const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

// 파일 이름 추출하기
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름: ${fn}`);                // 파일 이름: path.js
console.log(`파일 이름(확장자 제외): ${fn2}`);     // 파일 이름(확장자 제외): path)

// 파일 확장자 추출하기
const ext = path.extname(__filename);
console.log(`파일 확장자: ${ext}`);                 // 파일 확장자: .js
console.log(path.basename(__filename, ext));     // path

// 경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);