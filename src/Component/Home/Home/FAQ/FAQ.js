import React from "react";
import trainingImg from "../../../../asset/photo-1541888050297-a615ca315e96.jpeg"
import trainingImg2 from "../../../../asset/humberto-arellano-N_G2Sqdy9QY-unsplash.jpg"
import trainingImg3 from "../../../../asset/photo-1546815708-410983510897.jpeg"

const FAQ = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 mx-auto max-w-screen-xl my-24">
      {/* faq text start*/}
      <div className="text-start">
        <h1 className="text-5xl">Frequently Asks Questions</h1>
        <p className="my-5 text-gray-400">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="collapse collapse-plus border-4 border-green-200 bg-base-100 rounded-box mb-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          How to train your pet dog?
          </div>
          <div className="collapse-content leading-relaxed">
            <ol>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
            </ol>
          </div>
        </div>
        <div className="collapse collapse-plus border-4 border-green-200 bg-base-100 rounded-box mb-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          How to manage your pets?
          </div>
          <div className="collapse-content leading-relaxed">
          <ol>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
            </ol>
          </div>
        </div>
        <div className="collapse collapse-plus border-4 border-green-200 bg-base-100 rounded-box mb-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          What is the best grooming for your pets?
          </div>
          <div className="collapse-content leading-relaxed">
            <p>
            <ol>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
            </ol>
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-4 border-green-200 bg-base-100 rounded-box mb-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          What are those requirements for sitting pets?
          </div>
          <div className="collapse-content leading-relaxed">
          <ol>
                <li>1. Far far away, behind the word mountains</li>
                <li>2. Consonantia, there live the blind texts</li>
                <li>3. When she reached the first hills of the Italic Mountains</li>
                <li>4. Bookmarksgrove, the headline of Alphabet Village</li>
                <li>5. Separated they live in Bookmarksgrove right</li>
            </ol>
          </div>
        </div>
      </div>
      {/* faq text end*/}

      {/* faq image start*/}
      <div className="lg:ml-24">
        <div className="lg:w-[545px]  ">
        <img src={trainingImg3} className="h-full" alt="" />
        </div>
        <div className="grid grid-cols-9 mx-auto">
            <img src={trainingImg} className="h-full col-span-5" alt="" />
            <img src={trainingImg2} className="col-span-4 h-full" alt="" />
        </div>
      </div>
      {/* faq image end*/}
    </section>
  );
};

export default FAQ;
