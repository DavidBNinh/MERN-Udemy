const express = require('express');
const router = express.Router(); // to use express router
const auth = require('../../middleware/auth');

const User = require('../../models/User');

//Before every route you want to put 3 things(
//@route    GET api/auth
//@desc     Test route
//@access   Public                           )
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }   catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;