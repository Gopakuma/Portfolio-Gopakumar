'use client'

import { useState } from "react";
import Bio from "./Bio"
import Education from "./Education"
import dynamic from 'next/dynamic'
import MoreInfo from "./MoreInfo"
const Certifications = dynamic(() => import('./Certifications'))

const sections = [
    { element: <Bio />, sectionName: "BIO" },
    { element: <Education />, sectionName: "EDUCATION" },
    { element: <Certifications />, sectionName: "CERTIFICATIONS" },
]


function Cards() {
    const [currentSection, setSection] = useState<string>("BIO")
    const sectionElement = sections.find(section => section.sectionName === currentSection)?.element ?? localStorage.getItem("section") ?? currentSection;

    const handleSectionClick = (key: string) => {
        setSection(key);
        localStorage.setItem("section", currentSection);
    };
    return (
        <div className="flex flex-col p-2.5">
            <div>
                {sectionElement}
            </div>
            <div className="relative
                            xs-mobile:scale-75
                            sm:scale-100
                            rounded-xl">
                {sections.map((section, index) => (
                    <MoreInfo
                        key={index}
                        section={section.sectionName}
                        onClick={() => handleSectionClick(section.sectionName)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards
