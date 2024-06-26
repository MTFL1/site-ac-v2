import React from "react";

const EventCard = ({ date, title, imageSrc }) => (
  <div className="flex grow gap-5 px-11 py-12 mx-auto w-full text-gray-800 bg-amber-300 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <div className="flex flex-auto gap-5 items-start">
      <div className="flex flex-col font-medium whitespace-nowrap">
        <div className="text-5xl leading-[57.6px] max-md:text-4xl">{date.day}</div>
        <div className="mt-4 text-base uppercase tracking-[2px]">{date.month}</div>
      </div>
      <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit">
        <div className="shrink-0 self-end w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
        <div className="mt-7">{title}</div>
      </div>
    </div>
    <img loading="lazy" src={imageSrc} alt="" className="shrink-0 my-auto w-14 aspect-square" />
  </div>
);

const GalleryItem = ({ imageSrc }) => (
  <div className="flex overflow-hidden relative flex-col grow justify-center text-base font-medium text-right text-gray-800 aspect-[0.73] max-md:mt-6">
    <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
    <div className="flex relative flex-col items-start px-9 pt-20 pb-8 rounded-3xl bg-stone-950 bg-opacity-50 max-md:px-5">
      <button className="justify-center px-8 py-4 mt-96 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
        Plus d'infos
      </button>
    </div>
  </div>
);

function Evenements() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col pb-20 w-full bg-white max-md:max-w-full">
        <section className="flex flex-col self-center px-5 mt-8 w-full max-w-screen-xl max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 items-start mt-4 text-base max-md:flex-wrap max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 self-start border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]" />
                  <div className="flex flex-col grow shrink-0 self-end mt-36 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-6xl font-bold text-gray-800 leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                      À la Une
                    </h2>
                    <p className="mt-12 leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <button className="justify-center self-start px-8 py-4 mt-11 font-medium text-right text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/652c8bd291b442fedd885962c0604fce44bc9cd156ee75b24284c8746f1cd7a3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="grow w-full aspect-[0.71] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-3 text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:max-w-full">
            <h3 className="flex-auto">Prochains évènements</h3>
            <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[808px]" />
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <EventCard
                  date={{ day: "13", month: "Jun" }}
                  title="La vie à t-elle un sens ? Partie 3"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <EventCard
                  date={{ day: "25", month: "JUN" }}
                  title="Week-end en Ariège"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                />
              </div>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-20 border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px] max-md:mt-10" />
          <h2 className="self-start mt-14 ml-20 text-5xl font-bold text-gray-800 leading-[57.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Jeter un oeil à nos derniers évènements
          </h2>
          <div className="mt-11 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {["https://cdn.builder.io/api/v1/image/assets/TEMP/fb711572e739fcabee8f9271809e9fb5d62a01b53914780204fbbdbfc971a1e1?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", "https://cdn.builder.io/api/v1/image/assets/TEMP/ca8401574bb480fd38a9f0c56c69457e660140b4e44f23a322401d74232f3190?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8a0c6e4353e0084a682b5fc35fc075b8ee46458d05a388a1974ee2c5a4271c?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"].map((src, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <GalleryItem imageSrc={src} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-20 w-full min-h-[384px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9527dbadd8ba7bffbdc38ce649ea0b4701ce0e4e5720aeb3eadece54fa596e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-col mt-6 mb-3.5 max-w-full w-[784px]">
              <h2 className="text-5xl font-bold text-center text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Vous pouvez contribuer à la réussite de notre association
              </h2>
              <button className="justify-center self-center px-8 py-4 mt-11 text-base font-medium text-right text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                Je fais un don
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Evenements;