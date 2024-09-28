import javascriptIcon from '../public/javascript-icon.png';
import nodeJsIcon from '../public/node-js-icon.png';
import expressJsIcon from '../public/express-js-icon.png';
import gitHubIcon from '../public/icons8-github-64.png';
import mssqlIcon from '../public/microsoft-sql.png';
import nextJsIcon from '../public/next-js-icon.png';
import reactJsIcon from '../public/react-js-icon.png';
import typeScriptIcon from '../public/ts-icon.png';
import Image from 'next/image';

type StaticImageData = typeof javascriptIcon;

const images: StaticImageData[] = [
    javascriptIcon,
    nodeJsIcon,
    expressJsIcon,
    gitHubIcon,
    mssqlIcon,
    nextJsIcon,
    reactJsIcon,
    typeScriptIcon
]

function Skillset() {
    return (
        <div id="skillsets" className=" relative   
                                      xs-mobile:w-screen xs-mobile:mt-40
                                      mobile:w-screen mobile:mt-40
                                      sm:w-screen sm:m-0
                                      md:w-screen md:m-0
                                      lg:m-28 lg:p-20">
            <div className="card bg-base-100 
                            shadow-xl 
                            xs-mobile:flex-col
                            mobile:m-20
                            sm:m-20
                            md:m-24
                            -z-10 ">
                <div className='lg:flex lg:justify-between lg:p-20
                                xs-mobile:ml-36 xs-mobile:scale-75'>
                    {
                        images.map((img, index) => (<Image key={index} src={img} alt='logo' />))
                    }
                </div>
                <div className="card-body">
                    <h1 className="card-title">SKILL SETS</h1>
                    <p>I possess a strong foundation in these technologies and actively expanding my knowledge in these fields.</p>
                </div>
            </div>
        </div>
    )
}

export default Skillset
