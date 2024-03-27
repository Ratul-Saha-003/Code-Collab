import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
        const tokenData : Object = {
            id:newUser._id,
            username: newUser.username,
            email: newUser.email
        };
        const token= await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});
        const response = NextResponse.json({
            message: "Signup successful",
            success: "true"
        })
        response.cookies.set("token", token,{httpOnly:true,});
        return response;
    }catch(err:any){
        return NextResponse.json({error: err.message},{status:500})
    }
}