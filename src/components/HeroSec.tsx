const Hero = () => {
    return (
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 mt:0">
        
        <div className="flex flex-col justify-center w-full gap-6 px-4 pt-4 md:px-[80px] md:gap-8 md:w-[640px]">
          
          <div className="w-[380px] h-[96px] md:w-[540px] md:h-[134px]">
            <h1 className="text-[40px] font-[700] leading-[48px] text-left md:text-[56px] md:leading-[67.2px] font-roboto">
              Learn new skills online with ease
            </h1>
          </div>
  
          
          <div className="w-[380px] h-[54px] md:w-[530px] md:h-[81px]">
            <p className="text-[18px] font-normal leading-[27px] text-left">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
          </div>
  
          <div className="w-[358px] h-[64px] flex md:flex-row gap-4 pt-4">
            <button className="w-[178px] h-[48px] px-[24px] py-[12px] rounded-[5px] border border-black bg-black text-white text-sm font-normal hover:bg-white hover:text-black transition">
              Start Learning
            </button>
            <button className="w-[178px] h-[48px] px-[24px] py-[12px] rounded-[5px] border border-black bg-white text-sm font-normal hover:bg-black hover:text-white transition">
              Explore Courses
            </button>
          </div>
        </div>
  
        
        <div className=" md:w-[640px] md:h-[900px] w-[428px] h-[780px] mt-8 md:mt-0 flex justify-center ">
          <img
            src="/Girlimage.svg"
            alt="Girl learning"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  
  
  
  

