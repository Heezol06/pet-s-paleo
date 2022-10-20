import React from "react";
import dogBoarding from "../../asset/about/dog.png";
import catBoarding from "../../asset/about/cat.png";
import petGrooming from "../../asset/about/shampoo.png";
import petToy from "../../asset/about/wool-ball.png";
import petSpa from "../../asset/about/spa.png";
import petCase from "../../asset/about/case.png";
import petPlay from "../../asset/about/yarn-ball.png";
import home from "../../asset/about/home.png";
import home2 from "../../asset/about/home2.png";
import clock from "../../asset/about/circular-alarm-clock-tool.png";
import key from "../../asset/about/key.png";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import CountUp from "react-countup";
import Location from "../GoogleMap/Location";

const About = () => {
  return (
    <section>
      <div
        className="grid lg:grid-cols-2 bg-cover bg-center bg-no-repeat min-h-screen my-[43px]"
        style={{
          backgroundImage:
            "url(http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/background_04.jpg)",
            backgroundSize:"105%"
        }}
      >
        <div className="">
          <h1 className="lg:text-7xl font-bold text-start lg:py-36 pl-10">
            Enjoy Your <br /> <span className="lg:text-7xl text-orange-400">Holiday</span>
          </h1>
          <div className="flex items-center ml-10">
            <img src={petSpa} className="w-20 mr-10" alt="" />
            <div className="pl-10 border-l-2 border-black ">
              <h1 className="text-xl text-start font-bold">PET SPA</h1>
              <p className="text-start">
                We have a variety of quality shampoos <br /> as well as
                medicated shampoo.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/book_now.png"
            className="lg:pt-[350px] hover:animate-pulse"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 mb-16">
        <h1 className="text-5xl font-bold">About us</h1>
        <p className="mt-5">
          From the time our friends sniff their way through the door in the
          morning <br /> until they wag their tails out in the afternoon, we
          cater to their nature.
        </p>
      </div>
      {/* card */}
      <div className="grid lg:grid-cols-4 my-10 gap-5 mx-5">
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
          <img src={dogBoarding} alt="" className="w-20 mb-5" />
          <h1 className="text-2xl text-start font-bold my-10">Dog Boarding</h1>
          <p className="text-start">
            While you’re on holiday, here’s where furry friends will spend their
            time.
          </p>
          <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">
            VIEW MORE <BsArrowRightShort />
          </h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
          <img src={catBoarding} alt="" className="w-20 mb-5" />
          <h1 className="text-2xl text-start font-bold my-10">Cat Boarding</h1>
          <p className="text-start">
            We have highest quality accommodations for even the fussiest feline.
          </p>
          <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">
            VIEW MORE <BsArrowRightShort />
          </h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
          <img src={petGrooming} alt="" className="w-20 mb-5" />
          <h1 className="text-2xl text-start font-bold my-10">Pet Grooming</h1>
          <p className="text-start">
            Your dog will leave feeling happy, looking and smelling great.
          </p>
          <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">
            VIEW MORE <BsArrowRightShort />
          </h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
          <img src={petToy} alt="" className="w-20 mb-5" />
          <h1 className="text-2xl text-start font-bold my-10">Pet Toy</h1>
          <p className="text-start">
            If you are short on time we can arrange taxi transport for you.
          </p>
          <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">
            VIEW MORE <BsArrowRightShort />
          </h1>
        </div>
      </div>
      {/* Pet Boarding Facility */}
      <div className="grid lg:grid-cols-2 my-10 py-10">
        <div>
          <img
            src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/hero_image_12.png"
            className=""
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-start py-10 pl-5">
            Pet Boarding Facility
          </h1>
          <div>
            <div className="flex items-center ml-10 my-10">
              <img src={petCase} className="w-20 mr-10" alt="" />
              <div className="pl-10 ">
                <h1 className="text-lg text-start font-bold text-orange-600">
                  ENORMOUS CAGES
                </h1>
                <p className="text-start">
                  We have multiple doors to to make sure cats don't get outside.
                  Pet safety is very important to us and we have fire detectors
                  all throughout our facility.
                </p>
              </div>
            </div>
            <div className="flex items-center ml-10 my-10">
              <img src={petPlay} className="w-20 mr-10" alt="" />
              <div className="pl-10 ">
                <h1 className="text-lg text-start font-bold text-orange-600">
                  FOUR-HOURS DAILY-PLAY INCLUDED
                </h1>
                <p className="text-start">
                  We keep every cat separate on play times - unless from the
                  same family - so that there are no spats between cats in our
                  enviroment.
                </p>
              </div>
            </div>
            <button className="btn btn-outline  bg-gray-100 border-gray-400 flex ml-10 hover:bg-green-400 hover:border-green-400">
              Button
            </button>
          </div>
        </div>
      </div>
      {/* We keep them happy */}
      <div className="grid lg:grid-cols-2 gap-4 py-10 my-10 ">
        <div className="text-start mx-10 ">
          <p className="text-orange-600">ABOUT US</p>
          <h1 className="text-4xl font-bold">We keep them happy</h1>
          {/* drop down  */}
          <div className="text-start my-10 pr-24">
            <div className="collapse collapse-plus border-4 border-gray-200 bg-base-200 rounded-box mb-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                WELL-TRAINED STAFF
              </div>
              <div className="collapse-content leading-relaxed">
                <ol>
                  <li>
                    Our staff learn proper handling, symptoms of illness,
                    expressions, and body language.
                  </li>
                </ol>
              </div>
            </div>
            <div className="collapse collapse-plus border-4 border-gray-200 bg-base-200 rounded-box mb-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                METICULOUS ABOUT MEDS
              </div>
              <div className="collapse-content leading-relaxed">
                <ol>
                  <li>
                    Snacks are available throughout the day and fresh water is
                    constantly available.
                  </li>
                </ol>
              </div>
            </div>
            <div className="collapse collapse-plus border-4 border-gray-200 bg-base-200 rounded-box mb-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                WHAT TO BRING
              </div>
              <div className="collapse-content leading-relaxed">
                <ol>
                  <li>
                    If your dog has separation anxiety we encourage you to bring
                    something that smells like home.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/hero_image_13.png"
            alt=""
          />
        </div>
      </div>
      {/* Service Add-Ons */}
      <div className="relative">
        <img
          src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/cookie.png"
          className="absolute top-[-41px] z-[-1]"
          alt=""
        />
        <div className="lg:flex lg:justify-center mx-auto px-16 py-10 my-10 z-0">
          <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg lg:w-[70%] text-start">
            <p className="text-orange-600">PET CARE</p>
            <h1 className="text-3xl font-bold my-10">1 Day</h1>
            <img src={home} alt="" className="w-12 mb-5" />
            <div className="flex items-center justify-between">
              <p className="text-start">Double room</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Socialise</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Brush</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Pet TV</p>
              <p className="text-orange-600">X </p>
            </div>
            <h1 className="text-5xl font-bold my-10">
              $<CountUp className="text-5xl font-bold" delay={3} end={50} />
            </h1>
          </div>
          <div
            class="text-white lg:mx-16 lg:my-0 my-5 p-10 rounded-xl hover:shadow-lg lg:w-[70%] text-start"
            style={{
              backgroundImage:
                "url(http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/price_list_background_02.jpg)",
            }}
          >
            <p className="">PET CARE</p>
            <h1 className="text-3xl font-bold my-10">10 Day</h1>
            <img src={home} alt="" className="w-12 mb-5" />
            <div className="flex items-center justify-between">
              <p className="text-start">Single room</p>
              <AiOutlineCheck className="" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">SocialiseExcercise</p>
              <AiOutlineCheck className="" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Custom Meals</p>
              <AiOutlineCheck className="" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Spa and Grooming</p>
              <AiOutlineCheck className="" />
            </div>
            <h1 className="text-5xl font-bold my-10">
              $3
              <CountUp className="text-5xl font-bold" delay={3} end={50} />
            </h1>
          </div>
          <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg lg:w-[70%] text-start">
            <p className="text-orange-600">PET CARE</p>
            <h1 className="text-3xl font-bold my-10">20 Day</h1>
            <img src={home} alt="" className="w-12 mb-5" />
            <div className="flex items-center justify-between">
              <p className="text-start">Single room</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Excercise 2x</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Custom Meals</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start">Grooming 2x</p>
              <AiOutlineCheck className="text-green-600" />
            </div>
            <h1 className="text-5xl font-bold my-10">
              $5
              <CountUp className="text-5xl font-bold" delay={3} end={50} />
            </h1>
          </div>
        </div>
        <img
          src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/dog_food.png"
          className="absolute  left-[1400px] bottom-[-15px]"
          alt=""
        />
      </div>
      {/* Happy to welcome you to our circle of friends */}
      <div>
        <div className="lg:flex items-center justify-between py-10 my-10 mx-10 text-start">
          <h1 className="text-4xl font-bold">
            Happy to welcome you to <br /> our circle of friends
          </h1>
          <img
            src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/book_tour.png"
            alt=""
          />
        </div>
        {/* services  */}
        <div className="grid lg:grid-cols-4 gap-4 my-10 py-10 px-10 mx-auto">
          <div className="text-start">
            <img src={home2} className="w-20" alt="" />
            <p className="text-orange-600 font-bold">FRONT DESK:</p>
            <p>Mon-Fri, 9 AM to 6 PM</p>
          </div>
          <div className="text-start">
            <img src={clock} className="w-20" alt="" />
            <p className="text-orange-600 font-bold">BOARDING CHECK-IN:</p>
            <p>Mon-Sun, 9 AM to 6 PM</p>
          </div>
          <div className="text-start">
            <img src={key} className="w-20" alt="" />
            <p className="text-orange-600 font-bold">BOARDING CHECK OUT:</p>
            <p>Sat-Thu, 8 AM to 11 PM</p>
          </div>
          <div className="text-start">
            <img src={home2} className="w-20" alt="" />
            <p className="text-orange-600 font-bold">DAYCARE:</p>
            <p>Mon-Sun, 6 AM to 6 PM</p>
          </div>
        </div>
        {/* Map & Addresses */}
        <div className="grid lg:grid-cols-2 my-10 py-10">
        <div className="">
            <Location></Location>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl ml-96">
            <figure>
              <img
                src="http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/inner_image_maps_02.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-slate-100">
              <div className="flex text-start">
                <i class="fa-solid fa-3x fa-location-dot px-1 mr-5 hover:text-green-400"></i>
                <div>
                  <h2 className="card-title">Address</h2>
                  <p>Green Meadows Street 26, Victoria, Australia</p>
                </div>
              </div>
              <div className="flex text-start my-5">
                <i class="fa-solid fa-phone fa-3x px-1 mr-2 hover:text-green-400"></i>
                <div>
                  <h2 className="card-title">Telephone</h2>
                  <p>+971 4 8848847 <br /> +971 4 8848849</p>
                </div>
              </div>
              <div className="flex text-start my-5">
              <i class="fa-regular fa-envelope fa-3x mr-5 hover:text-green-400"></i>
                <div>
                  <h2 className="card-title">Telephone</h2>
                  <p>+971 4 8848847 <br /> +971 4 8848849</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
