import { SwiperSlide } from "swiper/react";
import { homeSwiperContent } from "../../data/data";
import Swiper from "../Swiper";

function HomeSwiper() {
  return (
    <Swiper>
      {homeSwiperContent.map((el) => {
        return (
          <SwiperSlide
            key={el.id}
            style={{ backgroundColor: el.backgroundColor }}
            className="flex h-[200px] items-center gap-[20px] rounded-xl
            px-[20px]"
          >
            <img src={el.image} alt="imag" className="w-[50px]" />
            <img src={el.avatar} alt="avatar" className="w-[100px]" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HomeSwiper;
