"use client";
import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import carousel1 from "../../../public/images/carousel1.jpg";
import carousel2 from "../../../public/images/carousel2.jpg";
import carousel3 from "../../../public/images/carousel3.jpg";
import purwakarta from "../../../public/images/Purwakarta.jpg";
import lembang from "../../../public/images/Lembang.jpg";
import wanayasa from "../../../public/images/Wanayasa.jpg";
import watermelon from "../../../public/images/watermelon.jpg";
import tomato from "../../../public/images/tomato.png";
import pepper from "../../../public/images/pepper.png";
import choisum from "../../../public/images/choisum.png";
import cucumber from "../../../public/images/cucumber.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Banner start */}
      <section id="hero-banner-slider" className="pt-15">
        <div id="hero-slider">
          {/* Carousel Image size for dekstop: 1600x580 px*/}
          {/* xl:w-[1600px] 2xl:h-[580px] 2xl:w-[1600px] */}
          <div className="h-56 sm:h-64 xl:h-[580px] ">
            <Carousel
              onSlideChange={(index) => console.log("onSlideChange()", index)}
            >
              <div className="flex h-full relative ">
                <Image src={carousel1} alt="..." className="w-full"></Image>
                <div className="border-0">
                  <h1 className="font-bold text-lg h-fit lg:text-5xl text-white left-10 top-24 lg:left-20 my-0 lg:top-80 bottom-0 absolute">
                    We are always ready to support you
                  </h1>
                </div>
              </div>

              <div className="flex h-full relative">
                <Image src={carousel2} alt="..." className="w-full"></Image>
                <div className="border-0">
                  <h1 className="font-bold text-lg h-fit lg:text-5xl text-white left-10 top-24 lg:left-20 my-0 lg:top-80 bottom-0 absolute">
                    Reaching Out to All Indonesian Farmers
                  </h1>
                </div>
              </div>

              <div className="flex h-full relative">
                <Image src={carousel3} alt="..." className="w-full"/>
                <div className="border-0">
                  <h1 className="font-bold text-lg h-fit lg:text-5xl text-black absolute right-10 top-24 lg:right-20 lg:top-80">
                    7 SOUND Co-Working Space
                  </h1>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Banner end */}

      {/* About Us start */}
      <section id="about us" className="pt-20 px-10 lg:px-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="font-bold text-red-600 text-lg pt-10 mb-5 lg:text-xl">
                {" "}
                ABOUT US
              </h2>
              <h1 className=" pb-10 font-bold text-black text-2xl lg:text-5xl">
                {" "}
                Farmers Best Friends
              </h1>
            </div>

            <div className="w-full px-4 mb-10 lg:w-1/2">
              <p className="text-sm lg:text-xl text-gray-500 pb-9 lg:pb-20">
                PT EAST WEST SEED INDONESIA (EWINDO) is the first integrated
                vegetable seed company in Indonesia which keeping its commitment
                as Farmers Best Friend. EWINDO produces the best of high quality
                vegetable seeds through the development of local, cutting-edge
                seed industry to increase farmers income.
              </p>

              <Link
                href="/about-us"
                className="text-base font-semibold text-white bg-green-800 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
              >
                Clik for more details
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Us start */}

      {/* Site Carousel start*/}
      <section className="pt-32">
        <div>
          <div className="h-56  w-screen sm:h-64 xl:px-20 xl:h-[480px] 2xl:h-[480px]">
            <Carousel slide={false}>
              <div className="flex flex-col h-full items-center justify-center">
                <Image
                  src={purwakarta}
                  alt="..."
                  className="w-full xl:h-[450px]"
                />
                <p className="pt-3 text-sm lg:text-base">
                  ------ Purwakarta Site (foto udara) ------
                </p>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <Image
                  src={lembang}
                  alt="..."
                  className="w-full xl:h-[450px]"
                ></Image>
                <p className="pt-3 text-sm lg:text-base">
                  ------ Lembang Site ------
                </p>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <Image
                  src={wanayasa}
                  alt="..."
                  className="w-full xl:h-[450px]"
                ></Image>
                <p className="pt-3 text-sm lg:text-base">
                  ------ Wanayasa Site ------
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Site Carousel end*/}

      {/* Quotes start recomendation images width="1600" height="800"*/}
      <section className="pt-32">
        <div
          className="flex justify-center items-center flex-wrap px-10 lg:px-40 text-center w-full h:auto text-sm lg:text-2xl h-[300px]"
          style={{ backgroundImage: "url(/images/background-quotes.png)" }}
        >
          For more than three decades, EWINDO always provides healthy seeds with
          high genetic purity and good germination in order to achieve good
          results aligning with the consumers wants and becoming the key to
          success for Indonesian Farmers.
        </div>
      </section>
      {/* Quotes end*/}

      {/* Product start */}
      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="text-base font-bold pt-8 text-red-600">
            THE BEST SEED PRODUCTS
          </p>
          <p className="text-4xl font-bold">Our Best Products</p>
        </div>

        <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-[600px]">
          <Carousel slide={false}>
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-xl mt-20 pb-5">
                      WATERMELON
                    </p>
                    <p className="font-bold text-6xl pb-5">AMARA F1</p>
                    <p className="font-bold text-2xl pb-5">
                      Watermelon Suggestion for Indonesian Farmers
                    </p>
                    <p className="text-sm lg:text-xl text-gray-500 p:15 pb-5 lg:pb-20">
                      Hybrid watermelon belongs to the seedless type with a
                      rounded (oval-ish) shape. The variety is suitable in
                      lowland areas, with vigorous, easy-to-fruit produce. The
                      outer skin color is dark green with stripes. The variety
                      can weigh 7-8 kg/fruit, the fruit flesh has red-colored
                      with a sweet taste and crispy texture. The harvest period
                      starts 58 - 65 days after transplanting with 33-38 tons/
                      hectare for the potential of the various production.
                    </p>

                    <Link
                      href="#"
                      className="text-base font-semibold text-white bg-green-800 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  src={watermelon}
                  alt="..."
                  className="h-auto w-[550px]"
                />
              </div>
            </div>

            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-xl mt-20 pb-5">
                      TOMATO
                    </p>
                    <p className="font-bold text-6xl pb-5">SERVO F1</p>
                    <p className="text-sm lg:text-xl text-gray-500 p:15 pb-5 lg:pb-20">
                      SERVO F1 Tomato, an ideal choice for cultivation in low to
                      medium altitude areas. This high-yielding variety is
                      characterized by its firm and round fruits, with an
                      average yield of approximately 31-53 fruits per plant. The
                      plant exhibits remarkable vigor, displaying resistance to
                      Geminivirus and bacterial wilt, while thriving in hot
                      climates and adapting well to lowland regions ranging from
                      145 to 300 meters above sea level. The fruits are round in
                      shape, featuring a green calyx and weighing approximately
                      80 grams each. They possess excellent hardness and
                      tolerance to blossom end rot (BER). The recommended
                      harvesting period starts around 65-70 days after
                      transplanting (HST), offering the potential for yields of
                      60-70 grams per fruit and 50-60 tons per hectare.
                    </p>

                    <Link
                      href="#"
                      className="text-base font-semibold text-white bg-green-800 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  src={tomato}
                  alt="..."
                  className="h-auto w-[550px]"
                ></Image>
              </div>
            </div>

            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-xl mt-20 pb-5">
                      BIRD PEPPER
                    </p>
                    <p className="font-bold text-6xl pb-5">PELITA F1</p>
                    <p className="font-bold text-2xl pb-5">
                      Bird Pepper of Indonesian Farmer
                    </p>
                    <p className="text-sm lg:text-xl text-gray-500 p:15 pb-5 lg:pb-20">
                      A semi-upright plant with dense and fast fruiting. It
                      belongs to the C. annuum fruit type, with shiny green
                      fruits that are moderately large. It is harvested while
                      still young, very spicy, resistant to diseases and
                      viruses, has a long harvesting period, and yields up to
                      1.5 times more than regular birds eye chili.
                    </p>

                    <Link
                      href="#"
                      className="text-base font-semibold text-white bg-green-800 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  src={pepper}
                  alt="..."
                  className="h-auto w-[550px]"
                ></Image>
              </div>
            </div>

            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-xl mt-20 pb-5">
                      CHOISUM
                    </p>
                    <p className="font-bold text-6xl pb-5">SHINTA F1</p>
                    <p className="font-bold text-2xl pb-5">
                      Broad Leaf Indeed!
                    </p>
                    <p className="text-sm lg:text-xl text-gray-500 p:15 pb-5 lg:pb-20">
                      SHINTA F1 is a large-stemmed choy sum green variety with
                      broad leaves. It is suitable for cultivation in low to
                      medium-altitude areas and has large stem diameters, as
                      well as high production yields. This vigorous plant does
                      not flower quickly. SHINTA F1 choysum green has a crispy
                      and non-fibrous texture. It can be harvested at 30 days
                      after transplanting (HST).
                    </p>

                    <Link
                      href="#"
                      className="text-base font-semibold text-white bg-green-800 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  src={choisum}
                  alt="..."
                  className="h-auto w-[550px]"
                ></Image>
              </div>
            </div>

            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-xl mt-20 pb-3">
                      CUCUMBER
                    </p>
                    <p className="font-bold text-6xl pb-3">ZATAVY F1</p>
                    <p className="font-bold text-2xl pb-3">Easy Maintenance</p>
                    <div>
                    <p className="text-sm lg:text-xl text-gray-500 p:15 lg:pb-7">
                      A large-sized hybrid cucumber that is easy to maintain.
                      The plant is resistant to geminivirus (ToLCNDV), highly
                      vigorous, and has easy climbing ability. The fruit has
                      dark green skin with a length of approximately 25 cm and
                      weighs around 270 g per fruit. It requires easy
                      maintenance, has a long shelf life, and offers high
                      production. Suitable for cultivation in low to
                      medium-altitude areas. Harvesting can begin 34 days after
                      transplanting (HST).
                    </p>
                    <p className="font-bold">Plant Tips:</p>

                      <p className="pb-7">
                        To maximize fruit production, it is recommended to use
                        trellises or supports shaped like a pergola because the
                        plants growth is highly vigorous and produces many
                        upper fruits.
                      </p>
                    </div>
                    
                    
                    <Link
                      href="#"
                      className="text-base font-semibold text-white bg-green-800 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  src={cucumber}
                  alt="..."
                  className="h-auto w-[550px]"
                ></Image>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      {/* Product end */}
    </div>
  );
}
