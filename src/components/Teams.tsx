const team = () => {
    return (
        <div className="w-[1280px] h-[895px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] flex flex-col gap-[80px] bg-[#F7F7F7] ">
            <div className="w-[768px] h-[109px] flex flex-col gap-[16px] pl-[184px]">
                <h2 className="w-[768px] h-[58px] font-roboto text-[48px] font-bold leading-[57.6px] text-center ">Our team</h2>
                <p className="w-[768px] h-[27px] font-roboto text-[18px] font-normal leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            
            <div className="grid grid-cols-3 gap-[96px] h-[482px] w-[1280px] ">
            <img src="/team-1.svg" alt="Image 1" className="w-[394.67px] h-[273px]"/>
            <img src="/team-2.svg" alt="Image 2" className="w-[394.67px] h-[273px]"/>
            <img src="/team-3.svg" alt="Image 3" className="w-[394.67px] h-[273px]"/>
            <img src="/team-4.svg" alt="Image 4" className="w-[394.67px] h-[273px]"/>
            <img src="/team-5.svg" alt="Image 5" className="w-[394.67px] h-[273px]"/>
            <img src="/team-6.svg" alt="Image 6" className="w-[394.67px] h-[273px]"/>
        </div>
            
        </div>
    )
};
export default team;