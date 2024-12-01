import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/life.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/unittrust.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/suredeal.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/uap.jpg",
          link: "http://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/unittrust1.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/suredeal3.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/flp.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/somesa1.jpg",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
       <Swiper
       spaceBetween={10}
       pagination={{
         clickable: true,
       }}
       modules={[Pagination]}
       className="h-auto" // Dynamic height
     >
       {workSlides.slides.map((slide, i) => (
        <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-auto"
      >
        {workSlides.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 gap-4">
              {slide.images.map((image, imageI) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group h-full"
                  key={imageI}
                >
                  <div className="relative w-full h-0 pb-[100%]">
                    {/* Image */}
                    <Image
                      src={image.path}
                      alt={image.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
       
       ))}
     </Swiper>
     
      ))}
    </Swiper>
  );
};

export default WorkSlider;
