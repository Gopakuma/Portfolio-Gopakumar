import CVButton from "./CVButton"
import Socials from "./Socials"
import ExampleComponent from "./TypeAnimation"

function HeroContent() {
    return (
        <section>
            <div className=" text-white shadow-lg">
                <ExampleComponent />
            </div>
            <CVButton />
            <Socials />
        </section>
    )
}

export default HeroContent
