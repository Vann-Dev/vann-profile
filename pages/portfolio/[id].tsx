import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Background from '@/components/background';
import Loading from '@/components/loading';
import { NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';

export default function Portfolio() {

    const router = useRouter();
    const [data, setData] = useState() as any

    useEffect(() => {
        if (router.query.id) {
            fetchData();
        }

    }, [router.query.id]);

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/portfolio/${router.query.id}`);
            const jsonresponse = await response.json()
            setData(jsonresponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!data) {
        return (
            <Loading />
        )
    }

    return (
        <div className='bg-black min-h-screen min-w-screen'>
            <Head>
                <title>{data.title}</title>
            </Head>
            <main className='md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5'>
                {/* Navbar */}
                <div className='flex justify-between items-center text-xs md:text-lg lg:text-2xl w-full text-white'>
                    <Link href='/portfolio' className='outline outline-3 rounded-lg p-2 transition-all font-oswaid px-5 hover:text-green-600'>BACK</Link>
                </div>
                {/* Header */}
                <div>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-oswaid mt-12'>PORTFOLIO</h1>
                    <p className='text-white/80 font-lato mt-2 text-xs md:text-base lg:text-xl'>Some of the projects I have or have worked on ✨</p>
                    <div className='bg-white h-[0.5px] my-6 w-full'></div>
                </div>
                {/* Content */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 justify-between'>
                    <video
                        key={data.id} // Assuming each video has a unique identifier
                        className={`w-full bg-white h-full rounded-xl ${data.expand ? "col-span-2" : ""}`}
                        loop={true}
                        autoPlay={true}
                        controls={true}
                    >
                        <source src={data.link} type="video/mp4" />
                    </video>

                    <div className='text-white '>
                        <h1 className='font-oswaid text-3xl mt-6'>{data.title}</h1>
                        <p className='opacity-70 mt-2'>{data.content}</p>
                        <p className='mt-12 font-monomaniac opacity-60'>Posted {formatDistanceToNow(new Date(data.date), { addSuffix: true })}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}