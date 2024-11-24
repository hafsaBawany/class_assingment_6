import React from 'react';  

const NavBar = () => {
    return (

        <div className="mt-3">

            <div className=" flex items-center border-b border-[#676767] w-[1280px] h-[72px] top-[170px] left-[100px] px-[64px] bg-[#F7F7F7] gap-0">
                <div className="w-[1152px] h-[44px] gap-0 justify-between  flex">
                    <div className="flex items-center gap-[10.5px]">
                        <img
                            src="/DdsgnrLogo.svg"
                            alt="Logo"

                        />
                    </div>
                    <div className=" flex w-[910px] h-[44px] gap-[32px] bg-[#FFFFFF]">
                        <div className=" flex w-[687px] h-[44px] gap-[32px]">
                            <ul className="flex items-center gap-[10px] text-color-[#000000]">
                                <li className="px-[10px] w-[64px] ">Home</li>
                                <li className="px-[10px] w-[79px] ">Courses</li>
                                <li className="px-[10px] w-[81px] ">Services</li>
                                <li className="px-[10px] w-[113px] ">Achievements</li>
                                <li className="px-[10px] w-[86px] ">About Us</li>
                                <li className="px-[10px] w-[104px] ">Testimonial</li>
                            </ul>
                            <div className="flex w-[91px] h-[40px] gap-[16px]">
                                <button className="w-[80px] h-[40px] p-[8px] px-[20px] gap-[8px] rounded-md border border-black ">
                                    LogIn 
                                </button>

                                <button className="w-[80px] h-[40px] p-[8px] px-[20px] gap-[8px] rounded-md border border-black bg-[#000000] text-white flex justify-center">
                                    SignUp 
                                </button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>




    )
};
export default NavBar;