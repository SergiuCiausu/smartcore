import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header
        className="neutral-background flex justify-center w-full py-4">
        <nav
            className="w-[1120px] flex items-center justify-between mx-auto">
            <Link
                href="/"
                className="uppercase primary-color nav-text">
                Smartcore
            </Link>
            <ul
                className="flex items-center gap-5">
                <li className="primary-color nav-text cursor-pointer"><Link href="/cursuri">Cursuri</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/faq">FAQs</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/cunoaste-ti-profesorii">Cunoaște-ți profesorii</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/">Recenzii</Link></li>
            </ul>
            <ul
                className="flex items-center gap-5">
                <li className="white-color primary-background nav-bold nav-btn py-3 px-6 cursor-pointer"><Link href="/">Alege-ți cursul</Link></li>
                <li className="primary-color nav-bold py-3 px-6 nav-stroke-btn cursor-pointer"><Link href="/">Lecții gratuite</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar