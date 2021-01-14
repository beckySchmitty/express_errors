const express = require('express');
const ExpressError = require('./expressError')

const app = express();


function attemptToSaveToDB() {
  throw "Connection Error!"
}

const USERS = [
  { username: "StacysMom", city: "Reno" },
  { username: "Rosalia", city: "R" },
]

app.get("/users/:username", function (req, res, next) {

})

app.get("/secret", (req, res, next) => {


})

app.get('/savetodb', (req, res, next) => {

})


app.listen(3000, () => {
  console.log("Server running on port 3000")
});
