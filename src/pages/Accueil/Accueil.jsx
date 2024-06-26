import React from "react";


const EventCard = ({ day, month, title, isLarge }) => (
  <div className={`flex grow gap-5 px-11 py-12 mx-auto w-full text-white bg-gray-900 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full ${isLarge ? 'pb-16' : ''}`}>
    <div className="flex flex-auto gap-5 items-start">
      <div className="flex flex-col font-medium whitespace-nowrap">
        <div className="text-5xl leading-[57.6px] max-md:text-4xl">{day}</div>
        <div className="mt-4 text-base uppercase tracking-[2px]">{month}</div>
      </div>
      <div className={`flex flex-col grow shrink-0 mt-2 text-3xl font-bold leading-10 basis-0 w-fit ${isLarge ? 'flex-auto self-start mt-1.5' : ''}`}>
        <div className="shrink-0 self-end w-11 h-0.5 bg-white border-2 border-white border-solid" />
        <div className={isLarge ? "flex-auto self-end mt-7" : "mt-7"}>{title}</div>
      </div>
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className={`shrink-0 w-14 aspect-square ${isLarge ? 'self-end mt-6' : 'my-auto'}`} />
  </div>
);

function Accueil() {
  return (
    <div className="flex flex-col pt-4 bg-white">
 
      <main>

        <section className="w-full bg-gray-900 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex overflow-hidden relative flex-col grow items-start pb-20 aspect-[0.74] fill-cyan-600 max-md:mt-10">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99148d591213e2bf22cc1db616728f37ff1f5003314513a4735975cd4f9ad438?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de26c23a88d158d6db0e386da0a9986c67a5d3c86625a6fa17259e8b19c25bc8?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="max-w-full aspect-[0.78] fill-cyan-600 w-[205px]" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                      <h1 className="mt-56 text-7xl font-bold text-center text-white leading-[86px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                        Partir à la découverte <br /> de soi et des autres
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center self-end mt-4 max-w-full font-medium text-right text-white w-[979px]">
                  <button className="px-8 py-4 ml-32 text-base whitespace-nowrap bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5">
                    Contact
                  </button>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c68d799db48ef18ad220a1f14d71346b898a4a7df0a8ca4e5737dfd40e1af37f?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-6 ml-32 aspect-[3.03] w-[60px]" />
                  <div className="flex gap-5 self-stretch px-5 mt-24 text-lg max-md:flex-wrap max-md:mt-10">
                    <div className="w-[249px]">+ de 400 personnes rencontrées</div>
                    <div className="shrink-0 self-start max-w-full h-2.5 border border-solid backdrop-blur-[15px] bg-neutral-200 border-neutral-200 w-[802px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-20 mt-72 text-lg font-medium text-right text-white aspect-[0.74] fill-cyan-600 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9257c2c994f4dd2ae68cd9290d6b77dc7c67cf5ec85e1e137f5bf6c8b08801f6?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
                <div className="flex overflow-hidden relative flex-col justify-center items-start pt-40 pb-16 mt-20 max-w-full aspect-[0.78] fill-cyan-600 w-[205px] max-md:pt-10 max-md:pr-5 max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b54209289b2de6335d334aeda4e10f94f53d5d6b5de9ca845eef7bee5dc5b41?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
                  + de 20 évènements organisés{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-11">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45bec6361af1066976d4ddeae14d7edd213265b3749eafb802416e30bcd2b6a8?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="self-center ml-24 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[49px] max-md:mt-10" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="z-10 mt-0 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
          <div className="flex gap-1 self-end mr-10 max-w-full w-[544px] max-md:flex-wrap max-md:mr-2.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c06f7ff069fcd0be6d3740b79504c02dee3ebdfb826f57eccf5f04468443a4?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Event" className="grow shrink-0 rounded-3xl aspect-[0.86] basis-0 w-fit max-md:max-w-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f18a810b2d8981437692f4ca0bfa9fc49567be0c32f047d19f0a59d2825ce65?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-end w-10 aspect-[0.77] fill-yellow-600 fill-opacity-20 mt-[493px] max-md:mt-10" />
          </div>
          <div className="flex z-10 flex-col mt-0 ml-28 max-w-full text-base w-[725px] max-md:mt-0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="ml-5 border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px] max-md:ml-2.5" />
            <div className="flex flex-col self-end mt-12 max-w-full w-[608px] max-md:mt-10">
              <h2 className="text-5xl font-bold text-gray-800 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Nous offrons des lieux d'échange et de partage
              </h2>
              <p className="mt-10 leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                L'antre Connaissance est une association loi 1901, son but principal est de contribuer au développement et à l'épanouissement de l'individu dans toutes ses dimensions : physique, psychologique, spirituelle.
              </p>
              <button className="self-start px-8 py-4 mt-16 font-medium text-right text-white bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                En savoir plus
              </button>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f18a810b2d8981437692f4ca0bfa9fc49567be0c32f047d19f0a59d2825ce65?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-28 w-10 aspect-[0.77] fill-yellow-600 fill-opacity-20 max-md:mt-10" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a208cac7ddbbf3a15a6e3e9d3c02175daca589d041b2b78150d30699c54930?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="z-10 self-end mt-0 mr-28 aspect-[0.65] fill-teal-300 fill-opacity-20 w-[54px] max-md:mr-2.5" />
          </div>
        </section>

        <section className="flex flex-col justify-center -mt-8 w-full bg-gray-900 max-md:max-w-full">
          <div className="px-20 pt-10 pb-20 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 self-end font-bold max-md:flex-wrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3f709664aa98339335001b6613af153621b8f99261f5530271cf348134afb3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start mt-20 border-2 border-white border-solid aspect-[33.33] fill-white stroke-[2px] stroke-white w-[72px] max-md:mt-10" />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/935a6ee7f9fd189c0e30482ccca18b7d21da452f25b187eccafd44df5cf8bc31?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="self-center ml-14 aspect-[0.5] fill-teal-300 w-[46px]" />
                      <h2 className="mt-12 text-5xl leading-[58px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                        Quelques activités que nous organisons
                      </h2>
                      <p className="mt-11 text-base leading-7 max-md:mt-10 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                      </p>
                      <h3 className="self-start mt-14 ml-8 text-2xl max-md:mt-10 max-md:ml-2.5">Conférences</h3>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-6 w-full text-base leading-7 max-md:flex-wrap max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46275ef2961569416aacd8d6f19a228ae71ea6ff54a99cb2ca928a29317f0f4b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start mt-7 aspect-[0.85] fill-yellow-600 fill-opacity-20 w-[42px]" />
                    <div className="flex flex-auto gap-5 items-start max-md:flex-wrap">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-end mt-96 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[49px] max-md:mt-10" />
                      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                        <div className="flex gap-3.5 items-start max-md:flex-wrap">
                          <p className="flex-auto self-start max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                          </p>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04c2ddbb8d2aeeb9ae4d1d5b4b487d058344a50202f81dee6594526b099c1ce?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-end mt-7 aspect-[0.68] fill-yellow-600 fill-opacity-20 w-[37px]" />
                        </div>
                        <h3 className="mt-1.5 text-2xl font-bold max-md:max-w-full">Maraudes</h3>
                        <p className="mt-8 max-md:max-w-full">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                        <h3 className="mt-11 text-2xl font-bold max-md:mt-10 max-md:max-w-full">Excursions</h3>
                          <p className="mt-8 max-md:max-w-full">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
</p>
<h3 className="mt-11 text-2xl font-bold max-md:mt-10 max-md:max-w-full">Rencontre interculturelles</h3>
<p className="mt-8 max-md:max-w-full">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
</p>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
<div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef624da5f44fe71e707cf83187f9e64296bcdc127fa7be056c5c5980e7c8712?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="self-end mr-32 aspect-[0.58] fill-yellow-600 fill-opacity-20 w-[34px] max-md:mr-2.5" />
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/188e79e320f7849f215d13e45c0617d46b8102952f9ec231eabc8cc8d28293b3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Event image" className="mt-7 w-full rounded-3xl aspect-[0.7] max-md:max-w-full" />
</div>
</div>
</div>
</div>
</section>

<section className="section-events flex flex-col items-center px-4 mt-12 w-full max-md:px-2 max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 justify-between items-start w-full text-4xl font-medium text-gray-800 leading-[56px] max-w-[1294px] max-md:flex-wrap max-md:max-w-full">
    <div className="flex gap-5 items-start self-end mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <h2 className="flex-auto">Prochains évènements</h2>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04c2ddbb8d2aeeb9ae4d1d5b4b487d058344a50202f81dee6594526b099c1ce?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 mt-2 aspect-[0.68] fill-yellow-600 fill-opacity-20 w-[37px]" />
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d3f977792eeaa4b6df71669de1d18144580dde42e0c469963b8ea155b11fa5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start aspect-[0.5] fill-teal-300 w-[46px]" />
  </div>
  <div className="mt-8 w-full max-w-screen-xl max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <EventCard day="13" month="Jun" title="La vie à t-elle un sens ? Partie 3" isLarge={false} />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <EventCard day="25" month="JUN" title="Week-end en Ariège" isLarge={true} />
      </div>
    </div>
  </div>
  <div className="flex gap-5 items-start self-stretch mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-col self-end mt-12 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="self-end border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46275ef2961569416aacd8d6f19a228ae71ea6ff54a99cb2ca928a29317f0f4b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-12 aspect-[0.85] fill-yellow-600 fill-opacity-20 w-[42px] max-md:mt-10" />
    </div>
    <div className="flex flex-col grow shrink-0 self-start text-5xl font-bold text-gray-800 basis-0 leading-[57.6px] w-fit max-md:max-w-full max-md:text-4xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d3f977792eeaa4b6df71669de1d18144580dde42e0c469963b8ea155b11fa5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="self-center ml-28 aspect-[0.5] fill-teal-300 w-[46px]" />
      <h2 className="mt-3.5 max-md:max-w-full max-md:text-4xl">Jeter un oeil à nos derniers évènements</h2>
    </div>
  </div>
 {/*Mettre le composants derniers évenements ici */}

</section>


<section className="flex flex-col px-9 w-full text-white max-md:px-5 max-md:max-w-full">
<div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47569168a16999523ccf92a53017033a58b7015c8374c5f95adf8aa314852947?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start mt-1.5 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[49px]" />
<div className="flex overflow-hidden relative flex-col justify-center items-center rounded-3xl px-16 py-20 w-4/5 min-h-[384px] max-md:px-5 max-md:max-w-full">
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9527dbadd8ba7bffbdc38ce649ea0b4701ce0e4e5720aeb3eadece54fa596e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background image" className="object-cover absolute inset-0 size-full" />
<div className="flex relative flex-col mt-6 max-w-full w-[784px]">
<h2 className="text-5xl font-bold text-center leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
Vous pouvez contribuer à la réussite de notre association
</h2>
<button className="self-center px-8 py-4 mt-11 text-base font-medium text-right bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
Je fais un don
</button>
</div>
</div>
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f18a810b2d8981437692f4ca0bfa9fc49567be0c32f047d19f0a59d2825ce65?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 my-auto w-10 aspect-[0.77] fill-yellow-600 fill-opacity-20" />
</div>
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff6093fe7d1486a2f0122fcb78189e246df669473ca0cb41d9203e57b54fffb4?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-4 ml-64 aspect-[0.85] fill-yellow-600 fill-opacity-20 w-[42px] max-md:ml-2.5" />
</section>
</main>

</div>
);
}

export default Accueil;