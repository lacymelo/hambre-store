import { ContentBox } from "@/components/content-box";
import { Panel, Stand } from "../../styles";
import { Button, Heading, Text } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";
import happyWoman from '../../../../assets/happy-woman.png'
import Image from "next/image";
import { ButtonToSignin } from "./button-to-signin";

export default function Congratulations() {
    return (
        <ContentBox>
            <Stand>
                <Heading as="h1"
                    size="3xl"
                >Loja criada com sucesso!</Heading>

                <Text size="lg">
                    Seja bem-vindo! Estamos felizes por sua loja fazer parte do Hambre.
                </Text>

                <ButtonToSignin />
            </Stand>

            <Panel>
                <Image
                    src={happyWoman}
                    height={400}
                    quality={100}
                    priority
                    alt="happy woman"
                />
            </Panel>
        </ContentBox>
    )
}