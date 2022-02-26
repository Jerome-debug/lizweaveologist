import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

export default function Feature() {
  return (
    <>
      <section className="-mt-24 bg-gray-300 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Come and enjoy the experience
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                className="mt-8 font-bold text-gray-800"
              >
                Let's Chat
              </a>
            </div>

            <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white bg-pink-600 shadow-lg">
                <StaticImage
                  alt="Liz Ngote"
                  src="../images/liz_ngote.jpg"
                  className="w-full rounded-t-lg align-middle"
                />
                <blockquote className="relative mb-4 p-8">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="fill-current text-pink-600"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md mt-2 font-light text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
