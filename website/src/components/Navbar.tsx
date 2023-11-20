import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-primary hidden lg:flex justify-between py-3 x-16'>
      <div className='max-w-7xl mx-auto w-full pb-1 flex items-center'>
        <a href='/' className="w-fit">
          <img src="/assets/logo_weiss.png" width={210} alt="VASSADE" />
        </a>
        <a href='#kontaktformular' className='bg-slate-300 ml-auto p-2 text-black'>
          Kontaktformular
        </a>
      </div>
    </nav>
  )
}

export default Navbar