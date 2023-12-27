'use client'
import { z } from "zod";
import { Form, FormError } from "../../styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text, TextInput } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const registerUserFormSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "Nome muito curto." })
        .regex(/^[A-Z][a-zA-Z]*( [a-zA-Z]+)*$/, {
            message: 'O nome deve iniciar com letra maiúscula.'
        }),
    lastName: z
        .string()
        .min(2, { message: "Sobrenome muito curto." }),
    cpf: z
        .string()
        .min(11, { message: "Digite os 11 números do CPF" })
        .regex(/^\d{11}$/, {
            message: 'CPF inválido'
        }),
    phoneNumber: z
        .string()
        .min(11, 'insira um número de telefone válido')
        .regex(/^(\+\d{2}\s?)?(\()?\d{2}(\))?[.\s]?\d{4,5}-?\d{4}$/, {
            message: 'Número de telefone inválido'
        })
    ,
    email: z
        .string()
        .regex(/^.+@.+\..+$/, {
            message: "Insira um endereço de e-mail válido.",
        }),
})

type FormRegisterUser = z.infer<typeof registerUserFormSchema>

export function UserForm() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormRegisterUser>({
        resolver: zodResolver(registerUserFormSchema)
    })

    async function handleSubmitUser(data: FormRegisterUser) {
        console.log(data)

        await router.push('/validate-email/1')
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleSubmitUser)}>
            <label>
                <Text size="sm">Primeiro Nome</Text>

                <TextInput
                    placeholder="Nome"
                    {...register("firstName")}
                />

                {errors.firstName && (
                    <FormError size="sm">
                        {errors.firstName.message}
                    </FormError>
                )}

            </label>

            <label>
                <Text size="sm">Sobrenome</Text>

                <TextInput
                    placeholder="Informe seu sobrenome"
                    {...register("lastName")}
                />

                {errors.lastName && (
                    <FormError size="sm">
                        {errors.lastName.message}
                    </FormError>
                )}

            </label>

            <label>
                <Text size="sm">CPF</Text>

                <TextInput
                    placeholder="informe seu CPF"
                    {...register("cpf")}
                />

                {errors.cpf && (
                    <FormError size="sm">
                        {errors.cpf.message}
                    </FormError>
                )}
            </label>

            <label>
                <Text size="sm">Telefone</Text>

                <TextInput
                    placeholder="informe o número do seu telefone"
                    {...register("phoneNumber")}
                />

                {errors.phoneNumber && (
                    <FormError size="sm">
                        {errors.phoneNumber.message}
                    </FormError>
                )}
            </label>

            <label>
                <Text size="sm">Email</Text>

                <TextInput
                    placeholder="informe o seu email"
                    {...register("email")}
                />

                {errors.email && (
                    <FormError size="sm">
                        {errors.email.message}
                    </FormError>
                )}
            </label>

            <Button
                size="md"
                type="submit"
                disabled={isSubmitting}
            >
                Próximo Passo

                <MoveRight />
            </Button>
        </Form>
    )
}