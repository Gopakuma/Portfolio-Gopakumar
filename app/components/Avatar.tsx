import Image from "next/image";
import profile from "../../public/profile.jpg";

export default function Avatar() {
    return (
        <div className="avatar absolute w-72 h-72 right-28 top-20 hover:scale-105 duration-500">
            <Image
                className="ring-purple-600 ring-offset-base-100 rounded-full -z-8 ring ring-offset-2"
                src={profile}
                alt="propic"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={100}
                loading="lazy"
            />
        </div >
    )
}
