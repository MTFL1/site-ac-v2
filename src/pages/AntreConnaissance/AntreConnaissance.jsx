import * as React from "react";

const EventCard = ({ date, month, title, iconSrc }) => (
  <div className="flex relative grow gap-5 px-11 py-12 mx-auto w-full text-white rounded-3xl bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <div className="flex flex-auto gap-5 items-start">
      <div className="flex flex-col font-medium whitespace-nowrap">
        <div className="text-5xl leading-[57.6px] max-md:text-4xl">{date}</div>
        <div className="mt-4 text-base uppercase tracking-[2px]">{month}</div>
      </div>
      <div className="flex flex-col grow shrink-0 mt-2.5 text-3xl font-bold leading-10 basis-0 w-fit">
        <div className="shrink-0 self-end w-12 h-0.5 bg-white border-2 border-white border-solid" />
        <div className="mt-6">{title}</div>
      </div>
    </div>
    <img loading="lazy" src={iconSrc} alt="" className="shrink-0 my-auto w-14 aspect-square" />
  </div>
);

const VideoThumbnail = ({ src }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <img loading="lazy" src={src} alt="Video thumbnail" className="grow w-full aspect-[1.79] max-md:mt-10" />
  </div>
);

const SpeakerCard = ({ name, date, imageSrc }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex relative flex-col grow font-medium text-gray-800 leading-[160%] max-md:mt-10">
      <img loading="lazy" src={imageSrc} alt={`Speaker ${name}`} className="w-full aspect-[1.79]" />
      <div className="flex flex-col self-start mt-7 ml-2.5">
        <div className="text-xl text-center">{name}</div>
        <div className="mt-5 text-xs">{date}</div>
      </div>
    </div>
  </div>
);

