'use client'

import { Box, styled } from "@labex-hambre-ui/react"

export const CategoryContainer = styled(Box, {
    all: 'unset',
    border: '1px solid $yellow200',
    borderRadius: '$md'
})

export const CategoryItem = styled("div", {
    padding: '$4',

    "& + &": {
        borderTop: "1px solid $yellow200"
    }
})

export const CategoryType = styled("div", {
    display: 'flex',
    alignItems: 'center',
    gap: '$4'
})