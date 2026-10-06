var studentRouter = require('./student');
var express = require('express');
var router = express.Router();


router.use('/student', studentRouter);
//router.use('/marks', marksRouter);
module.exports = router;