import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req:NextRequest){
    try {
        const body = await req.json();
        const {query} = body;
        const projects:any = Project.find({
            name: {$regex:query},
        });
        return NextResponse.json({message:"Projects found!", projects:projects});  
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status:400});
    }
}