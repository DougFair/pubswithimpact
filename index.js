const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail')
const path = require("path")

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
sgMail.setApiKey(process.env.apiKey);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/', (req,res) => res.send("This route"))

app.post('/sendEmail', (req, res) => {
  console.log("backend")
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
