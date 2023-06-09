import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.route("/").get((req, res) => {
  res.send("this is initial simple todo list");
});

app.listen(port, () => {
  console.log("run on port ", port);
});
