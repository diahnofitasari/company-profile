"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
import { getTeams } from "@/lib/teams";
import { ITeams } from "@/type/type";
import bannerteams from "../../../public/images/bannerteams.jpg";

interface IMember {
  results: ITeams[];
}

export default async function Teams() {
  const teams: IMember = await getTeams();
  // console.log(teams.results[0].name)

  return (
    <div>
      {/* hero section start */}
      <section>
        <Image src={bannerteams} alt="..."></Image>
      </section>
      {/* hero section end */}

      {/* Tagline Our Teams start */}
      <section className="pt-5 px-10 lg:pt-12 lg:px-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="font-bold text-red-600 text-lg pt-5 pb-3 lg:text-2xl">
                Our Teams
              </h2>

              <h1 className=" pb-5 font-bold text-black text-2xl lg:text-4xl">
                Empowering Together: Uniting Talents, Achieving Excellence
              </h1>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <p className="text-sm lg:text-xl text-gray-500 lg:pt-12">
                Serving farmers is our business. We work for smallholder
                vegetable farmers in the topics by supplying high quality seeds
                that help them grow better crops and realize higher yield. We
                make better seeds available and share the farming skills that
                farmers need to earn more income.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tagline Our Teams end */}

      {/* teams start */}
      <div className="flex justify-center flex-wrap gap-10 pt-10 lg:px-20">
        {teams.results.map((person, index) => {
          return (
            <Card key={index} className="max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  alt="..."
                  height="96"
                  src={person.picture.large}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {person.name.first} {person.name.last}
                </h5>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <Link
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    Mail
                  </Link>
                  <Link
                    href={`tell:${person.phone}`}
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Phone
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {/* teams end */}
    </div>
  );
}
