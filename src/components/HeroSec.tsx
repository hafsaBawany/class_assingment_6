const Hero = () => {
    return (
        <div className="w-[1280px] h-[800px]  flex justify-between items-center ">

            <div className="flex w-[640] h-[300] pt-0 pr-[60px] pb-0 pl-[80px] gap-[24px] ">
                <div className="w-[580px] h-[239px]" >
                    <h1 className="w-[540px] h-[134px] heading-style text-[56px] font-bold leading-[67.2px] text-left">Learn new skills online with ease</h1>
                    <p className="w-[530px] h-[81px] medium-text-style text-[18px] font-normal leading-[27px] text-left p-[6px] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                    <div className="w-[204px] h-[64px] flex gap-[16px] pt-[16px] ">
                        <button className="inline-flex items-center justify-center w-[96px] py-[8px] px-[16px] gap-[8px] rounded-md border border-black bg-black text-white text-[12px] font-normal leading-[16px] text-left">
                            Start Learning
                        </button>
                        <button className="inline-flex items-center justify-center w-[96px] py-[8px] px-[16px] gap-[8px] rounded-md border border-black bg-white  text-[12px] font-normal leading-[16px] text-left">
                            Explore Courses
                        </button>




                    </div>
                </div>

            </div>




            <div>
                <img
                    src="/Girlimage.svg"
                    alt="image"
                    className="w-[640px] h-[800px]"
                />
            </div>

        </div>
    )
};
export default Hero;