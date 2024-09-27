import Links from "./Links";
import navbarData from './data/Navbar.json';


function Navbar() {
    return (
        <div className="sticky top-0 z-20">
            <header className="navbar .fixed .top-0 bg-gradient-to-r
             from-pink-600 to-purple-600 rounded-md blur opacity-35 text-primary-content flex 
             justify-end sm:w-auto md:w-auto lg:w-auto">
            </header>
            <div className="text-white text-xs font-semibold md:20">
                {
                    navbarData.map((data) => <Links key={data.id} styles={"p-5 transition-all duration-500 hover:tracking-widest"} href={data.link} body={data.name} />)
                }
            </div>
        </div >

    )
}

export default Navbar
