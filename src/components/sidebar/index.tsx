'use client'
import { Animation, Aside, Box, Content, Header, HeaderOrderCenter, ItemContent, ItemLink, List, Menu, OrderAlert, OrderBox, OrderCenter, OrderToday, PageLink, Scroll, Timer } from "./styles";
import { Heading, Select, Text } from "@labex-hambre-ui/react";
import { useSidebar } from "@/contexts/sidebar-context";
import { filters } from "@/utils/data";
import { Bell } from "lucide-react";

export function Sidebar() {
    const {
        itemActiveMenu,
        orderActive,
        sidebarItems,
        addToPage,
        orderCenter,
        addToPageOrderDetails,
        totalPendingOrders
    } = useSidebar()

    return (
        <Aside>
            <Menu>
                {
                    sidebarItems.map((item, index) => (
                        <PageLink href={item.path}
                            key={index}
                            css={{
                                '--active-color': itemActiveMenu === index ? '$colors$yellow100' : 'transparent'
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
                        </PageLink>
                    ))
                }
            </Menu>

            <OrderCenter>
                <Header>
                    <Content>
                        <Box>
                            <Heading as="h3">
                                Central de Pedidos
                            </Heading>

                            <OrderAlert>
                                <Bell />

                                <Text as="span">
                                    {totalPendingOrders}
                                </Text>
                            </OrderAlert>
                        </Box>

                        <Select
                            placeholder="Filtrar por"
                            name="filter"
                            items={filters}
                        />
                    </Content>
                </Header>

                <OrderToday>
                    <HeaderOrderCenter>
                        <Text>Todos</Text>

                        <Text as="strong">5</Text>
                    </HeaderOrderCenter>

                    <OrderBox>
                        <Scroll>
                            <List>
                                {
                                    orderCenter.map((order, index) => (
                                        <ItemLink
                                            key={index}
                                            href={`/landing`}
                                            css={{
                                                '--active': index === orderActive && ('$colors$orange50'),
                                                '--radius': index === orderActive && ('$radii$sm')
                                            }}
                                            onClick={() => addToPageOrderDetails(index)}
                                        >
                                            <ItemContent>
                                                <Text>
                                                    Pedido <Text as="strong">{order.idPedido}</Text>
                                                </Text>

                                                <Text>
                                                    {order.nameClient}
                                                </Text>

                                                <Text as="strong">
                                                    {order.text}
                                                </Text>
                                            </ItemContent>

                                            {order.text === 'Confirme o pedido' && (
                                                <Timer>
                                                    5 min
                                                </Timer>
                                            )}
                                        </ItemLink>
                                    ))
                                }
                            </List>
                        </Scroll>
                    </OrderBox>
                </OrderToday>
            </OrderCenter>
        </Aside>
    )
}