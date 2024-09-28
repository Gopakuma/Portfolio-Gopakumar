import javascriptIcon from '../public/javascript-icon.png';
import nodeJsIcon from '../public/node-js-icon.png';
import expressJsIcon from '../public/express-js-icon.png';
import gitHubIcon from '../public/icons8-github-64.png';
import mssqlIcon from '../public/microsoft-sql.png';
import nextJsIcon from '../public/next-js-icon.png';
import reactJsIcon from '../public/react-js-icon.png';
import typeScriptIcon from '../public/ts-icon.png';
import Image from 'next/image';
import Banner from './Banner';

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
                                        hover:scale-105 duration-500  
                                      xs-mobile:w-screen xs-mobile:p-10
                                      mobile:w-screen
                                      sm:w-screen sm:m-0
                                      md:w-screen md:m-0
                                      lg:m-0 lg:p-2
                                      2xl:m-0 2xl:p-2
                                      ">
            <Banner />

            <div className="card bg-base-100 
                            shadow-xl 
                            xs-mobile:flex-col
                            mobile:p-5
                            sm:m-20 sm:p-10
                            md:m-24 md:p-20
                            lg:p-4
                            -z-10 ">
                <div className='lg:flex lg:justify-between lg:p-20
                                xs-mobile:ml-28
                                mobile:mr-0
                                sm:ml-32
                                xs-mobile:scale-75'>
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
