'use client'

import { filters, itemsMenu, ordersCenter } from "@/utils/data"
import { ReactNode, createContext, useContext, useLayoutEffect, useState } from "react"

interface SidebarItemProps {
    title: string
    path: string
    icon: JSX.Element
}

interface OrderCenterProps {
    idPedido: string
    nameClient: string
    status: string
    text?: string
}

interface SidebarContextType {
    itemActiveMenu: number
    orderActive: number
    sidebarItems: SidebarItemProps[]
    addToPage: (currentIndex: number) => void,
    addToPageOrderDetails: (currentIndex: number) => void,
    handlerFilter: (value: string) => void,
    orderCenter: OrderCenterProps[],
    totalPendingOrders: number
    filter: string
}

const SidebarContext = createContext({} as SidebarContextType)

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [sidebarItems, setSidebarItems] = useState<SidebarItemProps[]>(itemsMenu)
    const [orderCenter, setOrderCenter] = useState<OrderCenterProps[]>(ordersCenter)
    const [itemActiveMenu, setItemActiveMenu] = useState(0)
    const [orderActive, setOrderActive] = useState(0)
    const [totalPendingOrders, setTotalPendingOrders] = useState(0)
    const [filter, setFilter] = useState('todos')

    function addToPage(currentIndex: number) {
        const activeIndex = sidebarItems.findIndex((item, index) => index == currentIndex);
        setItemActiveMenu(activeIndex === -1 ? 0 : activeIndex);
    }

    function addToPageOrderDetails(currentIndex: number) {
        const activeIndex = orderCenter.findIndex((item, index) => index == currentIndex)
        setOrderActive(activeIndex === -1 ? 0 : activeIndex)
    }

    function handlerFilter(value: string) {
        if (value === 'todos') {
            setOrderCenter(ordersCenter)
        } else {
            const list = ordersCenter.filter((item) => item.status === value)
            setOrderCenter(list)
        }

        setFilter(value)
    }

    useLayoutEffect(() => {
        // verifica quantos pedidos estão pendentes
        const count = orderCenter.filter(item => item.text === 'Confirme o pedido')

        setTotalPendingOrders(count.length)
    }, [])

    return (
        <SidebarContext.Provider value={{
            itemActiveMenu,
            orderActive,
            sidebarItems,
            addToPage,
            addToPageOrderDetails,
            orderCenter,
            totalPendingOrders,
            handlerFilter,
            filter
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)