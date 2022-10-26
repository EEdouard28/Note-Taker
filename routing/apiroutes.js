//BRIDGE BETWEEN DB.JSON AND SERVER 
//DATA BETWEEN DB.JSON AND FRONT END
//ACTIONS BASED ON FETCH ROUTES IN INDEX.JS
const router = require("express").Router()
//read & write file
const fs = require("fs")
let data = require("../db/db.json")
const generateUniqueId = require('generate-unique-id');

//routershell..response
router.get("/notes",(req,res) => {
    data = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    res.json(data)
})
//REQUEST FROM FRONT END TO BACK END
router.post("/notes", (req,res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: generateUniqueId()
    }
    data.push(note)
    fs.writeFileSync("./db/db.json",JSON.stringify(data))
    res.json(data)
})

//REQ PARAMS ID - DELETE ...FIND THE ID PULL THE REST OF OBJECTS FRFOM IT AND RERENDER //ARRAY OF CLOTHES TO KEEP ..FILTER
module.exports = router