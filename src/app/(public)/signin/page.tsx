import { ContentBox } from "@/components/content-box";
import { Panel, Stand } from "../styles";
import { Heading, Text } from "@labex-hambre-ui/react";
import Image from "next/image";
import smilingCustomer from "../../../assets/smiling-customer.png"
import { AuthForm } from "./auth-form/page";

export default function SignIn() {
    return (
        <ContentBox>
            <Stand>
                <Heading as="h1" size="3xl">Faça seu login</Heading>

                <Text size="lg">
                    Você está quase lá, agora informe o seu email e senha
                </Text>

                <AuthForm />
            </Stand>

            <Panel>
                <Image
                    src={smilingCustomer}
                    height={400}
                    quality={100}
                    priority
                    alt="Cliente Sorrindo"
                />
            </Panel>
        </ContentBox>
    )
}