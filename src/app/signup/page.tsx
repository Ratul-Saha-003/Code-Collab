"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage(){
    const router = useRouter();
    const[user, setUser] = useState({
        email:"",
        password:"",
        username:""
    })
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [loading,setLoading] = useState(false);

    const onSignup = async() => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log(response.data);
            router.push("/login");
            
        } catch (error) {
    
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setBtnDisabled(false);
        }else{
            setBtnDisabled(true);
        }
    },[user])

    return (
        <div className="flex-col">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder="Enter username"/>
            <label htmlFor="email">email</label>
            <input type="text" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter email"/>
            <label htmlFor="password">password</label>
            <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Enter password"/>
            <button type="submit" onClick={onSignup}>{btnDisabled ? "No Signup" : "Signup"}</button>
            <Link href="/login">Already have an account?</Link>
        </div>
    )
}