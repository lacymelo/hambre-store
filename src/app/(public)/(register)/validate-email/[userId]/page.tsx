import { Heading, MultiStep, Text } from "@labex-hambre-ui/react"
import { Content, Form, Header } from "../../styles"
import { MessageAbout } from "@/components/message-about"
import { RedirectLink } from "@/components/redirect-link"
import { ButtonToRegisterStore } from "./button-to-register-store"

interface UserProps {
    params: {
        userId: string
    }
}

export default function ValidateEmail({ params }: UserProps) {
    return (
        <Content>
            <Header>
                <Heading as="h2" size="lg">
                    Bem-vindo ao Hambre Lojas
                </Heading>

                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você
                    pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={2} />
            </Header>

            <Form as="form">
                <label>
                    <Text size="md">
                        Link de validação de e-mail enviado para o email:
                    </Text>

                    <Text as="strong" size="md">
                        juliaraissa@email.com
                    </Text>
                </label>

                <ButtonToRegisterStore />

                <MessageAbout variant="center">
                    <RedirectLink path="/">
                        Reenviar link de validação
                    </RedirectLink>
                </MessageAbout>
            </Form>
        </Content >
    )
}