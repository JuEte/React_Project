import React from "react";
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Trible from '../assets/triple.png'


const Cards = () => {
    return(
        <div className="bg-white w-full  py-[10rem] px-4" id="Cards">
            <div className="max-w-[1240px]  grid md:grid-cols-3 mx-[100px] md:mx-auto gap-8">
           
                <div className="card1  w-full flex flex-col my-4 text-center border-2 rounded-lg shadow-2xl p-4 hover:scale-105 hover:border-[#00df9a] duration-300">
                     <img className="w-20 mx-auto mt-[3rem] bg-transperent" src={Single} alt="" />
                     <h2 className="text-2xl font-bold py-8">Single User</h2>
                     <p className="text-4xl font-bold">149€</p>
                    <div className="prices font-medium">  
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2</p>
                    </div>
                    <div className="mx-6">
                    <button className="bg-[#00df9a]  rounded-lg p-2 w-full
                        text-center font-medium mx-auto my-5  hover:bg-emerald-500">Start Trial</button>
                    </div>
                </div>
                <div className="card2 w-full bg-gray-100 flex flex-col my-4 text-center border-2 rounded-lg shadow-2xl p-4 hover:scale-105 hover:border-[#00df9a] duration-300">
                     <img className="w-20 mx-auto mt-[3rem] bg-transperent" src={Double} alt="" />
                     <h2 className="text-2xl font-bold py-8">Single User</h2>
                     <p className="text-4xl font-bold">149€</p>
                    <div className="prices font-medium">  
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2</p>
                    </div>
                    <div className="mx-6">
                    <button className="bg-black  rounded-lg p-2 w-full text-[#00df9a]
                        text-center font-medium mx-auto my-5  hover:bg-emerald-100">Start Trial</button>
                    </div>
                </div>
                <div className="card3  w-full flex flex-col my-4 text-center border-2 rounded-lg shadow-2xl p-4 hover:scale-105 hover:border-[#00df9a] duration-300">
                     <img className="w-20 mx-auto mt-[3rem] bg-transperent" src={Trible} alt="" />
                     <h2 className="text-2xl font-bold py-8">Single User</h2>
                     <p className="text-4xl font-bold">149€</p>
                    <div className="prices font-medium">  
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2</p>
                    </div>
                    <div className="mx-6">
                    <button className="bg-[#00df9a]  rounded-lg p-2 w-full
                        text-center font-medium mx-auto my-5  hover:bg-emerald-500">Start Trial</button>
                    </div>
                </div>    
            </div>
        </div>

    )
}
export default Cards