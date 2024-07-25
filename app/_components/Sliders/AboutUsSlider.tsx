"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./aboutSliderCss.css";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";

export default function AboutUsSlider() {
  return (
    <section className="bg-[#090A10] pb-4">
      <div className="about-header ">
        <h2 className="pt-6 px-24 text-3xl">About Us</h2>
      </div>

      <div className="px-24 mt-14">
        <Swiper
        //   slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper about-swiper"
        >
          <SwiperSlide className="">
            <div className="p-4 grid grid-cols-2">
              <div className="avatar-name-details flex flex-1 flex-col gap-3 justify-between h-full">
                <div className="image-starts flex flex-wrap items-center gap-3">
                  <div className="w-[60px] h-[60px] ">
                    <div className="img-div w-[60px] h-[60px]">
                      <Image
                        src={`https://bit.ly/ryan-florence`}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  * * * * * *
                </div>

                <h2 className="text-xl">Youssef</h2>

                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, aperiam.
                </h2>
              </div>

              <div className="right-shape flex justify-center items-center">
                <div className="img-div w-[60px] h-[60px]">
                  <Image
                    src={`https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp`}
                    alt="image"
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="p-4 grid grid-cols-2">
              <div className="avatar-name-details flex flex-1 flex-col gap-3 justify-between h-full">
                <div className="image-starts flex flex-wrap items-center gap-3">
                  <div className="w-[60px] h-[60px] ">
                    <div className="img-div w-[60px] h-[60px]">
                      <Image
                        src={`https://bit.ly/ryan-florence`}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  * * * * * *
                </div>

                <h2 className="text-xl">Youssef</h2>

                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, aperiam.
                </h2>
              </div>

              <div className="right-shape flex justify-center items-center">
                <div className="img-div w-[60px] h-[60px]">
                  <Image
                    src={`https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp`}
                    alt="image"
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="p-4 grid grid-cols-2">
              <div className="avatar-name-details flex flex-1 flex-col gap-3 justify-between h-full">
                <div className="image-starts flex flex-wrap items-center gap-3">
                  <div className="w-[60px] h-[60px] ">
                    <div className="img-div w-[60px] h-[60px]">
                      <Image
                        src={`https://bit.ly/ryan-florence`}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  * * * * * *
                </div>

                <h2 className="text-xl">Youssef</h2>

                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, aperiam.
                </h2>
              </div>

              <div className="right-shape flex justify-center items-center">
                <div className="img-div w-[60px] h-[60px]">
                  <Image
                    src={`https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp`}
                    alt="image"
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="p-4 grid grid-cols-2">
              <div className="avatar-name-details flex flex-1 flex-col gap-3 justify-between h-full">
                <div className="image-starts flex flex-wrap items-center gap-3">
                  <div className="w-[60px] h-[60px] ">
                    <div className="img-div w-[60px] h-[60px]">
                      <Image
                        src={`https://bit.ly/ryan-florence`}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  * * * * * *
                </div>

                <h2 className="text-xl">Youssef</h2>

                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, aperiam.
                </h2>
              </div>

              <div className="right-shape flex justify-center items-center">
                <div className="img-div w-[60px] h-[60px]">
                  <Image
                    src={`https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp`}
                    alt="image"
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="p-4 grid grid-cols-2">
              <div className="avatar-name-details flex flex-1 flex-col gap-3 justify-between h-full">
                <div className="image-starts flex flex-wrap items-center gap-3">
                  <div className="w-[60px] h-[60px] ">
                    <div className="img-div w-[60px] h-[60px]">
                      <Image
                        src={`https://bit.ly/ryan-florence`}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  * * * * * *
                </div>

                <h2 className="text-xl">Youssef</h2>

                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, aperiam.
                </h2>
              </div>

              <div className="right-shape flex justify-center items-center">
                <div className="img-div w-[60px] h-[60px]">
                  <Image
                    src={`https://www.sender.net/wp-content/uploads/2023/04/b0147-testimonial-advertising-small.webp`}
                    alt="image"
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
