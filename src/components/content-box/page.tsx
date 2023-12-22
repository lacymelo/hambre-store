import { ReactNode } from "react";
import { Content } from "./styles";

export function ContentBox({ children }: { children: ReactNode }) {
    return (
        <Content>{children}</Content>
    )
}