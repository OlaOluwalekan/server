const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`)
})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000") // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
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
    ],
  })
})

app.get("*", (req, res) => {
  res.json({ response: "fail", message: "No data" })
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`server is listening on port ${port}`))
