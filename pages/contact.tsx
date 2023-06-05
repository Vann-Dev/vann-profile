import NavBar from '@/components/navBar'
import Link from 'next/link'
import Head from 'next/head'
import Background from '@/components/background';

export default function Portfolio() {

    return (
        <div className='bg-black min-h-screen min-w-screen'>
            <Head>
                <title>Contact</title>
            </Head>
            <Background enable>
                <main className='md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5'>
                    {/* Navbar */}
                    <div className='flex justify-between items-center text-xs md:text-lg lg:text-2xl w-full text-white'>
                        <Link href='/' className='outline outline-3 rounded-lg p-2 font-oswaid px-5 hover:text-green-600'>EXIT</Link>
                        <NavBar />
                    </div>
                    {/* Header */}
                    <div>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-oswaid mt-12'>CONTACT</h1>
                        <p className='text-white/80 font-lato mt-2 text-xs md:text-base lg:text-xl'>here is my contact information, feel free to reach me 👋</p>
                        <div className='bg-white h-[0.5px] my-6 w-full'></div>
                    </div>
                    {/* Content */}
                    <div className='text-white font-oswaid grid gap-3 md:text-xl'>
                        <a className='hover:text-green-700' href='https://wa.me/6285280423005'>Whatsapp: +6285280423005</a>
                        <a className='hover:text-green-700' href='https://github.com/Vann-Dev'>Github: Vann-Dev</a>
                        <a className='hover:text-green-700' href='https://www.linkedin.com/in/stevan-vincent-b7b853246/'>Linkedin: Stevan Vincent</a>
                        <a className='hover:text-green-700' href='https://discord.com/users/435497505883422721'>Discord: Vann#0001</a>
                        <a>Email: stevanvincent05@gmail.com</a>
                    </div>
                </main>
            </Background>
        </div>
    )
}