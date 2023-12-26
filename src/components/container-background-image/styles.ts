'use client'
import { styled } from "@labex-hambre-ui/react";
import smokyBackground from '../../assets/smoky-background.png'

export const Container = styled("div", {
    background: `url(${smokyBackground.src})`,
    backgroundColor: '$yellow50',
    backgroundSize: `cover`,
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
});