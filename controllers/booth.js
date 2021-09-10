const express = require("express")
const router = express.Router()
const News = require("../models/booth.js")

//GET
router.get("/", (req, res) => {
  News.find({}, (error, foundVid) => {
    res.json(foundVid)
  })
})

//DELETE
router.delete("/:id", (req, res) => {
  News.findByIdAndRemove(req.params.id, (error, deleteVid) => {
    res.json(deleteVid)
  })
})

//POST
router.post("/", (req, res) => {
  News.create(req.body, (error, createVid) => {
    res.json(createVid)
  })
})

//PUT(UPDATE)

router.put("/:id", (req, res) => {
  News.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (error, updateVid) => {
    res.json(updateVid)
  })
})



module.exports = router
