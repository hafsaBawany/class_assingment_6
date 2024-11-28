const achieve = () => {
    return (
        <div className="w-full h-auto pt-[112px] pr-[64px] pb-[112px] pl-[64px] bg-white">
            <div className="w-full h-auto flex flex-col gap-[24px]">
                
                <div className="w-full h-auto flex flex-col gap-[16px]">
                    <h2 className="w-full text-[48px] font-bold leading-[57.6px] text-center text-black">
                        Our Achievements
                    </h2>
                    <p className="w-full text-[18px] font-normal leading-[27px] text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                </div>

                
                <div className="flex flex-col sm:flex-row gap-[24px] justify-center sm:justify-start">
                    <img
                        src="/List-1.svg"
                        alt="Achievements"
                        className="w-full sm:w-[600px] h-auto object-contain"
                    />
                    <img
                        src="/List-2.svg"
                        alt="Achievements"
                        className="w-full sm:w-[600px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default achieve;



