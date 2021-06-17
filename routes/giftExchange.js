// this grabs express module from node_modules
const express = require("express")
const GiftExchange = require("../models/giftExchange")
const router = express.Router();

// create endpoints within router
router.get("/", async (req,res,next) =>{
    const names = await GiftExchange.display()
    res.status(200).json(names)
})

router.post("/pairs", async (req, res, next) => {
    console.log(req.body)
    try {
      const result = await GiftExchange.pairs(req.body.names)
      console.log(result)
      res.status(200).json({ result })
    } catch (err) {
      next(err)
    }
  })
  
  router.post("/traditional", async (req, res, next) => {
    console.log(req.body)
    try {
      const result = await GiftExchange.traditional(req.body.names)
      console.log(result)
      res.status(200).json({ result })
    } catch (err) {
      next(err)
    }
  })

module.exports = router;