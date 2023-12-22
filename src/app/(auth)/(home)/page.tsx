import { ContentBox } from "@/components/content-box/page";
import { Panel, Stand } from "../styles";
import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";


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


            </Stand>

            <Panel>

            </Panel>
        </ContentBox>
    )
}