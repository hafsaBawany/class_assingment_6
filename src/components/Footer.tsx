const footer = () => {
    return (
        <div className="w-full  mx-auto p-[40px] sm:p-[80px] flex flex-col gap-[40px] sm:gap-[80px] bg-[#F7F7F7]">
            <div className="flex flex-col sm:flex-row justify-between gap-[32px] sm:gap-0">
                <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                    <h1 className="font-roboto text-[18px] font-semibold leading-[27px]">Subscribe to our newsletter</h1>
                    <p className="font-roboto text-[16px] font-normal leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-col gap-[8px] w-full max-w-[400px]">
                    <div className="flex flex-col sm:flex-row gap-[8px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow h-[48px] border border-black rounded-md px-2"
                        />
                        <button className="w-full sm:w-[120px] h-[48px] rounded-md border border-black bg-white text-[16px] font-roboto">
                            Subscribe
                        </button>
                    </div>
                    <p className="font-roboto text-[12px] font-normal leading-[18px] text-left">
                        By subscribing you agree to our Privacy Policy
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-[32px] justify-between">
                <img
                    src="/DdsgnrLogo.svg"
                    alt="Logo"
                    className="w-[250px] sm:w-[px] h-[40px] mx-auto sm:mx-0"
                />
                <div className="flex flex-col gap-[16px]">
                    <h1 className="font-roboto text-[16px] font-semibold">Courses</h1>
                    <ul className="space-y-[8px]">
                        <li>Business</li>
                        <li>Development</li>
                        <li>Technology</li>
                        <li>Design</li>
                        <li>Programming</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="font-roboto text-[16px] font-semibold">Resources</h1>
                    <ul className="space-y-[8px]">
                        <li>Career</li>
                        <li>Resume</li>
                        <li>Learning</li>
                        <li>Interview preparation</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="font-roboto text-[16px] font-semibold">About Us</h1>
                    <ul className="space-y-[8px]">
                        <li>Contact</li>
                        <li>Help</li>
                        <li>FAQ</li>
                        <li>Terms and Conditions</li>
                        <li>Partners</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-black"></div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-[16px]">
                <ul className="flex flex-wrap gap-[16px] text-[14px] font-roboto text-center sm:text-left">
                    <li className="underline">2023 Ddsgnr. All rights reserved</li>
                    <li className="underline">Privacy Policy</li>
                    <li className="underline">Terms of Service</li>
                    <li className="underline">Cookies Setting</li>
                </ul>
                <div className="flex gap-[12px]">
                    <img src="/Facebook.svg" alt="Facebook" className="w-[24px] h-[24px]" />
                    <img src="/insta.svg" alt="Instagram" className="w-[24px] h-[24px]" />
                    <img src="/twitter.svg" alt="Twitter" className="w-[24px] h-[24px]" />
                    <img src="/linked.svg" alt="LinkedIn" className="w-[24px] h-[24px]" />
                </div>
            </div>
        </div>
    );
};
export default footer;
