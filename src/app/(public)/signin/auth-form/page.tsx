'use client'
import { z } from "zod";
import { Form, FormError } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Text, TextInput } from "@labex-hambre-ui/react";
import { useState } from "react";
import { Eye } from "lucide-react";
import { MessageAbout } from "@/components/message-about";
import { RedirectLink } from "@/components/redirect-link";

const authFormSchema = z.object({
    email: z
        .string()
        .regex(/^.+@.+\..+$/, {
            message: "Insira um endereço de e-mail válido.",
        }),
    password: z
        .string()
        .min(8, { message: "a senha precisa de pelo menos 8 dígitos." })
        .refine((data) => {
            // Validar a força da senha
            const hasUpperCase = /[A-Z]/.test(data);
            const hasLowerCase = /[a-z]/.test(data);
            const hasDigit = /\d/.test(data);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(data);

            return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
        }, { message: "A senha deve conter pelo menos um caractere especial, letra maiúscula e 8 caracteres no mínimo." }),
});

type FormUserAuth = z.infer<typeof authFormSchema>

export function AuthForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormUserAuth>({
        resolver: zodResolver(authFormSchema)
    })

    const [showPassword, setShowPassword] = useState(false)

    async function handleAuth(data: FormUserAuth) {
        console.log(data)
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleAuth)}>
            <label>
                <Text size="sm">Email</Text>

                <TextInput
                    placeholder="Seu email"
                    {...register("email")}
                />

                {
                    errors.email && (
                        <FormError size="sm">{errors.email.message}</FormError>
                    )
                }
            </label>

            <label>
                <Text size="sm">Senha</Text>
                <TextInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua senha"
                    {...register("password")}
                    icon={<Eye onClick={() => setShowPassword(!showPassword)} />}
                />

                {
                    errors.password && (
                        <FormError size="sm">{errors.password.message}</FormError>
                    )
                }
            </label>

            <MessageAbout variant="right">
                <RedirectLink path="/">
                    Esqueci minha senha
                </RedirectLink>
            </MessageAbout>

            <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
            >
                Login
            </Button>

            <MessageAbout variant="center">
                <Text size="sm">
                    não possui conta
                </Text>

                <RedirectLink path="/">
                    Cadastre-se
                </RedirectLink>
            </MessageAbout>
        </Form>
    )
}