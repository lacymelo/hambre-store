'use client'
import { Currency, History, Home, LogOut, Settings, UtensilsCrossed } from "lucide-react";

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
        icon: <Currency />
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

export const filters = [
    {
        value: 'todos',
        text: "todos",
    },
    {
        value: 'Aguardando a loja responder...',
        text: "Confirme o pedido",
    },
    {
        value: 'Em preparo',
        text: "Em preparo",
    },
    {
        value: "Enviado",
        text: "Saiu para entrega",
    },
    {
        value: "Entregue",
        text: "Concluído",
    },
    {
        value: "Cancelado",
        text: "Cancelado",
    }
]

export const statusPath = [
    {
        status: 'Aguardando a loja responder...',
        path: "pending",
        text: "Confirme o pedido",
    },
    {
        status: 'Confirmado! Em breve seu pedido sairá para entrega',
        path: "confirmed",
        text: "Em preparo",
    },
    {
        status: "Enviado",
        path: "shipped",
        text: "Saiu para entrega",
    },
    {
        status: "Entregue",
        path: "delivered",
        text: "Concluído",
    },
    {
        status: "Cancelado",
        path: "canceled",
        text: "Cancelado",
    }
]

export const ordersCenter = [
    {
        idPedido: "8967",
        nameClient: "Sidney Sage",
        status: "Aguardando a loja responder...",
        text: "Confirme o pedido",
    },
    {
        idPedido: "3917",
        nameClient: "Sophia Clark",
        status: "Confirmado! Em breve seu pedido sairá para entrega",
        text: "Em preparo",
    },
    {
        idPedido: "1927",
        nameClient: "Miguel Ângelo",
        status: "Enviado",
        text: "Saiu para entrega",
    },
    {
        idPedido: "2227",
        nameClient: "Leonardo Nunes",
        status: "Entregue",
        text: "Concluído",
    },
    {
        idPedido: "4377",
        nameClient: "Alicia Lima",
        status: "Cancelado",
        text: "Cancelado",
    }
]

export const incomePeriod = [
    {
        value: 'semanal',
        text: 'Semanal'
    },
    {
        value: 'quinzenal',
        text: 'Quinzenal'
    },
    {
        value: 'mensal',
        text: 'Mensal'
    },
    {
        value: 'anual',
        text: 'Anual'
    },
]