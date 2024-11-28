const index = () => {
    return (
        <div className="w-full  h-auto pt-[112px] pr-[64px] pb-[112px] pl-[64px]">

            <div className="w-full h-auto flex flex-col gap-4 sm:gap-6 md:gap-[16px] pl-4 sm:pl-8 md:pl-16 lg:pl-[185px] mx-auto mb-[20px]">
                <h1 className="w-full text-[56px] sm:text-[48px] md:text-[56px] font-roboto font-bold leading-[67.2px] sm:leading-[56px] text-center">
                    Courses
                </h1>
                <p className="w-full text-[18px] sm:text-[16px] md:text-[18px] font-roboto font-normal leading-[27px] sm:leading-[24px] text-center">
                    Your Ultimate Guide to learning
                </p>
            </div>


            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[16px] mx-auto">
                <img src="/Card-1.svg" alt="Image 1" className="w-full sm:w-[416px] h-auto object-contain" />
                <img src="/Card-2.svg" alt="Image 2" className="w-full sm:w-[416px] h-auto object-contain" />
                <img src="/Card-3.svg" alt="Image 3" className="w-full sm:w-[416px] h-auto object-contain" />
                <img src="/Card-4.svg" alt="Image 4" className="w-full sm:w-[416px] h-auto object-contain" />
                <img src="/Card-5.svg" alt="Image 5" className="w-full sm:w-[416px] h-auto object-contain" />
                <img src="/Card-6.svg" alt="Image 6" className="w-full sm:w-[416px] h-auto object-contain" />
            </div>

           
            <div className="flex justify-center items-center mt-[20px]">
                <button className="inline-flex w-[152px] h-[40px] gap-[8px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] rounded-md border border-black bg-white text-[16px] font-roboto leading-[24px]">
                    View all Courses
                </button>
            </div>
        </div>
    );
};

export default index;
