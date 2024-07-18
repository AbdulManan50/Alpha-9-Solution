import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Card from "./Card";
import SubHeading from "./Components/SubHeading";
import ClientPartner from "./Components/ClientPartner";
import Testimonail from "./Components/Testimonail";
import Counter from "./Components/Counter";
import Icon from "./Icon";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <div
        className="bg-contain bg-repeat"
        style={{ backgroundImage: "url('/image/asset 47.png')" }}
      >
        <div className="w-[1000px] py-40 mx-auto flex">
          <div className="w-[50%]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-[1px] bg-white"></div>
              <h1 className="font-poppins text-[#EE9D3A] text-sm tracking-[3px]">
                KNOW US BETTER
              </h1>
            </div>
            <h1 class="text-4xl font-bold  gradient-text pt-5 font-poppins">
              Delivering Exceptional Technology Solutions for Seamless
              Operations
            </h1>
          </div>
          <div className="w-[50%]">
            <p className="text-[#b7b7b7] font-roboto text-sm leading-7 pb-5">
              Welcome to Alpha9 Your partner in revolutionizing your business
              Specializing in CRM software implementation and marketing
              Services, we craft customized solutions for seamless design,
              efficient implementation, and strategic automation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-[1px] bg-white"></div>
              <h1 className="font-poppins text-[#EE9D3A] text-sm tracking-[3px]">
                KNOW US BETTER
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-contain bg-repeat"
        style={{ backgroundImage: "url('/image/asset 43.jpeg')" }}
      >
        <div className="w-[1100px] mx-auto flex items-start gap-5">
          <Card
            heading="CRM Services"
            paragraph="A full set of services to support your customer relationship management, business process automation, and more. Our team ensures your market success by providing a pathway toward consistent user experiences to boost customer satisfaction and loyalty."
            img1="./public/image/asset 4.png"
          />
          <Card
            heading="Marketing Services"
            paragraph="With a strong set of marketing services to optimize your sales and revenue generation, the Alpha team helps you build a strong client community and maximize customer retention while attracting potential customers. Increased referral sources"
            img1="./public/image/asset 5.png"
          />
          <Card
            heading="DevOps Services"
            paragraph="As a leading DeVOps service provider. we epower businesses to accelerate their dvelopment cycles. enhance collaboration, and achieve unparalleled efficiency in software delivery. With a commitment to innovation and seamless integration, we pave the way for your organization to thrive in the fast-paced world of modern technology."
            img1="./public/image/asset 6.png"
          />
        </div>
      </div>
      <div className="py-20 bg-black ">
        <div className="w-[1000px] mx-auto">
          <SubHeading
            subline="OUR PROCESS"
            subhead="How we work for our Client Partners​"
          />
        </div>
      </div>
      <div className="bg-black pb-20 flex">
        <ClientPartner
          cliennumber="1"
          clientheading="Diagnose"
          clientparagraph="Understanding client preferences, priorities and needs, our professionals work with you on the same page!"
        />
        <ClientPartner
          cliennumber="2"
          clientheading="Define"
          clientparagraph="Identifying errors to understand current business challenges, issues in managing the business."
        />
        <ClientPartner
          cliennumber="3"
          clientheading="Design"
          clientparagraph="We devise the solution and chalk out the changemanagement process
        with you"
        />
        <ClientPartner
          cliennumber="4"
          clientheading="Develop"
          clientparagraph="Developing solutions for you, our experts develop everything from scratch."
        />
        <ClientPartner
          cliennumber="5"
          clientheading="Deploy"
          clientparagraph="Our team doesn't leave you struggling with the change but helps with deployment too!"
        />
      </div>
      <div className="py-20 bg-black ">
        <div className="w-[1000px] mx-auto">
          <SubHeading
            subline="OUR AIM"
            subhead="To be a long term partner in your success"
          />
        </div>
      </div>
      <div className="flex bg-black gap-10 pb-5">
        <div
          className="w-[60%] bg-fixed"
          style={{ backgroundImage: "url('/image/asset 45.jpeg')" }}
        ></div>
        <div className="w-[40%] pr-10 flex flex-col gap-5">
          <div>
            <p className="text-[#b7b7b7] font-roboto text-sm leading-6">
              At Alpha 9 we believe that collaboration and team work is the key
              goal to success. Our approach to our customers is what they love
              about us
            </p>
            <h1 className="text-[#f4a13c] text-sm font-bold">
              1: Understanding the vision and dream
            </h1>
          </div>
          <div>
            <p className="text-[#b7b7b7] font-roboto text-sm leading-6">
              At Alpha 9 we believe that collaboration and team work is the key
              goal to success. Our approach to our customers is what they love
              about us
            </p>
            <h1 className="text-[#f4a13c] text-sm font-bold ">
              1: Understanding the vision and dream
            </h1>
          </div>
          <div>
            <p className="text-[#b7b7b7] font-roboto text-sm leading-6">
              At Alpha 9 we believe that collaboration and team work is the key
              goal to success. Our approach to our customers is what they love
              about us
            </p>
            <h1 className="text-[#f4a13c] text-sm font-bold">
              1: Understanding the vision and dream
            </h1>
          </div>
          <div>
            <p className="text-[#b7b7b7] font-roboto text-sm leading-6">
              At Alpha 9 we believe that collaboration and team work is the key
              goal to success. Our approach to our customers is what they love
              about us
            </p>
            <h1 className="text-[#f4a13c] text-sm font-bold">
              1: Understanding the vision and dream
            </h1>
          </div>
          <div>
            <p className="text-[#b7b7b7] font-roboto text-sm leading-6">
              We are firm believers that merely fulfilling requests falls short
              of our commitment. Going the extra mile for our customers is our
              forte. providing not only what is asked but also offering
              invaluable advice and guidance on how they can foster growth.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black pt-20">
        <h1 className="text-4xl text-[#f4a13c] font-semibold font-poppins text-center">
          Testimonials
        </h1>
      </div>
      <div>
        <Testimonail />
      </div>
      <div className="bg-black pt-20">
        <h1 className="text-4xl text-[#f4a13c] font-semibold font-poppins text-center">
          Favourite Tech Stack of Our Experts
        </h1>
        <img
          className="w-[60%] mx-auto"
          src="/public/image/asset 24.png"
          alt=""
        />
      </div>
      <div className="bg-black pb-20">
        <h1 className="text-4xl text-[#f4a13c] font-semibold font-poppins text-center">
          Our Business Impact and Counting
        </h1>
      </div>
      <div className="bg-black">
        <div className="w-[80%] mx-auto flex gap-5 items-center pb-40">
          <div className="w-[33%]">
            <Counter number="200" text="PROJECTED COMPLETED" />
          </div>
          <div className="w-[33%]">
            <Counter number="100" text="HAPPY CLIENTS" />
          </div>
          <div className="w-[33%]">
            <Counter number="30" text="TEAM MEMBERS" />
          </div>
        </div>
      </div>
      <div className="py-20 bg-black ">
        <div className="w-[1000px] mx-auto">
          <SubHeading
            subline="OUR CLIENTS"
            subhead="Some friends we have made while working together"
          />
        </div>
      </div>
      <div
        className="py-2 h-[60vh] bg-cover bg-repeat"
        style={{ backgroundImage: "url('/image/asset 47.png')" }}
      >
        <div className="w-[1000px] mx-auto flex pb-40 justify-center items-center">
          <Icon iconimg="./public/image/asset 30.png" icontext="Azemmi" />
          <Icon iconimg="./public/image/asset 31.png" icontext="RUTI" />
          <Icon iconimg="./public/image/asset 32.png" icontext="Sriek Ready" />
          <Icon iconimg="./public/image/asset 33.png" icontext="Mochi" />
        </div>
        <div className="w-[1000px] mx-auto flex  justify-center items-center">
          <Icon iconimg="./public/image/asset 34.png" icontext="AMICA ENERGY" />
          <Icon iconimg="./public/image/asset 35.png" icontext="GNOMEN" />
          <Icon iconimg="./public/image/asset 36.png" icontext="ISAP" />
          <Icon
            iconimg="./public/image/asset 37.png"
            icontext="WOOD FIRE PIZZA"
          />
        </div>
      </div>
      <div className="py-40 bg-black">
        <div className="w-[1100px] mx-auto flex justify-between items-center">
          <div>
            <p className="text-[#f4a13c] text-sm">LET'S TALK</p>
            <h1 className="text-8xl font-extrabold strok">
              about your <span className="text-white">next project</span> .
            </h1>
          </div>
          <div className="w-[20%]">
            <button className="text-white px-10 text-sm py-3 border-[2px] border-white tracking-wider uppercase">Get In Tuch </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
