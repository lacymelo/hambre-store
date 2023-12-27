'use client'
import { Button } from "@labex-hambre-ui/react";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation"

export function ButtonToRegisterStore() {
    const router = useRouter()

    async function handleRegisterStore() {
        await router.push('/register-store/1')
    }
    return (
        <Button
            size="md"
            type="button"
            onClick={handleRegisterStore}
        >
            Já validei o Email

            <MoveRight />
        </Button>
    )
}