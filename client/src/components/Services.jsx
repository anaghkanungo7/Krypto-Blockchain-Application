import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiFastForwardCircle, BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill, RiMoneyCnyCircleFill, RiMoneyDollarCircleFill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Our Services
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Instant money transfers anywhere across the world. 
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Secure"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Maintain integrity and transparency when sending money online. No sign-ups, frills or other bullshit."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Cheap"
          icon={<RiMoneyDollarCircleFill fontSize={21} className="text-white" />}
          subtitle="Best-in-class gas fees as compared to other ways of sending money online. Competitive rates and pricing."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fast"
          icon={<BiFastForwardCircle fontSize={21} className="text-white" />}
          subtitle="Send money anywhere in the world in about 10 to 30 seconds. There is no faster way - unless you know how to teleport."
        />
      </div>
    </div>
  </div>
);

export default Services;