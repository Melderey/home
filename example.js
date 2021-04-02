import yup from 'yup';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
};

async.waterfall([
  myFirstFunction,
  mySecondFunction,
  myLastFunction,
], function (err, result) {
  // result now equals 'done'
});
function myFirstFunction(callback) {
  callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
  // arg1 now equals 'one' and arg2 now equals 'two'
  callback(null, 'three');
}
function myLastFunction(arg1, callback) {
  // arg1 now equals 'three'
  callback(null, 'done');
}
