const express = require('express');
const ExpressError = require('./expressError')

const app = express();


function attemptToSaveToDB() {
  throw "Connection Error!"
}

const USERS = [
  { username: "stacysmom", city: "Reno" },
  { username: "rosalia", city: "R" },
]

app.get("/users/:username", function (req, res, next) {
  try {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) throw new ExpressError("User not found", 404)
    return res.send({user});
  } catch (error) {
    return next(error)
  }
})

app.get("/secret", (req, res, next) => {
  // node -- inspect app.js in bash
  // debugger;
  try {
    if (req.query != 'correctPassword') {
      throw new ExpressError("Incorrect password", 403)
    }
    return res.send("Congrats, you know the password!")
  } catch (e) {
    return next(e)
  }
})

app.get('/savetodb', (req, res, next) => {
  try {
    attemptToSaveToDB();
    res.send("Saved to DB!");
  } catch(e) {
    next(new ExpressError("Database Error"));
  }

})

// 404 page
// runs if no match before
app.use((req, res, next) => {
  const err = new ExpressError("Page Not Found :(", 404)
  next(err)
})

// **Error Handler, 4 params
// after next is called for error
app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.msg;

  return res.status(status).json({
    error: {message, status}
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});

// **Anytime you call next and pass a value in, express will look for the next error handler
// Anytime you call next but don't pass a value in, just looks for next match
