const port = 3001;
const router = require('./routes/router');
const db = require('./models/connection.js');
let routes = require('./routes');
// let signupRoutes = require('./routes/signup');
// let userRoutes = require('./routes/user');



router.listen(port, () => {
    console.log("Node server is up on port " + port);
})