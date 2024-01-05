import { Lato, Roboto, Patrick_Hand_SC } from 'next/font/google'

export const lato = Lato({
    weight: ['300'],
    subsets: ['latin'],
})

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const patrick = Patrick_Hand_SC({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})