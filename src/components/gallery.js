import React from "react";

export default function Gallery() {
  return (
    <>
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

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-10">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full px-4 lg:w-6/12">
              <h2 className="text-4xl font-semibold text-white">My Work</h2>
            </div>
          </div>

          {/* TODO xs:grid-cols-2 affects md:grid-cols-4 */}
          {/* TODO add pulse animation */}
          <div className="grid min-h-fit max-w-6xl place-items-center gap-y-4 px-4 py-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500 xs:col-span-2">
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and
              Atmospheric Administration, Ted, Scambos.
            </p>
            {/*TODO add grid images here*/}
            <div className="h-16 w-5/6 bg-red-500 xs:h-auto xs:square md:col-start-4"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square md:col-start-2"></div>
            <div className="h-10 w-5/6 bg-pink-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-pink-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-pink-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-pink-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-blue-500 xs:h-auto xs:square"></div>
            <div className="h-10 w-5/6 bg-pink-500 xs:h-auto xs:square"></div>
          </div>
        </div>
      </section>
    </>
  );
}
