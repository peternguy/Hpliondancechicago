import React, { useRef } from 'react'
import AnimatedTitle from '../components/AnimatedTitle'

const Sponsor = () => {
  return (
    <section id="sponsor" className='min-h-dvh w-screen bg-violet-400 text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>Welcome to</p>

            <div className='relative size-full'>
                <AnimatedTitle 
                    title = "SP<b>O</b>NSOR HOANG PHUC LION DANCE ASSOCIATI<b>O</b>N"
                    sectionId = "sponsor2"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10" />

                

            </div>

        </div>

    </section>
  )
}

export default Sponsor