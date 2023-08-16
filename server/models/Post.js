const {Schema , model} = require('mongoose');

const PostSchema = new Schema({
    name : {
        type : String,
        max : 20

    },
    description : {
        type : String,
        max : 255
    },
    articleImage : {
        type : String,
        required: true,

    },
  
    userID :{
        required: true,
        type: String
    },
    LIKE :{
        type: Number
    },
    Heart :{
        type: Number
    }
})
const PostModule= model('posts',PostSchema);

module.exports=PostModule;
