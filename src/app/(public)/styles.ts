'use client'
import { patrick } from "@/fonts";
import { Button, Heading, Text, styled } from "@labex-hambre-ui/react";

export const Stand = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: 480,
    padding: '0 $10',
    margin: '0, $20',
    gap: '$4',

    [`> ${Heading}`]: {
        fontFamily: `${patrick.style.fontFamily}`,
        textTransform: 'uppercase',


        "@media(max-width: 950px)": {
            fontSize: '$6xl'
        }
    },

    [`> ${Text}`]: {
        color: '$gray500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    [`> ${Button}`]: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$2',
        width: 'max-content',
    },

    "@media(max-width: 950px)": {
        maxWidth: '100%',
        width: '100%',
        padding: "0 $5",
        margin: "0 $10",
    }
})

export const Panel = styled("div", {
    paddingRight: "$8",
    overflow: "hidden",

    "@media(max-width: 700px)": {
        display: "none",
    },
});

export const LoadingPublic = styled("div", {
    margin: 'auto',
    padding: '0 $10',
    maxWidth: 1200,
    width: '100%',
    height: '600px',
    display: 'flex',
})

export const Grid = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    width: '100%',
    height: '100%',
    gap: '$10',
})