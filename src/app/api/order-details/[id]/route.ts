import { z } from 'zod'
import data from '../../data.json'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const id = z.string().parse(params.id)

    const order = data.orders.find((order) => order.idPedido === id)

    if (!order) {
        return Response.json({ message: "Order not found." }, { status: 400 })
    }

    return Response.json(order)
}