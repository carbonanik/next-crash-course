import React from 'react';

import Link from 'next/link';


const Hero = () => {

  return (
    <section className="relative flex items-start theme-lg:items-center theme-lg:min-h-screen pt-[4rem] lg:pt-[12rem] pb-[4rem] lg:pb-[6rem] w-full overflow-x-hidden bg-white md:bg-theme-gray">
      <div className=" container flex flex-col theme-lg:flex-row items-center theme-lg:items-stretch gap-10 2xl:gap-24 relative ">

        {/* LEFT SIDE CONTENT */}
        <div className=" flex-1 ">
          <h1 className="relative text-center theme-lg:text-left">
            This is a title
          </h1>

          <div className="font-inter mt-5 text-sm theme-lg:text-lg text-center theme-lg:text-left w-full theme-lg:w-[33rem] mx-auto theme-lg:mx-0 ">
            <p>This is the description</p>
          </div>

          <div className=" mt-8 flex flex-col theme-lg:flex-row gap-4 theme-lg:gap-8 px-14 theme-lg:px-0">
            <Link href="#booking">
              <button data-test="hero-make-an-appointment" className="btn-primary border-2 border-transparent">
                Button 1
              </button>
            </Link>
            <Link href="#process">
              <button data-test="how-it-works" className="btn-outline">
                Button 2
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="hidden theme-lg:block flex-1   relative">
          <div className="aspect-hero rounded-lg overflow-hidden">

            <img
              className="w-full h-full"
              // src={data?.section_content.images[0]}
              src="https://morning-dew-store.s3.amazonaws.com/public/324395765_3322697157969999_5446641285353658494_n.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ5AO4IXHM3EFG2Q6%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230109T111201Z&X-Amz-Expires=86400&X-Amz-Signature=14f15313a0ca3781e6570e05ec3867aed68af8edc57723bf34fcb31c27b198dd&X-Amz-SignedHeaders=host"
              alt="Hero Banner"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;