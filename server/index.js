const port = 3001;
const router = require('./routes/router');
let loginRoutes = require('./routes/login');
let signupRoutes = require('./routes/signup');

router.listen(port, () => {
    console.log("Node server is up on port " + port);
})