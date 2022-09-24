import React from "react";

const ClientFeedback = () => {
  return (
    <section className="">
      <h1 className="text-4xl font-bold">Happy Client & Feedback</h1>
      {/* <!-- component --> */}
      <div className="lg:flex lg:justify-center mx-auto">
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold text-start">Rukman Pawol</h2>
            <p className=" text-indigo-500 text-start">Marketing Manager</p>
            <p class="mt-2 text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
            <p className="text-end">Marketing Manager</p>
        </div>
        <div class="max-w-md py-4 px-8 lg:mx-10 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold text-start">Roger Scott</h2>
          <p className="text-start text-indigo-500">Marketing Manager</p>
            <p class="mt-2 text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt=""
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold text-start">John Doe</h2>
          <p className=" text-indigo-500 text-start">Marketing Manager</p>
            <p class="mt-2 text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
