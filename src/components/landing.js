import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typical from "react-typical";

import useStartAnimationHook from "../hooks/useStartAnimationHook";

export default function Landing() {
  const animated = useStartAnimationHook();
  const textStyleTranslate = "translate-y-10 opacity-0";
  const transitionAndTiming = (duration) =>
    `transition duration-${duration} ease-in-out`;

  return (
    <>
      <main>
        <div
          className="relative flex content-center items-center justify-center pt-16 pb-32"
          style={{
            minHeight: "75vh",
          }}
        >
          <div className="absolute top-0 h-full w-full bg-cover bg-center">
            <StaticImage
              src="../images/shari-sirotnak-oM5YoMhTf8E-unsplash.jpg"
              alt="Liz"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              id="overlay"
              className="absolute inset-0 h-full w-full bg-gray-900 bg-opacity-50"
            ></div>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                <div className="pr-12">
                  <h1
                    className={`transform text-left text-5xl font-semibold text-pink-600 ${
                      animated ? "translate-y-0" : textStyleTranslate
                    } ${transitionAndTiming(2000)}`}
                  >
                    Hi <span className="animate-bounce text-5xl">👋</span>{" "}
                    {/*TODO animation not working */}
                  </h1>
                  <h1
                    className={`mt-4 transform text-left text-2xl font-light text-pink-100 md:text-4xl ${
                      animated ? "translate-y-0" : textStyleTranslate
                    } ${transitionAndTiming(3000)}`}
                  >
                    I <span> </span>
                    {/*TODO add hair stylist emoji */}
                    <Typical
                      steps={[
                        "am Liz Ngote",
                        5000,
                        "am a Weavologist",
                        5000,
                        "am your Hair stylist 💇🏻‍♀️",
                        5000,
                      ]}
                      loop={Infinity}
                      className="inline-block"
                      wrapper="p"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-gray-300"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

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
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
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

        <section className="relative py-20">
          <div
            className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
                <StaticImage
                  alt="Liz Ngote"
                  className="max-w-full rounded-lg shadow-lg"
                  src="../images/liz_ngote.jpg"
                />
              </div>
              <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
                <div className="md:pr-12">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-300 p-3 text-center text-pink-600 shadow-lg">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block bg-gray-900 pb-20">
          <div
            className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current text-gray-900"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">My Work</h2>
                {/*TODO add grid images here*/}
                <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
