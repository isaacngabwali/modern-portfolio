import Image from "next/image";
import Link from "next/link";

const ProjectsBtn = () => {
  return (
    <div className="flex items-center mx-auto xl:mx-0 space-x-4">
      {/* Image Section */}
      <div className="w-[141px] h-[148px]">
        <Image
          src="/cover.jpg"
          alt="rounded text"
          width={141}
          height={148}
          className="pointer-events-none select-none"
        />
      </div>

      {/* Text and Link Section */}
      <div className="flex flex-col">
        <p className="text-sm font-medium mb-2">
          Get yourself a copy of "Your time is now don't wait" <br/>book now by Dr.Amanya Abdul
          Karim
        </p>
        <Link
          href="/work"
          className="relative w-[105px] h-[105px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
        >
          <span className="text-center text-sm font-medium">Buy Now<br/>15,000/=<br/>Ugx</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsBtn;
