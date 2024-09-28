import React from 'react'
import HeroContent from './HeroContent';

function Hero(): JSX.Element {
    return (
        <section>
            <div className='absolute
                            xs-mobile:text-xl xs-mobile:m-4 xs-mobile:p-4 xs-mobile:w-screen xs-mobile:top-20
                            mobile:text-xl mobile:m-2 mobile:p-8
                            sm:text-2xl sm:m-2 sm:p-10 sm:w-3/4 sm:h-full sm:top-20
                            md:text-2xl md:p-5 md:w-3/4 md:h-full md:m-12 md:top-20
                            lg:text-4xl lg:p-5 lg:top-20 lg:h-full lg:m-14
                            2xl:text-6xl
                            xl:p-5 xl:h-full xl:top-20 xl:m-14' >
                <h1 className='font-semibold 
                bg-clip-text 
                hover:scale-105 
                duration-500 
                hover:tracking-widest
                text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    HELLO,</h1>
                <HeroContent />
            </div >
        </section >
    )
}

export default Hero;
