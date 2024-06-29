import * as React from "react";
import BandeauDon from "../../components/BandeauDon";
import Team from "./ui/Team";



function About() {
  return (
    <div className="flex flex-col">
      
      <main>
        <section className="flex z-10 flex-col mt-14 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
          <div className="py-16 pr-9 pl-20 mt-6 bg-amber-300 rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-base uppercase tracking-[2px] max-md:max-w-full">
                    qui sommes nous
                  </h2>
                  <p className="mt-7 text-2xl leading-10 max-md:max-w-full">
                    L'antre Connaissance est une association loi 1901.
                  </p>
                  <p className="mt-5 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    Son but principal est de contribuer au développement et à l'épanouissement de l'individu dans toutes ses dimensions : physique, psychologique, spirituelle.
                  </p>
                  <div className="flex gap-5 justify-between self-start mt-10 font-medium text-black max-md:mt-10">
                    <div className="flex flex-col whitespace-nowrap">
                      <div className="text-2xl leading-10">400+</div>
                      <div className="mt-4 text-xs leading-5">
                        Personnes <br /> rencontrées
                      </div>
                    </div>
                    <div className="flex flex-col self-start">
                      <div className="text-2xl leading-10">20+</div>
                      <div className="mt-3 text-xs">Évènements organisés</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15850de0b77fc913c632ddc2578b7e11105963c1c899d659515341950ddb108d?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Association activities" className="grow w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center self-stretch px-16 py-20 mt-0 w-full bg-amber-100 max-md:px-5 max-md:mt-0 max-md:max-w-full">
          <div className="flex flex-col mt-72 mb-4 w-full max-w-[1086px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-w-full text-base font-bold text-gray-800 uppercase tracking-[2px] w-[718px] max-md:flex-wrap">
              <h2 className="flex-auto">Notre mission</h2>
              <h2 className="flex-auto">Notre vision</h2>
            </div>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-gray-800 max-md:mt-10 max-md:max-w-full">
                    <h3 className="text-3xl font-bold leading-10 max-md:max-w-full">
                      L'objectif de l'association est d'être une antre de la connaissance,{" "}
                    </h3>
                    <p className="mt-3 text-base leading-7 max-md:max-w-full">
                      une grotte de savoir, en essayant d'éveillez à l'amour de la sagesse par l'étude et la diffusion du savoir peu importe sa nature, qu'il soit moderne ou traditionnel : philosophie, psychologie, sociologie, histoire des idées, religion comparée, spiritualité, science dures, art…
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-gray-800 max-md:mt-10 max-md:max-w-full">
                    <h3 className="text-3xl font-bold leading-10 max-md:max-w-full">
                      Promouvoir l'entre connaissance, le vivre ensemble,{" "}
                    </h3>
                    <p className="mt-3 text-base leading-7 max-md:max-w-full">
                      la fraternité entre les individus et les peuples dans un esprit de bienveillance et d'amitié. Pour ce faire nous proposons des espaces de rencontre réels, des moments propices à la fraternisation, en étant persuadés que c'est par l'expérience de l'autre qu'on se construit soi-même.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Team/>
        <BandeauDon/>

</main>

</div>
);
}

export default About;