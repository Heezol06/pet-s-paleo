import React from "react";
import dogBoarding from "../../asset/about/dog.png"
import catBoarding from "../../asset/about/cat.png"
import petGrooming from "../../asset/about/shampoo.png"
import petToy from "../../asset/about/wool-ball.png"
import { BsArrowRightShort } from 'react-icons/bs';



const About = () => {
  return (
    <section>
      <div className="mt-5 mb-16">
        <h1 className="text-5xl font-bold">About us</h1>
        <p className="mt-5">
          From the time our friends sniff their way through the door in the
          morning <br /> until they wag their tails out in the afternoon, we
          cater to their nature.
        </p>
      </div>
      {/* card */}
      <div className="lg:grid lg:grid-cols-4 my-10 gap-5 mx-5">
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
        <img src={dogBoarding} alt="" className="w-20 mb-5" />
        <h1 className="text-2xl text-start font-bold my-10">Dog Boarding</h1>
        <p className="text-start">While you’re on holiday, here’s where furry friends will spend their time.</p>
        <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">VIEW MORE <BsArrowRightShort/></h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
        <img src={catBoarding} alt="" className="w-20 mb-5" />
        <h1 className="text-2xl text-start font-bold my-10">Cat Boarding</h1>
        <p className="text-start">We have highest quality accommodations for even the fussiest feline.</p>
        <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">VIEW MORE <BsArrowRightShort/></h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
        <img src={petGrooming} alt="" className="w-20 mb-5" />
        <h1 className="text-2xl text-start font-bold my-10">Pet Grooming</h1>
        <p className="text-start">Your dog will leave feeling happy, looking and smelling great.</p>
        <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">VIEW MORE <BsArrowRightShort/></h1>
        </div>
        <div class="bg-gray-100 p-10 rounded-xl hover:shadow-lg">
        <img src={petToy} alt="" className="w-20 mb-5" />
        <h1 className="text-2xl text-start font-bold my-10">Pet Toy</h1>
        <p className="text-start">If you are short on time we can arrange taxi transport for you.</p>
        <h1 className="flex items-center mt-16 font-bold text-orange-600 mr-10">VIEW MORE <BsArrowRightShort/></h1>
        </div>
      </div>
      <div className="bg-cover bg-center bg-no-repeat h-full" style={{backgroundImage:"url(http://pawsitive.bold-themes.com/buddy/wp-content/uploads/sites/2/2019/08/background_04.jpg)"}}>
<h1>lorem</h1>
      </div>
    </section>
  );
};

export default About;
