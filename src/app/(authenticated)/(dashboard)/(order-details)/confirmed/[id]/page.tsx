import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { Card, Column, Content, InfoBox, Message, Page, Row } from "../../../styles";
import { AlarmClock, CookingPot, PersonStanding, Pin, Printer, X } from "lucide-react";
import { ButtonBox, FloatFooter, Group, Header, Item, List, Order, Product } from "../../styles";

interface OrderDetailsProps {
    params: {
        id: string
    }
}

export default function Confirmed({ params }: OrderDetailsProps) {
    return (
        <Content>
            <Card>
                <InfoBox>
                    <Text>
                        Pedido <Text as="strong">8967</Text>
                    </Text>

                    <Row>
                        <PersonStanding />

                        <Text>
                            Feito por <Text as="strong">Sidney Sage</Text> às <Text as="strong">19:26</Text>
                        </Text>
                    </Row>

                    <Row>
                        <Pin />

                        <Text>
                            Avenida Max Parijós, 1001, Bairro Novo, Cametá, 68.400.000
                        </Text>
                    </Row>
                </InfoBox>

                <InfoBox>
                    <Text>
                        Instruções
                    </Text>

                    <Row>
                        <Text as="strong" size="xl">
                            #1
                        </Text>

                        <Text>
                            primeira compra na sua loja!
                        </Text>
                    </Row>

                    <Row>
                        <AlarmClock />

                        <Text>
                            Entregue até <Text as="strong">20:26</Text>
                        </Text>
                    </Row>

                    <Row>
                        <CookingPot />

                        <Text>
                            Tirar a cebola e adicionar mais queijo
                        </Text>
                    </Row>
                </InfoBox>
            </Card>

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

                            <Text> Pizza de peru </Text>
                        </Product>

                        <Text> {(25).toLocaleString('pt-BR', {
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