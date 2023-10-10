import { swiperContent } from "../../data/data";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

function Swiper() {
  return (
    <ReactSwiper
      className="mb-[50px] grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 5,
        },
      }}
    >
      {swiperContent.map((el) => (
        <SwiperSlide
          key={el.id}
          style={{ backgroundColor: el.backgroundColor }}
          className="flex h-[200px] items-center gap-[20px] rounded-xl px-[20px]"
        >
          <img src={el.image} alt="imag" className="w-[50px]" />
          <img src={el.avatar} alt="avatar" className="w-[100px]" />
        </SwiperSlide>
      ))}
    </ReactSwiper>
  );
}

export default Swiper;
