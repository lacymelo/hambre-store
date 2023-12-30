import { ReactNode } from "react"
import { AuthBody, AuthContainer, Content } from "./styles"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MenuProvider } from "@/contexts/menu-context"

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <MenuProvider>
            <AuthContainer>
                <Header />

                <AuthBody>
                    <Sidebar />

                    <Content>
                        {children}
                    </Content>
                </AuthBody>
            </AuthContainer>
        </MenuProvider>
    )
}