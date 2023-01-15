const express = require("express")
const app = express()

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://server-82ny.onrender.com/api/users"
  )
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`)
})

app.get("/api/users", (req, res) => {
  res.status(200).json({
    response: "success",
    data: [
      {
        id: 1,
        name: "ola",
        age: 24,
      },
      {
        id: 2,
        name: "james",
        age: 75,
      },
      {
        id: 3,
        name: "frank",
        age: 32,
      },
      {
        id: 4,
        name: "sam",
        age: 16,
      },
    ],
  })
})

app.get("*", (req, res) => {
  res.json({ response: "fail", message: "No data" })
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`server is listening on port ${port}`))
