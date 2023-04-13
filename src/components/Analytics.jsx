import React from "react";
import Typed from 'react-typed';
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return(
        <div className="bg-white w-full py-5 px-4 ">
            <div className="content max-w-[1240px] mx-auto grid md:grid-cols-2 ">
                <img className="w-[450px] sm:w-[600px] md:w-[800px] mx-auto py-3" src={Laptop} alt="Img" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold py-2  text-1xl md:text-2xl">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="font-bold py-2 text-2xl  md:text-[30px]">Manage Data Analytics Centrally</h1>
                    <p className="md:tracking-wider text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus 
                        facere alias voluptatem blanditiis rerum praesentium aliquam error quisquam quis 
                        dolore veniam quibusdam doloremque itaque sit, officia eum quo illum doloribus autem 
                        similique nam. Provident omnis excepturi eligendi soluta sunt perferendis. Perspiciatis,
                        magni unde? Quaerat quo consequuntur a recusandae? Nesciunt odio illum quidem, quam quisquam
                        in atque distinctio. Minima, impedit! Sit in labore explicabo, corrupti, esse nemo provident vel.
                    </p>
                    <button className="bg-black md:w-[200px] w-[160px] rounded-lg p-2 text-center font-medium  sm:mx-0 my-4 sm:my-6 text-[#00df9a] hover:bg-emerald-100">Details</button>
                </div>


            </div>
        </div>

    )


} 

export default Analytics