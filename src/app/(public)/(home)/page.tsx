import { ContentBox } from "@/components/content-box";
import { Panel, Stand } from "../styles";
import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";
import { MessageAbout } from "@/components/message-about";
import { RedirectLink } from "@/components/redirect-link";
import Image from "next/image";
import deliveryDriver from '../../../assets/delivery-driver.png'
import { Metadata } from "next";

export const metadate: Metadata = {
    title: 'Home'
}

export default async function Home() {
    return (
        <ContentBox>
            <Stand>
                <Heading as="h1" size="5xl">Hambre Lojas</Heading>

                <Text size="xl">
                    Com o Hambre você pode organizar seus pedidos, mesas, formas de pagamento, endereços e clientes. Tudo de
                    forma simples e eficiente.
                </Text>

                <Button
                    type="button"
                    variant="primary"
                    size="md"
                >
                    <Text>
                        Criar Loja
                    </Text>

                    <MoveRight />
                </Button>

                <MessageAbout>
                    <Text size="md">Já possui conta?</Text>

                    <RedirectLink path="/signin">
                        Faça Login
                    </RedirectLink>
                </MessageAbout>
            </Stand>

            <Panel>
                <Image
                    src={deliveryDriver}
                    height={400}
                    quality={100}
                    priority
                    alt="entregador"
                />
            </Panel>
        </ContentBox>
    )
}