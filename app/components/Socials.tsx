import Image from "next/image"
import Link from "next/link"
import githubIcon from '../public/icons8-github-64.png';
import linkedinIcon from '../public/icons8-linkedin-64.png';


function Socials() {
    return (
        <div className="absolute right-48 bottom-0 top-96">
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