function AntreConnaissance() {
  return (
    <div className="flex flex-col pt-2.5 pb-20 bg-white">
      <main>
        <section className="flex overflow-hidden relative flex-col items-start px-20 pt-16 w-full min-h-[757px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2516e73084ae676f16628e91ab27fa4680d7e25913a2f4500a7beb3aeca02f2b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="ml-6 border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px] max-md:ml-2.5" />
          <h1 className="relative mt-36 ml-6 text-4xl font-medium text-gray-800 leading-[56px] max-md:mt-10 max-md:ml-2.5">
            Sagesse
          </h1>
          <div className="relative self-stretch px-px mt-10 ml-3 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f266082a2206d2e1e7317fc154f514a74560fc7dac9687a4c1dbde59a5f58d?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Sagesse  1" className="grow w-full aspect-[0.89] max-md:mt-6 max-md:max-w-full" />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center min-h-[475px] max-md:mt-6 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1c4f073162ab5b93be87260f531557850e970169fb3f3f053e00100ace3ab4?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Sagesse 2" className="w-full aspect-[0.89] max-md:max-w-full" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center min-h-[475px] max-md:mt-6 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55da71e0f90d48b62c750262a86afa0a4c4f5ddafcad9d7778aaeacace2c147?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Sagesse 3" className="w-full aspect-[0.89] max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e24522ea56a87422ac43c2ab8ebf10fbb3bef3d1b0dd33898115de96a879d40d?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="4" className="w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col justify-center min-h-[475px] max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70e6eba8ac951410aa6f9b132facc49ed44d63e96bdfba0bfc85b1d0d577a234?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="5" className="w-full aspect-[0.89] max-md:max-w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col justify-center min-h-[475px] max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a495b8137f40bd472e150dee2c92f600d702b0561bfe5a6e0596dc16accf818c?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="6" className="w-full aspect-[0.89] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="z-10 self-center px-5 mt-0 w-full max-w-[1323px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11663c95998d366a12a95dcf3c27edae1e4a2c2fde4e4791bf794ffbc49761b5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="7" className="grow w-full aspect-[0.89] max-md:mt-6 max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center min-h-[475px] max-md:mt-6 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cb554b17023bdc902407fc29f744b0e6fa00450c726ab5f9a75bbcf5d37e75?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="8" className="w-full aspect-[0.89] max-md:max-w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center min-h-[475px] max-md:mt-6 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ae386828b38d0d128d6d9ba066b8d95db6df5b2c7a2c296c4ff9b28ec72a73?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d2eb4e09f9af8d0fa0fe73a342b167ac2ff485fea9db8b1034e8ce89e8678c?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="9" className="w-full aspect-[0.89] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex gap-5 justify-between self-center px-5 mt-14 w-full max-w-screen-xl text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h2>Nos dernières vidéos</h2>
          <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[808px]" />
        </section>
        <section className="self-center px-5 mt-16 w-full max-w-[1310px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <VideoThumbnail src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e2fb4bda64235a3bc2c7b5b10eaedd6d38ec878744965d28a66719bf5bba0d7?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
            <VideoThumbnail src="https://cdn.builder.io/api/v1/image/assets/TEMP/7abc0cc1e6279fa61f232312c8ba513dd741f75d36fdcaa3e85a8ac2fb6a3000?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
            <VideoThumbnail src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d7255a3d5157c17b87cf187b23bf2277d395c391fe6bcab2c81e26cf746920?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
          </div>
        </section>
        <section className="flex overflow-hidden relative flex-col px-20 pt-2 mt-5 w-full min-h-[757px] max-md:px-5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b2fa262f303a44adb288824c67f4f60a69618ea91ca37ec27370c5d181f2b05?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative gap-5 ml-3.5 font-medium text-gray-800 leading-[160%] max-md:flex-wrap max-md:pr-5 max-md:mr-1.5 max-md:max-w-full">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col flex-1">
                <div className="text-xl">Sheikh AbdulAziz Al Amghari</div>
                <div className="mt-5 text-xs">24/02/25</div>
              </div>
            ))}
          </div>
          <div className="relative mt-14 ml-3.5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <SpeakerCard name="Sheikh AbdulAziz Al Amghari" date="24/02/25" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f02da4d884ba8702fd92b854006a7d87d41a174513e2a6c851c7141a58ba8b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
              <SpeakerCard name="Sheikh AbdulAziz Al Amghari" date="24/02/25" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9a27f58002ed62765afd6cfdb2ae61c59239681d01e6371ba768f8fe0501246b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
              <SpeakerCard name="Sheikh AbdulAziz Al Amghari" date="24/02/25" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/89a7a41ad057debd7c4abad4e7afe5d74761bdf507caa034bc5aa61643bdfcf2?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" />
            </div>
          </div>
        </section>
        <section className="flex relative gap-5 self-center mt-16 w-full text-4xl font-medium text-gray-800 leading-[56px] max-w-[1292px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h2 className="shrink basis-auto grow-0">Prochains évènements</h2>
          <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[820px]" />
        </section>
        <section className="relative self-center mt-16 w-full max-w-[1292px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <EventCard
                date="13"
                month="Jun"
                title="La vie à t-elle un sens ? Partie 3"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cb0bb4e38f5e17d061f0ed9b3841d1c3704c06da864104684d88b38bf5c76047?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <EventCard
                date="25"
                month="JUN"
                title="Week-end en Ariège"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
              />
            </div>
          </div>
        </section>
      </main>
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-white min-h-[757px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3712e1acbc969d05ef8cadf7fc6997118e75d9fe1cc769a5f58bef67a94288ce?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-6 mb-32 w-full max-w-screen-xl min-h-[384px] max-md:px-5 max-md:mb-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9527dbadd8ba7bffbdc38ce649ea0b4701ce0e4e5720aeb3eadece54fa596e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col mt-6 mb-3.5 max-w-full w-[784px]">
            <h2 className="text-5xl font-bold text-center leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Vous pouvez contribuer à la réussite de notre association
            </h2>
            <button className="justify-center self-center px-8 py-4 mt-11 text-base font-medium text-right bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
              Je fais un don
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AntreConnaissance;