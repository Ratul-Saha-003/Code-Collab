import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest){
    try{
        const body = await request.json();
        const {username, email, password} = body;

        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error:"User exists"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPass
        })
        const saveUser = await newUser.save();
        return NextResponse.json({message:"User Created", saveUser})
    }catch(err:any){
        return NextResponse.json({error: err.message},{status:500})
    }
}