import React from 'react';
import aboutImg from '../../assets/images/cover/t2.jpg'
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row">
          {/* about image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} className='rounded' alt="child on wheelchair" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
            <h2 className='heading'>Proud to be one of the nation's best</h2>
            <p className='text__para '>
             WaziCare offers access to registered, trained, and experienced Practitioner Psychologists, Counsellors, and similar applicable recognized professional certifications.
             <br />
             <br />
             We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent. If you love people and like challenges - come and join us!
            </p>
            <p className="text__para mt-[30px]">
            Our customer care team is always here to answer any question and resolve any problem. Just contact us!
            </p>
            <Link to='/'>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
