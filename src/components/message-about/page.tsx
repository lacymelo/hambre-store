import { HTMLAttributes, ReactNode } from "react";
import { ContainerAbout } from "./styles";

interface MessageAboutProps extends HTMLAttributes<HTMLDivElement> {
    variant?: string
}

export function MessageAbout({ variant, ...props }: MessageAboutProps) {
    return (
        <ContainerAbout {...props}
            css={{
                '--justify': variant ? variant : 'left'
            }}
        >
            {props.children}
        </ContainerAbout>
    )
}