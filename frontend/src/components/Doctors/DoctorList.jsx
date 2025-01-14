import React from 'react';
import { therapist } from '../../assets/data/doctors'; 
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {therapist.map((item,index) =>(

        <DoctorCard item={item} key={therapist.id} />

     ) )}
    </div>
  )
}

export default DoctorList
