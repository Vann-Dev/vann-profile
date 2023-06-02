import Background from '@/components/background'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function NotFound() {
    const [text, setText] = useState("")

    const titles = [
        "Uh-oh! The impostor sabotaged this page.",
        "It seems like this page got vented.",
        "Emergency meeting! The page is missing.",
        "This page is sus. It disappeared without a trace.",
        "The impostor must have deleted this page.",
        "Crewmate error: Page not found.",
        "Task failed! The page couldn't be located.",
        "The page seems to have been ejected.",
        "The impostor is messing with the pages. This one is missing.",
        "Page not found. Please report any suspicious activity."
    ]

    useEffect(() => {
        setText(titles[Math.floor(Math.random() * titles.length)])
    }, [])

    return (
        <Background enable>
            <Head>
                <title>{text}</title>
            </Head>
            <main className='flex justify-center items-center h-screen w-full md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5 z-50'>
                <div className='text-white text-center grid gap-6 lg:gap-12 animate-pulse'>
                    <p className='text-xs font-oswaid'>STATUS CODE 404</p>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl font-oswaid delay-150 uppercase'>{text}</h1>
                    <Link href='/' className='outline outline-3 rounded-lg p-2 transition-all font-oswaid hover:text-green-600'>EXIT</Link>
                </div>
            </main>
        </Background>
    )


}
