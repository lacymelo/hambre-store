'use client'

import { itemsMenu } from "@/utils/data"
import { ReactNode, createContext, useContext, useEffect, useLayoutEffect, useState } from "react"

interface MenuItem {
    title: string
    path: string
    icon: JSX.Element
}

interface MenuContextType {
    activeIndex: number
    menuItems: MenuItem[]
    addToPage: (currentIndex: number) => void
}

const MenuContext = createContext({} as MenuContextType)

export function MenuProvider({ children }: { children: ReactNode }) {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(itemsMenu)
    const [activeItem, setActiveItem] = useState(0)

    function addToPage(currentIndex: number) {
        const activeIndex = menuItems.findIndex((item, index) => index == currentIndex);
        setActiveItem(activeIndex === -1 ? 0 : activeIndex);
    }

    return (
        <MenuContext.Provider value={{
            activeIndex: activeItem,
            menuItems,
            addToPage
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext)