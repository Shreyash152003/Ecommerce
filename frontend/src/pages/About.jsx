import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>At FOREVER , we believe shopping should be simple, enjoyable, and trustworthy. Our mission is to bring high-quality products right to your doorstep with just a few clicks. From the latest trends to everyday essentials, we carefully curate our collection to meet the diverse needs of our customers. With secure payments, fast delivery, and a seamless browsing experience, we are committed to making online shopping as convenient as possible.</p>
                    <p>What sets us apart is our dedication to customer satisfaction. We don’t just sell products—we aim to build lasting relationships by offering exceptional service, honest pricing, and reliable support. Every order is handled with care, and every customer is valued as part of our growing community. At [Your Store Name], your trust is our greatest achievement, and we’re here to make sure your shopping journey is smooth, safe, and enjoyable.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission is to make online shopping effortless, affordable, and reliable for everyone. We are committed to providing a wide range of quality products that cater to the everyday needs of our customers, while ensuring a smooth, secure, and enjoyable shopping experience. By combining innovation with customer-centric service, we aim to build a trusted platform where people can shop with confidence, knowing they will always receive value, authenticity, and care with every purchase.</p>
            </div>

      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US ?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >We prioritize quality at every step to ensure our customers receive only the best. Every product listed on our platform goes through careful selection and checks, so you can shop with confidence knowing that reliability, durability, and customer satisfaction are at the heart of everything we deliver.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence:</b>
          <p className='text-gray-600'>We focus on making your shopping experience simple and hassle-free. With an easy-to-navigate platform, quick checkout, and reliable doorstep delivery, we ensure that convenience is always at the center of your journey with us. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>We are dedicated to providing exceptional customer service by offering quick support, clear communication, and personalized assistance. Our team is always ready to help, ensuring your shopping experience is smooth, reliable, and worry-free.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About