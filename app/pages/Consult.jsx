import React from 'react'
import Link from 'next/link'
const Consult = () => {
  return (
    <section className='sm:m-10 sm:mt-36 mt-36 m-5 flex sm:flex-nowrap flex-wrap items-center border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-9  0%'>
            <div className='sm:order-1 order-2 sm:m-10 sm:mb-0 mt-5 m-auto mb-0 sm:w-[400px] sm:h-[350px] w-[250px] h-[250px] overflow-hidden flex-shrink-0'>
                {/* <img src="/biru.png" alt="Bireswar Das" className='sm:w-[400px] w-[250px]'/>  */}
            </div>
            <div className='sm:order-2 order-1 sm:mx-10 m-5 mt-8'>
                <p className='text-2xl sm:mb-14 mb-5 sm:text-3xl md:text-4xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%'>Successful businesses create trust are understandable, easy to use and, most importantly, effective.</p>
                <div className='text-center'> <Link
              href="#"
              className=" text-base sm:text-lg m-auto md:text-xl bg-green-600 px-6 text-sm sm:text-lg py-3 rounded-full text-white hover:bg-green-700"
            >
              Free Initial Consultation
            </Link></div>
                
            </div>
    </section>
  )
}

export default Consult