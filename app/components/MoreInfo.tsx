type props = {
    section: string;
    styles: string,
    onClick: () => void
}

function MoreInfo({ section, styles, onClick }: props) {
    return (
        <button onClick={() => onClick()} className={styles}>{section}</button>

    )
}

export default MoreInfo



// className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
// from - pink - 500 to - violet - 500