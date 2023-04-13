import ReactTyped from "react-typed";
import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaSnapchat,
} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="Footer max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-4 text-white" id="Footer">
            <div>
                <h1 className="text-[#00df9a] font-bold text-3xl w-full border-b border-white">REACT.</h1>
                <p className="text-gray-400 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum repellendus
                  magni quidem eveniet temporibus.</p>
            
                
             
                <div className="flex sm:justify-evenly min-w-[200px] my-6 gap-2">
                    <a className="hover:scale-110 duration-100 shadow-[#00df9a]" href=""><FaFacebookSquare size={30}/></a> 
                    <a className="hover:scale-110 duration-100 shadow-[#00df9a]" href=""><FaTwitterSquare size={30} /></a>
                    <a className="hover:scale-110 duration-100 shadow-[#00df9a]" href=""><FaInstagramSquare size={30} /></a>
                    <a className="hover:scale-110 duration-100 shadow-[#00df9a]" href=""><FaGithubSquare size={30} /></a>
                    <a className="hover:scale-110 duration-100 shadow-[#00df9a]" href=""><FaSnapchat size={30} /></a>

                </div>  
            </div>

            <div className="md:col-span-3 flex justify-between md:justify-evenly">
              <div className="">
                <ul className="">
                    <h6 className="font-medium text-gray-400">Solutions</h6>

                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Analysics</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Marketing</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Commerce</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Insights</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Design</a></li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                    <h6 className="font-medium text-gray-400">Support</h6>

                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Claim</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Pricing</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Dokumentation</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">API Status</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Embedded Systems</a></li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                    <h6 className="font-medium text-gray-400">Company</h6>

                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Engineering</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Jobs</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Press</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">Blog</a></li>
                    <li className="py-2 text-sm hover:scale-110 duration-100 hover:border-b-2 border-[#00df9a]" ><a href="">About</a></li>
                </ul>
              </div>
           
            </div> 
        </div>
    )
}
export default Footer