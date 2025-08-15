"use client"
export const PrimaryDarkBtn = ({text}) => {
  return (
    <button
      className="py-3 px-10 relative inline-flex items-center overflow-hidden font-medium font-inter 
             text-white bg-[#b68c5a] rounded-full 
             group transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Hover fill effect (white fill) */}
      <span
        className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 
                   group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"
      ></span>

      {/* Arrow slide effect */}
      <span
        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 
                   transform translate-x-full group-hover:translate-x-0 ease text-white"
      >
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>

      {/* Button text */}
      <span className="relative group-hover:text-white">
        {text}
      </span>
    </button>
  );
};


export const PrimaryLightBtn = ({text}) => {
  console.log(text)
  return (
    <button
      className="py-3 px-10 relative inline-flex items-center overflow-hidden font-medium font-inter 
             text-white bg-[#b68c5a] rounded-full 
             group transition-all duration-300 ease-in-out cursor-pointer"
    >
      {/* Hover fill effect (white fill) */}
      <span
        className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 
                   group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"
      ></span>

      {/* Arrow slide effect */}
      <span
        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 
                   transform translate-x-full group-hover:translate-x-0 ease text-[#b68c5a]"
      >
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>

      {/* Button text */}
      <span className="relative group-hover:text-[#b68c5a]">
        {text}
      </span>
    </button>
  );
};
