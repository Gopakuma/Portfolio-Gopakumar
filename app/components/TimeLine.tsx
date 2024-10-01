import HeroFooter from "./HeroFooter"

function TimeLine() {
    return (
        <section className="xxs-mobile:scale-75 xs-mobile:scale-75">
            <ul className="
             xxs-mobile:flex-col xxs-mobile:mt-64 xxs-mobile:p-20 
             xs-mobile:flex-col xs-mobile:mt-64 xs-mobile:p-20 
             sm:mt-8 sm:p-30
             md:mt-8 md:p-32
             lg:timeline lg:flex-row lg:mt-60 lg:justify-center lg:p-24 lg:scale-105
             2xl:timeline 2xl:flex-row 2xl:mt-60 2xl:justify-center 2xl:p-32 2xl:scale-150
             ">
                <li>
                    <div className="timeline-start hover:scale-150 duration-500">2000</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box hover:scale-110 duration-500">Borned on a Leap Year Day</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start hover:scale-150 duration-500">2018</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box hover:scale-110 duration-500">Completed Schools</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start hover:scale-150 duration-500">2021</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box text-justify hover:scale-110 duration-500">Degree Graduation (BSC Computer Science)</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start hover:scale-150 duration-500">2022</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box hover:scale-110 duration-500">Stared Career as a Software Engineer</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start hover:scale-150 duration-500">2023</div>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box hover:scale-110 duration-500">MBA Graduation</div>
                </li>
            </ul>
            <HeroFooter />
        </section>
    )
}

export default TimeLine
