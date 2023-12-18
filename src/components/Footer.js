import React from "react";
import {
    FaFacebookSquare,
    FaTwitterSquare,

    FaInstagramSquare
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="w-full px-4 py-2 bg-black">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl fond-bold text-orange-700">TastyYummy</h1>
                    <p>This is the responsive website with the help of Html,css,javascript,react,tailwind</p>
                    <div className="flex justify-between md: w-[120] my-12 mx-12">
                        <FaFacebookSquare size={30} />
                        <FaTwitterSquare size={30} />
                        <FaInstagramSquare size={30} />
                    </div>

                </div>
                <div className="lg: col-span-2 flex justify-between mt-6">
                    <div >
                        <h1 className="font-medium text-blue-600"></h1>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">India</li>
                        </ul>
                    </div>
                    <div >
                        <h1 className="font-medium text-blue-600"></h1>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">India</li>
                        </ul>
                    </div>
                    <div >
                        <h1 className="font-medium text-blue-600"></h1>
                        <ul>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">USA</li>
                            <li className="py-2 text-sm">Canada</li>
                            <li className="py-2 text-sm">India</li>
                        </ul>
                    </div>


                </div>


            </div>

        </div>
    )
}
export default Footer;