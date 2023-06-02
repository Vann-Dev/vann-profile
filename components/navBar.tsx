import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
    return (
        <nav className='flex gap-3 font-oswaid'>
            <Link href='/portfolio' className='outline outline-3 rounded-lg p-2 transition-all hover:text-green-600'>PORTFOLIO</Link>
            <Link href='/contact' className='outline outline-3 rounded-lg p-2 transition-all hover:text-green-600'>CONTACT</Link>
        </nav>
    )
}
