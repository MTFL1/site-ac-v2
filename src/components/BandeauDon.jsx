import React from "react";

function BandeauDon() {

    return(
        <section className="relative flex flex-col px-9 w-full text-white mb-20 max-md:px-5 max-md:max-w-full ">
             <div className="petal absolute inset-0 ">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/935a6ee7f9fd189c0e30482ccca18b7d21da452f25b187eccafd44df5cf8bc31?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-96 left-14 aspect-[0.5] fill-teal-300 w-[46px]" />
        </div>
        <div className="relative z-10 flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full ">
        <div className=" flex overflow-hidden relative flex-col justify-center items-center rounded-3xl px-16 py-20 w-[100%] min-h-[384px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9527dbadd8ba7bffbdc38ce649ea0b4701ce0e4e5720aeb3eadece54fa596e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col mt-6 max-w-full w-[100%]">
        <h2 className="text-5xl font-bold text-center leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Vous pouvez contribuer à la réussite de notre association
        </h2>
        <button className="self-center px-8 py-4 mt-11 text-base font-medium text-right bg-cyan-600 rounded-2xl  max-md:px-5 max-md:mt-10">
        Je fais un don
        </button>
        </div>
        </div>
        </div>
        </section>
    )
}

export default BandeauDon;