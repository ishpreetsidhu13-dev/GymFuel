
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName: string = usePathname();

    const getLinkClass = (href: string) => {
        if (pathName === href || pathName.startsWith(href + '/')) {
            return 'activeLink';
        } else {
            return 'inactiveLink';
        }
    }

    return (
        <nav className="navbar">
                            <Link href="/">
                    <img
                        src="/Mainlogo.png"
                        alt="GymFuel Logo"
                        className="w-36 h-auto"
                    />
                </Link>
                <h1>
                <Link href="/">GymFuel</Link>
            </h1>

            <ul>
                <li>
                    <Link href="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/food" className={getLinkClass('/food')}>
                        Food Search
                    </Link>
                </li>

                <li>
                    <Link href="/log" className={getLinkClass('/log')}>
                        My Food Log
                    </Link>
                </li>

                <li>
                    <Link href="/about" className={getLinkClass('/about')}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
