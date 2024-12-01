import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Buy Now",
    position: "15,000/= Ugx",
    img:
      "/cover.jpg",
  },
  {
    image: "/t-avt-2.png",
    name: "Buy Now",
    position: "15,000/= Ugx",
    img:
      "/backcover.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col">
              <Link
                href="/work"
                className="relative w-[250px] h-[250px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
              >
                <span className="text-center text-sm font-medium">Buy Now<br/>15,000/=<br/>Ugx</span>
              </Link>
            </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
              <div style={{ width: "50%" }}>
                <Image
                  src={person.img}
                  layout="responsive"
                  width={100} // Aspect ratio base
                  height={200}
                  alt={person.name}
                />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
