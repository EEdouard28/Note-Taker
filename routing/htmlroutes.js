//BRIDGE
//ASSIGN URL END POINTS THAT WILL RENDER APPROPRIATE HTML FILE
//router instance create .router w/ express and creates endpoint 
const router = require("express").Router()
const path = require("path")

//routershell..response
router.get("/notes",(req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;