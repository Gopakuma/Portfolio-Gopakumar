import React from 'react'

function Education() {
    return (
        <section className='flex gap-20'>
            <div className="card bg-base-100 w-90 shadow-xl hover:scale-110 duration-500">
                <div className="card-body">
                    <h2 className="card-title text-lg">Master of Business Administration</h2>
                    <p className='text-xs'>Information Technology, SGVU</p>
                    <div className="card-actions justify-end">
                        <h1>DEC 2021 - DEC 2023</h1>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-90 shadow-xl hover:scale-110 duration-500">
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
