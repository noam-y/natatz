const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // this line is the path to static pages on the website, available on static folder
app.use(express.urlencoded({ extended: true })); //this line allows getting info from forms


const userRouter = require("./routes/users");
app.use("/users", userRouter);
// this renders the homepage according to index.js file.
app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
