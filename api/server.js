const express = require("express");
const app = express();

function startWithRetry() {
    app.listen(8080, () => {
      app.get("/", (req, res, next) => {
        res.sendStatus(200)
        res.end('OK')
        return;
      });
      console.log("Server running on port 8080.");
    });
}

startWithRetry();
