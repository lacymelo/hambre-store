'use client'

import { styled } from "@labex-hambre-ui/react"

export const AuthContainer = styled("div", {
    Height: '100vh',
    width: '100%',
    maxWidth: '1600px',
    display: 'grid',
    gridTemplateRows: 'min-content max-content',
    position: 'relative',
})

export const AuthBody = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
})

export const Content = styled("div", {
    marginLeft: 430,
})





