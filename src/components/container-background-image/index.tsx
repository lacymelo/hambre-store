import { ReactNode } from "react";
import { Container } from "./styles";

export function ContainerBackgroundImage({ children }: { children: ReactNode }) {
    return (
        <Container>
            {children}
        </Container>
    )
}