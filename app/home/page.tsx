"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from 'next/link';
import Image from 'next/image';
import One from '../pictures/one.jpg';
import Two from '../pictures/two.jpg';
import Three from '../pictures/six.jpg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      
      <div className="w-full overflow-hidden bg-white py-2 mb-8 shadow-lg">
        <div className="text-lg font-semibold text-blue-600 animate-marquee whitespace-nowrap">
          مرحبًا بك في Vexa - !شارك في التصويت الإلكتروني الآن
        </div>
      </div>

      <div className="w-full max-w-4xl mb-8 mt-2">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-lg shadow-xl"
        >
          <SwiperSlide>
            <Image width={250} height={300} src={One} alt="Voting 1" className="w-1/2 mx-auto h-64 rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={250} height={300} src={Two} alt="Voting 2" className="w-1/2 mx-auto h-64 rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={250} height={300} src={Three} alt="Voting 3" className="w-1/2 mx-auto h-64 rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Vexa مرحباً بك في </h1>
        <p className="text-lg text-gray-600 mb-6">!اختر مرشحك المفضل وشارك في التصويت الآن</p>

        <div className="flex justify-center gap-4">
          <Link href="/create_vote" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            إنشاء التصويت
          </Link>
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            التصويت الآن
          </button>
        </div>
      </div>
    </div>
  );
}
