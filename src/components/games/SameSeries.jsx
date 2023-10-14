import { SwiperSlide } from "swiper/react";
import SectionHead from "../SectionHead";
import GameItem from "./GameItem";
import Swiper from "../Swiper";

function SameSeries({ data }) {
  return (
    data?.length > 0 && (
      <div className="my-[30px] text-textColor">
        <SectionHead title="Same Series" />

        <Swiper>
          {data?.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <GameItem key={el.id} game={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
}

export default SameSeries;
