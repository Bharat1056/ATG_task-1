import React from 'react';

const LandingContent = () => {
  return (
    <div className='flex flex-col gap-10 md:w-[707px] sm:w-[560px] w-[360px]'>
      <h1 className='text-[36px] font-bold italic'>
        Explore your <span className='text-sky-500'>hobby</span> or <span className='text-hobby-purple'>passion</span>
      </h1>

      <p className='text-[12px] md:text-[14px] leading-[30px]'>
        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
      </p>
      <p className='text-[12px] md:text-[14px] leading-[30px] hidden lg:block'>
        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
      </p>
      <div className='hidden xl:flex xl:flex-row justify-center items-center flex-wrap'>
        <img src="/people1.png" alt="People 1" className='w-[166px] md:[240px] lg:w-[205px] xl:w-[300px] object-cover rounded-lg' style={{ height: 'auto' }} />
        <img src="/people2.png" alt="People 2" className='w-[166px] md:[240px] lg:w-[205px] xl:w-[300px] object-cover rounded-lg' style={{ height: 'auto' }} />
      </div>
    </div>
  );
}

export default LandingContent;
