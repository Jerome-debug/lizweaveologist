import React from "react";
import { StaticImage } from "gatsby-plugin-image";

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
                My passion for hair and beauty would surpass your imagination.
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
                I specialize in handling your beauty and cosmetic needs. I
                welcome you all to Rapunzel Hair Affair, Soin Arcade Building,
                Westlands, where I am based at.
              </p>
              {/*TODO provide whatsapp business link*/}
              <a
                href="https://web.whatsapp.com"
                className="mt-8 font-bold text-white"
              >
                <button className="animate-bounce rounded-md bg-green-500 px-4 py-2">
                  Let's Chat
                </button>
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
                    Award Winning & International
                  </h4>
                  <p className="text-md mt-2 font-light text-white">
                    I have more that 15yrs experience and my love for hair has
                    seen me attend bronner brothers hair expo in Atlanta and for
                    the International hair expo in Dubai
                  </p>
                  <p className="text-md mt-2 font-light text-white">
                    I have an outstanding clientele base here in Kenya,
                    comprising of celebrities, politicians as well as expats who
                    come to seek for my services.
                  </p>
                  <p className="text-md mt-2 font-light text-white">
                    I also love mentoring upcoming hair stylists to appreciate
                    this trade as well as embrace professionalism in order to
                    foster the prevalence of the respect that is given to the
                    hair industry.
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
