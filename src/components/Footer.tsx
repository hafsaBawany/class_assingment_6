const footer = () => {
    return (
        <div className="w-[1280px] h-[684px] p-[80px] flex g-[80px]" >
            <div className="w-[1280px] h-[524px] flex flex-col gap-[80px]">
                <div className="justify-between w-[1120px] h-[82px] flex ">
                    <div className="w-[500px] h-[82px]">
                        <h1 className="font-roboto text-[18px] font-semibold leading-[27px] text-left w-[500px] h-[27px] ">
                            Subscribe to our newsletter
                        </h1>
                        <p className="font-roboto text-[16px] font-normal leading-[24px] text-left w-[500px] h-[24px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="w-[400px] h-[82px]">
                        <div className="w-[400px] h-[48px]">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-[265px] h-[48px] border border-black rounded-md mr-[8px]"
                            />
                            <button className="inline-flex w-[119px] h-[48px] gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] rounded-md border border-black bg-white text-[16px] font-roboto leading-[24px]">
                                subscribe
                            </button>
                            <p className="font-roboto text-[12px] font-normal leading-[18px] text-left w-[400px] h-[18px] mt-[4px]">By subscribing you agree to with our Privacy Policy</p>

                        </div>
                    </div>
                </div>
                <div className="w-[1120px] h-[225px] flex gap-[40px] ">

                    <img
                        src="/DdsgnrLogo.svg"
                        alt="Logo"
                        className="w-[250px] h-[40px]"

                    />
                    <div className="w-[250px] h-[225px] flex flex-col gap-[16px] ">
                        <h1 className="w-[250px] h-[24px] font-roboto text-[16px] font-semibold leading-[24px] text-left">Courses</h1>
                        <div className="w-[250px] h-[185px]">
                            <ol>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Business</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Development</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Technology</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Design</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Programming</li>
                            </ol>
                        </div>
                    </div>
                    <div className="w-[250px] h-[225px] flex flex-col gap-[16px] ">
                        <h1 className="w-[250px] h-[24px] font-roboto text-[16px] font-semibold leading-[24px] text-left">Resources</h1>
                        <div className="w-[250px] h-[185px]">
                            <ol>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Career</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Resume</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Learning</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Interview preparation</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Jobs</li>
                            </ol>
                        </div>
                    </div>
                    <div className="w-[250px] h-[225px] flex flex-col gap-[16px]  ">
                        <h1 className="w-[250px] h-[24px] font-roboto text-[16px] font-semibold leading-[24px] text-left">About Us</h1>
                        <div className="w-[250px] h-[185px]">
                            <ol>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Contact</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Help</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">FAQ</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">terns abd condition</li>
                                <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Partners</li>
                            </ol>
                        </div>
                    </div>

                </div>
                <div className="border-t border-black"></div>
                <div className="w-[1120px] h-[24px] justify-between flex ">

                    <ul className="w-[564px] h-[21px] flex gap-[24px]">
                        <li className="w-[195px] h-[21px] font-roboto text-[14px] font-normal leading-[21px] text-left underline">2023 Ddsgnr. rights reserved</li>
                        <li className="w-[87px] h-[21px] font-roboto text-[14px] font-normal leading-[21px] text-left underline">Privacy policy</li>
                        <li className="w-[105px] h-[21px] font-roboto text-[14px] font-normal leading-[21px]  underline">Terms Of Services</li>
                        <li className="w-[105px] h-[21px] font-roboto text-[14px] font-normal leading-[21px]  underline">Cookies setting</li>
                    </ul>

                    <div className="w-[132px] h-[24px] flex gap-[12px]">
                        <img
                            src="/Facebook.svg"
                            alt="Facebook"
                            className="w-[24px] h-[24px]"
                        />
                        <img
                            src="/insta.svg"
                            alt="Instagram"
                            className="w-[24px] h-[24px]"
                        />
                        <img
                            src="/twitter.svg"
                            alt="Twitter"
                            className="w-[24px] h-[24px]"
                        />
                        <img
                            src="/linked.svg"
                            alt="LinkedIn"
                            className="w-[24px] h-[24px]"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
};
export default footer;