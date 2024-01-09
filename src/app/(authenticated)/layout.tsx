import { OrderProvider } from "@/contexts/order-context"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}