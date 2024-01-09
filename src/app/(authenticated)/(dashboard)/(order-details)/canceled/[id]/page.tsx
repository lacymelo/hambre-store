import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { Card, Column, Content, InfoBox, Message, Page, Row } from "../../../styles";
import { AlarmClock, CookingPot, PersonStanding, Pin, Printer, X } from "lucide-react";
import { ButtonBox, FloatFooter, Group, Header, Item, List, Order, Product } from "../../styles";
import { api } from "@/data/api";
import { OrderType } from "@/data/types/order";

interface OrderDetailsProps {
    params: {
        id: string
    }
}

async function handlerOrder(id: string): Promise<OrderType> {
    const response = await api(`/order-details/${id}`, {
        next: {
            revalidate: 5 * 60, // revalida a cada 5 min
        }
    })

    const order = await response.json()

    return order
}

export default async function Canceled({ params }: OrderDetailsProps) {
    const {
        idPedido,
        nameClient,
        orderTime,
        street,
        numberHouse,
        district,
        city,
        cep,
        orderFirst,
        deliveryTime,
        additionalInfo,
        status,
        orderList,
        deliveryFee,
        discount,
        typePayment,
        changeMoney,
        paymentAmount
    } = await handlerOrder(params.id)

    return (
        <Content>
            <Card>
                <InfoBox>
                    <Text>
                        Pedido <Text as="strong">{idPedido}</Text>
                    </Text>

                    <Row>
                        <PersonStanding />

                        <Text>
                            Feito por <Text as="strong">{nameClient}</Text> às <Text as="strong">{orderTime}</Text>
                        </Text>
                    </Row>

                    <Row>
                        <Pin />

                        <Text>
                            {street}, {numberHouse}, {district}, {city}, {cep}
                        </Text>
                    </Row>
                </InfoBox>

                <InfoBox>
                    <Text>
                        Instruções
                    </Text>

                    {orderFirst && (
                        <Row>
                            <Text as="strong" size="xl">
                                #1
                            </Text>

                            <Text>
                                primeira compra na sua loja!
                            </Text>
                        </Row>
                    )}


                    <Row>
                        <AlarmClock />

                        <Text>
                            Entregue até <Text as="strong">{deliveryTime}</Text>
                        </Text>
                    </Row>

                    {
                        additionalInfo && (
                            <Row>
                                <CookingPot />

                                <Text>
                                    {additionalInfo}
                                </Text>
                            </Row>
                        )
                    }

                </InfoBox>
            </Card>

            <Order>
                <Header css={{ "--header-color": '$colors$gray50' }}>
                    <Text>{status}</Text>
                </Header>

                <List>
                    {
                        orderList.map((order, index) => (
                            <Item key={index}>
                                <Product>
                                    <Text>{order.qtd}</Text>

                                    <X />

                                    <Text> {order.product} </Text>
                                </Product>

                                <Text> {order.price.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                })} </Text>
                            </Item>
                        ))
                    }

                    <Item>
                        <Product>
                            <Text></Text>
                            <Text> Taxa de entrega </Text>
                        </Product>

                        <Text> {deliveryFee.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })} </Text>
                    </Item>

                    <Item>
                        <Product>
                            <Text></Text>
                            <Text> Descontos </Text>
                        </Product>

                        <Text> {(-discount).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })} </Text>
                    </Item>
                    <Item>
                        <Product>
                            <Text></Text>
                            <Column>
                                <Text> Cobrar do cliente - {typePayment} sendo o total </Text>
                                {
                                    changeMoney > 0 && (
                                        <Text as="strong"> O entregador deve levar {changeMoney.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })} </Text>
                                    )
                                }
                            </Column>
                        </Product>

                        <Text> {paymentAmount.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })} </Text>
                    </Item>
                </List>
            </Order>

            <FloatFooter>
                <ButtonBox>
                    <Button
                        size="sm"
                        variant="icon"
                    >
                        <Printer />
                    </Button>
                </ButtonBox>
            </FloatFooter>
        </Content>
    )
}