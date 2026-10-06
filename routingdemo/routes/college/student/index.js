var express = require('express');
var router = express.Router();

router.use('/profile/view', (req,res)=>{
    res.send("Student Profile View");
});

router.use('/profile/:id', (req,res)=>{
    res.send("Student Profile View with ID: "+req.params.id); 
});
module.exports = router;