const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let { PythonShell } = require("python-shell");

app.get("/hello", callD_alembert);

function callD_alembert(req, res) {
  const options = {
    args: []
  };
  PythonShell.run("./python/hello.py", options, function(err, data) {
    if (err) res.send(err);
    res.send(data.toString());
  });
}

app.listen(port, function() {
  console.log(`--server is listening on port ${port}`);
});
