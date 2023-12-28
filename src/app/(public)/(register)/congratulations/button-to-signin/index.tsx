'use client'
import { Button, Text } from "@labex-hambre-ui/react";
import { useRouter } from "next/navigation"

export function ButtonToSignin() {
    const router = useRouter()

    async function handlePageSignin() {
        await router.push('/signin')
    }
    return (
        <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handlePageSignin}
        >
            <Text>
                Login
            </Text>
        </Button>
    )
}