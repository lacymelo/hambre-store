import { ReactNode } from "react"
import { Page } from "../styles"
import { Heading } from "@labex-hambre-ui/react"

export default function OrderDetailsLayout({ children }: { children: ReactNode }) {
    return (
        <Page>
            <Heading as="h2" size="md">
                Detalhes do Pedido
            </Heading>

            {children}
        </Page>
    )
}