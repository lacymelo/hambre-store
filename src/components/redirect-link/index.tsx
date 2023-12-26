'use client'
import { HTMLAttributes } from "react";
import { LinkRedirect } from "./styles";
import { useRouter } from "next/navigation";

interface RedirectLinkProps extends HTMLAttributes<HTMLDivElement> {
    path: string
}

export function RedirectLink({ path, ...props }: RedirectLinkProps) {
    const router = useRouter()

    async function handlerPage() {
        await router.push(`${path}`)
    }

    return (
        <LinkRedirect {...props} onClick={handlerPage}>
            {props.children}
        </LinkRedirect>
    )
}