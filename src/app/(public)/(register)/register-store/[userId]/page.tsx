import { Heading, MultiStep, Text } from "@labex-hambre-ui/react";
import { Content, Header } from "../../styles";
import { StoreForm } from "./store-form";
import { Metadata } from "next";

export interface UserProps {
    params: {
        userId: string
    }
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Registrar Loja'
    }
}

export default function RegisterStore({ params }: UserProps) {
    console.log(params.userId)

    return (
        <Content>
            <Header>
                <Heading as="strong"
                    size="lg"
                >
                    Perfeito!
                </Heading>

                <Text>
                    Agora vamos criar sua Loja.
                </Text>

                <MultiStep size={4} currentStep={3} />
            </Header>

            <StoreForm params={params} />
        </Content>
    )
}