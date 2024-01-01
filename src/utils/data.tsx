'use client'
import { ConciergeBell, History, Home, LogOut, Settings, UtensilsCrossed } from "lucide-react";

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

export const filters = [
    {
        value: 'Todos',
        text: "todos",
    },
    {
        value: 'Aguardando a loja responder...',
        text: "Confirme o pedido",
    },
    {
        value: 'Confirmado! Em breve seu pedido sairá para entrega',
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

export const orders = [
    {
        idPedido: "8967",
        nameClient: "Sidney Sage",
        orderTime: "19:46",
        deliveryTime: "20:46",
        additionalInfo: "Tirar cebola",
        orderFirst: true,
        street: "Avenida Max Parijós",
        numberHouse: "1001",
        district: "Bairro Novo",
        city: "Cametá",
        cep: "68400000",
        nameStore: "Feira Delivery",
        waitingTime: "5 min",
        changeMoney: 10,
        typePayment: "Dinheiro na entrega",
        deliveryFee: 5,
        discount: 10,
        orders: [
            {
                price: 30,
                product: "Pizza 4 queijos",
                qtd: 1,
            },
            {
                price: 25,
                product: "Pizza de peru e mussarela",
                qtd: 1,
            },
        ],
        status: "Aguardando a loja responder..."
    },
    {
        idPedido: "3917",
        nameClient: "Sophia Clark",
        orderTime: "19:26",
        deliveryTime: "20:26",
        additionalInfo: "Tirar cebola e adicionar mais azeitonas",
        orderFirst: true,
        street: "Vila do tempo",
        numberHouse: "1826",
        district: "Bairro Lima",
        city: "Cametá",
        cep: "68400000",
        nameStore: "Feira Delivery",
        waitingTime: "",
        changeMoney: 0,
        typePayment: "Cartão na entrega",
        deliveryFee: 5,
        discount: 10,
        orders: [
            {
                price: 15,
                product: "Porção de batatas fritas",
                qtd: 1,
            },
            {
                price: 25,
                product: "Pizza de peru e mussarela",
                qtd: 1,
            },
        ],
        status: "Confirmado! Em breve seu pedido sairá para entrega"
    },
    {
        idPedido: "1927",
        nameClient: "Miguel Ângelo",
        orderTime: "19:28",
        deliveryTime: "20:28",
        additionalInfo: "",
        orderFirst: false,
        street: "Rua do Miquelângelo",
        numberHouse: "1300",
        district: "Matinha",
        city: "Cametá",
        cep: "68400000",
        nameStore: "Feira Delivery",
        waitingTime: "",
        changeMoney: 0,
        typePayment: "Pix",
        deliveryFee: 5,
        discount: 0,
        orders: [
            {
                price: 15,
                product: "Porção de batatas fritas",
                qtd: 1,
            },
        ],
        status: "Enviado"
    },
    {
        idPedido: "2227",
        nameClient: "Leonardo Nunes",
        orderTime: "19:26",
        deliveryTime: "20:26",
        additionalInfo: "",
        orderFirst: false,
        street: "Avenida luz e vida",
        numberHouse: "1001",
        district: "Marambaia",
        city: "Cametá",
        cep: "68400000",
        nameStore: "Feira Delivery",
        waitingTime: "",
        changeMoney: 0,
        typePayment: "Cartão na entrega",
        deliveryFee: 5,
        discount: 2,
        orders: [
            {
                price: 25,
                product: "Pizza de peru e mussarela",
                qtd: 1,
            },
        ],
        status: "Entregue"
    },
    {
        idPedido: "4377",
        nameClient: "Alicia Lima",
        orderTime: "18:28",
        deliveryTime: "19:28",
        additionalInfo: "",
        orderFirst: false,
        street: "Avenida Lima e Lima",
        numberHouse: "1254",
        district: "Roma",
        city: "Cametá",
        cep: "68400000",
        nameStore: "Feira Delivery",
        waitingTime: "",
        changeMoney: 0,
        typePayment: "Cartão na entrega",
        deliveryFee: 5,
        discount: 2,
        orders: [
            {
                price: 25,
                product: "Pizza de peru e mussarela",
                qtd: 10,
            },
            {
                price: 15,
                product: "Porção de batatas fritas",
                qtd: 1,
            },
        ],
        status: "Cancelado"
    }
]

export const ordersCenter = [
    {
        idPedido: "8967",
        nameClient: "Sidney Sage",
        status: "Aguardando a loja responder..."
    },
    {
        idPedido: "3917",
        nameClient: "Sophia Clark",
        status: "Confirmado! Em breve seu pedido sairá para entrega"
    },
    {
        idPedido: "1927",
        nameClient: "Miguel Ângelo",
        status: "Enviado"
    },
    {
        idPedido: "2227",
        nameClient: "Leonardo Nunes",
        status: "Entregue"
    },
    {
        idPedido: "4377",
        nameClient: "Alicia Lima",
        status: "Cancelado"
    }
]