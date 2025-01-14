import { services } from '../assets/data/service'
import ServiceCard from '../components/Services/ServiceCard'

const Services = () => {
  return (
    <div className='container'>
       <div className='grid grid-cols-1 pt-[20px] md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}      
    </div>
    </div>
  )
}

export default Services
