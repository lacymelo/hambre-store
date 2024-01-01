import { ReactNode } from "react"
import { AuthBody, AuthContainer, Content } from "./styles"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { SidebarProvider } from "@/contexts/sidebar-context"

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AuthContainer>
                <Header />

                <AuthBody>
                    <Sidebar />

                    <Content>
                        {children}
                    </Content>
                </AuthBody>
            </AuthContainer>
        </SidebarProvider>
    )
}