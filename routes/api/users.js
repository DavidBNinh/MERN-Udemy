const express = require('express');
const router = express.Router(); // to use express router

//Before every route you want to put 3 things(
//@route    GET api/users
//@desc     Test route
//@access   Public                           )
router.get('/', (req, res) => res.send('Users route')); //to create a route use this(this is a test route). fpr call back use arrow funct
// if wanted to do api/routes/register, change router.get('/register')
module.exports = router;