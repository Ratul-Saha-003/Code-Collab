"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import world from "@/assets/connect_world.svg";
import cnt from "@/assets/connect.svg";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function SignupPage(){
    const router = useRouter();
    const[sign, setSign] = useState({
        email:"",
        password:"",
        username:"",
    })
    const[login, setLogin] = useState({
        email:"",
        password:""
    })
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [loading,setLoading] = useState(false);

    const onSignup = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", sign);
            console.log(response.data);
            // router.push("/");
            
        } catch (error) {
    
        } finally {
            setLoading(false);
        }
    }
    const onLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", login);
            console.log("Login success "+response.data);
            // router.push("/");
        } catch (error : any) {
            console.log("Login failed "+error.message)
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if((sign.email.length>0 && sign.password.length>0 && sign.username.length>0) || (login.email.length>0 && login.password.length>0)){
            setBtnDisabled(false);
        }else{
            setBtnDisabled(true);
        }
    },[sign, login])

    return (
        <>
        <div className="relative h-screen w-screen max-w-screen max-h-screen flex justify-center items-center bg-gradient-to-tl from-[#2f55dd] to-[#1b7c77] to-70%">
       <Image src={cnt} alt="world" height={700} width={700} className="absolute"/>   

       <Tabs defaultValue="account" className="w-[400px] text-white z-10">
      <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-xl">
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
        <TabsTrigger value="login">Log In</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader >
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Fill all the fields to start your journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">  
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" value={sign.username} onChange={(e) => setSign({...sign, username:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email" value={sign.email} onChange={(e) => setSign({...sign, email:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter password" type="password" defaultValue="@peduarte" value={sign.password} onChange={(e) => setSign({...sign, password:e.target.value})}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" onChange={onSignup}>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
              Welcome Back! Continue your journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email" type="text" value={login.email} onChange={(e) => setLogin({...login, email:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter password" type="password" value={login.password} onChange={(e) => setLogin({...login, password:e.target.value})}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={onLogin}>Log In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
        
        {/* <div className="flex-col">
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
        </div> */}
        
        </>
    )
}