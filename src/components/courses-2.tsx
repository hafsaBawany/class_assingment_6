const index = () => {
    return (
        <div className="w-[1280px] h-[1742px] pt-[112px] pr-[64px] pb-[112px] pl-[64px]">
            <div className="w-[768px] h-[118px] flex flex-col gap-[16px] pl-[185px]">
                <h1 className="w-[768px] h-[67px] font-roboto text-[56px] font-bold leading-[67.2px] text-center">
                    Courses
                </h1>
                <p className="w-[768px] h-[27px] font-roboto text-[18px] font-normal leading-[27px] text-center">
                    Your Ultimate Guide to learning
                </p>
            </div>

            <div className="grid grid-cols-3 w-[1280px] h-[1340px] gap-[16px]">
                <img src="/Card-1.svg" alt="Image 1" className="w-[416px] h-[534px]" />
                <img src="/Card-2.svg" alt="Image 2" className="w-[416px] h-[534px]" />
                <img src="/Card-3.svg" alt="Image 3" className="w-[416px] h-[534px]" />
                <img src="/Card-4.svg" alt="Image 4" className="w-[416px] h-[534px]" />
                <img src="/Card-5.svg" alt="Image 5" className="w-[416px] h-[534px]" />
                <img src="/Card-6.svg" alt="Image 6" className="w-[416px] h-[534px]" />
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
