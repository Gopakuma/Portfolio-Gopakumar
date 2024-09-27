'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import React from 'react';

function SmoothScrollHandler({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}

function SmoothScroll({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothWheel: true }}>
            <SmoothScrollHandler>{children}</SmoothScrollHandler>
        </ReactLenis>
    );
}

export default SmoothScroll;