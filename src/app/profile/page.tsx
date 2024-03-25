"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfilePage(){
    const router = useRouter()
    const [user, setUser] = useState({})
    const LogOut = async () => {
        try {
           await axios.get("/api/users/logout");
           router.push("/login");
        } catch (error:any) {
            console.log(error.message);
        }
    }
    const getProfile = async () => {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setUser(res.data.data._id);
    }
    return (
        <div className="flex-col">
            <h1>Profile Page</h1>
            <hr />
            <button onClick={getProfile}>Get me</button>
            <button onClick={LogOut}>Log Out</button>
        </div>
    )
}