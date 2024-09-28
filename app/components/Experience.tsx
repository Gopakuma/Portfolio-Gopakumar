import Banner from "./Banner"

function Experience() {
    return (
        <div>
            <div className="hero bg-base-100 shadow-lg min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="group">
                        <div className="group-hover:scale-105 duration-500">
                            <Banner />
                        </div>
                        <h1 className="group-hover:scale-105 hover:tracking-widest duration-500 text-5xl font-bold tracking-widest text-white">Software Engineer</h1>
                        <h4 className="text-lg font-semibold font-sans">Simplogics Solutions May 2022 - Sep 2024</h4>
                        <p className="py-6 tracking-widest text-xs">
                            Full-stack developer with a strong focus on API development and performance optimization.
                            Expertise in Node.js, Express.js, and MSSQL.
                            Proficient in designing, developing, and maintaining RESTful APIs, ensuring robust error handling and logging.
                            Skilled in database schema design and optimization.
                            Experience in managing multi-server architectures and implementing shared packages for code reusability.
                            Proven track record in feature development, including full-text search and Excel export functionalities.
                            Passionate about writing clean, efficient, and maintainable code. Strong collaboration skills and experience working with Git for version control and team collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
