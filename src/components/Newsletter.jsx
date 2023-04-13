import React from "react";


const Newsletter = () => {

    return(
        <div className="news w-full py-10 text-white px-4 " id="News">

            <div className="content max-w-[1240px] mx-auto grid sm:grid-cols-2 ">
                <div className="flex flex-col justify-center  ">
                    <h1 className="text-3xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p className="sm:py-2 text-gray-400">Sign up to our newsletter and stay up to date.</p>

                </div>
                <div className="flex justify-between w-full my-4 py-5 flex-col">
                    <input type="text" placeholder="Enter your Email" className=" p-2  my-2 rounded-md h-[35px]  w-[250px] sm:w-[300px] md:w-[400px] text-black"  />
                    <button className="bg-[#00df9a] md:w-[200px] w-[160px] rounded-lg p-2 text-center sm:mx-0 font-medium my-1
                    sm:my-6 text-black hover:bg-emerald-500">Submit</button>
                    <p className="">We care about the protection of your data. Read our <a href="#" className="text-[#00df9a] underline hover:text-emerald-500">Privacy Policy</a></p>
                </div>
                
            </div>


        </div>

    )
}
export default Newsletter