import Link from "next/link"
import NavCta from "../Buttons/NavCta"

function Header() {
    return (
        <header className="sticky top-0 w-full">
            <nav className="py-10 flex items-center justify-between container-xs">
                <Link href={"/"}>
                    <h1 className="navHeading font-bold">Gurukool Club</h1>
                </Link>
                <ul className="flex items-center justify-between gap-5">
                    <li>
                        <Link href="/playground">Playground</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    <li className="ml-5">
                        <NavCta>Sign In</NavCta>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header