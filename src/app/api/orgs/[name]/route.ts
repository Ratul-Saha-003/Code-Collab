import {NextResponse, NextRequest} from "next/server";
import { getDatafromToken } from "@/helpers/getDatafromToken";
import Org from "@/models/orgModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req: NextRequest){
    try{
        const name = decodeURIComponent(req.url.split("orgs/")[1]);
        const org = await Org.findOne({name}).populate(["owner", "collaborators"]);
        return NextResponse.json({mesage: "Org found!", data: org}, {status:200});
    } catch(error: any){
        return NextResponse.json({message: error.message}, {status:400})
    }
}
