'use client';

import Link from "next/link"

function BackButton() {
    return (
        <div className="text-white text-xs font-semibold">
            <Link className="p-5" href="/#home"> HOME </Link>
        </div>
    )
}

export default BackButton
