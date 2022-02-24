import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typical from 'react-typical';


export default function Header() {
  const animated = React.useState(true);
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';

  return (
    <div className="min-h-screen flex items-center justify-center" id="header" >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        {/*TODO: FIX blending with the background*/}
        <div className="w-full md:w-2/5 ">
          <StaticImage
            src="../images/liz_ngote.jpg"
            alt="profile"
            className={`w-full mx-auto opacity-50`}
            effect="blur"
            placeholder="blurred" 
          />
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <h2
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${ animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
              Hi <span class="text-3xl md:text-4xl lg:text-6xl">👋</span>
          </h2>
          <h1 className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            I am <span>{" "}</span>
            {/*TODO add hair stylist emoji */}
            <Typical
              steps={['Liz Ngote', 5000, 'a Weavologist ...', 5000]}               
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>

          <div to="mywork">
            <button className={`animate-bounce bg-indigo-600 px-10 py-3 text-lg uppercase text-white rounded-md mt-10 hover:bg-indigo-700 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
            >
              Checkout my work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
