import { Container } from "postcss";

const Design = () => {
    return (
        <div>
  <header className="w-[1280px] h-[54px] pr-[64px] pl-[62px] bg-[#F7F7F7]">
    {/* Main container for header */}
    <div className="flex justify-between items-center w-full h-full">
      {/* Left Section*/}
      <div className="flex items-center gap-[16px]">
        <p className="font-roboto text-[14px] leading-[21px]">
          Phone Number: 956 742 455 678 | Email: info@ddsngr.com
        </p>
      </div>

      {/* Right */}
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


    )
};
export default Design;