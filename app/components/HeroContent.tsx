import Banner from "./Banner"
import CVButton from "./CVButton"
import ExampleComponent from "./TypeAnimation"

function HeroContent() {
    return (
        <section>
            <div className=" text-white shadow-lg">
                <ExampleComponent />
            </div>
            <CVButton />
        </section>
    )
}

{/* <Banner /> */ }
// <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
// HELLO,
// </div>

export default HeroContent
