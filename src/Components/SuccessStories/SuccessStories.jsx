import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const SuccessStories = () => {
    return (
      <div className="mt-10 space-y-8">
        <h1 className="text-center text-3xl font-extrabold">
          
          Success Stories
        </h1>
        <h3 className="font-semibold text-center ">
          Discover how individuals, businesses, and organizations in our
          community are making a real difference. <br/>
          Be inspired to join our mission to reduce food waste, alleviate
          hunger, and build a stronger community.
        </h3>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/n8pjvdj/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/K0bSnkG/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/0CTRK93/3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default SuccessStories;
