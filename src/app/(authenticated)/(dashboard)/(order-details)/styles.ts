'use client'
import { styled } from "@labex-hambre-ui/react";

export const Order = styled("div", {
    backgroundColor: '$white',
    display: 'grid',
    gridTemplateColumns: '1fr',
    border: '1px solid $orange100',
    borderRadius: '$lg',
})

export const Header = styled("div", {
    background: 'var(--header-color)',
    borderTopLeftRadius: '$lg',
    borderTopRightRadius: '$lg',
    padding: '$4',
})

export const List = styled("ul", {
    all: 'unset',
})

export const Item = styled("li", {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '$4',

    '& + &': {
        borderTop: '1px solid $orange100'
    }
})

export const Product = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    gap: '$4',
    alignItems: 'center',
    justifyContent: 'center'
})

export const FloatFooter = styled("div", {
    position: 'sticky',
    bottom: 0,
    left: 0,
    width: '100%',
    height: `$20`,
    background: '$white',
    zIndex: 2,
})

export const ButtonBox = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: '$2',
    background: '$white',
    borderTop: '1px solid $orange100',
    borderRadius: '$sm',
})

export const Group = styled("div", {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$2'
})