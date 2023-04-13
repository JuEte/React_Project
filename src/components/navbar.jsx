import React from "react";
//import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";
import { Squeeze as Hamburger } from 'hamburger-react'

//{!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />  onClick={handlNav}}

const Navbar = () => {
    const [nav, setNav] = useState(true) 
   
    


    return(

        <div className="nav text-white flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24">
            <h1 className="w-full text-3xl pl-[50px] font-bold text-[#00df9a] p-4">REACT.</h1>
            <ul className=" hidden md:flex">
                <li className='p-4 hover:text-[#00df9a] '><a href="#">Home</a></li>
                <li className='p-4 hover:text-[#00df9a]'><a href="#">Company</a></li>
                <li className='p-4 hover:text-[#00df9a]'><a href="#">Resources</a></li>
                <li className='p-4 hover:text-[#00df9a]'><a href="#News">About</a></li>
                <li className='p-4 hover:text-[#00df9a]'><a href="#">Contact</a></li>
            </ul>
            <div  className="burger w-[50px] h-[50px] flex flex-col justify-between md:hidden">
            <Hamburger onToggle={toggled => {
            if (toggled) {
               setNav(!nav)
               
            } else {
                setNav(!nav)
            }
            }} color="white" easing="ease-in-out" rounded duration="0.5" distance="md" />
           </div>

            <div className={!nav ? 'mobile fixed left-0 top-0 w-[60%] h-full border-r bg-black ease-in-out duration-500 delay-35' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">REACT.</h1>
                <ul className="pt-10 uppercase ">
                    <li className='p-4 border-b border-gray-400 border-t hover:text-[#00df9a]'><a href="#">Home</a></li>
                    <li className='p-4 border-b border-gray-400 hover:text-[#00df9a]'><a href="#">Company</a></li>
                    <li className='p-4 border-b border-gray-400 hover:text-[#00df9a]'><a href="#">Resources</a></li>
                    <li className='p-4 border-b border-gray-400 hover:text-[#00df9a]'><a href="#">About</a></li>
                    <li className='p-4 border-b border-gray-400 hover:text-[#00df9a]'><a href="#">Contact</a></li>
                </ul>
            </div>




        </div>
        


    )



}
export default Navbar