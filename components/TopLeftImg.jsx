import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-20 pointer-events-none select-none">
      <Image
        src="/timenow.jpg"
        alt="left cover bg"
        width={100}
        height={100}
      />
    </div>
  );
};

export default TopLeftImg;
