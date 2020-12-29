const express = require('express');
const router = express.Router(); // to use express router

//Before every route you want to put 3 things(
//@route    GET api/profile
//@desc     Test route
//@access   Public                           )
router.get('/', (req, res) => res.send('Profile route')); //to create a route use this(this is a test route). fpr call back use arrow funct

module.exports = router;