import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typical from "react-typical";

export default function Header() {
  const animated = React.useState(true);
  const transitionAndTiming = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const textStyleTranslate = "translate-y-10 opacity-0";

  return (
    <>
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
                      "am a WeaveExpert",
                      5000,
                      "am your Weaveologist 💇🏻‍♀️",
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
    </>
  );
}
