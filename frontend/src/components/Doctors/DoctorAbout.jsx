import { formateDate } from "../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center gap-2">
          About of
          <span className="text-primary font-bold text-[24px] leading-9">
            Dr. Zawadi Ahmed
          </span>
        </h3>

        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia culpa
          pariatur a minus, necessitatibus quibusdam cupiditate quam dolorem
          esse officiis aut commodi doloremque minima tempore repellat corporis
          deserunt repellendus, consequatur consectetur nihil! Harum quos iure
          aliquid pariatur officiis? Eius neque rem nihil vel sunt ipsa.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">Education</h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-primary text-[15px] leading-6 font-semibold">
                {formateDate('04-15-2012')} - {formateDate('09-17-2014')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Psychology</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">Presbitarian University, USA</p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-primary text-[15px] leading-6 font-semibold">
                {formateDate("06-23-2010")} - {formateDate('04-01-2012')}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">Masters in Relations Psychology</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">Oxford University, USA</p>
          </li>
        </ul>
      </div>


      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">Experience</h3>

      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 lg:grid-cols-3">
        <li className="p-4 pl-7 pr-7 rounded bg-[#fff9ea]">
          <span className="text-primary text-[15px] leading-6 font-semibold">
          {formateDate("01-25-2015")} - {formateDate('04-01-2018')}
          </span>

          <p className="text-[15px] leading-6 font-medium text-textColor">Snr Psychologist</p>
          <p className="text-[15px] leading-6 font-medium text-textColor">St Marys Wellness Center</p>
        </li>
        <li className="p-4 pl-7 pr-7 rounded bg-[#fff9ea]">
          <span className="text-primary text-[15px] leading-6 font-semibold">
          {formateDate("05-04-2018")} - {formateDate('02-01-2020')}
          </span>

          <p className="text-[15px] leading-6 font-medium text-textColor">Head Psychologist</p>
          <p className="text-[15px] leading-6 font-medium text-textColor">Louis Rehab Center</p>
        </li>
        <li className="p-5 pl-7 pr-7 rounded bg-[#fff9ea]">
          <span className="text-primary text-[15px] leading-6 font-semibold">
          {formateDate("03-02-2020")} - {formateDate('10-7-2023')}
          </span>

          <p className="text-[15px] leading-6 font-medium text-textColor">Lead Psychologist</p>
          <p className="text-[15px] leading-6 font-medium text-textColor">Wazicare</p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
