"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Smantha",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Lisa Cudrow",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      text: "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
    },
    {
      id: 3,
      name: "John Smith",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      text: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
    },
    {
      id: 3,
      name: "John Smith",
      image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      text: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 1500, // Show only one slide on small screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Breakpoint for desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <section className="dark:bg-black bg-white ">
        <div className="mx-auto md:text-center  md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-5xl font-bold md:mx-0 dark:text-white text-black">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0 mx-1 text-black dark:text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="md:mx-3 mx-0  block rounded-lg bg-white dark:text-black shadow-lg dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
                  <img
                    src={testimonial.image}
                    className="w-full"
                    alt={testimonial.name}
                  />
                </div>
                <div className="p-6 my-5 ">
                  <h4 className="mb-4 text-2xl font-semibold">
                    {testimonial.name}
                  </h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
