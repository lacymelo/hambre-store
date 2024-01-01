'use client'

import { styled } from "@labex-hambre-ui/react"

export const AuthContainer = styled("div", {
    Height: '100vh',
    width: '100%',
    maxWidth: '1600px',
    display: 'grid',
    gridTemplateRows: 'min-content max-content',
    position: 'relative'
})

export const AuthBody = styled("div", {
    display: 'flex',
    height: '100vh',
})

export const Content = styled("div", {
    marginLeft: 460,
    padding: '$20 $3',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})





