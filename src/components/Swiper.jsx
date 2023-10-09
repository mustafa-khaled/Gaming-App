import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

function Swiper({ children }) {
  return (
    <ReactSwiper
      className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      spaceBetween={30}
      breakpoints={{
        350: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
        1100: {
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>

      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
      <SwiperSlide>some thing</SwiperSlide>
    </ReactSwiper>
  );
}

export default Swiper;
