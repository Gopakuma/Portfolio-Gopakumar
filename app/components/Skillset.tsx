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
        <div id="skillsets" className="m-28 p-20">
            <div className="card bg-base-100 w-100% shadow-xl -z-10 flex">
                <div className='flex justify-between p-20'>
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
