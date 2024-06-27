import React from "react";

function BandeauDon() {

    return(
        <section className="flex flex-col px-9 w-full text-white max-md:px-5 max-md:max-w-full ">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full ">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47569168a16999523ccf92a53017033a58b7015c8374c5f95adf8aa314852947?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start mt-1.5 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[49px]" />
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
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f18a810b2d8981437692f4ca0bfa9fc49567be0c32f047d19f0a59d2825ce65?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 my-auto w-10 aspect-[0.77] fill-yellow-600 fill-opacity-20" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff6093fe7d1486a2f0122fcb78189e246df669473ca0cb41d9203e57b54fffb4?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-4 ml-64 aspect-[0.85] fill-yellow-600 fill-opacity-20 w-[42px] max-md:ml-2.5" />
        </section>
    )
}

export default BandeauDon;