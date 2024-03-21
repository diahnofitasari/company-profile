"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import heroproduct from "../../../public/images/heroproduct.jpg";

export default function Product() {
  return (
    <div>
      {/* Hero Section*/}
      <section>
        <Image src={heroproduct} alt="..."></Image>
      </section>

      {/* Tagline Product */}
      <section className="pt-12 px-10 lg:px-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="font-bold text-red-600 text-lg pt-10 pb-3 lg:text-xl">
                Our Products
              </h2>

              <h1 className=" pb-5 font-bold text-black text-2xl lg:text-5xl">
                Our Various Best Products
              </h1>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <p className="text-sm lg:text-xl text-gray-500 lg:pt-12">
                We provide various high-quality vegetable seeds from integrated
                breeding using the latest technology for all the farmers all
                around Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Product */}
      <section className="pt-12 px-10 lg:px-20">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center">
            {/* Melon */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/melonproduct.jpeg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Melon (Eng)
                </h5>
                <Button>
                  5 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Carrot */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/carrotproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Carrot
                </h5>
                <Button>
                  1 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Marigold */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/marigoldproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                    Marigold (Eng)
                </h5>
                <Button>
                  2 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Amarant */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/amarantproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                   Amaranth
                </h5>
                <Button>
                  1 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Bittergourd */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/bittergroudproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                   Bittergroud
                </h5>
                <Button>
                  5 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Cabbage*/}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/cabbageproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                   Cabbage
                </h5>
                <Button>
                  2 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Cauliflower */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/cauliflowerproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Cauliflower
                </h5>
                <Button>
                  3 product
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Celery */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/celeryproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Celery
                </h5>
                <Button>
                    2 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Choisum */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/choisumproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Choisum
                </h5>
                <Button>
                    2 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Corn */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/cornproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Corn
                </h5>
                <Button>
                    7 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Cucumber */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/cucumberproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Cucumber
                </h5>
                <Button>
                    8 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Eggplant */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/eggplantproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Eggplant
                </h5>
                <Button>
                    6 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

             {/* Kangkong */}
             <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/kangkongproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Kankong
                </h5>
                <Button>
                    2 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

             {/* Lettuce */}
             <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/lettuceproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Kankong
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Hot Pepper */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/hotpepperproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Hot Pepper
                </h5>
                <Button>
                    11 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Pumpkin */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/pumpkinproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Pumpkin
                </h5>
                <Button>
                    4 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Ridgegourd */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/ridgegourdproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Ridgegourd
                </h5>
                <Button>
                    5 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Shallot */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/shallotproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Shallot
                </h5>
                <Button>
                    2 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Tomato */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/tomatoproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Tomato
                </h5>
                <Button>
                    9 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Watermelon */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/watermelonproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Watermelon
                </h5>
                <Button>
                    9 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Yardlong Bean */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/yardlongbeanproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Yardlong Bean
                </h5>
                <Button>
                    3 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* French Bean */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/frenchbeanproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  French Bean
                </h5>
                <Button>
                    3 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Kailan */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/kailanproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Kailan
                </h5>
                <Button>
                    0 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Pakcoy */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/pakcoyproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Pakcoy (Eng)
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Chinese Cabbage */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/chinesecabbageproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Chinese Cabbage
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Mungbean */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/mungbeanproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Mungbean
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Green Onion */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/greenonionproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Green Onion
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

            {/* Papaya */}
            <div className="p-4 md:w-1/2 lg:w-1/4">
              <Card className="max-w-sm" imgAlt="..." imgSrc="images/papayaproduct.jpg">
                <h5 className="text-xl font-bold tracking-tight text-green-600">
                  Papaya
                </h5>
                <Button>
                    1 product
                    <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                </Button>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
