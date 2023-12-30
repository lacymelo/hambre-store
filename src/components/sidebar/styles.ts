'use client'
import { Transition, styled } from "@labex-hambre-ui/react"
import Link from "next/link"

export const Aside = styled("aside", {
    display: 'flex',
    alignItems: 'stretch',
    alignContent: 'flex-start',
    position: 'fixed',
    width: 430,
    height: '100vh',
    zIndex: 4,
    top: 0,
    left: 0,
    boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
    backgroundColor: '$white'
})

export const Menu = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(133deg, $colors$yellow300, $colors$orange300)',
    padding: '$20 $2',
    gap: '$2',
    width: 80,
    height: '100vh'
})

export const ItemLink = styled(Link, {
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