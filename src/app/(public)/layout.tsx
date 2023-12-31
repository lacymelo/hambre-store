import { ContainerBackgroundImage } from "@/components/container-background-image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <ContainerBackgroundImage>
            {children}
        </ContainerBackgroundImage>
    )
}