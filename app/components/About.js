import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
                <div className="w-full h-96 bg-[#e9e4dd] rounded-xl">
                  {/* Add actual image */}
                  <Image 
                    src="/Images/Working.jpg" 
                    alt="Working Image" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#d8a25a]/10 rounded-xl -z-10"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-6">Crafting Excellence Since 2010</h2>
            <p className="text-lg text-[#666666] mb-6">
              CraftSpace specializes in transforming commercial environments through exceptional carpentry and thoughtful interior design. Our team combines traditional craftsmanship with modern techniques to create functional, beautiful spaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-[#d8a25a]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3e3e3e]">Expert Craftsmanship</h3>
                  <p className="text-[#666666]">Precision work with premium materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-[#d8a25a]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3e3e3e]">Sustainable Practices</h3>
                  <p className="text-[#666666]">Eco-friendly materials and methods</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-[#d8a25a]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3e3e3e]">Timely Delivery</h3>
                  <p className="text-[#666666]">Projects completed on schedule</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-[#d8a25a]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#d8a25a" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#3e3e3e]">Customer Satisfaction</h3>
                  <p className="text-[#666666]">95% repeat client rate</p>
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
