import Background from '@/components/background'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Loading() {
    const [text, setText] = useState("")

    const titles = [
        "Searching for impostors...",
        "Venting to find the data...",
        "Scanning crew members...",
        "Completing tasks in progress...",
        "Investigating the electrical system...",
        "Avoiding sus behavior...",
        "Tracking impostor footprints...",
        "Emergency meeting in progress...",
        "Analyzing security cameras...",
        "Checking for impostor sabotage..."
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
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl font-oswaid delay-150 uppercase'>{text}</h1>
                </div>
            </main>
        </Background>
    )


}
