import NavBar from '@/components/navBar'
import Background from '@/components/background'
import Head from 'next/head'

export default function Home() {
  return (
    <Background enable>
      <Head>
        <title>Home</title>
      </Head>

      <div className='fixed left-0 flex items-center'>
        <div className='w-auto py-1 px-2 bg-white opacity-70 hover:opacity-100 transition-opacity origin-bottom-left rotate-90 rounded-t-xl'>
          <p className='font-monomaniac text-xs lg:text-sm'>Among Us Theme</p>
        </div>
      </div>

      <main className='flex justify-center items-center h-screen w-full md:px-12 md:py-6 lg:py-10 lg:px-32 px-5 py-5 z-50'>
        <div className='text-white text-center grid gap-6 lg:gap-12'>
          <div className='flex justify-center text-xs md:text-lg lg:text-2xl w-full text-white'>
            <NavBar />
          </div>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl animate-pulse font-monomaniac delay-150'>STEVAN VINCENT</h1>
          <p className='text-sm md:text-lg lg:text-2xl font-lato lg:px-20'>Hello my name is <span className='text-white animate-waving-hand'>Stevan 👋</span>, Web Developer & App Developer since 2020, Experience on JavaScript, TypeScript, NodeJS, React, NextJS</p>
        </div>
      </main>

      <a href='https://drive.google.com/file/d/1CQwABYKvjRskby51Ubuc4quZ5nMC6CKj/view?usp=sharing' target='_blank' className='fixed cursor-pointer transition-all font-oswaid outline outline-3 text-white hover:text-green-600 px-7 py-2 rounded-lg opacity-70 right-1 bottom-1 uppercase text-xs md:text-base lg:text-lg'>See my resume Here</a>
    </Background>
  )
}
