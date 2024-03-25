"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage(){
    const router = useRouter();
    const[user, setUser] = useState({
        email:"",
        password:""
    })
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [loading,setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            console.log(user);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success "+response.data);
            router.push("/profile");
        } catch (error : any) {
            console.log("Login failed "+error.message)
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length>0 && user.password.length>0){
            setBtnDisabled(false);
        }else{
            setBtnDisabled(true);
        }
    },[user])

    return (
        <div className="flex-col">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input type="text" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Enter email"/>
            <label htmlFor="password">password</label>
            <input type="password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder="Enter password"/>
            <button type="submit" onClick={onLogin}>Login</button>
            <Link href="/signup">Don&apos;t have an account?</Link>
        </div>
    )
}