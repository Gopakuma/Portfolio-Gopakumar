import TimeLine from "./TimeLine"

function About() {
    return (
        <>
            <section id="about" className=" group
                                            bg-base-100
                                            relative
                                            text-white 
                                            shadow-xl 
                                            -z-10 
                                            xs-mobile:w-screen xs-mobile:m-5 xs-mobile:p-0 xs-mobile:h-4/5
                                            mobile:w-screen mobile:m-5 mobile:p-0 mobile:h-4/5
                                            sm:w-screen sm:m-4 sm:p-0 sm:h-4/5
                                            md:w-screen md:m-4 md:p-0 md:h-4/5
                                            lg:w-screen lg:m-4 lg:p-0 lg:h-4/5
                                            ">
                <div className="flex flex-col
                                relative 
                                xs-mobile:h-screen xs-mobile:top-96
                                sm:h-screen sm:top-0
                                md:h-screen md:top-0
                                lg:h-screen lg:top-0
                                items-center gap-10">
                    <div className="w-full absolute
                                    xs-mobile:top-80
                                    sm:top-20
                                        ">
                        <h1 className=" 
                                        bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500  
                                        font-extrabold    
                                        xs-mobile:text-center xs-mobile:text-2xl
                                        sm:text-center sm:text-5xl
                                        md:text-center md:text-6xl
                                        lg:text-8xl lg:font-semibold
                                        text-transparent
                                        ">
                            MY JOURNEY SO FAR</h1>
                    </div>
                    <TimeLine />

                </div>
            </section>
        </>
    )
}

export default About
