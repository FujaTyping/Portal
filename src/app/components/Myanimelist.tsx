"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Jaini } from "next/font/google";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { MoonStar, ListCollapse } from "lucide-react";

const JN = Jaini({
  weight: ["400"],
  subsets: ["latin"],
});

interface Anime {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
  list_status: {
    status: string;
    score: number;
    num_episodes_watched: number;
    is_rewatching: boolean;
    updated_at: string;
    finish_date?: string;
    start_date?: string;
  };
}

function Myanimelist() {
  const [data, setData] = useState<Anime[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const options = {
    method: "GET",
    url: "/api/mal",
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setData(response.data.data);
        setFetchStatus(false);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-red-700 max-w-5xl w-full mt-7 text-white rounded-lg">
        <div className="p-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <MoonStar size={30} /> My anime list
          </h1>
          <h2>
            View more on{" "}
            <Link href={"https://myanimelist.net/animelist/FujaTyping"}>
              <b>myanimelist.net</b>
            </Link>
          </h2>
        </div>
        <div className="pb-8 mx-auto px-5">
          {fetchStatus == true ? (
            <>
              <div className="my-5 flex flex-col gap-3">
                <div className="loader mx-auto"></div>
                {errorMsg != "" && (
                  <>
                    <p className="text-center text-sm">{errorMsg}</p>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay]}
              >
                {data.map((anime, index) => (
                  <SwiperSlide key={index}>
                    <div className={`${JN.className} w-54`}>
                      <img
                        src={anime.node.main_picture.large}
                        alt={anime.node.title}
                        className="object-cover rounded-t-lg"
                      />
                      <div className="bg-red-700 p-4 rounded-b-lg">
                        <h1 className="text-lg">{anime.node.title}</h1>
                        <div className="flex flex-col md:flex-row md:place-content-between mt-2">
                          <h2 className="flex items-center gap-2">
                            <ListCollapse size={20} />
                            {anime.list_status.status
                              .replace(/_/g, " ")
                              .replace(/\b\w/g, (char) => char.toUpperCase())}
                          </h2>
                          <h2>My Score : {anime.list_status.score}</h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Myanimelist;
