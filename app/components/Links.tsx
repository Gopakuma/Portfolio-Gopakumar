import Link from "next/link"

type props = {
    styles: string,
    href: string,
    body: string
}

function Links({ styles, href, body }: props) {
    return (
        <Link className={styles} href={href}> {body} </Link>
    )
}

export default Links
