import { Heading, MultiStep, Text } from "@labex-hambre-ui/react";
import { Content, Header } from "../styles";
import { UserForm } from "./user-form";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Registrar Usuário'
    }
}

export default function RegisterUser() {
    return (
        <Content>
            <Header>
                <Heading as="h2" size="lg">
                    Bem vindo ao Hambre Lojas
                </Heading>

                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você
                    pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1} />
            </Header>

            <UserForm />
        </Content>
    )
}