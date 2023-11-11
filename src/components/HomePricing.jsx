import React from 'react'
import CTABtn from '../components/common/Buttton'

export default function HomePricing() {
  return (
    <div>
        <div className='grid grid-cols-1 gap-5 py-5 sm:grid-cols-2 lg:grid-cols-3'>
           
            <div className='flex flex-col md:p-5 p-3 border border-[#EEF8D3] bg-[#F6FBE9] rounded-xl' data-aos="zoom-in-right">
                <h1 className='text-xl font-semibold text-[#262626]'>Basic Plan</h1>
                <span >Up to 50% off on Yearly Plan</span>
                <p className='py-3 text-base'>Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.</p>
                <div className='flex gap-2 py-2'>
                    <h3 className='text-xl font-semibold text-[#2C5446]'>$49</h3>
                    <span>/month</span>
                </div>
                <CTABtn children={"Choose Plan"} active={true} />
            </div>

            <div className='flex flex-col md:p-5 p-3 border border-[#EEF8D3] bg-[#F6FBE9] rounded-xl' data-aos="zoom-in-right">
                <h1 className='text-xl font-semibold text-[#262626]'>Premium Plan</h1>
                <span>Up to 50% off on Yearly Plan</span>
                <p className='py-3 text-base'>Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.</p>
                <div className='flex gap-2 py-2'>
                    <h3 className='text-xl font-semibold text-[#2C5446]'>$79</h3>
                    <span>/month</span>
                </div>
                <CTABtn children={"Choose Plan"} active={true} />
            </div>

            <div className='flex flex-col md:p-5 p-3 border  border-[#EEF8D3] bg-[#F6FBE9] rounded-xl' data-aos="zoom-in-right">
                <h1 className='text-xl font-semibold text-[#262626]'>Ultimate Plan</h1>
                <span>Up to 50% off on Yearly Plan</span>
                <p className='py-3 text-base'>Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.</p>
                <div className='flex gap-2 py-2'>
                    <h3 className='text-xl font-semibold text-[#2C5446]'>$99</h3>
                    <span>/month</span>
                </div>
                <CTABtn children={"Choose Plan"} active={true} />
            </div>
            
        </div>
    </div>
  )
}
