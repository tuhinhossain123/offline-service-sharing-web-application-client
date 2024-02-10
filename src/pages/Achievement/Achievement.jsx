import React from 'react';
import CountUp from "react-countup";
import {FaHandsHelping , FaRegSmileBeam ,FaUsers , FaAward } from "react-icons/fa";

const Achievement = () => {
  return (
    <div className='my-14'>
         <h2 className="text-4xl px-6 md:px-10 pb-6 text-center md:-pb-0 md:text-5xl text-[#3e7172] font-semibold">
         Achievement
      </h2>
    <div className='container max-w-7xl mx-auto py- lg:px-0 md:px-6 px-5'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5'>
            <div className="card bg-base-100 shadow-2xl rounded">
                <div className="card-body items-center my-10 text-center">
                    <h2 className="card-title text-4xl mb-4 text-5xl font-bold text-[#3e7172]">
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
                    <p className="uppercase text-3xl font-semibold text-[#3e7172]">Destination</p>                            
                </div>
            </div>
            <div className="card bg-base-100 shadow-2xl rounded">
                <div className="card-body items-center my-10 text-center">
                    <h2 className="card-title text-5xl mb-4  font-bold text-[#3e7172]">
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
                    <p className="uppercase  text-3xl font-semibold text-[#3e7172]">Tour</p>                            
                </div>
            </div>
            <div className="card bg-base-100 shadow-2xl rounded">
                <div className="card-body items-center my-10 text-center">
                    <h2 className="card-title text-5xl mb-4 font-bold text-[#3e7172]">
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
                    <p className="uppercase text-3xl font-semibold text-[#3e7172]">Tourists</p>                            
                </div>
            </div>
            <div className="card bg-base-100 shadow-2xl rounded">
                <div className="card-body items-center my-10 text-center">
                    <h2 className="card-title text-5xl mb-4  font-bold text-[#3e7172]">
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
                    <p className="uppercase text-3xl font-semibold text-[#3e7172]">Country</p>                            
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Achievement;
