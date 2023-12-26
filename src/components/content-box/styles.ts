'use client'
import { styled } from "@labex-hambre-ui/react";

export const Content = styled("div", {
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$20',
    padding: '$8',
    maxWidth: '1600px',
})