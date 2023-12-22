'use client'
import { Text, styled } from "@labex-hambre-ui/react";

export const ContainerLink = styled(Text, {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$2',
    cursor: 'pointer',
    color: '$hambre600',
    fontSize: '$sm',

    '&:hover': {
        color: '$hambre300',
        transition: 'all ease .36s'
    },
})