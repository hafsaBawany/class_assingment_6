const LogoBar = () => {
    return (
        <div className="flex flex-col md:flex-row w-full py-10 px-4 md:py-[80px] md:px-[64px] gap-6 bg-[#F7F7F7]">
            
            <div className="md:w-[320px] h-auto">
                <h1 className="font-roboto text-lg md:text-2xl font-bold leading-relaxed text-left">
                    Trusted by 2000+ companies worldwide.
                </h1>
            </div>

            
            <div className="flex w-full md:w-[880px] h-auto gap-4 overflow-x-auto items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <img
                    src="/Logo-1.svg"
                    alt="Logo 1"
                    className="h-8 md:h-[38.52px] w-auto"
                />
                <img
                    src="/Logo-2.svg"
                    alt="Logo 2"
                    className="h-8 md:h-[38.52px] w-auto"
                />
                <img
                    src="/Logo-3.svg"
                    alt="Logo 3"
                    className="h-8 md:h-[38.52px] w-auto"
                />
                <img
                    src="/Logo-4.svg"
                    alt="Logo 4"
                    className="h-8 md:h-[38.52px] w-auto"
                />
                <img
                    src="/Logo-5.svg"
                    alt="Logo 5"
                    className="h-8 md:h-[38.52px] w-auto"
                />
                <img
                    src="/Logo-6.svg"
                    alt="Logo 6"
                    className="h-8 md:h-[38.52px] w-auto"
                />
            </div>
        </div>
    );
};

export default LogoBar;



