'use client'
import { z } from "zod";
import { Form, FormError } from "../../../styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button, Text, TextInput } from "@labex-hambre-ui/react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

const registerPasswordFormSchema = z.object({
    password: z
        .string()
        .min(8, { message: 'A senha precisa de pelo menos 8 dígitos' })
        .refine((data) => {
            // Validar a força da senha
            const hasUpperCase = /[A-Z]/.test(data);
            const hasLowerCase = /[a-z]/.test(data);
            const hasDigit = /\d/.test(data);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(data);

            return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
        }, { message: "A senha deve conter pelo menos um caractere especial, letra maiúscula, um número e 8 caracteres no mínimo." }),
    passwordConfirmation: z
        .string()
        .min(8, { message: "a senha precisa de pelo menos 8 dígitos." })
        .refine((data) => {
            // Validar a força da senha
            const hasUpperCase = /[A-Z]/.test(data);
            const hasLowerCase = /[a-z]/.test(data);
            const hasDigit = /\d/.test(data);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(data);

            return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
        }, { message: "A senha deve conter pelo menos um caractere especial, letra maiúscula, um número e 8 caracteres no mínimo." }),
})

type RegisterPasswordForm = z.infer<typeof registerPasswordFormSchema>

export function PasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<RegisterPasswordForm>({
        resolver: zodResolver(registerPasswordFormSchema)
    })

    const router = useRouter()
    const [showPassword, setShowPassword] = useState<Boolean>(false)
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<Boolean>(false)

    async function handlerRegisterPassword(data: RegisterPasswordForm) {
        console.log(data)

        await router.push('/congratulations')
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handlerRegisterPassword)}>
            <label>
                <Text size="sm">Senha</Text>

                <TextInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua senha"
                    {...register("password")}
                    icon={<Eye onClick={() => setShowPassword(!showPassword)} />}
                />

                {errors.password && (
                    <FormError size="sm">{errors.password.message}</FormError>
                )}
            </label>

            <label>
                <Text size="sm">Confirmação de Senha</Text>
                <TextInput
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    placeholder="Sua senha"
                    {...register("passwordConfirmation")}
                    icon={<Eye onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)} />}
                />

                {errors.passwordConfirmation && (
                    <FormError size="sm">{errors.passwordConfirmation.message}</FormError>
                )}
            </label>

            <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={isSubmitting}
            >
                Finalizar Cadastro
            </Button>
        </Form>
    )
}