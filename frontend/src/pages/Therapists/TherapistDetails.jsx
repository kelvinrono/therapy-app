import { useState } from "react";
import doctorImg from "../../assets/images/cover/t7.jpg";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from "../../components/Doctors/DoctorAbout";
import Feedback from "../../components/Doctors/Feedback";
import SidePanel from "../../components/Doctors/SidePanel";

const TherapistDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px]">
                <img src={doctorImg} alt="" className="w-full rounded" />
              </figure>

              <div>
                <span className="bg-primary text-white py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
                  Psychologist
                </span>
                <h3 className="text-textColor text-[22px] leading-9 mt-3 font-bold">
                  Dr. Zawadi Ahmed
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>

                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    (172)
                  </span>
                </div>

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente consectetur sunt accusantium alias veritatis ratione
                  culpa? Pariatur, ab eos. Modi.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primary"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-primary font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab("feedback")}
                className={` ${
                  tab === "feedback" && "border-b border-solid border-primary"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-primary font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
            
          </div>
        <div>
           <SidePanel />
        </div>


        </div>
      </div>
    </section>
  );
};

export default TherapistDetails;
