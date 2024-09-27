import React from 'react'
import HeroContent from './HeroContent';

function Hero(): JSX.Element {
    return (
        <section>
            <div className='absolute text-6xl m-14 h-full w-2/3 p-5 top-20' >
                <h1 className='font-semibold bg-clip-text hover:scale-105 duration-500 hover:tracking-widest
                text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    HELLO,</h1>
                <HeroContent />
            </div >
        </section >
    )
}

export default Hero;
