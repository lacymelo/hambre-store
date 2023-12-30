'use client'
import { Animation, Aside, ItemLink, Menu } from "./styles";
import { Text } from "@labex-hambre-ui/react";
import { useMenu } from "@/contexts/menu-context";

export function Sidebar() {
    const { activeIndex, menuItems, addToPage } = useMenu()

    return (
        <Aside>
            <Menu>
                {
                    menuItems.map((item, index) => (
                        <ItemLink href={item.path}
                            key={index}
                            css={{
                                '--active-color': activeIndex === index ? '$colors$yellow100' : 'transparent'
                            }}
                            onClick={() => addToPage(index)}
                        >
                            <Animation currentWidth="50%" currentHeight="100%">
                                <Text>
                                    {item.icon}
                                </Text>

                                <Text>
                                    {item.title}
                                </Text>
                            </Animation>
                        </ItemLink>
                    ))
                }
                <Text>{activeIndex}</Text>
            </Menu>
        </Aside>
    )
}