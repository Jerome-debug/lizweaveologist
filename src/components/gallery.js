import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Gallery({ imgData }) {
  // the following images will be loaded statically
  // - client-1.jpg client-2.jpg client-4.jpg
  // the following images, including the ones mentioned above are not required here
  // - icon.png, liz_ngote.jpg, hero_liz_ngote.jpg, shari-sirotnak-oM5YoMhTf8E-unsplash.jpg

  const unRequiredImages = [
    "icon.png",
    "liz_ngote.jpg",
    "hero_liz_ngote.jpg",
    "shari-sirotnak-oM5YoMhTf8E-unsplash.jpg",
    "client-1.jpg",
    "client-2.jpg",
    "client-3.jpg",
    "client-4.jpg",
  ];
  const dynamicImages = imgData.allImageSharp.edges.filter(
    ({ node }) => !unRequiredImages.includes(node.fluid.originalName)
  );

  return (
    <>
      <section className="relative block bg-slate-900 pb-20">
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
            <div className="w-full px-4 py-4 lg:w-6/12">
              <h2 className="text-4xl font-semibold text-white">My Work</h2>
            </div>
          </div>

          {/* TODO xs:grid-cols-2 affects md:grid-cols-4 */}
          {/* TODO add pulse animation */}
          <div className="mx-auto grid min-h-fit max-w-6xl place-items-center gap-y-4 px-4 py-4 sm:grid-cols-2 md:grid-cols-4">
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500 xs:col-span-2">
              Put the potentially record low maximum sea ice extent tihs year
              down to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </p>
            <StaticImage
              className="sm:square md:rectangle-1 h-5/6 w-5/6 rounded-md bg-red-500 object-contain md:col-start-4 xs:h-auto"
              layout="constrained"
              src="../images/client-1.jpg"
              alt="client-"
            />
            <StaticImage
              className="sm:square md:rectangle-1 h-5/6 w-5/6 rounded-md bg-red-500 object-contain md:col-start-3 xs:h-auto"
              layout="constrained"
              src="../images/client-2.jpg"
              alt="client-"
            />
            <StaticImage
              className="sm:square md:rectangle-1 h-5/6 w-5/6 rounded-md bg-red-500 object-contain xs:h-auto"
              layout="constrained"
              src="../images/client-3.jpg"
              alt="client-"
            />
            <StaticImage
              className="sm:square md:rectangle-1 h-5/6 w-5/6 rounded-md bg-red-500 object-contain md:col-start-2 xs:h-auto"
              layout="constrained"
              src="../images/client-4.jpg"
              alt="client-"
            />
            {dynamicImages &&
              dynamicImages.map(({ node }) => {
                const image = getImage(node);

                return (
                  <GatsbyImage
                    className="sm:square md:rectangle-1 h-5/6 w-5/6 rounded-md bg-red-500 object-contain xs:h-auto"
                    layout="constrained"
                    image={image}
                    alt={node.fluid?.originalName}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
