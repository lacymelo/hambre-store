'use client'
import { Box, Text, styled } from "@labex-hambre-ui/react"

export const Page = styled("div", {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4',
    position: 'relative'
})

export const Message = styled(Box, {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    borderRadius: '$lg',
    backgroundColor: '$red50',
    border: '1px solid $red100',

    [`> ${Text}`]: {
        color: '$red300'
    }
})

export const Content = styled("div", {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$4',
})

export const Card = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: '$4',
})

export const InfoBox = styled(Box, {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$2',
    borderRadius: '$lg',
    width: '100%',
    backgroundColor: '$orange50',
    border: '1px solid $orange100',
})

export const Info = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '$4'
})

export const Column = styled("div", {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$2',
})

export const Row = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2'
})
