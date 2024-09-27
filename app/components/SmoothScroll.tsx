'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import React, { useEffect } from 'react';

function SmoothScrollHandler({ children }: any) {
    return <div>{children}</div>;
}

function SmoothScroll({ children }: any) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothWheel: true }}>
            <SmoothScrollHandler>{children}</SmoothScrollHandler>
        </ReactLenis>
    );
}

export default SmoothScroll;