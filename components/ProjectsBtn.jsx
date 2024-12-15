import { useState } from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";

const ProjectsBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Section */}
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
          <p className="text-sm font-medium mb-4">
            Get yourself a copy of <br />
            "Your time is now don't wait" <br />
            book now by Dr.Amanya Abdul Karim
          </p>
          <button
            type="button"
            onClick={handleButtonClick}
            className="btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Buy Now at 15,000/= Ugx
            </span>
            <BsCart
              className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
          >
            Close
          </button>

          {/* Transparent Iframe */}
          <iframe
            src="https://karimbook.netlify.app/"
            className="w-[100%] h-[100%] bg-transparent rounded-lg shadow-lg"
            frameBorder="0"
            allowTransparency="true"
            style={{
              backgroundColor: "transparent",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsBtn;
