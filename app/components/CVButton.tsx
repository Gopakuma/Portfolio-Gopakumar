'use client';

function CVButton() {
    return (
        <div className="relative">
            <div className="relative">
                <div className="absolute hover:scale-105 duration-500 -inset-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-75">
                </div>
                <a className=" hover:scale-105 duration-500 relative btn btn-secondary" href="./GOPAKUMARG.pdf" download="GOPAKUMAR G.pdf">Download CV</a>
            </div>
        </div>
    )
}

export default CVButton
