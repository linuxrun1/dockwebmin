const express = require("express");
const app = express();
app.listen(8080, () => {
  app.get("/", (req, res) => {
    res.sendStatus(200)
      res.end('OK')
     });
      console.log("Server running on port 8080.");
});
