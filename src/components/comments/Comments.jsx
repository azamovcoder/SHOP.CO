import "swiper/css";
import "./Comments.scss";

import { FaCircleCheck, FaStar } from "react-icons/fa6";
import { LiaStarHalf, LiaStarSolid } from "react-icons/lia";
import React, { Fragment, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { Comments } from "../../static";

const Customers = () => {
  return (
    <Fragment>
      <div className="container">
        <div>
          <h2 className="comments__title">OUR HAPPY CUSTOMERS</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Comments.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="comment__card">
                <span>
                  <LiaStarSolid color="gold" />
                  <LiaStarSolid color="gold" />
                  <LiaStarSolid color="gold" />
                  <LiaStarSolid color="gold" />
                </span>
                <div className="comment__card__head">
                  <h3 className="">{item.title}</h3>
                  <FaCircleCheck />
                </div>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default memo(Customers);
