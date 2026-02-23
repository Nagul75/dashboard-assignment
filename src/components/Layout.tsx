import * as React from "react"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import AppSidebar from "./sidebar"

type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
    return(
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset className="flex min-h-screen flex-col">
                <header className="flex px-4 border-b shrink-0 items-center gap-2 h-16">
                    <SidebarTrigger className="-ml-1" size="icon-lg"/>
                    <Separator orientation="vertical" className="mr-2"/>
                    <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">Sales Analytics</h2>
                </header>
                <main className="flex-1 overflow-auto p-4">
                    {children}        
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout