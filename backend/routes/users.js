const express = require("express")
const router = express.Router()


router.get('/new', (req,res) => {
    res.render("users/new", {current_time:"wednesday"})
})

var users = [
    ['22-01-2013', '098354675', 'email22@gmail.com', '432546945', '44664123', '02-12-1995', 'hello world'],
    ['14-07-2000', '077354675', 'email2214@gmail.com', '45641555', '12312312', '16-10-1975', 'hi hi world']
  ]
  

router.post('/', (req,res) => {
    const isValid = true
    if (isValid){
        users.push({phone:req.body.phone})
        res.redirect(`/users/${users.length -1}`)
    } else {
        console.log('ERROR')
    }
    res.send(`heyyyyy, the request about laz`)
})

router
.get('/:complaintId', (req, res) => {
    res.send(`getting all the details about complaint number ${req.params.complaintId}`)
})
.delete((req,res) => {
    res.send(`deleting complaint number ${req.params.complaintId}`)
})
module.exports = router