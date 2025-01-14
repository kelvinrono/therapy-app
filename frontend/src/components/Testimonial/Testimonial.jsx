import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Avatar from "../../assets/images/people/p4.jpg";
import Avatar2 from "../../assets/images/people/p3.jpg";
import Avatar3 from "../../assets/images/people/p1.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[20px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={Avatar} className="w-10 h-10 rounded" alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                  Muhibur James
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Farid is the best! She listens, offers helpful advise. Kind,
              caring and professional. I’m extremely pleased. 10/10 highly
              recommend!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={Avatar2} className="w-10 h-10 rounded" alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                  John Doe
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Brian is calm and approachable. I appreciate his feedback and
              responses to my questions
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={Avatar3} className="w-10 h-10 rounded" alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                  Catherine Homes
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Calm, thoughtful, kind, experienced, clear and patient. What more could you ask for? I'm enjoying my sessions and I'm glad I selected Jennifer to help me
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={Avatar} className="w-10 h-10 rounded" alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                  Muhibur James
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Farid is the best! She listens, offers helpful advise. Kind,
              caring and professional. I’m extremely pleased. 10/10 highly
              recommend!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={Avatar2} className="w-10 h-10 rounded" alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                  John Doe
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                  <HiStar className="text-proYellow w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Brian is calm and approachable. I appreciate his feedback and
              responses to my questions
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
