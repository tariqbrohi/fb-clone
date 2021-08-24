let instances = require('./instance');
let mongoose = instances.mongoose;
let Schema = instances.Schema;
let User = require('./user');
const post = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    created: {type: Date, default: Date.now},
    description: {type: String, default: ''},
    img: {
        data: Buffer,
        contentType: String
    },
    likes: [{user:
        {type: Schema.Types.ObjectId, ref: "User"}
    }],
    comments: [{user: 
        {type: Schema.Types.ObjectId, ref: "User"}
        ,text: {type: String, default: ''}
    }]
})

module.exports = mongoose.model("Post", post);

