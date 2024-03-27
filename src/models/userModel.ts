import mongoose from "mongoose";

const userSchema : any = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "Please provide a username"],
        unique: true,
    },
    email:{
        type: String,
        required:[true, "Please provide an email"],
        unique: true,
    },
    password:{
        type:String,
        required: [true, "Please provide a password"]
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    orgs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Org"
    }],
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;