const router = require('./router');
const postSchema = require('../models/post');
const instances = require('../models/instance');
const fs = require('fs');
const path= require('path');
router.post('/post', instances.upload.single('image'), (req, res, next) => {
    console.log(req.body);
    let post = new postSchema({
        userId: req.body.userId,
        description: req.body.description,
        img: {
            data: fs.readFileSync(req.body.fileName),
            contentType: 'image/png'
        }
    });
    postSchema.create(post, (err, postRes) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json({
                post: postRes
            })
        }
    })
});


router.get('/posts/:userID', (req, res, next) => {
    res.send("User Posts");
})

router.delete('/post/:id', (req, res, next) => {
    res.send("Delete Post");
})

router.get('/posts', (req, res, next) => {
    postSchema.find({}, (err, posts) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json({
                posts: posts
            })
        }
    })
})


module.exports = router;