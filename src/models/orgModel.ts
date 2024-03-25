import mongoose from "mongoose";

const orgSchema:any = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        required:[true,"Please provide a name"],
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
},{timestamps: true});

const Org = mongoose.model("Org", orgSchema);
export default Org;