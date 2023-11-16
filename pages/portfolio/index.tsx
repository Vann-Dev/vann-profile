import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import Background from '@/components/background';
import Image from 'next/image';

interface IPortfolioData {
    id: string;
    date_created: string;
    date_updated: string;
    github_link: string | null;
    title: string;
    link: string;
    description: string;
    custom_links: {
        link_name: string;
        link_url: string;
    }[] | null;
}

export default function Portfolio() {
    const [data, setData] = useState<IPortfolioData[]>()

    useEffect(() => {
        const getPortfolio = async () => {
            fetch("https://dashboard.vannapps.com/items/stevan_portfolios").then(async (res) => {
                const response = await res.json() as unknown as { data: IPortfolioData[] }

                setData(response.data)
            }).catch(err => console.log(err))
        }

        if (!data) {
            getPortfolio()
        }
    }, [data])

    return (
        <Background enable>
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
                    <p className='text-white/80 font-lato mt-2 text-xs md:text-base lg:text-xl'>Some of the projects I have created, or am working on ✨</p>
                    <div className='bg-white h-[0.5px] my-6 w-full'></div>
                </div>
                {/* Content */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 justify-between font-lato'>
                    {
                        data?.map((val) => (
                            <Link href={val.link} key={val.id} className='text-white bg-white/20 p-4 rounded-md flex flex-col justify-between'>
                                <div>
                                    <h2 className='font-bold text-sm md:text-lg'>{val.title}</h2>
                                    <p className='text-xs mt-2 md:text-sm'>{val.description}</p>
                                </div>

                                <div>
                                    <div className='flex justify-between w-full items-end mt-6'>
                                        <div>
                                            <Link href={val.link}>
                                                <Image className='w-6 aspect-square hover:scale-125 transition-all' alt='' src={"/icons/link.svg"} height={0} width={0} />
                                            </Link>
                                            {
                                                val.custom_links &&
                                                <div className='mt-4'>
                                                    {
                                                        val.custom_links?.map(link => (
                                                            <Link key={link.link_name} href={link.link_url}>
                                                                <p className='text-xs md:text-sm text-blue-600 underline hover:text-green-600 transition-colors'>{link.link_name}</p>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                        {
                                            val.github_link
                                            &&
                                            <Link href={val.github_link}>
                                                <Image className='w-5 aspect-square hover:scale-125 transition-all' alt='' src={"/icons/github.svg"} height={0} width={0} />
                                            </Link>
                                        }
                                    </div>

                                </div>

                            </Link>
                        ))
                    }
                </div>
            </main>
        </Background>
    )
}