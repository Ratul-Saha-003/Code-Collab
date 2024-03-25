import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request:NextRequest){
    try {
        // console.log("hi from backend");
        const body:any = await request.json();
        console.log(body);
        const {email, password}= body;
        console.log(email);

        const user = await User.findOne({email});
        if(!user){
            console.log("User doesnt exist");
            return NextResponse.json({error:"User doesn't exist"}, {status:400});
        }

        const validPass = await bcryptjs.compare(password, user.password);
        if(!validPass){
            console.log("Password is wrong")
             return NextResponse.json({error:"Password doesn't match"}, {status:400});}

        const tokenData : Object = {
            id:user._id,
            username: user.username,
            email: user.email
        };
        const token= await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"});
        const response = NextResponse.json({
            message: "Login successful",
            success: "true"
        })
        response.cookies.set("token", token,{httpOnly:true,});
        return response;
         
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500});
    }
}