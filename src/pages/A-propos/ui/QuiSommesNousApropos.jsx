import * as React from "react";
import BrancheLogoFooter from "../../../img/brancheLogoFooter.svg";

function QuiSommesNousApropos() {
  return (
    <section className="relative">
        <div className="petal absolute inset-0 ">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/935a6ee7f9fd189c0e30482ccca18b7d21da452f25b187eccafd44df5cf8bc31?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-96 left-14 aspect-[0.5] fill-teal-300 w-[46px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46275ef2961569416aacd8d6f19a228ae71ea6ff54a99cb2ca928a29317f0f4b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-9 left-10 aspect-[0.85] fill-yellow-600 opacity-35 w-[42px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-24 right-14 aspect-[0.56] fill-teal-300 opacity-25 w-[49px] max-md:mt-10" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04c2ddbb8d2aeeb9ae4d1d5b4b487d058344a50202f81dee6594526b099c1ce?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-1 left-20 aspect-[0.68] fill-yellow-600 fill-opacity-10 w-[37px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef624da5f44fe71e707cf83187f9e64296bcdc127fa7be056c5c5980e7c8712?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-20 right-32  aspect-[0.58] fill-yellow-600 fill-opacity-20 w-[34px] max-md:mr-2.5" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04c2ddbb8d2aeeb9ae4d1d5b4b487d058344a50202f81dee6594526b099c1ce?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2 left-1/2 aspect-[0.68] fill-yellow-600 fill-opacity-20 w-[37px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d3f977792eeaa4b6df71669de1d18144580dde42e0c469963b8ea155b11fa5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 right-2/4 rotate-45 aspect-[0.5] fill-teal-300 opacity-35 w-[46px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46275ef2961569416aacd8d6f19a228ae71ea6ff54a99cb2ca928a29317f0f4b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-1/3 left-1/3 aspect-[0.85] fill-yellow-600 fill-opacity-20 w-[42px] max-md:mt-10" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d3f977792eeaa4b6df71669de1d18144580dde42e0c469963b8ea155b11fa5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-0 right-96 aspect-[0.5] fill-teal-300 w-[46px]" />
        </div>
      <div className="div-blue relative z-10 w-[90%] m-10 mx-auto py-14 py-7 rounded-2xl bg-slate-900 max-md:px-5 -mb-40">  {/* Ajout d'une marge négative en bas */}
        <div className="absolute top-0 left-0 rotate-180">
          <img
            loading="lazy"
            src={BrancheLogoFooter}
            alt="motif background"
            className="b-1 w-[150px] aspect-[0.65]"
          />
        </div>

        <div className="contenu max-w-screen-xl mx-auto md:px-8 relative z-10">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <div className="flex items-center space-x-3">
                <span className="block w-10 h-1 bg-cyan-600"></span>
                <h3 className="text-cyan-600 font-bold">QUI SOMMES NOUS</h3>
              </div>
              <p className="text-white text-2xl font-semibold sm:text-2xl">
                Partir à la découverte de <span className="text-cyan-600"> soi </span>
                et des <span className="text-cyan-600"> autres</span>
              </p>
              <p className="mt-3 text-white text-xl">
                Notre but principal est de contribuer au développement et à
                l'épanouissement de l'individu dans toutes ses dimensions :
                physique, psychologique et spirituelle.
              </p>
            </div>
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a874d2c70f130291156c61726e070007c92edc1787ffc56033c13bda081f3de5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                alt="L'antre Connaissance association"
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuiSommesNousApropos;
