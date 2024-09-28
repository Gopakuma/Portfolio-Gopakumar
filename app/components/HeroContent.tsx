import CVButton from "./CVButton"
import HeroFooter from "./HeroFooter"
import ExampleComponent from "./TypeAnimation"

function HeroContent() {
    return (
        <section>
            <div className=" text-white shadow-lg">
                <ExampleComponent />
            </div>
            <CVButton />
            <HeroFooter />
        </section>
    )
}

export default HeroContent
