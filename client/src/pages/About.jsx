import React from "react";
import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import HeadSection from "../components/HeadSeaction";

import aboutImage from "../assets/images/about.jpg";
import image2 from "../assets/images/oldpeople.jpg";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <HeadSection heading="About Us" imgSrc={aboutImage} />
      <div className="text-center text-2xl mt-12 mb-12 px-64 font-medium">
      Designed to cater to the unique needs of senior citizens, providing them with a user-friendly platform to navigate and utilize various online services. The primary goal is to empower seniors by offering support and resources for online banking, booking, and learning about the internet.      </div>

      <div className="text-center text-3xl mb-4 px-64 font-semibold">
      Dedicated to serving elderly  </div>

      <div className="text-center text-2xl text-base mb-12 px-80 font-light">Step-by-step guides and video tutorials to assist seniors in navigating online banking platforms securely </div>
      

      <div className="w-3/5 mb-16"><img src={image2} alt="about" className="w-full h-full object-contain object-center" /></div>
      
      <div className="text-center text-blue-900 text-3xl mb-2 px-64 font-semibold">
  Simplifying the Online World for You
</div>
<div className="text-center text-base mb-10 px-80 font-light">
  Navigating the internet made easy through accessible tutorials, links, and helpful documents, tailored just for you.
</div>

<div className="text-center text-blue-900 text-3xl mb-2 px-64 font-semibold">
  Step-by-Step Guidance
</div>
<div className="text-center text-base mb-10 px-80 font-light">
  From understanding online banking to discovering fascinating aspects of the internet, our tutorials provide simple, step-by-step guidance to help you confidently explore the digital realm.
</div>

<div className="text-center text-blue-900 text-3xl mb-2 px-64 font-semibold">
  Your Digital Journey, Your Way
</div>
<div className="text-center text-base mb-10 px-80 font-light">
  Whether it's learning about online safety or finding interesting websites, our platform is tailored to meet your needs, ensuring a personalized and enjoyable digital experience.
</div>
      

      <Footer />
    </div>
  );
}
