import mongoose from "mongoose"


const UserProfile = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:25,
    },
    email:{
        type:String,
        required:true,
        maxLength:25,
    },
    password:{
        type:String,
        required:true,
    },

}, {timestamps:true}
)

const UserProfile_SocialMERN = mongoose.model("SocialMERN-UserProfile", UserProfile)
export default UserProfile_SocialMERN