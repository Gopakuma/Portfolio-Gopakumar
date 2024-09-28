type props = {
    section: string;
    onClick: () => void
}


function MoreInfo({ section, onClick }: props) {
    return (
        <button onClick={() => onClick()} className="btn rounded-r-badge
                                        bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                                        xs-mobile:text-xs 
                                        xs-mobile:ml-5 
                                        xs-mobile:mt-2
                                        mobile:ml-8 mobile:mt-4 
                                        sm:ml-16 sm:mt-10 sm:p-5
                                        md:ml-20 md:p-4
                                        lg:ml-20 lg:p-4
                                        xl:ml-20 xl:p-4
                                        2xl:ml-20 2xl:p-6 2xl:mt-0
                                        font-extrabold text-transparent hover:bg-white">{section}</button>

    )
}

export default MoreInfo



// className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
// from - pink - 500 to - violet - 500