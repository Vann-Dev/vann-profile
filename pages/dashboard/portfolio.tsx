import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Background from '@/components/background';
import Loading from '@/components/loading';
import Dashboard from '@/components/dashboard/dashboard';

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
// https://i.imgur.com/euwfikL.mp4

export default function Portfolio() {
    const [text, setText] = useState("");

    const titles = [
        "Enter the Secret Code to Access:",
        "Authenticate Your Identity:",
        "Access Granted - Enter Your Password:",
        "Verify Your Credentials:",
        "Password Required - Proceed with Caution:",
        "Decrypt the Vault - Provide Your Password:",
        "Security Checkpoint - Password Verification:",
        "Unlock the Secrets - Enter Your Password:",
        "Access Control - Password Authorization:",
        "Password Requested - Complete the Challenge:"
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setText(titles[Math.floor(Math.random() * titles.length)])
        }
    }, [])

    const [authorized, setAuthorized] = useState(false)

    function check(code: string) {
        if (code === "VANN") {
            setAuthorized(true);
        }
    }


    return (
        <div className='bg-black min-h-screen overflow-hidden'>
            {
                authorized
                    ?
                    <Dashboard />
                    :
                    <Background enable>
                        <Head>
                            <title>{text}</title>
                        </Head>
                        <main className='flex justify-center items-center h-screen w-full md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5 z-50'>
                            <div className='text-white text-center grid gap-6 lg:gap-12 animate-pulse'>
                                <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl font-oswaid delay-150 uppercase'>{text}</h1>
                                <input onChange={(e) => check(e.target.value)} className='font-monomaniac text-center py-2 px-4 text-xl md:text-3xl lg:text-5xl focus:outline-0 text-black rounded-xl' type='password' placeholder='CODE'></input>
                            </div>
                        </main>
                    </Background>
            }
        </div>
    );
}