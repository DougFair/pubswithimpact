const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
const path = require("path")

const app = express();
require("dotenv").config()

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'https://pubswithimpact.herokuapp.com/',
    credentials: true,
  })
);
sgMail.setApiKey(process.env.API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")))

// app.get('/', (req,res) => res.send("This route"))

app.post('/sendEmail', (req, res) => {
    sgMail.send(req.body)
  });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//start your server on port 3001
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server Listening on port 3001');
});
