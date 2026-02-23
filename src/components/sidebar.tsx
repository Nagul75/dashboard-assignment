import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { BadgeIndianRupee } from "lucide-react";


function AppSidebar({ ...props}: React.ComponentProps<typeof Sidebar>) {
    return(
        <Sidebar {...props} variant="inset">
            <SidebarHeader>
                <BadgeIndianRupee/>
            </SidebarHeader>
            <SidebarGroup>
                <SidebarGroupLabel>Categories</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#">All Categories</a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </Sidebar>
    )
}

export default AppSidebar;