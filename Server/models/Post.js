import mongoose from "mongoose";

const PostProfile = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    SubTitle:{
        type:String, 
        required:false,
        maxLength:200,
    },
    ImageLink:{
        type:String,
        required:false,
    },
    imageKey:{
        type:String,
        required:false,
    },
    likes:{
        type:Map,
        of:Boolean,
        default:{},
    },
    creatorID:{
        type:String, 
        required:true,
    },
}, {timestamps:true})


const PostProfile_SocialMERN = mongoose.model("SocialMERN-PostProfile",PostProfile)
export default PostProfile_SocialMERN