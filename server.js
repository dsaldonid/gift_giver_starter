const express = require("express")
const morgan = require("morgan")
const gift_exchange = require("./routes/giftExchange")

const app = express()

app.use(express.json())
app.use('/gifts',gift_exchange)

app.use(morgan("tiny"))
app.get("/",(req, res, next) => {
  res.status(200).json({ping:"pong"})
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})
