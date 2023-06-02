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

export default function Dashboard() {

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

    function deletee(id: string) {
        fetch(`/api/portfolio/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: "hi" }),
        });
    }

    if (!data) {
        return (
            <Loading />
        )
    }

    return (
        <div className='bg-black w-screen min-h-screen overflow-hidden'>
            <Head>
                <title>Portfolio</title>
            </Head>
            <main className='md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5'>
                {/* Header */}
                <div>
                    <form id='form' className='grid gap-2 w-1/4' method='POST' action={"/api/portfolio"}>
                        <label className='font-monomaniac text-white text-xl'>POST</label>
                        <input className='rounded-sm p-2 font-lato font-bold' required placeholder='Title' name="title"></input>
                        <input className='rounded-sm p-2 font-lato' required placeholder='Content' name="content"></input>
                        <input className='rounded-sm p-2 font-lato' required placeholder='Link' name="link"></input>
                        <div className='flex justify-between items-center bg-white p-2'>
                            <label className='font-lato'>Expand?</label>
                            <input className='w-5 h-5 rounded-sm p-2 font-lato' type='checkbox' name="expand"></input>
                        </div>
                        <select name='type' className='rounded-sm py-2 font-lato' placeholder='type'>
                            <option value="">Type?</option>
                            <option value="video">video</option>
                            <option value="image">image</option>
                            <option value="website">website</option>
                        </select>
                        <input className='bg-white rounded-sm p-2 font-monomaniac text-xl cursor-pointer' type="submit" value="Submit"></input>
                    </form>
                    <div className='bg-white h-[0.5px] my-6 w-full'></div>
                </div>
                {/* Content */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-6 justify-between'>
                    {
                        data.map((e: any) => (
                            <div key={e.id} className={`h-auto bg-white rounded-xl p-5 ${e.expand ? "col-span-2" : null}`}>
                                <video
                                    // Assuming each video has a unique identifier
                                    className={`rounded-xl bg-white h-20 w-full`}
                                    loop={true}
                                    autoPlay={true}
                                    muted
                                >
                                    <source src={e.link} type="video/mp4" />
                                </video>
                                <p className='font-lato mt-4 font-bold'>{e.title}</p>
                                <p className='font-lato'>{e.content}</p>
                                <p className='mt-5 font-mono'>{new Date(e.date).toLocaleString('en-US')}</p>
                                <button onClick={() => deletee(e.id)} className='w-full p-2 bg-black rounded-xl text-white font-monomaniac mt-2'>DELETE</button>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}