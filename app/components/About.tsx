'use client'

import { useState } from "react"
import Bio from "./Bio"
import MoreInfo from "./MoreInfo"
import Education from "./Education"
import dynamic from 'next/dynamic'

const Certifications = dynamic(() => import('./Certifications'))
import TimeLine from "./TimeLine"

const sections = [
    { element: <Bio />, sectionName: "BIO" },
    { element: <Education />, sectionName: "EDUCATION" },
    { element: <Certifications />, sectionName: "CERTIFICATIONS" },
]



function About() {
    const [currentSection, setSection] = useState<string>("BIO")
    const sectionElement = sections.find(section => section.sectionName === currentSection)?.element ?? localStorage.getItem("section") ?? currentSection;

    const handleSectionClick = (key: string) => {
        setSection(key);
        localStorage.setItem("section", currentSection);
    };

    return (
        <>
            <section id="about" className="bg-base-100 text-white shadow-xl -z-10 p-28 m-10">
                <div className="flex flex-col min-h-screen items-center gap-10">
                    <div className="w-full text-center">
                        <h1 className="text-center bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                    text-6xl font-extrabold text-transparent hover:scale-100 duration-500 hover:tracking-widest">MY JOURNEY SO FAR</h1>
                    </div>
                    <TimeLine />
                    <section className="flex justify-between w-screen h-screen m-10">
                        <section className="w-3/4">
                            <div className="inline-block max-w-screen-lg max-h-screen-lg m-12 p-32 items-center">
                                {sectionElement}
                            </div>
                        </section>
                        <section className="flex flex-col gap-6 justify-center w-1/5 p-16 mx-16 my-44 h-2/6 items-start rounded-xl">
                            {sections.map((section, index) => (
                                <MoreInfo
                                    key={index}
                                    section={section.sectionName}
                                    styles="btn rounded-r-badge bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                                    text-lg font-extrabold text-transparent hover:bg-white"
                                    onClick={() => handleSectionClick(section.sectionName)}
                                />
                            ))}
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default About
