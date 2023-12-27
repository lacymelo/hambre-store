import { Heading, MultiStep, Text } from "@labex-hambre-ui/react";
import { Content, Form, Header } from "../styles";
import { UserForm } from "./user-form";

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