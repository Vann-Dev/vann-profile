import NavBar from '@/components/navBar'
import Background from '@/components/background'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <Background enable>
      <Head>
        <title>Home</title>
      </Head>

      <Link href='/dashboard/portfolio' className='fixed left-0 flex items-center'>
        <div className='w-auto py-1 px-2 bg-white/70 origin-bottom-left rotate-90 rounded-t-xl'>
          <p className='font-monomaniac text-xs lg:text-sm'>Among Us Theme</p>
        </div>
      </Link>

      <main className='flex justify-center items-center h-screen w-full md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5 z-50'>
        <div className='text-white text-center grid gap-6 lg:gap-12'>
          <div className='flex justify-center text-xs md:text-lg lg:text-2xl w-full text-white'>
            <NavBar />
          </div>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl animate-pulse font-monomaniac delay-150'>STEVAN VINCENT</h1>
          <p className='text-sm md:text-lg lg:text-2xl font-lato'>Hello my name is <span className='text-white animate-waving-hand'>Stevan 👋</span>, fresh graduate from Animation school named SMK STRADA DAAN MOGOT</p>
        </div>
      </main>
    </Background>
  )
}
