const team = () => {
    return (
        <div className="w-full  mx-auto pt-[112px] px-[16px] flex flex-col gap-[80px] bg-[#F7F7F7]">
            <div className="w-full max-w-[768px] mx-auto flex flex-col gap-[16px] text-center">
                <h2 className="text-[36px] sm:text-[48px] font-roboto font-bold leading-[1.2]">Our team</h2>
                <p className="text-[16px] sm:text-[18px] font-roboto font-normal leading-[1.5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] sm:gap-[48px]">
                <img src="/team-1.svg" alt="Image 1" className="w-full max-w-[394.67px] h-auto mx-auto" />
                <img src="/team-2.svg" alt="Image 2" className="w-full max-w-[394.67px] h-auto mx-auto" />
                <img src="/team-3.svg" alt="Image 3" className="w-full max-w-[394.67px] h-auto mx-auto" />
                <img src="/team-4.svg" alt="Image 4" className="w-full max-w-[394.67px] h-auto mx-auto" />
                <img src="/team-5.svg" alt="Image 5" className="w-full max-w-[394.67px] h-auto mx-auto" />
                <img src="/team-6.svg" alt="Image 6" className="w-full max-w-[394.67px] h-auto mx-auto" />
            </div>
        </div>
    );
};
export default team;
