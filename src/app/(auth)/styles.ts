'use client'
import { Button, Heading, Text, styled } from "@labex-hambre-ui/react";

export const Stand = styled("div", {
    maxWidth: 480,
    padding: '0 $10',
    margin: '0, $20',

    [`> ${Heading}`]: {
        fontFamily: 'Patrick Hand',
        textTransform: 'uppercase',


        "@media(max-width: 950px)": {
            fontSize: '$6xl'
        }
    },

    [`> ${Text}`]: {
        marginTop: '$4',
        color: '$gray500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    [`> ${Button}`]: {
        marginTop: '$4',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$2',
    },

    "@media(max-width: 950px)": {
        maxWidth: '100%',
        width: '100%',
        padding: "0 $5",
        margin: "0 $10",
    }
})

export const Panel = styled("div", {
    paddingRight: '$8',
    overflow: 'hidden',

    "@media(max-width: 700px)": {
        display: "none",
    },
})