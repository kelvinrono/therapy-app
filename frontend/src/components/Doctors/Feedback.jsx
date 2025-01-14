import React, { useState } from 'react';
import featureImg from "../../assets/images/therapy/therapist5.jpg";
import {formateDate } from '../../utils/formatDate.jsx';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className='text-[20px] leading-[30px] font-bold text-textColor mb-[30px]'>
          All reviews (200)
        </h4>


        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='rounded-full w-[30px] h-[30px]'>
            <img src={featureImg} className="w-full rounded-full" alt="" />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primary font-bold'>Baron Hills </h5>
              <p className='text-[14px] leading-6 text-textColor'>{formateDate('03-14-2022')}</p>
              <p className='text__para mt-3 font-medium text-[15px] '>Very professional, I highly recommend</p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#35b5ac' />)}
          </div>
        </div>
      </div>

      {!showFeedbackForm &&
      <div className="text-center">
        <button className="btn" onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  )
}

export default Feedback
