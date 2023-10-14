import React from "react";
import { Swiper as ReactSwiper } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

function Swiper({ children }) {
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
      {children}
    </ReactSwiper>
  );
}

export default Swiper;
