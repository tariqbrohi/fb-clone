var user = require('../models/user.js');
var router = require('./router.js');

router.get('/user/auth', (req, res) => {
    res.send("Login Rout Hit");
})

module.exports = router;