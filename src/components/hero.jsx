import React from "react";
//typing Methode
import Typed from 'react-typed';

const Hero = () => {
    return(
        <div className="hero text-white">
            <div className="wrapper max-w-[800px] mt-[-150px] sm:mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center ">
                <p className="text-[#00df9a] text-xl sm:text-3xl md:text-4xl font-bold p-2">Growing with dada analytics</p> 
                <h1 className="sm:text-6xl md:text-7xl text-4xl font-bold md:py-3 tracking-wider">Grow with Data.</h1>

                <div className="flex justify-center items-center">
                    <p className="sm:text-2xl md:text-3xl text-xl py-1">Fast, flexible, financing for </p>
                    <Typed className="sm:text-2xl md:text-3xl text-xl font-bold pl-2 text-yellow-200" strings={[' BTB', ' BTC', ' SASS']} typeSpeed={120}  backSpeed={100} loop/>
                </div>
                <p className="sm:text-[20px] md:text-[25px] text-[16px] font-bold text-gray-500 m-2">Monitor your data analytics to increase revenue for BTB, BTB & SASS plattforms.</p>
                <button className="bg-[#00df9a] md:w-[200px] w-[160px] rounded-lg p-2 text-center font-medium mx-auto my-1 sm:my-6 text-black hover:bg-emerald-500">Get Started</button>

            </div>
        
        </div>



    )


}
export default Hero