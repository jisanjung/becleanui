import React from 'react'
import exteriorDetail from './images/exterior_detail.jpeg';
import interiorDetail from './images/interior_detail.jpg';
import detailPackage from './images/detail_package.jpg';
import './styles/services.css';

const Services = ({ className }) => {
  return (
    <section id="servicesSection" className={`${className}`}>
        <div className='container'>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">Ceramic Coating</h2>
                <p className="text service-desc">
                Transform your car into a masterpiece with our exceptional exterior detail. 
                Our skilled technicians scrupulously cleanse every inch to remove dirt, grime, and road contaminants. 
                We pamper your car with a thick foam shampoo followed by a gentle hand wash. 
                We specially utilize a ceramic-infused coating to give your vehicle a brilliant shine and apply a graphene acrylic tire shine for extra longevity. 
                Trust us to unveil the true elegance of your vehicle.
                </p>
                <div className="flex w-100">
                    <a href="/book" className="button">Book Now</a>
                </div>
            </div>
            <div className="service-img">
                <img src={exteriorDetail} alt="Car exaust"/>
            </div>
            </div>
            <div className="service-each service-each-reverse row-reverse">
            <div className="service-details">
                <h2 className="title-md text-right">Glass Coating</h2>
                <p className="text service-desc text-right">
                Step into luxury with our premier car interior detail service. 
                Our meticulous team goes beyond to restore your vehicle's interior to showroom perfection. 
                From deep cleaning carpets and upholstery to exceptional window glass quality with our Streak-Free Guarantee, every inch is treated with care. 
                We eliminate odors, banish stains, and renew the luster of your dashboard and trim. 
                Experience the pinnacle of automotive pampering with our comprehensive interior detailing.
                </p>
                <div className="flex justify-end">
                    <a href="/book" className="button">Book Now</a>
                </div>
            </div>
            <div className="service-img service-img-reverse">
                <img src={interiorDetail} alt="Cleaning interior car"/>
            </div>
            </div>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">Free Delivery</h2>
                <p className="text service-desc">
                Indulge in the epitome of automotive luxury with The Detail Package. 
                From the intricacies of the interior upholstery to the radiant shine of the exterior paint, our skilled team employs cutting-edge techniques and products to ensure a flawless finish. 
                Unveil a spotless interior where every surface exudes freshness, while the exterior boasts a mirror-like gloss. 
                With our detail service, your car becomes a statement of sophistication.
                </p>
                <div className="flex">
                    <a href="/book" className="button">Book Now</a>
                </div>
            </div>
            <div className="service-img">
                <img src={detailPackage} alt="Car roof cleaning supplies"/>
            </div>
            </div>
        </div>
      </section>
  )
}

export default Services