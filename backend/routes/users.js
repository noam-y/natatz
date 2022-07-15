const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("users/new", { current_time: "wednesday" });
});

var complaints = [
  [
    "22-01-2013",
    "098354675",
    "email22@gmail.com",
    "432546945",
    "44664123",
    "02-12-1995",
    "hello world",
  ],
  [
    "14-07-2000",
    "077354675",
    "email2214@gmail.com",
    "45641555",
    "12312312",
    "16-10-1975",
    "hi hi world",
  ],
];

router.post("/", (req, res) => {
  const isValid = true; // in the future this will be used to validate complaint details
  if (isValid) {
    complaints.push({
      phone: req.body.phone,
      email: req.body.email,
      reported_car: req.body.reported_car,
    });
    res.redirect(`/users/${complaints.length - 1}`);
    console.log(req.complaint);
  } else {
    console.log("ERROR");
    res.send(`heyyyyy, the request about laz failed`);
  }
});

router
  .get("/:complaintId?", (req, res) => {
    res.send(
      `getting all the details about complaint number ${req.params.complaintId}- `
    );
  })
  .delete((req, res) => {
    res.send(`deleting complaint number ${req.params.id}`);
  });

router.param("complaintId", (req, res, next, id) => {
  console.log("param middleware is called");
  req.complaint = complaints[id];
  console.log("current complaintId is", req.complaint);
  next();
});

module.exports = router;
