import { HTMLAttributes } from "react";
import { ContainerLink } from "./styles";

interface RedirectLinkProps extends HTMLAttributes<HTMLDivElement> { }

export function RedirectLink({ ...props }: RedirectLinkProps) {
    return (
        <ContainerLink size="sm" {...props}>
            {props.children}
        </ContainerLink>
    )
}