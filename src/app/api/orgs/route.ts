import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/helpers/getDatafromToken";
import { connect } from "@/dbConfig/dbConfig";
import Org from "@/models/orgModel";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest){
    try {
        const userId = getDatafromToken(request);
        const user = await User.findById(userId).select("-password");
        // console.log(user);
        const organizations = await user.populate("orgs"); 
        // console.log(organizations);
        return NextResponse.json({message:"Orgs retrieved!", orgs: organizations},{status:200});

    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status:400})
    }
}

export async function POST(request: NextRequest){
    try {
        const userId = getDatafromToken(request);
        const body = await request.json();
        const {name, description} = body;
        const org = new Org({
            owner: userId,
            name,
            description,
        });
        const savedOrg = await org.save();
        const user = await User.findByIdAndUpdate(userId,{
            $push:{orgs: org._id}
        });
        return NextResponse.json({message:"Org created successfully", org:savedOrg},{status:200});
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status:400});
    }
}
