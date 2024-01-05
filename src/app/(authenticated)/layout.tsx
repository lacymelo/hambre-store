import { ReactNode } from "react"
import { SidebarProvider } from "@/contexts/sidebar-context"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}