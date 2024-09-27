import EmailForm from "./EmailForm"
import future from '../public/future.png';
import Image from "next/image";

function Contact() {
    return (
        <section>
            <div className="flex justify-start p-24 
            bg-gradient-to-r from-pink-500 to-violet-500
            backdrop-blur-lg m-48 shadow-xl" id="contact">
                <EmailForm />
                <Image className="absolute opacity-25 max-h-40 max-w-fit m-2 -z-5" src={future} alt="">
                </Image>
                <Image className="absolute opacity-15 max-h-52 max-w-fit mt-52 ml-5 -z-5" src={future} alt="">
                </Image>
            </div>
        </section>
    )
}

export default Contact;
