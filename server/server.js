//create packages
const express = require('express');
const app = express();
const cors = require("cors");
const _port =3001;
const multer = require('multer')
app.use(cors())
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();



//file uploading
const storage = multer.diskStorage({
    destination :(req,file,callback) =>{
        callback(null,"../client/public/explore/");
       
    } ,
    filename:(req,file,callback)=>{
        callback(null,file.originalname)  
        }
})


const uploads = multer({storage:storage})

// mongoose connection
const username="Patrick",
    password=process.env.PASSWORDPATRICK,
    databasename="Travel";

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.6r9mzpu.mongodb.net/${databasename}`)
.then(console.log('mongoos working'))



//Import Post Model 
const PostModule = require('./models/Post');

//the get requests 
app.get("/Posts", async  (req , res)=>{
const posts = await   PostModule.find({}).sort({LIKE: 0});

res.json(posts)

})
app.get("/Rabat", async  (req , res)=>{
const posts = await   PostModule.find({
    name:
    "Rabat"});
res.json(posts)

})
app.get("/Casa", async  (req , res)=>{
const posts = await   PostModule.find({
    name:
    "Casa"});
res.json(posts)

})
app.get("/Marakkech", async  (req , res)=>{
const posts = await   PostModule.find({
    name:
    "Marakkech"});
res.json(posts)

})

//Admin model
const AdminModule = require('./models/Admins');
// User register
app.post("/register", async (req,res)=>{    
    const {username,password}=req.body
    const admin = await AdminModule.findOne({username})
    admin && res.json({message:"user already exists!"});
    const hashPassword  = bcrypt.hashSync(password,15)
    const   newAdmin = new AdminModule({
        username : username ,
        password : hashPassword
    });
    await newAdmin.save();
   return res.json({message : "Admin created succefulty"})
})
app.post("/login", async (req, res)=>{
    const {username,password}=req.body

    const admin = await AdminModule.findOne({username})
   if(!admin ) {
    res.json({message:"user dosnt exists!"});
}
    const ifPasswordValid = await bcrypt.compare(password,admin.password) ;
    if(!ifPasswordValid ){
             res.json({message:"Password or username is not correct!"});
    }
else{
     const  token  =  jwt.sign({id:admin._id}, process.env.SECRET)
    return res.json ({token,adminID:admin._id})
}
})

// post creat 
app.post("/createPost",uploads.single("articleImage"), async  (req , res)=>{
    const { name , description,userID } = req.body;
    const newPost= new PostModule({
       name : name ,
      description : description  ,  
      articleImage : req.file.originalname  ,
      userID : userID  ,
    });
    await newPost.save();
    res.json(newPost)
    })
// update reactions post
app.put(`/updateLIKE/:id`,  async  (req , res)=>{
    const postID = req.params.id;
    try {
  const post =  await  PostModule.findByIdAndUpdate(postID, { $inc: {LIKE:+1}})
    return res.json(post)
    }catch{
        res.status(500).json({ error: 'Error updating item' });
        console.log('updateLIKE not working');

    }
})
app.put(`/updateLIKEDecr/:id`,  async  (req , res)=>{
    const postID = req.params.id;
    try {
  const post =  await  PostModule.findByIdAndUpdate(postID, { $inc: {LIKE:-1}})
    return res.json(post)
    }catch{
        res.status(500).json({ error: 'Error updating item' });
        console.log('updateLIKEDecr not working');

    }
})




app.put(`/updateHeart/:id`, async  (req , res)=>{
    const postID = req.params.id;
    try {
    const post = await  PostModule.findByIdAndUpdate(postID, { $inc: {Heart:+1}})
    return res.json(post)
}catch{
    res.status(500).json({ error: 'Error updating item' });
    console.log('updateHeart not working');

}
})
app.put(`/updateHeartDecr/:id`, async  (req , res)=>{
    const postID = req.params.id;
    try {
    const post = await  PostModule.findByIdAndUpdate(postID, { $inc: {Heart:-1}})
    return res.json(post)
}catch{
    res.status(500).json({ error: 'Error updating item' });
    console.log('updateHeartDecr not working');

}
})

//create server

app.listen(_port,()=>{
    console.log('server listening working');
})






 



