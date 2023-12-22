'use client'
import { styled } from "@labex-hambre-ui/react";
import imageBanner from '../../../public/background-store.png'

export const Container = styled("div", {
    background: `url(${imageBanner.src})`,
    backgroundSize: `cover`,
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
});