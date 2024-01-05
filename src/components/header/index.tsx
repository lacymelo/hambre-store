import Link from "next/link";
import { Content, HeaderBox, LeftBlock, RightBlock } from "./styles";
import { Text } from "@labex-hambre-ui/react";

export async function Header() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <HeaderBox>
            <Content>
                <LeftBlock>
                    <Link href="/landing">
                        Hambre Lojas
                    </Link>
                </LeftBlock>

                <RightBlock>
                    <Text>
                        Bloco direito
                    </Text>
                </RightBlock>
            </Content>
        </HeaderBox>
    )
}