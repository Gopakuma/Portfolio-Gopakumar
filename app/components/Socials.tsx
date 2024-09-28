import Image from "next/image"
import Link from "next/link"
import githubIcon from '../public/icons8-github-64.png';
import linkedinIcon from '../public/icons8-linkedin-64.png';


function Socials() {
    return (
        <div className="absolute 
                        xs-mobile:left-28 xs-mobile:bottom-28
                        mobile:left-20 mobile:bottom-20
                        sm:top-36 sm:m-20 sm:left-1/2
                        md:top-1/3 md:m-28 md:right-0 md:left-96
                        lg:top-1/3 lg:p-7 lg:m-16 lg:right-0 lg:left-0
                        2xl:top-60 2xl:m-28 2xl:right-2/3 2xl:left-0
                        ">
            <div className="flex">
                <Link href='https://github.com/Gopakuma'>
                    <Image
                        src={githubIcon}
                        alt="github icon"
                        className="hover:scale-125 duration-500"
                    />
                </Link>
                <Link href='https://www.linkedin.com/in/gopakumar-g-838b1b216/'>
                    <Image
                        src={linkedinIcon}
                        alt="linkedin icon"
                        className="hover:scale-125 duration-500"
                    />
                </Link>
            </div>

        </div>
    )
}

export default Socials
