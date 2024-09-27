import Link from "next/link"

type props = {
    styles: string,
    href: string,
    body: string,
    key: number
}

function Links({ key, styles, href, body }: props) {
    return (
        <Link id={String(key)} className={styles} href={href}> {body} </Link>
    )
}

export default Links
