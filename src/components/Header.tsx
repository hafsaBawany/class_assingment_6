const Design = () => {
  return (
    <div>
      <header className="hidden lg:block w-full h-[54px] px-[62px] bg-[#F7F7F7]">
        
        <div className="flex justify-between items-center w-full h-full">
          
          <div className="flex items-center gap-[16px]">
            <p className="font-roboto text-[14px] leading-[21px]">
              Phone Number: 956 742 455 678 | Email: info@ddsngr.com
            </p>
          </div>

          
          <div className="flex items-center gap-[12px]">
            <img
              src="/Facebook.svg"
              alt="Facebook"
              className="w-[18px] h-[18px]"
            />
            <img
              src="/insta.svg"
              alt="Instagram"
              className="w-[18px] h-[18px]"
            />
            <img
              src="/twitter.svg"
              alt="Twitter"
              className="w-[18px] h-[18px]"
            />
            <img
              src="/linked.svg"
              alt="LinkedIn"
              className="w-[18px] h-[18px]"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Design;
