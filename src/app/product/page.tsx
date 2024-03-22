"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import heroproduct from "../../../public/images/heroproduct.jpg";

export default function Product() {
  let vegetables = [
    {
      title: "Melon",
      total: 5,
      src: "images/melonproduct.jpeg",
    },
    {
      title: "Carrot",
      total: 1,
      src: "images/carrotproduct.jpg",
    },
    {
      title: "Marigold (Eng)",
      total: 2,
      src: "images/marigoldproduct.jpg",
    },
    {
      title: "Amaranth",
      total: 1,
      src: "images/amarantproduct.jpg",
    },
    {
      title: "Bittergroud",
      total: 5,
      src: "images/bittergroudproduct.jpg",
    },
    {
      title: "Cabbage",
      total: 2,
      src: "images/cabbageproduct.jpg",
    },
    {
      title: "Cauliflower",
      total: 2,
      src: "images/cauliflowerproduct.jpg",
    },
    {
      title: "Celery",
      total: 2,
      src: "images/celeryproduct.jpg",
    },
    {
      title: "Choisum",
      total: 2,
      src: "images/choisumproduct.jpg",
    },
    {
      title: "Corn",
      total: 7,
      src: "images/cornproduct.jpg",
    },
    {
      title: "Cucumber",
      total: 8,
      src: "images/cucumberproduct.jpg",
    },
    {
      title: "Eggplant",
      total: 6,
      src: "images/eggplantproduct.jpg",
    },
    {
      title: "Kangkong",
      total: 2,
      src: "images/kangkongproduct.jpg",
    },
    {
      title: "Lettuce",
      total: 1,
      src: "images/lettuceproduct.jpg",
    },
    {
      title: "Hot Pepper",
      total: 11,
      src: "images/hotpepperproduct.jpg",
    },
    {
      title: "Pumpkin",
      total: 4,
      src: "images/pumpkinproduct.jpg",
    },
    {
      title: "Ridgegourd",
      total: 5,
      src: "images/ridgegourdproduct.jpg",
    },
    {
      title: "Shallot",
      total: 2,
      src: "images/shallotproduct.jpg",
    },
    {
      title: "Tomato",
      total: 9,
      src: "images/tomatoproduct.jpg",
    },
    {
      title: "Watermelon",
      total: 9,
      src: "images/watermelonproduct.jpg",
    },
    {
      title: "Yardlong Bean",
      total: 3,
      src: "images/yardlongbeanproduct.jpg",
    },
    {
      title: "French Bean",
      total: 3,
      src: "images/frenchbeanproduct.jpg",
    },
    {
      title: "Kailan",
      total: 0,
      src: "images/kailanproduct.jpg",
    },
    {
      title: "Pakcoy (Eng)",
      total: 1,
      src: "images/pakcoyproduct.jpg",
    },
    {
      title: "Chinese Cabbage",
      total: 1,
      src: "images/chinesecabbageproduct.jpg",
    },
    {
      title: "Mungbean",
      total: 1,
      src: "images/mungbeanproduct.jpg",
    },
    {
      title: "Green Onion",
      total: 1,
      src: "images/greenonionproduct.jpg",
    },
    {
      title: "Papaya",
      total: 1,
      src: "images/papayaproduct.jpg",
    },
  ];

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
            {vegetables.map((item, index) => {
              return (
                <div className="p-4 md:w-1/2 lg:w-1/4">
                  <Card className="max-w-sm" imgAlt="..." imgSrc={item.src}>
                    <h5 className="text-xl font-bold tracking-tight text-green-600">
                      {item.title}
                    </h5>
                    <Button>
                      {item.total} product
                      <HiOutlineArrowRight className="ml-2 h-5 w-5 color:green-600" />
                    </Button>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
