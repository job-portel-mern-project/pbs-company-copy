import React from "react";
import Image from "next/image";

const Training: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 sm:text-5xl lg:text-4xl">
          TRAINING
        </h1>
        <p className="text-gray-600 mb-10 text-base montserrat-font  lg:w-3/4 w-full">
          Elevate Your Skills with Tailored Training Sessions Unlock your
          potential with personalised training sessions designed to meet your
          specific needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Individual Training
              </h2>
              <p className="text-gray-600 mb-6 text-base montserrat-font">
                Dive deep into your chosen skill set with one-on-one sessions
                tailored to your pace and goals. Our expert trainers provide
                personalised guidance to maximise your learning experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Group Training
              </h2>
              <p className="text-gray-600 mb-6 text-base montserrat-font">
                Join forces with like-minded individuals in our interactive
                group sessions. Collaborate, learn, and grow together under the
                guidance of seasoned professionals, fostering a supportive and
                dynamic learning environment.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our job-oriented training programs
              </h2>
              <p className="text-gray-600 mb-6 text-base montserrat-font">
                spanning 7 to 10 days, equip you with practical skills and
                industry insights to excel in your chosen field. Whether you re
                aiming for career advancement or seeking to acquire new skills,
                our training sessions are your pathway to success.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={400}
              height={100}
            />
          </div>
        </div>
        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0 ">
          <div className="flex items-center gap-4 lg:border-r sm:mb-6 lg:mb-0 mb-0 border-gray-400 pr-0 lg:pr-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Soft Skills Development
              </h2>
              <p className="text-gray-600 mb-6 text-base montserrat-font">
                Training sessions focused on essential soft skills such as
                communication, teamwork, and problem-solving. Improve
                interpersonal skills to complement technical knowledge and boost
                overall performance.
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
          </div>
          <div className="flex items-center gap-4 pl-0 lg:pl-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Executive Coaching
              </h2>
              <p className="text-gray-600 mb-6 text-base montserrat-font">
                One-on-one coaching sessions for executives and managers to
                develop leadership skills and strategic thinking. Personalized
                feedback and development plans to enhance leadership
                capabilities.
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
