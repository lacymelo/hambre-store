'use client'
import { styled } from "@labex-hambre-ui/react";
import smokyBackground from '../../assets/smoky-background.png'

export const Container = styled("div", {
    background: `url(${smokyBackground.src})`,
    backgroundSize: `cover`,
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
});