"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import {useParams} from "next/navigation";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function OrgPage(){
    const {org} = useParams();
    const [orgInfo, setOrgInfo] = useState<any>({});
    const [member, setMember] = useState([]);
    const getInfo = async () => {
        try{
            const response:any = await axios.get(`/api/orgs/${org}`);
            console.log(response.data.data);
            setOrgInfo(response.data.data);
        } catch (error:any){
            console.log(error);
        }
    }
    const addMember = async () => {
        try {
            const response = await axios.post(`/api/orgs/${org}/members`, {collaborators: member, org});
            console.log(response.data);
            setOrgInfo(response.data.info);
        } catch (error) {
            console.log(error);
        }
    }

    const addProject = async () => {
        try {
            const response = await axios.post(`/api/orgs/${org}/projects`)
        } catch (error:any) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInfo();
    },[orgInfo])
    return (
        <div className="w-full h-full min-h-screen bg-[#050f0d]">
            <div className="p-5 bg-[#0e1513] rounded-xl shadow">
                <h1 className="text-5xl font-bold text-[#dbf4ee] py-5 px-10">{orgInfo.name}</h1>
                <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#dbf4ee] py-5 px-10">{orgInfo.description}</h2>
                <h2 className="text-xl font-semibold text-[#dbf4ee] py-5 px-10">Owner: {orgInfo.owner && orgInfo.owner.username}</h2>
                </div>
            </div>
            <div className="grid grid-cols-4 py-10 px-10 gap-x-5">
                <div className="col-span-1 bg-[#071a16] text-[#dbf4ee] rounded-2xl">
                <h1 className="text-2xl font-semibold py-5 px-10 underline underline-offset-2">Members</h1>
                <div className="flex items-center flew-wrap px-5">
                    {orgInfo.collaborators && orgInfo.collaborators.map((mem:any, key) => {
                        return (
                            <Badge key={key} className="bg-[#33e8c3] text-[#0e1513] text-base">{mem.username}</Badge>
                        )
                    })}
                </div>
                <div className="w-full flex justify-center items-center my-5">
                    
                    <Popover>
      <PopoverTrigger asChild>
      <Button variant="outline" className="bg-[#8de1d0] text-[#070b0a] border-[#070b0a]">Add Members</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Members</h4>
            <p className="text-sm text-muted-foreground">
              Add Members to your organization.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Username</Label>
              <Input
                id="width"
                value={member}
                onChange={((e:any) => setMember(e.target.value))}
                className="col-span-2 h-8"
              />
            </div>
          </div>
          <Button variant="outline" onClick={addMember}>Add</Button>
        </div>
      </PopoverContent>
    </Popover>
                </div>
                </div>
                <div className="col-span-3 bg-[#071a16] text-[#dbf4ee] rounded-2xl">
                <h1 className="text-2xl font-semibold py-5 px-10 underline underline-offset-2">Projects</h1>
                {/* {orgInfo.projects && orgInfo.projects.map((mem:any, key) => {
                        return (
                            <div key={key}></div>
                        )
                    })} */}

                <div className="w-full flex justify-center items-center my-5">
                    <Button variant="outline" className="bg-[#8de1d0] text-[#070b0a] border-[#070b0a]">Add Projects</Button>
                </div>
                </div>
            </div>
        </div>
    )
}