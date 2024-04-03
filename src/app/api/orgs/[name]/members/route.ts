import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Org from "@/models/orgModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req:NextRequest){
    try {
        const body = await req.json();
        const {collaborator, org} = body;
        // if collaborators was an array
        // const collId:any=[];
        // collaborators.forEach(async (username:any) => {
        //     const user = await User.findOne({username});
        //     collId.push(user._id);
        // });
        const user = await User.findOne({uername: collaborator});
        if(user){
            const orgDB = await Org.findOneAndUpdate({name: org},{$addToSet:{collaborators:user._id}});
            const orgPopulated = await orgDB.populate("collaborators");
            console.log(orgPopulated);
            return NextResponse.json({message:"Members added!", info: orgPopulated},{status:200});
        }else{
            return NextResponse.json({message:"Not a valid username"},{status:400});
        }

    } catch (error:any) {
        return NextResponse.json({message: error.message},{status:400});
    }
}