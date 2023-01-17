import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/products'}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}