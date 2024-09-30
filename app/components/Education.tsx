import React from 'react'

function Education() {
    return (
        <section className='flex-row
                            max-h-80
                            xs-mobile:p-0
                            xs-mobile:m-0
                            mobile:p-4 mobile:m-0
                            '>
            <div className="card bg-base-100
             w-90 shadow-xl 
             2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
             2xl:duration-500  xl:hover:duration-500  lg:hover:duration-500 ">
                <div className="card-body">
                    <h2 className="card-title text-lg">Master of Business Administration</h2>
                    <p className='text-xs'>Information Technology, SGVU</p>
                    <div className="card-actions justify-end">
                        <h1>DEC 2021 - DEC 2023</h1>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100
             w-90 shadow-xl 
             2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
             2xl:duration-500  xl:hover:duration-500  lg:hover:duration-500 ">
                <div className="card-body">
                    <h2 className="card-title text-lg">BACHELOR OF SCIENCE</h2>
                    <p className='text-xs'>Computer Science, University of Kerala</p>
                    <div className="card-actions justify-end">
                        <h1>JUNE 2018 - JUNE 2023</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
