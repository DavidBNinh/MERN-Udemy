const express = require('express');
const router = express.Router(); // to use express router
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
//Before every route you want to put 3 things(
//@route    POST api/users
//@desc     Register user
//@access   Public                           )
router.post('/',
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }
        
        const avatar = gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        })

        user = new User({
          name,
          email,
          avatar,
          password
        });
        res.send('User route');

      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }

    }
  );
//to create a route use this(this is a test route). For call back use arrow funct
//if wanted to do api/routes/register, change router.get('/register')

module.exports = router;