import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Background from '@/components/background';
import Loading from '@/components/loading';

// https://i.imgur.com/HzqiLZu.mp4
// https://i.imgur.com/27izbuF.mp4
// https://i.imgur.com/BDkS7Zx.mp4
// https://i.imgur.com/VgBGWod.mp4
// https://i.imgur.com/f6HHtrm.mp4
// https://i.imgur.com/wvmYEo9.mp4
// https://i.imgur.com/AyQK6To.mp4
// https://i.imgur.com/dcU6LPA.mp4
// https://i.imgur.com/tGJDebR.mp4
// https://i.imgur.com/x8rGegX.mp4
// https://i.imgur.com/euwfikL.mp4s

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
                            <video
                                key={e.id} // Assuming each video has a unique identifier
                                className={`w-full bg-white h-full rounded-xl ${e.expand ? "col-span-2" : ""}`}
                                loop={true}
                                autoPlay={true}
                                muted
                            >
                                <source src={e.link} type="video/mp4" />
                            </video>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}