'use client'
import { Animation, Aside, Box, Content, Header, HeaderOrderCenter, ItemContent, ItemLink, List, Menu, OrderAlert, OrderBox, OrderCenter, OrderToday, PageLink, Scroll, Timer } from "./styles";
import { Heading, Select, Text } from "@labex-hambre-ui/react";
import { useSidebar } from "@/contexts/sidebar-context";
import { filters } from "@/utils/data";
import { ConciergeBell } from "lucide-react";

export function Sidebar() {
    const {
        itemActiveMenu,
        orderActive,
        sidebarItems,
        addToPage,
        orderCenter,
        addToPageOrderDetails,
        totalPendingOrders,
        handlerFilter,
        filter
    } = useSidebar()

    return (
        <Aside>
            <Menu>
                {
                    sidebarItems.map((item, index) => (
                        <PageLink href={item.path}
                            key={index}
                            css={{
                                '--active-color': itemActiveMenu === index ? '$colors$hambre300' : 'transparent'
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
                                <ConciergeBell />

                                <Text as="span">
                                    {totalPendingOrders}
                                </Text>
                            </OrderAlert>
                        </Box>

                        <Select
                            placeholder="Filtrar por"
                            name="filter"
                            items={filters}
                            value={filter}
                            onValueChange={(selectedValue) => handlerFilter(selectedValue)}
                        />
                    </Content>
                </Header>

                <OrderToday>
                    <HeaderOrderCenter>
                        <Text>{filter}</Text>

                        <Text as="strong">{orderCenter.length}</Text>
                    </HeaderOrderCenter>

                    <OrderBox>
                        <Scroll>
                            <List>
                                {
                                    orderCenter.map((order, index) => (
                                        <ItemLink
                                            key={index}
                                            href={`/${order.path}/${order.idPedido}`}
                                            css={{
                                                '--active': index === orderActive && ('$colors$orange50'),
                                                '--radius': index === orderActive && ('$radii$sm'),
                                                '--border': index === orderActive ? '$colors$hambre300' : '$colors$orange100'
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