'use client'
import { Box, Text, styled } from "@labex-hambre-ui/react";

export const Form = styled(Box, {
    display: 'grid',
    gridAutoColumns: '1fr',
    backgroundImage: `linear-gradient(195deg, $colors$orange50, $colors$yellow100)`,
    borderColor: '$yellow100',
    gap: '$4',

    button: {
        width: '100%',
    },

    "@media(max-width: 600px)": {
        gridTemplateColumns: '1fr',
    }
})

export const FormAnnotation = styled("div", {
    marginTop: '$4'
})

export const FormError = styled(Text, {
    color: "#f75a68"
})

