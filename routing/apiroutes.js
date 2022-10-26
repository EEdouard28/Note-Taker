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
});

  // Delete function
router.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // removing note with id
    let deleteNote = db.filter(item => item.id !== req.params.id);
    // Saves notes rewritten into db.json
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
    })


module.exports = router