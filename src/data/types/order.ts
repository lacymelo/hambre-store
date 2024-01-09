export interface Item {
    price: number
    product: string
    qtd: number
}

export interface OrderType {
    idPedido: string
    nameClient: string
    orderTime: string
    deliveryTime: string
    additionalInfo: string
    orderFirst: boolean
    street: string
    numberHouse: string
    district: string
    city: string
    cep: string
    nameStore: string
    waitingTime: string
    changeMoney: number
    typePayment: string
    deliveryFee: number
    discount: number
    orderList: Item[]
    status: string
}