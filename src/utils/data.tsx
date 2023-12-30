'use client'
import { BookOpenText, ChefHat, ConciergeBell, History, Home, LogOut, Settings, UtensilsCrossed } from "lucide-react";

export const itemsMenu = [
    {
        title: 'Início',
        path: '/landing',
        icon: <Home />
    },
    {
        title: 'Histórico',
        path: '/order-history',
        icon: <History />
    },
    {
        title: 'Cardápio',
        path: '/menu',
        icon: <UtensilsCrossed />
    },
    {
        title: 'Mesas',
        path: '/table-reservation',
        icon: <ConciergeBell />
    },
    {
        title: 'Config.',
        path: '/settings',
        icon: <Settings />
    },
    {
        title: 'Sair',
        path: '/',
        icon: <LogOut />
    }
]