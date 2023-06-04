import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Loading from '@/components/loading';

export default function Portfolio() {

    const [data, setData] = useState() as any

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/portfolio');
                const jsonresponse = await response.json()
                setData(jsonresponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return (
            <Loading />
        )
    }

    function hoverPlay(id: string) {
        const video = document.getElementById(id)
        //@ts-ignore
        video.play()
    }

    function hoverPause(id: string) {
        const video = document.getElementById(id)
        //@ts-ignore
        video.pause()
    }

    return (
        <div className='bg-black min-h-screen min-w-screen'>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className='md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5'>
                {/* Navbar */}
                <div className='flex justify-between items-center text-xs md:text-lg lg:text-2xl w-full text-white'>
                    <Link href='/' className='outline outline-3 rounded-lg p-2 transition-all font-oswaid px-5 hover:text-green-600'>EXIT</Link>
                    <NavBar />
                </div>
                {/* Header */}
                <div>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-oswaid mt-12'>PORTFOLIO</h1>
                    <p className='text-white/80 font-lato mt-2 text-xs md:text-base lg:text-xl'>Some of the projects I have or have worked on ✨</p>
                    <div className='bg-white h-[0.5px] my-6 w-full'></div>
                </div>
                {/* Content */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-6 justify-between'>
                    {
                        data.map((e: any) => (
                            <Link onMouseOver={() => hoverPlay(e.id)} onMouseOut={() => hoverPause(e.id)} href={`portfolio/${e.id}`} key={e.id} className={`${e.expand ? "col-span-2" : ""}`}>
                                <video
                                    id={e.id}
                                    className={`w-full bg-white h-full rounded-xl`}
                                    loop={false}
                                    autoPlay={false}
                                    muted
                                >
                                    <source src={e.link} type="video/mp4" />
                                </video>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}