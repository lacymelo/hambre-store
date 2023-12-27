'use client'
import { Box, Text, styled } from "@labex-hambre-ui/react";

export const Content = styled('div', {
    maxWidth: 572,
    margin: '$20 auto',
    padding: '0 $4',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4'
})


export const Header = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$4'
})

export const Form = styled(Box, {
    display: 'grid',
    gridTemplateColumns: '1fr',
    backgroundImage: `linear-gradient(195deg, $colors$orange50, $colors$yellow100)`,
    borderColor: '$yellow100',
    boxShadow: 'rgba(99, 99, 99, 0.1) 0px 1px 1px 0px',
    gap: '$4'
})

export const FormError = styled(Text, {
    color: "#f75a68"
})

export const LoadingRegister = styled("div", {
    margin: 'auto',
    padding: '0 $10',
    maxWidth: 572,
    width: '100%',
    height: '600px',
    display: 'flex',
})