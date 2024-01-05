import { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AuthBody, AuthContainer, Container } from "../styles"

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <AuthContainer>
            <Header />

            <AuthBody>
                <Sidebar />

                <Container>
                    {children}
                </Container>
            </AuthBody>
        </AuthContainer>
    )
}