const  fs = require('fs');
const async = require('async');

const { waterfall } = async;

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  let result1 = '';
  let result2 = '';
  let result = '';

  waterfall([
    fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
      if (error1) {
        cb(error1);
        return;
      }
      result1 = data1;
    }),
   fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      result2 = data2;
   }),
    fs.writeFile(outputPath, `${result1}${result2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null) // не забываем последний успешный вызов
      })
  ])
}

