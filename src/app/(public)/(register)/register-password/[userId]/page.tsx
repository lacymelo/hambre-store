import { Heading, MultiStep, Text } from "@labex-hambre-ui/react";
import { Content, Header } from "../../styles";
import { PasswordForm } from "./password-form";

export default function RegisterPassword() {
    return (
        <Content>
            <Header>
                <Heading as="h2" size="lg">
                    Hora de criar uma senha para sua conta
                </Heading>

                <Text>
                    A senha deve conter pelo menos um caractere especial, uma letra maiúscula, um número e 8 caracteres no mínimo.
                </Text>

                <MultiStep size={4} currentStep={4} />
            </Header>

            <PasswordForm />
        </Content>
    )
}