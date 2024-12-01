import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
<Image
  src="/avtr.jpg"
  alt="avatar"
  width={737}
  height={678}
  className="translate-z-0 w-full h-full rounded-lg"
/>

    </div>
  );
};

export default Avatar;
