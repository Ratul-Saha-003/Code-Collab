import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/helpers/getDatafromToken";
import User from "@/models/userModel";
import Org from "@/models/orgModel";
import Project from "@/models/projectModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req:NextRequest){
    try {
        const userId = getDatafromToken(req);
        const body = await req.json();
        const {project, org} = body;
        const findOrg = await Org.findOne({name:org});
        // const projectId:any=[];
        // projects.forEach(async (name:any) => {
        //     const project = new Project({
        //         name,
        //         collaborators:[userId],
        //         org: findOrg._id
        //     })
        //     await project.save();
        //     projectId.push(project._id);
        // })
        const newProject = new Project({
            name:project,
            collaborators:[userId],
            org: findOrg._id
        })
        await newProject.save();
        const user = await User.findByIdAndUpdate(userId, {$addToSet:{projects:newProject._id}});
        const orgDB = await Org.findOneAndUpdate({name: org},{$addToSet:{projects:newProject._id}});
        const orgPopulated = await orgDB.populate("projects");
        return NextResponse.json({message:"Project added!", members: orgPopulated},{status:200});

    } catch (error:any) {
        return NextResponse.json({message: error.message},{status:400});
    }
}