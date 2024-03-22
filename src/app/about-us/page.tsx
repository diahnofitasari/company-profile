"use client";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import Image from "next/image";
import office from "../../../public/images/office.jpg";
import value1 from "../../../public/images/value1.png";
import value2 from "../../../public/images/value2.png";
import value3 from "../../../public/images/value3.png";

export default function AboutUs() {
  return (
    <div>
      {/* Company Profile start */}
      <section className="pt-20">
        <div className="container">
          <div className="flex flex-col w-screen justify-center items-center">
            <div>
              <h1 className="font-bold text-2xl lg:text-4xl px-4">
                PT EAST WEST SEED INDONESIA
              </h1>
            </div>

            <div className="pt-20">
              <Image src={office} alt="..." className="pt-15"></Image>
            </div>

            <div className="px-10 lg:px-64">
              <p className="text-base text-justify pt-5 relative">
                PT EAST WEST SEED INDONESIA (EWINDO) is the first integrated
                vegetable seed company in Indonesia that keeps its commitment as
                Farmers Best Friend. EWINDO produces the best high-quality
                vegetable seeds through the development of a local, cutting-edge
                seed industry to increase farmers income. In developing seeds,
                EWINDO uses professionals who are experienced in the area of
                plant breeding and seed science. Vegetable seeds resulting from
                research and development are produced, processed, packed,and
                marketed for Indonesian farmers with the brand CAP PANAH MERAH.
              </p>
              <p className="text-base text-justify pt-5 relative">
                For more than three decades, EWINDO always provides healthy
                seeds with high genetic purity and good germination in order to
                achieve good results aligning with the consumers wants and to
                become the key to success for INDONESIAN FARMERS.
              </p>

              <p className="text-base text-justify pt-5 relative">
                Research and development of new superior varieties, seed
                production, seed processing, storage, packaging, customer order
                handling, and seed distribution are closely monitored in
                accordance with the requirements of the ISO 9001:2000 Quality
                Management System and LSSM-BTPH.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Company Profile end */}

      {/* Milestone start */}
      <section className="px-10 pt-10 lg:pt-16 lg:px-64">
        <h1 className="font-bold pb-5 text-3xl flex justify-center items-center">Milestone</h1>
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                1982
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                The company is privately owned, founded in 1982 by Simon Groot,
                a sixth generation seedsman from the Netherlands.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                June 6, 1990
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                PT. East West Seed Indonesia was built in Benteng Village,
                Campaka District - Purwakarta, West Java.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                April 1, 1991
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Building a branch of Farm Research And Development in Tugu Mukti
                Village, Cisarua District, Bandung Regency.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                June 11, 1991
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Officially inaugurated by the Minister of Agriculture of
                Indonesia (Ir. Wardoyo).
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                1995
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Releasing a tomato seed variety named 'Arthaloka' that is
                tolerant to Bacterial Wilt disease and Late Blight.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                1995
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Building a research and development center for midland crop
                plants in Wanayasa, Purwakarta.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                1996
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Building a plant disease laboratory and tissue culture facility
                at Purwakarta.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time className="font-bold text-base text-black">
                2003
              </Timeline.Time>
              <Timeline.Body className="text-base text-black">
                Building production offices, QA laboratories, and warehouses in
                Jember, East Java.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </section>
      {/* Milestone end */}

      {/* Visi dan Misi start*/}
      <section className="px-10 lg:pt-10 lg:px-64">
        <div className="container">
          <div className="flex flex-wrap justify-between">
            {/* Bagian Kiri */}
            <div className="w-full self-center lg:w-1/2 lg:pr-32">
              <h1 className="font-bold text-2xl pb-3">Our Vision</h1>
              <p>
                We believe in high quality vegetable seeds and excellent
                services for farmers prosperity.
              </p>
            </div>

            {/* Bagian Kanan */}
            <div className="w-full self-center pt-5 lg:w-1/2 lg:pl-32">
              <h1 className="font-bold text-2xl pb-3">Our Mission</h1>
              <ul className="list-disc px-3">
                <li>EWINDO provides high-quality vegetable seeds</li>
                <li>EWINDO helps farmers through excellent services</li>
                <li>EWINDO promotes vegetable consumption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Visi dan Misi end*/}

      {/* Company Values start*/}
      <section className="pt-16 px-10 lg:px-64">
        <div className="container">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-3xl pb-16">Company Values</h1>
          </div>

          <div className="flex flex-wrap">
            <div
              className="w-full flex flex-wrap justify-center"
              style={{ alignItems: "stretch" }}
            >
              {/* value 1 */}
              <div className="p-4 md:w-1/3">
                <div className="rounded-md shadow-md overflow-hidden">
                  <div className="grid justify-center items-center flex-grow">
                    <Image src={value1} alt="..."></Image>
                  </div>
                  <h3 className="px-10 text-xl font-semibold text-dark mt-5">
                    FARMERS BEST FRIEND
                  </h3>
                  <p className="px-10 pt-3 pb-10 font-medium text-base text-secondary">
                    Close to farmers to guide and encourage them to be
                    successful farmers, and solve all problems together by
                    visiting and serving them unconditionally.
                  </p>
                </div>
              </div>

              {/* value 2 */}
              <div className="p-4 md:w-1/3">
                <div className="rounded-md shadow-md overflow-hidden">
                  <div className="grid justify-center items-center flex-grow">
                    <Image src={value2} alt="..."></Image>
                  </div>
                  <h3 className="px-10 text-xl font-semibold text-dark mt-5">
                    HAPPY AND GRATEFUL EMPLOYEE
                  </h3>
                  <p className="px-10 pt-3 pb-10 font-medium text-base text-secondary">
                    Employees who are motivated, enthusiastic and passionate to
                    work. Every employee is an important part of the company,
                    thus everyone is always happy and grateful for accomplishing
                    their work in all circumstances. Always behave positively
                    and sincerely in serving farmers because farmers' happiness
                    is employee happiness.
                  </p>
                </div>
              </div>

              {/* value 3 */}
              <div className="p-4 md:w-1/3">
                <div className="rounded-md shadow-md overflow-hidden">
                  <div className="grid justify-center items-center flex-grow">
                    <Image src={value3} alt="..."></Image>
                  </div>
                  <h3 className="px-10 text-xl font-semibold text-dark mt-5">
                    STRIVE FOR EXCELLENCE
                  </h3>
                  <p className="px-10 pt-3 pb-10 font-medium text-base text-secondary">
                    Ability to deliver outstanding outcomes through innovation
                    and robust operational excellence by performing discipline,
                    hard work, creativity, and teamwork under professionalism
                    and integrity. Do self-improvement, never give up, and
                    always be optimistic about achieving the company's goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Values end*/}

      {/* Video Profile start*/}
      <section className="lg:px-64">
        <div
          className="flex justify-center items-center"
          style={{ padding: "64px", maxWidth: "100%" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/t52Qaf0Nm1k?si=mJZeNbWUtfGaNd5K"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Video Profile end*/}
    </div>
  );
}
