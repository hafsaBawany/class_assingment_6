"use client";

import React, { useState } from "react";
import Script from "next/script";

const NavBar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="mt-3">
            
            <Script
                type="module"
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
                strategy="afterInteractive"
            />
            <Script
                noModule
                src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
                strategy="afterInteractive"
            />

            
            <div className="flex items-center justify-between border-b border-[#676767] px-4 md:px-16 py-4 bg-[#F7F7F7] relative">
                
                <div className="flex items-center pr-[15px]">
                    <img src="/DdsgnrLogo.svg" alt="Logo" className="w-[120px]" />
                </div>

                
                <div
                    className="text-2xl cursor-pointer md:hidden z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <ion-icon name={menuOpen ? "close-outline" : "menu-outline"}></ion-icon>
                </div>

                
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white z-40 overflow-y-auto transition-transform duration-300 md:static md:flex md:items-center md:justify-between md:gap-10 ${
                        menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row items-center md:gap-6 text-[#000000] text-lg p-4 md:p-0">
                        <li className="px-[10px] hover:underline duration-300">Home</li>
                        <li className="px-[10px] hover:underline duration-300">Courses</li>
                        <li className="px-[10px] hover:underline duration-300">Services</li>
                        <li className="px-[10px] hover:underline duration-300">Achievements</li>
                        <li className="px-[10px] hover:underline duration-300">About Us</li>
                        <li className="px-[10px] hover:underline duration-300">Testimonial</li>
                    </ul>

                    <div className="flex flex-col md:flex-row gap-4 items-center p-4 md:p-0">
                        <button className="w-[80px] py-2 px-4 border border-black hover:bg-black hover:text-white rounded-md transition-all duration-300">
                            LogIn
                        </button>
                        <button className="w-[80px] py-2 px-4 border border-black bg-black text-white hover:bg-white hover:text-black rounded-md transition-all duration-300">
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;


