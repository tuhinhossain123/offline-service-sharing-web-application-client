import React from "react";
import CountUp from "react-countup";
import img from "../../assets/banner2.jpg"

const Achievement = () => {
  return (
    <div className="mt-1">
      <h2 className="text-3xl md:text-4xl lg:text-5xl px-6 md:px-10 pb-6 text-center md:-pb-0  text-[#5f988f] font-semibold">
        Achievement
      </h2>
      <div className="md:h-[110vh] lg:h-[50vh] py-4  flex items-center"  style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container max-w-7xl mx-auto py- lg:px-0 md:px-6 px-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            <div className="card bg-gray-100 shadow-md hover:shadow-2xl hover-shadow-black hover:transform hover:scale-110 duration-500 rounded">
              <div className="card-body items-center my-10 text-center">
                <h2 className="card-title text-4xl mb-4 text-5xl font-bold text-[#5f988f]">
                  <CountUp
                    start={0}
                    end={550}
                    duration={5}
                    separator=","
                    decimals={0}
                    decimal=","
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={500}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="uppercase text-3xl font-semibold text-[#5f988f]">
                  Destination
                </p>
              </div>
            </div>
            <div className="card bg-gray-100 shadow-md hover:shadow-2xl hover-shadow-black hover:transform hover:scale-110 duration-500 rounded">
              <div className="card-body items-center my-10 text-center">
                <h2 className="card-title text-5xl mb-4  font-bold text-[#5f988f]">
                  <CountUp
                    start={0}
                    end={428}
                    duration={5}
                    separator=","
                    decimals={0}
                    decimal=","
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={500}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="uppercase  text-3xl font-semibold text-[#5f988f]">
                  Tour
                </p>
              </div>
            </div>
            <div className="card bg-gray-100 shadow-md hover:shadow-2xl hover-shadow-black hover:transform hover:scale-110 duration-500 rounded">
              <div className="card-body items-center my-10 text-center">
                <h2 className="card-title text-5xl mb-4 font-bold text-[#5f988f]">
                  <CountUp
                    start={0}
                    end={4603}
                    duration={5}
                    separator=","
                    decimals={0}
                    decimal=","
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={500}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="uppercase text-3xl font-semibold text-[#5f988f]">
                  Tourists
                </p>
              </div>
            </div>
            <div className="card bg-gray-100 shadow-md hover:shadow-2xl hover-shadow-black hover:transform hover:scale-110 duration-500 rounded">
              <div className="card-body items-center my-10 text-center">
                <h2 className="card-title text-5xl mb-4  font-bold text-[#5f988f]">
                  <CountUp
                    start={0}
                    end={70}
                    duration={5}
                    separator=","
                    decimals={0}
                    decimal=","
                    suffix="+"
                    enableScrollSpy
                    scrollSpyDelay={500}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </h2>
                <p className="uppercase text-3xl font-semibold text-[#5f988f]">
                  Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
