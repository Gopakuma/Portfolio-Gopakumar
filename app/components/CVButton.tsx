'use client';

function CVButton() {
    return (
        <div className="relative">
            <div className="relative">
                <div className="absolute
                                2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
                                2xl:duration-500  xl:hover:duration-500  lg:hover:duration-500 
                                2xl:-inset-3  xl:-inset-3 lg:-inset-3
                                bg-gradient-to-r from-pink-600 to-purple-600 
                                rounded-md blur opacity-75">
                </div>
                <a className=" 2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
                               duration-500 
                               relative
                               btn btn-secondary"
                    href="./GOPAKUMARG.pdf"
                    download="GOPAKUMAR G.pdf">Download CV</a>
            </div>
        </div>
    )
}

export default CVButton
