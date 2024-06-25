import React from 'react'

const Frame5 = () => {
    return (
        <main className='w-[360px] sm:w-full frame3-bg py-4 pl-4'>
            <div className='w-10/12 flex flex-col gap-16'>
                <div className='flex flex-col gap-16'>
                    <p className='font-semibold italic text-[16px] md:text-[36px]'>Your <span className='text-hobby-blue'>Hobby</span>, Your <span className='text-hobby-purple'>Community</span>...</p>
                    <button className='text-[12px] w-[104px] h-[28px] md:w-[147px] md:h-[46px] text-white bg-hobby-purple rounded-[8px]'>
                        Get Started
                    </button>
                </div>
                <div className='flex lg:flex-row justify-center items-center'>
                    <img src="/people3.png" alt="" className='hidden sm:inline-block sm:w-[350px] sm:h-[170px] lg:w-[531px] lg:h-[280px]'/>
                    <img src="/people4.png" alt="" className='hidden sm:inline-block sm:w-[350px] sm:h-[170px] lg:w-[638px] lg:h-[302px]'/>
                    <img src="/people5.png" alt="" className='sm:hidden w-[312px] h-[76px]'/>
                </div>
            </div>
        </main>
    )
}

export default Frame5