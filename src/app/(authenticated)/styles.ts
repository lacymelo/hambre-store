'use client'
import { styled } from "@labex-hambre-ui/react"

export const AuthContainer = styled("div", {
    Height: '100vh',
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'min-content max-content',
    position: 'relative'
})

export const Container = styled("div", {
    marginLeft: 460,
    padding: '$20 $3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: '$4',
})

export const AuthBody = styled("div", {
    display: 'flex',
    height: '100vh',
})

export const BoxLoading = styled("div", {
    width: '100%',
    height: '100vh',
    display: 'flex',
})

export const SimpleGrid = styled("div", {
    display: 'grid',
    gridTemplateColumns: 'repeat(14, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    width: '100%',
    gap: '$2',
})





