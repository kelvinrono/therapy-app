import React from "react";
import hero1 from "../assets/images/therapy/therapist2.jpg";
import hero2 from "../assets/images/therapy/therapist4.jpg";
import hero3 from "../assets/images/therapy/therapist3.jpg";
import icon1 from "../assets/images/icon02.png";
import icon2 from "../assets/images/icon01.png";
import icon3 from "../assets/images/icon03.png";
import featureImg from "../assets/images/cover/t3.jpg";
import avatarIcon from "../assets/images/people/p2.png";
import faqImg from "../assets/images/people/p5.jpg";
import { FcVideoCall } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* hero section  */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col justify-between lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-textColor font-[700] md:text-[60px] md:leading-[70px]">
                  We help clients get their normal,happy life
                </h1>
                <p className="text__para">
                  WaziCare's digital mental health approach increases access to
                  crucial care across the African continent. Our Therapy
                  Marketplace connects people to professional therapists, and
                  our whitelabel technology powers healthcare groups and
                  nonprofit programs to scale care
                </p>
                <button className="btn">Book an appointment</button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-proYellow block rounded-full mt-[-14px]">
                    {" "}
                  </span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-lightGreen block rounded-full mt-[-14px]">
                    {" "}
                  </span>
                  <p className="text__para">Centers locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text[44px] lg:leading-[54px] font-[700] text-textColor">
                    98%
                  </h2>
                  <span className="w-[100px] h-2  bg-green block rounded-full mt-[-14px]">
                    {" "}
                  </span>
                  <p className="text__para">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] sm:flex-1">
              <div className="w-[350px]">
                <img className="w-full rounded-full" src={hero1} alt="" />
              </div>
              <div className="w-[160px]">
                <img
                  src={hero2}
                  alt=""
                  className="w-full rounded-full mb-[20px]"
                />
                <img src={hero3} alt="" className="w-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end  */}

      {/* how it works section  */}
      <section>
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            We offer the best, professional services
          </h2>
          <p className="text__para text-center">
            World class care for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5 hover:border hover:border-solid">
            <div className="flex items-center justify-center">
              <img src={icon1} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Our therapists are all certified and personally vetted by our
                team. You can feel safe and comfortable talking to our
                non-judgmental, caring professionals who are here to help
              </p>
              <Link
                to="/therapist"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5 hover:border hover:border-solid">
            <div className="flex items-center justify-center">
              <img src={icon2} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                Find a therapist
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Our therapists are all certified and personally vetted by our
                team. You can feel safe and comfortable talking to our
                non-judgmental, caring professionals who are here to help
              </p>
              <Link
                to="/therapist"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5 hover:border hover:border-solid">
            <div className="flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                Book a session
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Our therapists are all certified and personally vetted by our
                team. You can feel safe and comfortable talking to our
                non-judgmental, caring professionals who are here to help
              </p>
              <Link
                to="/therapist"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* how it works section end */}

      {/* about section  */}
      <About />
      {/* about section ends  */}

      {/* services  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Services We Offer</h2>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* services end */}

      {/* Feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual session <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician/therapist here and contact their
                  office.
                </li>
                <li className="text__para">
                  3. View our physicians/therapist who are accepting new
                  patients, use the online scheduling tool to select an
                  appointment time.
                </li>
              </ul>

              <Link to="/">
                <button className="btn">Laern More</button>
              </Link>
            </div>

            {/* Feature image */}
            <div className="relative z-10 xl:w-[770px] flex justify-end sm:justify-center mt-[50px] lg:mt-0">
              <img src={featureImg} className="rounded w-[450px] " alt="" />

              <div className="md:w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-1 lg:pb-2 lg:pt-2 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-around">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-primary font-[600]">
                      Tue, 15
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      9:00AM{" "}
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-proYellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    {/* <span className="w-9 h-9 flex items-center justify-center"> */}
                    {/* <img src={videoIcon} alt="" /> */}
                    <FcVideoCall size={25} style={{ color: "brown" }} />
                    {/* </span> */}
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlue font-[500] mt-2 lg:mt-4 rounded-full">
                  Consoltation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img className="w-10 h-10 rounded-full" src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-textColor">Collins Maine</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature section end */}

      {/* Doctor's section */}

      <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great Therapists and Physicians</h2>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* Doctor's section end */}

      {/* faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block"><img src={faqImg} alt="" /></div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">The commonly asked questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq section ends */}

    {/* Tesimonials */}
    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients say</h2>
          </div>

          <Testimonial />
      </div>
    </section>
    {/* Tesimonials end */}

    </>
  );
};

export default Home;
