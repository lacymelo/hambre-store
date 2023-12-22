import { ContentBox } from "@/components/content-box/page";
import { Panel, Stand } from "../styles";
import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";
import { MessageAbout } from "@/components/message-about/page";
import { RedirectLink } from "@/components/redirect-link/page";
import Image from "next/image";
import panelImage from '../../../../public/entrega-casa.png'


export default function Home() {
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
                        Criar Minha Loja
                    </Text>

                    <MoveRight />
                </Button>

                <MessageAbout>
                    <Text size="md">Já possui conta?</Text>

                    <RedirectLink>
                        Faça Login
                    </RedirectLink>
                </MessageAbout>
            </Stand>

            <Panel>
                <Image
                    src={panelImage}
                    height={400}
                    quality={100}
                    priority
                    alt="entregador"
                />
            </Panel>
        </ContentBox>
    )
}