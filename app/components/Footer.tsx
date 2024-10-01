import Image from "next/image"
import wp from '../public/whatspp.png';
import mail from '../public/gmail.neon.png';

function Footer() {
    return (
        <footer className="footer footer-center bg-base-100 text-base-content p-5 shadow-xl">
            <div className=" bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                                font-extrabold text-transparent">
                <h1 className="
                xxs-mobile:text-xl text-center 
                xs-mobile:text-xl  
                2xl:text-6xl tracking-wide hover:tracking-widest duration-1000
                font-bold m-5 p-5"
                >Lets Connect...!</h1>
                <div className="grid grid-cols-2 items-center xs-mobile:text-xs xxs-mobile:text-xs gap-2">
                    <figure className="hover:scale-105 duration-500">
                        <Image
                            src={wp}
                            alt="wp icon"
                            width={50}
                            height={50}
                        >
                        </Image>
                    </figure>
                    <p className="text-white font-thin">8848074537</p>
                    <figure className="hover:scale-105 duration-500">
                        <Image
                            src={mail}
                            alt="mail icon"
                            width={50}
                            height={50}
                        >
                        </Image>
                    </figure>
                    <p className="text-white font-thin">8848074537</p>
                </div>

            </div>
            <aside>
                <p className="xxs-mobile:text-xs">Copyright © {new Date().getFullYear()} - All right reserved by Baba Yaga</p>
            </aside>
        </footer>
    )
}

export default Footer
