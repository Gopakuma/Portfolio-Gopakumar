import Image from "next/image"
import js_basic from './data/certs/javascript_basic.jpg';
import js_in from './data/certs/javascript_intermediate.jpg';
import react_basic from './data/certs/react_basic certificate.jpg';
import rest_in from './data/certs/rest_api_intermediate.jpg';
import sql_basic from './data/certs/sql_basic certificate.jpg';
import sql_in from './data/certs/sql_intermediate.jpg';



function Certifications() {
    return (
        <section>
            <div className="carousel 
            carousel-center 
            rounded-box
            shadow-xl
            max-h-80
            xs-mobile:0
            xs-mobile:p-2
            ">
                <div className="carousel-item">
                    <Image
                        src={js_basic}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={js_in}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={react_basic}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={rest_in}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={sql_basic}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={sql_in}
                        alt="js_basic"
                        width={400}
                        height={400}
                        quality={70}
                    />
                </div>
            </div>
        </section>
    )
}
export default Certifications
