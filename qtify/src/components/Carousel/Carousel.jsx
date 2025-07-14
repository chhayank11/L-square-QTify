import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Mycard from "../Mycard/Mycard";

import { useState } from "react";
import styles from "./Carousel.module.css";

import CarouselBack from "./CarouselBack";
import CarouselNext from "./CarouselNext";

function Carousel({ data, type }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const [navButtonsState, setNavButtonsState] = useState({
    prev: "disabled",
    next: "",
  });
  return (
    <Swiper
      className={styles.carousel}
      spaceBetween={40}
      slidesPerView="auto"
      onSwiper={(swiper) => setSwiperInstance(swiper)}
      onSlideChange={() => console.log("slide change")}
      onReachEnd={() => {
        if (data.length) setNavButtonsState({ prev: "", next: "disabled" });
      }}
      onReachBeginning={() => {
        setNavButtonsState({ prev: "disabled", next: "" });
      }}
      onFromEdge={() => {
        setNavButtonsState({ prev: "", next: "" });
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            style={{
              width: "159px", // match card width
              maxWidth: "159px",
            }}
          >
            <Mycard card={item} type={type}></Mycard>
          </SwiperSlide>
        );
      })}

      {navButtonsState.prev !== "disabled" ? (
        <CarouselBack
          className={`${styles["carousel-button"]} ${styles["prev-button"]}`}
          handlePrev={handlePrev}
        />
      ) : (
        <></>
      )}
      {navButtonsState.next !== "disabled" ? (
        <CarouselNext
          className={`${styles["carousel-button"]} ${styles["next-button"]}`}
          handleNext={handleNext}
        />
      ) : (
        <></>
      )}
    </Swiper>
  );
}

export default Carousel;
