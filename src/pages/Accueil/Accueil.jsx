import React from "react";
import Hero from './ui/Hero';
import BandeauDon from "../../components/BandeauDon"
import QuiSommesNous from "./ui/QuiSommesNous"
import QueFaisonsNous from "./ui/QueFaisonsNous"




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
      <Hero/>
      <QuiSommesNous/>
      <QueFaisonsNous/>


        

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
<BandeauDon/>
</main>
</div>
);
}

export default Accueil;