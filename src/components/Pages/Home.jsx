import React from 'react'
import CTABtn from '../common/Buttton'
import heroImg from '../../assets/Home/Image (1).png'
import img1 from '../../assets/Icons/Image (5).png'
import img2 from '../../assets/Icons/Image (6).png'
import img3 from '../../assets/Icons/Image (7).png'
import Features from '../Features'
import HomeBlog from '../HomeBlog'
import Testimonial from '../Testimonial'
import HomePricing from '../HomePricing'

export default function Home() {
  return (
    <div>
      <div className="w-11/12 max-w-screen-xl px-5 mx-auto ">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          
          <div className="md:w-[50%] text-focus-in">
            <img
              src={heroImg}
              alt=""
              className=" w-[600px] h-[500px] object-cover rounded-br-3xl"
              loading='lazy'
            />
          </div>

          <div className="md:w-[50%] text-center md:text-left bounce-top ">
            <span>Transform Your ❤️ Health with</span>
            <h1 className="py-4 text-5xl font-semibold ">Personalized Nutrition Coaching</h1>
            <p className=" md:max-w-[700px] mb-5">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
            <div className="flex justify-center gap-5 md:justify-start">
            <CTABtn children={" Get Starter Today"} active={true} />
            <CTABtn children={"Book a Demo"} active={false} />
            </div>
            <div className="flex items-center justify-center md:justify-start">
              
              <div className="relative flex mt-5 ">
                <img src={img1} alt="" className="object-cover w-10 h-10"  />
                <img src={img2} alt="" className="absolute object-cover w-10 h-10 left-9" />
                <img src={img3} alt="" className="absolute object-cover w-10 h-10 left-[72px]" />
              </div>

              <div className="mt-4 ml-20 font-semibold text-[#234338]">
              430+ Happy Customers
              </div>
            </div>
          </div>
          
        </div>

        {/* feature section  */}

        <div className="px-4 py-10">
          <div className="text-center" data-aos="flip-up">
          <h1 className="py-2 text-5xl font-semibold ">Features</h1>
          <p className="text-base font-medium text-[#333]">
          Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
          </p>
          </div>
          <Features />
        </div>

        {/* blog section  */}
        
        <div className="px-4 py-10">
          <div className="flex flex-col items-center justify-center text-center" data-aos="flip-up">
          <h1 className="py-2 text-5xl font-semibold ">Our Blogs</h1>
          <p className="text-base font-medium text-[#333]  md:max-w-[800px] ">
          Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.
          </p>
          </div>
          <HomeBlog />
        </div>

        {/* testimonials section  */}
        
        <div className="px-4 py-10">
          <div className="flex flex-col items-center justify-center text-center" data-aos="flip-up">
          <h1 className="py-2 text-5xl font-semibold ">Our Testimonials</h1>
          <p className="text-base font-medium text-[#333]">
          Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
          </p>
          </div>
          <Testimonial />
        </div>

        {/* our pricing section  */}

        <div className="px-4 py-10">
          <div className="flex flex-col items-center justify-center text-center" data-aos="flip-up">
          <h1 className="py-2 text-5xl font-semibold ">Our Pricing</h1>
          <p className="text-base font-medium text-[#333]  max-w-[800px]">
          We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources
          </p>
          </div>
          <div className="flex items-center justify-center mt-5">
          <div className=" border border-[#DCF1A7] rounded p-3 w-fit flex gap-5 items-center ">
            <button className="bg-[#234338]  font-semibold py-2 px-5 rounded text-[#ffff]">Monthly</button>
            <span className="font-semibold ">Yearly</span>
          </div>
          </div>
          <HomePricing />
        </div>
        
      </div>
    </div>
  )
}
