'use client'
import { z } from "zod";
import { Form, FormError } from "../../../styles";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Text, TextInput } from "@labex-hambre-ui/react";
import { CategoryContainer, CategoryItem, CategoryType } from "./styles";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserProps } from "../page";

const registerStoreFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: "O nome da loja precisa ter pelos menos 3 letras" })
        .regex(/^[a-zA-Z ]+$/, {
            message: "O nome não pode ter caracteres especiais ou hifens.",
        }),
    categories: z
        .array(
            z.object({
                option: z.string(),
                enabled: z.boolean(),
            })
        )
        .transform((categories) => categories.filter((category) => category.enabled))
        .refine((categories) => categories.length > 0, {
            message: "Você precisa selecionar pelo menos uma categoria"
        })
        .refine((categories) => categories.length <= 3, {
            message: "Você só pode selecionar no máximo 3 opções"
        })
})

type RegisterStoreFormInput = z.input<typeof registerStoreFormSchema>
type RegisterStoreFormOutput = z.input<typeof registerStoreFormSchema>

export function StoreForm({ params }: UserProps) {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<RegisterStoreFormInput>({
        resolver: zodResolver(registerStoreFormSchema),
        defaultValues: {
            categories: [
                { option: "Pizzaria", enabled: false },
                { option: "Hamburgueria", enabled: false },
                { option: "Churrascaria", enabled: false },
                { option: "Sorveteria", enabled: false },
                { option: "Restaurante", enabled: false },
                { option: "Lanches", enabled: false },
                { option: "Doces e Bolos", enabled: false },
                { option: "Salgados", enabled: false },
                { option: "Bebidas", enabled: false },
            ]
        }
    })

    const { fields } = useFieldArray({
        control,
        name: "categories"
    })

    const router = useRouter()

    async function handleRegisterStore(data: RegisterStoreFormOutput) {

        await router.push(`/register-password/${params.userId}`)
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleRegisterStore)}>
            <label>
                <Text size="sm">Nome do estabelecimento</Text>

                <TextInput
                    placeholder="informe o nome da sua loja"
                    {...register(`name`)}
                />

                {errors.name && (
                    <FormError size="sm">{errors.name.message}</FormError>
                )}
            </label>

            <Text size="sm">
                Defina as principais categorias que a sua loja trabalha.
                Selecione até 3 opções.
            </Text>

            <CategoryContainer>
                {
                    fields.map((fields, index) => (
                        <CategoryItem key={fields.id}>
                            <CategoryType>
                                <Controller
                                    name={`categories.${index}.enabled`}
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <Checkbox
                                                onCheckedChange={(checked) => {
                                                    field.onChange(checked === true)
                                                }}
                                                checked={field.value}
                                            />
                                        )
                                    }}
                                />

                                <Text size="sm">{fields.option}</Text>
                            </CategoryType>
                        </CategoryItem>
                    ))
                }
            </CategoryContainer>

            {errors.categories && (
                <FormError size="sm">{errors.categories?.root?.message}</FormError>
            )}

            <Button
                size="md"
                disabled={isSubmitting}
            >
                Próximo Passo

                <MoveRight />
            </Button>
        </Form>
    )
}