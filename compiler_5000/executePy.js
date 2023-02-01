const { exec, spawn, execFile } = require("child_process");

const executePy = (filepath) => {
  var param2 = 1
  var param3 = 2

  return new Promise((resolve, reject) => {
    exec(
      `python3 ./test/twosum.py ${filepath}`,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        console.log("stdout")
        console.log(error)

        console.log(stderr)
        resolve(stdout);
      }
    );

  });
};

module.exports = {
  executePy,
};
