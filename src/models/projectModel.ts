import mongoose from "mongoose";

const projectSchema:any = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please give a name'],
    },
    collaborators:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    org:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Org"
    }
})

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema); 

export default Project;