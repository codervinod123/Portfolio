import React from 'react'
import { TbBrandVite } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className='h-[60px] w-[100%] bg-gradient-to-r from-indigo-300 to-violet-500  fixed z-50 shadow-md px-4 py-2 flex items-center justify-center'>
            <div className='flex w-[100%] max-w-[1080px] px-8 justify-between'>
                <div className='flex items-center gap-x-2'>
                    <TbBrandVite
                        size={"22px"}
                        className='text-pink-500'
                    />
                    <h1 className='text-slate-800 text-[22px] font-bold hover:text-pink-500 transition-all duration-700 cursor-pointer'>Vinod</h1>
                </div>

                <div className='flex items-center'>
                    
                    <ul className='hidden lg:flex md:flex justify-between gap-x-6 text-[17px] font-bold text-slate-800 pt-1'>
                        
                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Home</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>
                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>About</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>

                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Skills</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>

                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Education</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>

                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Work</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>
                       
                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Experiance</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>
                       
                        <div className="group">
                            <li className='cursor-pointer group-hover:text-pink-500 transition-all duration-500'>Contact</li>
                            <div className='h-[2px] bg-pink-500 mt-1 invisible group-hover:visible transition-all duration-700'></div>
                        </div>
                       
                    </ul>

                    <div className='lg:hidden md:hidden h-8 w-8 bg-gray-500 rounded-full flex items-center justify-center'>
                      <RxHamburgerMenu size={"22px"}/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
