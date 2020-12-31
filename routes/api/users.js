const express = require('express');
const router = express.Router(); // to use express router
const { check, validationResult } = require('express-validator');

//Before every route you want to put 3 things(
//@route    POST api/users
//@desc     Register user
//@access   Public                           )
router.post('/',
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6 }),
      (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
          //sends back json response

        res.send('User route');
        }
    );
//to create a route use this(this is a test route). For call back use arrow funct
//if wanted to do api/routes/register, change router.get('/register')

module.exports = router;