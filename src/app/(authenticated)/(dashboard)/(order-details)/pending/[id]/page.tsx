import { Button, Text } from "@labex-hambre-ui/react";
import { Column, Content, Message } from "../../../styles";
import { Printer, X } from "lucide-react";
import { ButtonBox, FloatFooter, Group, Header, Item, List, Order, Product } from "../../styles";

interface OrderDetailsProps {
    params: {
        id: string
    }
}

async function getOrder(id: string) {

}

export default async function Pending({ params }: OrderDetailsProps) {
    return (
        <Content>
            <Message>
                <Text>Para ver todas as informações do pedido, confirme em até 5 min, após esse tempo o pedido será cancelado pelo sistema.</Text>
            </Message>

            <Order>
                <Header>
                    <Text>Aguardando a loja responder...</Text>
                </Header>

                <List>
                    <Item>
                        <Product>
                            <Text> 1 </Text>

                            <X />

                            <Text> Pizza 4 queijos </Text>
                        </Product>

                        <Text> {(30).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })} </Text>
                    </Item>
                    <Item>
                        <Product>
                            <Text> 1 </Text>

                            <X />

                            <Text> Pizza 4 queijos </Text>
                        </Product>

                        <Text> {(30).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })} </Text>
                    </Item>
                    <Item>
                        <Product>
                            <Text></Text>
                            <Text> Taxa de entrega </Text>
                        </Product>

                        <Text> {(5).toLocaleString('pt-BR', {
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

                        <Text> {(-10).toLocaleString('pt-BR', {
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
                                <Text> Cobrar do cliente - Dinheiro na entrega sendo o total </Text>
                                <Text as="strong"> O entregador deve levar {(10).toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                })} </Text>
                            </Column>
                        </Product>

                        <Text> {(50).toLocaleString('pt-BR', {
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

                    <Group>
                        <Button
                            size="sm"
                            variant="secondary"
                        >
                            Rejeitar
                        </Button>

                        <Button
                            size="sm"
                            variant="primary"
                        >
                            Confirmar
                        </Button>
                    </Group>
                </ButtonBox>
            </FloatFooter>
        </Content>
    )
}