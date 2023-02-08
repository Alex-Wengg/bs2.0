const { exec, spawn, execFile } = require("child_process");

const executePy = (filepath, testFile) => {

  return new Promise((resolve, reject) => {
    exec(
      `python3 ./test/${testFile} ${filepath}`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );

  });
};

module.exports = {
  executePy,
};
