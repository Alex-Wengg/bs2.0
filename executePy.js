const { exec, spawn, execFile } = require("child_process");

const executePy = (filepath) => {

  return new Promise((resolve, reject) => {
    exec(
      `python3 ./test/twosum.py ${filepath}`,
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
