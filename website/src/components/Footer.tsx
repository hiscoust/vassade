import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary p-4 lg:px-16 lg:py-8 w-full'>
            <div className="max-w-7xl mx-auto w-full">
                <div className='flex justify-evenly md:justify-between'>
                    <a href='/' className='grid place-items-center'>
                        <img src="/assets/logo_weiss.png" className='w-[130px] lg:w-[200px]' alt="VASSADE" />
                    </a>
                    <div className='grid gap-3'>
                        <div className='flex space-x-3 items-center justify-evenly underline text-sm lg:text-lg text-gray-300'>
                            <a className="block" href="/impressum">
                                Impressum
                            </a>
                            <div className='h-3 w-[.3px] bg-white mt-1'></div>
                            <a className="block" href="/datenschutz">
                                Datenschutz
                            </a>
                        </div>
                        <div className='text-white hhidden mmd:block text-[10px] text-center hidden'>2023 VASSADE. Alle Rechte vorbehalten</div>
                    </div>
                </div>
                <div className='text-white pt-5 md:hidden text-[10px] text-center hidden'>2023 VASSADE. Alle Rechte vorbehalten</div>
            </div>
        </div>

    )
}

export default Footer