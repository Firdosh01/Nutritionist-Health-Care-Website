import React from "react";
import Story from "../Story";
import AboutFrame from "../../assets/About/Image (11).png";
import Achivement from "../Achivement";
import SubFooter from "../common/SubFooter";

export default function About() {
  return (
    <div>
      <div className="w-11/12 max-w-screen-xl px-5 mx-auto">
        <div className="py-5">
          <img src={AboutFrame} alt="" loading="lazy" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="py-5 text-5xl font-semibold ">
            Welcome to Nutritionist
          </h1>
          <p className="py-5">
            Your trusted source for personalized nutrition coaching. Our mission
            is to help you achieve your weight loss and health goals through
            tailored nutrition plans and expert guidance. We understand that
            every individual is unique, and that's why we believe in providing
            personalized solutions that fit your lifestyle and preferences. With
            our team of qualified nutritionists and dietitians, we are dedicated
            to empowering you with the knowledge and tools you need to make
            lasting changes. Whether you want to shed those extra pounds,
            improve your overall well-being, or develop a healthier relationship
            with food, we are here to support you every step of the way. At
            Nutritionist, we believe that healthy eating should be enjoyable and
            sustainable. We emphasize the importance of balanced nutrition,
            focusing on whole foods and mindful eating practices. Our approach
            is rooted in scientific research and evidence-based strategies,
            ensuring that you receive the most up-to-date and accurate
            information. Join our community of individuals committed to
            transforming their lives through nutrition. Take control of your
            health, boost your energy levels, and discover the joy of nourishing
            your body with wholesome foods. We are here to guide you towards a
            healthier, happier you.
          </p>
        </div>

        {/* Our story section  */}

        <div className="px-4 py-10">
          <div className="text-center">
            <h1 className="py-2 text-5xl font-semibold ">Our Story</h1>
            <p className="text-base font-medium text-[#333]">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey.
            </p>
          </div>
          <Story />
        </div>

        <div className="px-4 py-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="py-2 text-5xl font-semibold ">
              Company Achievements
            </h1>
            <p className="text-base font-medium text-[#333] max-w-[800px]">
              At Nutritionist, we take pride in our accomplishments and the
              positive impact we have made on the lives of our clients. Here are
              some of our notable achievements
            </p>
          </div>
          <Achivement />
        </div>

        {/* sub footer section  */}

        <div>
          <SubFooter
            title={"We Are Proud of Our Achievements"}
            desc={
              "But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being."
            }
            btnText={"Book a Demo"}
          />
        </div>
        
      </div>
    </div>
  );
}
