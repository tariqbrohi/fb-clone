
var router = require('./router.js');

router.post('/user/auth', (req, res) => {
    res.send("Sign Up Route Hit");
});

module.exports = router;