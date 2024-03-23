"use client";
import { Carousel } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import carousel1 from "../../../public/images/carousel1.webp";
import carouselhor1 from "../../../public/images/caroselhor1.webp";
import carousel2 from "../../../public/images/carousel2.webp";
import carouselhor2 from "../../../public/images/carouselhor2.webp";
import carousel3 from "../../../public/images/carousel3.webp";
import carouselhor3 from "../../../public/images/carouselhor3.webp";
import purwakarta from "../../../public/images/Purwakarta.webp";
import lembang from "../../../public/images/Lembang.webp";
import wanayasa from "../../../public/images/Wanayasa.webp";
import watermelon from "../../../public/images/watermelon.webp";
import tomato from "../../../public/images/tomato.webp";
import pepper from "../../../public/images/pepper.webp";
import choisum from "../../../public/images/choisum.webp";
import cucumber from "../../../public/images/cucumber.webp";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Banner start */}
      <section id="hero-banner-slider" className="pt-15">
        <div id="hero-slider">
          {/* Carousel Image size for dekstop: 1600x580 px*/}
          <div className="w-400 h-auto lg:w-screen lg:h-[580px] ">
            <Carousel
              onSlideChange={(index) => console.log("onSlideChange()", index)}
            >
              <div className="flex h-full relative ">
                <Image priority src={carousel1} alt="..." className="hidden md:block w-[1600px] lg:h-[580px] object cover"/>
                <Image priority src={carouselhor1} alt="..." className=" block md:hidden object-cover sm:w-[400px] sm:h-auto object cover"/>
                <div className="border-0">
                  <h1 className="font-bold text-base h-fit lg:text-5xl text-white left-10 top-64 lg:left-20 my-0 lg:top-80 bottom-0 absolute" style={{ textShadow: '3px 3px 5px rgba(0,0,0,10)'}}>
                    We are always ready to support you
                  </h1>
                </div>
              </div>

              <div className="flex h-full relative">
                <Image priority src={carousel2} alt="..." className="hidden md:block w-[1600px] lg:h-[580px] object cover"/>
                <Image priority src={carouselhor2} alt="..." className=" block md:hidden object-cover sm:w-[400px] sm:h-auto object cover"/>
                <div className="border-0">
                <h1 className="font-bold text-base h-fit lg:text-5xl text-white left-10 top-64 lg:left-20 my-0 lg:top-80 bottom-0 absolute" style={{ textShadow: '3px 3px 5px rgba(0,0,0,10)'}}>
                    Reaching Out to All Indonesian Farmers
                  </h1>
                </div>
              </div>

              <div className="flex h-full relative">
                <Image priority src={carousel3} alt="..." className="hidden md:block w-[1600px] lg:h-[580px] object cover"/>
                <Image priority src={carouselhor3} alt="..." className=" block md:hidden object-cover sm:w-[400px] sm:h-auto object cover"/>
                <div className="border-0">
                  <h1 className="font-bold text-base h-fit lg:text-5xl text-black absolute right-10 top-64 lg:right-60 lg:top-80" style={{ textShadow: '3px 3px 5px rgba(255,255,255,10)' }}>
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
      <section id="about us" className="pt-16 lg:pt-20 px-10 lg:px-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="font-bold text-red-600 text-lg lg:pt-10 mb-5 lg:text-xl">
                {" "}
                ABOUT US
              </h2>
              <h1 className=" pb-10 font-bold text-black text-2xl lg:text-5xl">
                {" "}
                Farmers Best Friends
              </h1>
            </div>

            <div className="w-full px-4 mb-10 lg:w-1/2">
              <p className="text-base lg:text-xl text-gray-500 pb-9 lg:pb-20">
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
      <section className="pt-4 lg:pt-32">
        <div>
          <div className="w-full h-[230px] lg:px-20 lg:h-[480px]">
            <Carousel slide={false}>
              <div className="flex flex-col h-full items-center justify-center">
                <Image
                   priority
                  src={purwakarta}
                  alt="..."
                  className="w-[288px] h-[200px] lg:w-[1300px] lg:h-[450px] object-cover"
                />
                <p className="pt-3 text-sm font-bold lg:text-lg">
                  ------ Purwakarta Site (foto udara) ------
                </p>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <Image
                  priority
                  src={lembang}
                  alt="..."
                  className="w-[288px] h-[200px] lg:w-[1300px] lg:h-[450px] object-cover"
                />
                <p className="pt-3 text-sm font-bold lg:text-lg">
                  ------ Lembang Site ------
                </p>
              </div>

              <div className="flex flex-col h-full items-center justify-center">
                <Image
                  priority
                  src={wanayasa}
                  alt="..."
                  className="w-[288px] h-[200px] lg:w-[1300px] lg:h-[450px] object-cover"
                />
                <p className="pt-3 text-sm font-bold lg:text-lg">
                  ------ Wanayasa Site ------
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Site Carousel end*/}

      {/* Quotes start recomendation images width="1600" height="800"*/}
      <section className="pt-12 lg:pt-32">
        <h1
          className="flex justify-center items-center flex-wrap px-10 lg:px-40 text-center w-full h:auto font-bold text-base lg:text-2xl h-[300px]"
          style={{ backgroundImage: "url(/images/background-quotes.png)", textShadow: '3px 3px 5px rgba(255,255,255,10)' }}
        >
          For more than three decades, EWINDO always provides healthy seeds with
          high genetic purity and good germination in order to achieve good
          results aligning with the consumers wants and becoming the key to
          success for Indonesian Farmers.
        </h1>
      </section>
      {/* Quotes end*/}

      {/* Product start */}
      <section className="pb-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-base pt-10 lg:text-3xl font-bold lg:pt-20 text-red-600">
            THE BEST SEED PRODUCTS
          </p>
          <p className="text-3xl lg:text-6xl font-bold lg:pt-3">
            Our Best Products
          </p>
        </div>

        <div className="pt-5 h-[900px] lg:h-[720px]">
          <Carousel slide={false}>
            {/* Semangka */}
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-base px-5 pb-2 lg:text-xl lg:mt-20 lg:pb-5">
                      WATERMELON
                    </p>
                    <p className="font-bold text-3xl pb-2 px-5 lg:text-6xl lg:pb-5">
                      AMARA F1
                    </p>
                    <p className="font-bold text-base pb-2 px-5 lg:text-2xl lg:pb-5">
                      Watermelon Suggestion for Indonesian Farmers
                    </p>
                    <p className="text-base lg:text-xl text-gray-500 px-5 pb-10 lg:p-15 lg:pb-20">
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
                      href="/product"
                      className="text-base font-semibold mx-5 text-white bg-green-800 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  priority
                  src={watermelon}
                  alt="..."
                  className="w-[300px] h-auto lg:w-[550px]"
                />
              </div>
            </div>

            {/* Tomat */}
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-base px-5 pb-2 lg:text-xl lg:mt-20 lg:pb-5">
                      TOMATO
                    </p>
                    <p className="font-bold text-3xl px-5 pb-2 lg:text-6xl lg:pb-5">
                      SERVO F1
                    </p>
                    <p className="text-base pb-10 px-5 lg:text-xl text-gray-500 lg:pb-16">
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
                      href="/product"
                      className="text-base font-semibold text-white bg-green-800 mx-5 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  priority
                  src={tomato}
                  alt="..."
                  className="w-[300px] h-auto lg:w-[550px]"
                />
              </div>
            </div>

            {/* Bird Pepper */}
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-base px-5 pb-2 lg:text-xl lg:mt-20 lg:pb-5">
                      BIRD PEPPER
                    </p>
                    <p className="font-bold text-3xl px-5 pb-2 lg:text-6xl lg:pb-5">
                      PELITA F1
                    </p>
                    <p className="font-bold text-base px-5 pb-2 lg:text-2xl lg:pb-5">
                      Bird Pepper of Indonesian Farmer
                    </p>
                    <p className="text-base pb-10 px-5 lg:text-xl text-gray-500 lg:pb-16">
                      A semi-upright plant with dense and fast fruiting. It
                      belongs to the C. annuum fruit type, with shiny green
                      fruits that are moderately large. It is harvested while
                      still young, very spicy, resistant to diseases and
                      viruses, has a long harvesting period, and yields up to
                      1.5 times more than regular birds eye chili.
                    </p>

                    <Link
                      href="/product"
                      className="text-base font-semibold text-white bg-green-800 mx-5 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  priority
                  src={pepper}
                  alt="..."
                  className="w-[300px] h-auto lg:w-[550px]"
                />
              </div>
            </div>

            {/* Choisum */}
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-base px-5 pb-2 lg:text-xl lg:mt-20 lg:pb-5">
                      CHOISUM
                    </p>
                    <p className="font-bold text-3xl px-5 pb-2 lg:text-6xl lg:pb-5">
                      SHINTA F1
                    </p>
                    <p className="font-bold text-base px-5 pb-2 lg:text-2xl lg:pb-5">
                      Broad Leaf Indeed!
                    </p>
                    <p className="text-base px-5 pb-10 lg:text-xl text-gray-500 lg:pb-20">
                      SHINTA F1 is a large-stemmed choy sum green variety with
                      broad leaves. It is suitable for cultivation in low to
                      medium-altitude areas and has large stem diameters, as
                      well as high production yields. This vigorous plant does
                      not flower quickly. SHINTA F1 choysum green has a crispy
                      and non-fibrous texture. It can be harvested at 30 days
                      after transplanting (HST).
                    </p>

                    <Link
                      href="/product"
                      className="text-base font-semibold text-white bg-green-800 mx-5 mt-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  priority
                  src={choisum}
                  alt="..."
                  className="w-[300px] h-auto lg:w-[550px]"
                />
              </div>
            </div>

            {/* Cucumber */}
            <div className="container">
              <div className="flex flex-wrap justify-between">
                <div className=" w-full lg:w-1/2">
                  <div>
                    <p className="text-red-600 font-bold text-base px-5 pb-2 lg:text-xl lg:mt-20 lg:pb-3">
                      CUCUMBER
                    </p>
                    <p className="font-bold text-3xl px-5 pb-2 xl:text-6xl xl:pb-3">
                      ZATAVY F1
                    </p>
                    <p className="font-bold text-base px-5 pb-2 lg:text-2xl lg:pb-3">
                      Easy Maintenance
                    </p>
                    <div>
                      <p className="text-base px-5 pb-2 lg:text-xl  text-gray-500 lg:pb-7">
                        A large-sized hybrid cucumber that is easy to maintain.
                        The plant is resistant to geminivirus (ToLCNDV), highly
                        vigorous, and has easy climbing ability. The fruit has
                        dark green skin with a length of approximately 25 cm and
                        weighs around 270 g per fruit. It requires easy
                        maintenance, has a long shelf life, and offers high
                        production. Suitable for cultivation in low to
                        medium-altitude areas. Harvesting can begin 34 days
                        after transplanting (HST).
                      </p>
                      <p className="font-bold text-base lg:text-xl px-5">
                        Plant Tips:
                      </p>

                      <p className=" text-base pb-5 px-5 lg:text-xl lg:pb-7 text-gray-500">
                        To maximize fruit production, it is recommended to use
                        trellises or supports shaped like a pergola because the
                        plants growth is highly vigorous and produces many upper
                        fruits.
                      </p>
                    </div>

                    <Link
                      href="/product"
                      className="text-base font-semibold text-white bg-green-800 mx-5 py-3 px-8 hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
                <Image
                  priority
                  src={cucumber}
                  alt="..."
                  className="w-[300px] h-auto lg:w-[550px]"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      {/* Product end */}

      {/* Testimonial start*/}
      <section className=" pb-16 lg:px-20">
        <div className="container">
          <div className="flex justify-center items-center">
            <h1 className="font-bold lg:text-3xl lg:pb-5">Testimonials</h1>
          </div>

          <div className="flex flex-wrap gap-5 justify-center items-center">
           
              {/* Tertimoni 1 */}
              <Card className="max-w-sm">
                <iframe
                  className="w-full"
                  height="200"
                  src="https://www.youtube.com/embed/XoFhEqWCEdg?si=_ZfswghtZi7TWXE_"
                  title="Embedded YouTube Video"
                  loading= "lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="p-4">
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Berkah Saat Menjadi Petani Jagung Manis – Kisah Sukses NB SUPER F1 
                  </p>
                </div>
              </Card>

              {/* Testimoni 2 */}
              <Card className="max-w-sm">
                <iframe
                  className="w-full"
                  height="200"
                  src="https://www.youtube.com/embed/R_isYzLZWB4?si=aLmOPSrr_ZzHfpdz"
                  title="Embedded YouTube Video"
                  loading= "lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="p-4">
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Menjadi Berkah Untuk Warga Karena Sukses Tanam Cabai BAJA F1
                  </p>
                </div>
              </Card>
              {/* Testimoni 3 */}
              <Card className="max-w-sm">
                <iframe
                  className="w-full"
                  height="200"
                  src="https://www.youtube.com/embed/FbD89wBs8TM?si=bXNtHQNLby1FNIbr"
                  title="Embedded YouTube Video"
                  loading= "lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="p-4">
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  Kisah Sukses Petani Budidaya Bawang Merah Dari Biji (TSS) 
                  </p>
                </div>
              </Card>

          </div>
        </div>
      </section>
      {/* Testimonial end*/}
    </div>
  );
}
