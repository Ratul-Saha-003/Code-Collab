"use client"
import React,{useState, useEffect} from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  import { Button } from "@/components/ui/button";
  import { FaPlus } from "react-icons/fa6";

export default function Dashboard(){
    return (
        <div className="w-full bg-[#070b0a] text-[#d1ffef] min-h-screen flex-col">
            <div className="w-full flex justify-between items-center p-10 shadow-sm">
            <div className="text-4xl"> Welcome back, <span className="text-5xl font-semibold bg-gradient-to-r from-[#33e8c3] to-[#0929ff] text-transparent bg-clip-text">ANil!</span></div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
            <div className="w-full p-10 flex-col justify-center">

            </div>
            <div className="w-full flex justify-center items-center">
                
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="p-5 bg-[#8de1d0] hover:bg-[#8de1d0]/90 text-[#0e1513] font-bold flex justify-around shadow"><FaPlus className="w-5 h-5 font-extrabold"/><span className="pl-2">New Organization</span></Button>
                </DrawerTrigger>
                <DrawerContent className="bg-[#132923]/40 backdrop-blur-lg border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {/* <DrawerTitle className="text-[#f0f2f1]">Add Organization</DrawerTitle>
            <DrawerDescription>Hope you will do something huge in life.</DrawerDescription> */}
          </DrawerHeader>
          {/* <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
              >
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
              >

                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
            </div>
          </div> */}
          {/* <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email"/>
            </div> */}
          <Card>
          <CardHeader >
            <CardTitle className="text-[#f0f2f1]">Make a New Organization</CardTitle>
            <CardDescription>
              Fill all the fields to start your journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">  
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter name"/>
            </div>
          </CardContent>
          <CardFooter>
            <DrawerClose asChild>
            <Button type="submit" className="bg-[#8de1d0] hover:bg-[#33e8c3]/60 text-[#0e1513]">Add Organization</Button>
            </DrawerClose>
          </CardFooter>
        </Card>
          <DrawerFooter>
            <DrawerClose asChild>
            <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
            </div>
        </div>
    )
}