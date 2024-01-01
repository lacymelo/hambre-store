'use client'
import { Heading, Select, Text, Transition, styled } from "@labex-hambre-ui/react"
import Link from "next/link"

export const Aside = styled("aside", {
    display: 'flex',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    position: 'fixed',
    maxWidth: 460,
    width: '100%',
    height: '100vh',
    zIndex: 1,
    top: 0,
    left: 0,
    boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
    backgroundColor: '$white'
})

export const Menu = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(133deg, $colors$yellow300, $colors$orange300)',
    padding: '$20 $3',
    gap: '$2',
    width: 80,
    height: '100vh'
})

export const PageLink = styled(Link, {
    all: 'unset',
    display: 'flex',
    backgroundColor: 'var(--active-color)',
    borderRadius: '$sm',
    paddingBottom: '$1'
})

export const Animation = styled(Transition, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '$1',
    paddingBottom: 0,
})

export const OrderCenter = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    maxWidth: 380,
    width: '100%',
    paddingTop: '$20',
    gap: '$4',
})

export const Header = styled("div", {
    all: 'unset',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
})

export const Content = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    padding: '$3',
})

export const Box = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid $gray100',

    [`> ${Heading}`]: {
        fontWeight: 'normal',
        fontSize: '$xl',
    },
})

export const OrderAlert = styled("div", {
    position: 'relative',

    [`> ${Text}`]: {
        position: 'absolute',
        background: '$hambre300',
        fontSize: '$xs',
        fontWeight: 'bold',
        width: '$4',
        height: '$4',
        borderRadius: '$full',
        top: 0,
        right: -5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export const OrderToday = styled("div", {
    all: 'unset',
    maxWidth: 380,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
})

export const HeaderOrderCenter = styled("div", {
    backgroundColor: '$yellow100',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '$3',
})

export const OrderBox = styled("div", {
    padding: '$3',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
})

export const Scroll = styled("div", {
    position: 'relative',
    flex: '1',
    overflowY: 'auto',
    width: '100%',
})

export const List = styled("ul", {
    position: 'absolute',
    width: '100%',
    overflowX: 'hidden',
    top: 0,
    right: 0,
    marginTop: 0,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$4'
})

export const ItemLink = styled(Link, {
    all: 'unset',
    borderRadius: '$sm',
    backgroundColor: 'var(--active)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '$2',
    cursor: 'pointer',
    transition: 'all ease .35s',

    "& + &": {
        paddingTop: '$2',
        borderTop: '2px solid $colors$hambre300'
    },

    '&:hover': {
        backgroundColor: '$orange50',
    }
})

export const ItemContent = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2'
})

export const Timer = styled(Text, {
    display: 'flex',
    padding: '$1',
    color: '$red500',
    height: 'max-content',
    backgroundColor: '$red100',
    borderRadius: '$full'
})