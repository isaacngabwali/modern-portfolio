import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
<Image
  src="/hero-man.png"
  alt="avatar"
  width={737}
  height={900}
  className="translate-z-0 rounded-lg"
/>

    </div>
  );
};

export default Avatar;
