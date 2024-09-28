function HeroFooter() {
    return (
        <div className="relative">
            <h1 className="absolute 
            xs-mobile:top-48 xs-mobile:right-0 xs-mobile:left-5 xs-mobile:text-center xs-mobile:text-pretty
            mobile:bottom-12 mobile:right-0 mobile:left-0 mobile:text-center
            bg-clip-text 
            bg-gradient-to-r from-pink-500 to-violet-500 
            text-xs 
            tracking-wide 
            font-extrabold 
            text-transparent
            hover:tracking-widest duration-500">
                I developed this website using NEXT JS and Tailwind
            </h1>
        </div>
    )
}

export default HeroFooter
