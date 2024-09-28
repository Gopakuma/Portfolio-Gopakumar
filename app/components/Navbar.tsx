import Links from "./Links";
import navbarData from './data/Navbar.json';

function Navbar() {
    return (
        <div className="fixed top-0 z-20 w-full">
            <header className="navbar sticky lg:top-0
             bg-gradient-to-r
             from-pink-600 to-purple-600 rounded-md blur opacity-35
             lg:text-primary-content lg:flex 
             lg:justify-end xs:w-auto sm:w-auto md:w-auto lg:w-auto xs-mobile:w-screen">
            </header>
            <div className="text-white
             lg:text-xs 
             xs-mobile:text-xs xs-mobile:relative
             font-semibold 
             ">
                {
                    navbarData.map((data) => <Links key={data.id} styles={"xs-mobile:absoulute xs-mobile:p-2 sm:p-4 lg:p-4 2xl:p-4 md:p-4 transition-all duration-500 hover:tracking-widest"} href={data.link} body={data.name} />)
                }
            </div>
        </div >
    )
}

export default Navbar
