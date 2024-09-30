import Image from "next/image";
import profile from "../../public/profile.jpg";


export default function Avatar() {
    return (
        <div className="avatar absolute
        2xl:w-72 2xl:h-72 2xl:right-0 2xl:top-20 2xl:left-3/4
        lg:w-64 lg:h-64 lg:right-0 lg:top-20 lg:left-3/4
        md:w-60 md:h-60 md:right-0 md:top-24 md:left-2/3
        sm:w-40 sm:h-40 sm:right-0 sm:top-24 sm:left-2/3
        mobile:w-60 mobile:h-60 mobile:right-1/3 mobile:top-72 mobile:left-1/3 
        xs-mobile:w-64 xs-mobile:h-64 xs-mobile:right-0 xs-mobile:top-80 xs-mobile:left-24
        2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
        2xl:duration-500  xl:hover:duration-500  lg:hover:duration-500         
        ">
            <Image
                className="ring-purple-600 ring-offset-base-100 rounded-full -z-8 ring ring-offset-2"
                src={profile}
                alt="propic"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={100}
                loading="lazy"
            />
        </div>
    );
}
