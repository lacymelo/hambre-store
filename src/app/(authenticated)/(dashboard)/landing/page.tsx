import { Heading, Text } from "@labex-hambre-ui/react";
import { Card, Column, Content, Info, InfoBox, Page } from "../styles";
import { IncomePeriod } from "./income-period";

export default async function Landing() {
    return (
        <Page>
            <Heading as="h2" size="md">
                Olá, feira Delivery
            </Heading>

            <Content>
                <Card>
                    <InfoBox>
                        <Text>
                            Horário de Funcionamento
                        </Text>

                        <Info>
                            <Column>
                                <Text>
                                    Hoje, 04/01
                                </Text>

                                <Text as="strong">
                                    18:00 - 23:00
                                </Text>
                            </Column>

                            <Column>
                                <Text>
                                    Amanhã, 23/11
                                </Text>

                                <Text as="strong">
                                    18:00 - 23:00
                                </Text>
                            </Column>
                        </Info>
                    </InfoBox>

                    <InfoBox>
                        <Text>
                            Pedidos concluídos no mês
                        </Text>

                        <Info>
                            <Column>
                                <Text as="strong" size="4xl">
                                    16
                                </Text>

                                <Text>
                                    Mês Atual
                                </Text>
                            </Column>

                            <Column>
                                <Text as="strong" size="4xl">
                                    27
                                </Text>

                                <Text>
                                    Mês anterior
                                </Text>
                            </Column>
                        </Info>
                    </InfoBox>
                </Card>

                <Card>
                    <InfoBox >
                        <Text>
                            Pedidos Concluídos
                        </Text>

                        <Info>
                            <Column>
                                <Text>
                                    Ganho total neste período
                                </Text>

                                <Text as="strong" size="4xl">
                                    {
                                        (1535).toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        })
                                    }
                                </Text>
                            </Column>

                            <Column>
                                <Text>
                                    Total de pedidos neste período
                                </Text>
                                <Text as="strong" size="4xl">
                                    19
                                </Text>
                            </Column>
                        </Info>

                        <IncomePeriod />
                    </InfoBox>
                </Card>
            </Content>
        </Page>
    )
}