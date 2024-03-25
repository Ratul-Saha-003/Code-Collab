import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/projectModel";
import Org from "@/models/orgModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/helpers/getDatafromToken";

connect();

export async function GET(req:NextRequest){
    try {
        const userId:any = await getDatafromToken(req);
        const projects = await Project.find({
            collaborators: userId,
        })
        return NextResponse.json({message:"Projects found!", projects: projects});
    } catch (error:any) {
        return NextResponse.json({message: error.message},{status:400});
    }
}

export async function POST(req: NextRequest){
    try {
        const userId:any = await getDatafromToken(req);
    
        const body = await req.json();
        const {name, org} = body;
        const orgInstance:any = Org.findOne({name: org})
    
        const newProject = new Project({
            name,
            owner:userId,
            org: orgInstance._id,
        })
        const saveProject = await newProject.save();
        console.log(saveProject);  
        return NextResponse.json({message:"Project Created!", success:true, saveProject});
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status:400});
    }
}