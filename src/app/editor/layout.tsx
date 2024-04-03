import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable";
  import { Badge } from "@/components/ui/badge";
  import { IoDocument } from "react-icons/io5";
  import { FaCode } from "react-icons/fa";
  import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
  import { RiLogoutCircleLine } from "react-icons/ri";

export default function EditorLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-screen bg-[#070b0a] max-w-screen max-h-screen">
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="w-full px-10 py-3 flex justify-between items-center">
            <h1 className=" text-xl font-semibold bg-gradient-to-r from-[#470d8d] to-[#8de1d0] text-transparent bg-clip-text"> Project 1</h1>
            <Badge className="bg-[#8de1d0] text-[#070b0a] text-sm">one test</Badge>
        </div>
        <ResizablePanelGroup
      direction="horizontal"
      className="max-w-screen w-screen rounded-lg border"
    >
      <ResizablePanel defaultSize={5}>
        <div className="flex flex-col items-center justify-around p-6">
            <div className="flex flex-col h-screen items-center justify-start gap-y-10">
            <span className="rounded-full bg-[#0e211c] text-[#dbf4ee] p-3 text-xl hover:bg-gradient-to-r from-[#8de1d0] via-[#5857cb] to-[#dbf4ee]"><IoDocument/></span>
          <span className="rounded-full bg-[#0e211c] text-[#dbf4ee] p-3 text-xl hover:bg-gradient-to-r from-[#8de1d0] via-[#5857cb] to-[#dbf4ee]"><IoChatbubbleEllipsesOutline/></span>
          <span className="rounded-full bg-[#0e211c] text-[#dbf4ee] p-3 text-xl hover:bg-gradient-to-r from-[#8de1d0] via-[#5857cb] to-[#dbf4ee]"><FaCode/></span>
            </div>
          <span className="rounded-full bg-[#0e211c] text-[#dbf4ee] p-3 text-xl hover:bg-gradient-to-r from-[#8de1d0] via-[#5857cb] to-[#dbf4ee]"><RiLogoutCircleLine/></span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={95}>
        <div className="flex items-center justify-center p-6">
        {children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
      </section>
    )
  }