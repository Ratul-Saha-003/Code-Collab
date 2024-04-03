"use client"
import {useParams} from "next/navigation";
import Editor from '@monaco-editor/react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { useState } from "react";


export default function EditorPage(){
    // const {project}= useParams();
    const [lang, setLang] = useState("JavaScript");
    return(
    //     <div className="w-full min-h-screen bg-[#071a16]">
    //         <div className="w-full flex justify-center items-center p-5">
    //             <h1 className="text-3xl font-bold text-[#dbf4ee]">Project: <span className="bg-gradient-to-r from-[#5857cb] to-[#33e8c3] text-transparent bg-clip-text">Project 1</span></h1>\
                
    //         </div>
    //         <div className="flex justify-between items-center px-10 py-2">
    //         <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" className="bg-[#33e8c3] focus:ring-0 outline-none text-[#071a16] hover:bg-gradient-to-r from-[#33e8c3] to-[#5857cb]">{lang}</Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56">
    //     <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuItem onClick={() => setLang("JavaScript")}>
    //         <span>JavaScript</span>
    //         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setLang("Java")}>
    //         <span>Java</span>
    //         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setLang("Python")}>
    //         <span>Python</span>
    //         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setLang("C")}>
    //         <span>C</span>
    //         <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setLang("C++")}>
    //         <span>C++</span>
    //         <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setLang("C#")}>
    //         <span>C#</span>
    //         <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    //       </DropdownMenuItem>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>

    //       <span>Log out</span>
    //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    //             </DropdownMenu>
    //             <Button variant="outline">Run Code</Button>
    //         </div>
    //         <div className="grid grid-cols-3 gap-x-6 px-6">
    //             <div className="col-span-2">
    //             <Editor height="90vh" theme="vs-dark" language={lang} defaultValue="// some comment" />;
    //             </div>
    //             <div className="col-span-1">
    //             <div className="border border-white rounded-xl h-[90vh] bg-[#01020d]"></div>
    //             </div>
    //         </div>
    //     </div>
    <ResizablePanelGroup
    direction="horizontal"
    className="w-screen rounded-lg border"
  >
    <ResizablePanel defaultSize={20}>
      <div className="h-screen p-3 bg-[#070b0a]">
        <div className="p-2 bg-[#0e1513] rounded-lg">
        <h1 className="text-xl font-semibold text-[#dbf4ee] bg-gradient-to-r from-[#5857cb] to-[#8de1d0] text-transparent bg-clip-text">Project 1</h1> 
        </div>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={80}>
      <div className="flex h-screen items-center justify-center p-0">
      <Editor height="90vh" theme="vs-dark" language={lang} defaultValue="// some comment" />;
      </div>
    </ResizablePanel>
    {/* <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel> */}
  </ResizablePanelGroup>
    )
}