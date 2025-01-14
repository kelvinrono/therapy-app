import { therapist } from "../../assets/data/doctors";
import DoctorCard from '../../components/Doctors/DoctorCard';
import Testimonial from "../../components/Testimonial/Testimonial";

const Therapist = () => {
  return (
    <>
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Therapist</h2>

        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Search for a Therapist" />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
        </div>
      </div>
    </section> 

    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {therapist.map((item,index) =>

        <DoctorCard item={item} key={therapist.id} />

      )}
    </div>
      </div>
    </section>

    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients say</h2>
          </div>

          <Testimonial />
      </div>
    </section>
    </>
  )
}

export default Therapist
