import * as React from "react";

const TeamMember = ({ imageSrc, name, role, socialIconSrc }) => (
  <div className="flex flex-col grow items-center font-medium text-center text-gray-800 leading-[160%] max-md:mt-8">
    <img loading="lazy" src={imageSrc} alt={`${name}, ${role}`} className="self-stretch w-full aspect-[0.93]" />
    <div className="mt-6 text-xl">{name}</div>
    <div className="mt-6 text-xs">{role}</div>
    {socialIconSrc && <img loading="lazy" src={socialIconSrc} alt="Social media icon" className="mt-5 max-w-full aspect-[5] w-[100px]" />}
  </div>
);

const EventCard = ({ day, month, title, isLarge }) => (
  <div className={`flex grow gap-5 justify-between px-11 py-12 mx-auto w-full text-gray-800 bg-amber-300 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full ${isLarge ? 'items-start' : ''}`}>
    <div className="flex gap-5 items-start">
      <div className="flex flex-col font-medium whitespace-nowrap">
        <div className="text-5xl leading-[57.6px] max-md:text-4xl">{day}</div>
        <div className="mt-4 text-base uppercase tracking-[2px]">{month}</div>
      </div>
      <div className={`flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit ${isLarge ? '' : 'self-start'}`}>
        <div className="shrink-0 self-center w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
        <div className={isLarge ? "mt-7" : "self-end mt-8"}>{title}</div>
      </div>
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className={`shrink-0 w-14 aspect-square ${isLarge ? 'my-auto' : 'self-end mt-6'}`} />
  </div>
);

function About() {
  return (
    <div className="flex flex-col">
      
      <main>
        <section className="flex z-10 flex-col mt-14 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]" />
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
        <section>
          <h2 className="mt-20 text-5xl font-bold text-center text-gray-800 leading-[57.6px] max-md:mt-10 max-md:text-4xl">
            La team
          </h2>
          <p className="mt-9 text-base leading-7 text-center text-zinc-600 w-[519px] max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="mt-14 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <TeamMember
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36c2b0cd2b57ea747c8f9709c1406ffec7fc2d61f72c1f290e8e9b9d49d8f889?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                  name="Leonard John Davies"
                  role="Cofounder, CEO"
                  socialIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c58d49e69a55c450bc5b0ae0af801477fca7d82d4c358af1829de00a050be1?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                />
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <TeamMember
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a84d4c2d7960aa01c998663baf9d214e768ee1c078f46f16c56e3fe2a6c3c1b9?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                  name="Francis Weber"
                  role="Vice Chairman"
                  socialIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a59baa772a5fcaeec21a3fbb687b38372774eef78fbda15eb36e0abb4f4c47?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                />
              </div>
              <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <TeamMember
                          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9582b073f03954645cd165d7baa59b61cb562d280a89c74cb26b06da1852238b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                          name="Kyla Obrien"
                          role="Head of Authority"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <TeamMember
                          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6c67ddc816a03de958547fe6c7d0c1765831a601ed515811daf136fb633dbc6b?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
                          name="Adrian Dixon"
                          role="Support Executive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between self-center mt-5 max-w-full w-[428px] max-md:flex-wrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fc55795e96501a864d1572e45a4205b2fd97b05b989e92d5074d9f2b9aa9d5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 max-w-full aspect-[5] w-[100px]" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04cc1449f0e436c13851dd397b82ccea07b88c694d038e9c9f2c9dc20b289d5e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 max-w-full aspect-[5] w-[100px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {[
                { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6435eae1ebe5f73841d32df07b6eaadcaa61a9ec69a071865e43a55b6a179bfa?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", name: "Freddy Busby", role: "Project Manager", socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fde4e324d77d25f59214c9ad5a2f0beb25b51101ee6e6cdd7ca1423d5118a3d?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" },
                { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/39bda4c3be4048ca40319053da2490b979c17b56d394bd158cf53fb88b9dd7f3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", name: "Dale Banks", role: "Accountatnt, Finance", socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a62c740712366981df0223086dc696c4abe9b508cd62c0050aece7896e8c980a?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" },
                { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4478b2ba08108f31cc972a254bf841b7d8e8aada4d78f436cd6305829c979d1?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", name: "Miriam Middleton", role: "Cofounder, CEO", socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/03ce24f2ff3f29bae3b66dc6a467a87f6b81b83e19580779efc89f0307a26373?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" },
                { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/59858c7e754e7a243ad8dbd7cf5f561dd9c156b95d2912342049072356aab5c5?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&", name: "Ellen Walton", role: "Vice Chairman", socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/acea06c74dab11c9ff12d9bbe53ab3a676818b654e3de87c8d3fe5b606c6f6cd?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" }
              ].map((member, index) => (
                <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-28 w-full max-w-screen-xl min-h-[384px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9527dbadd8ba7bffbdc38ce649ea0b4701ce0e4e5720aeb3eadece54fa596e?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Background image" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col mt-6 mb-3.5 max-w-full w-[784px]">
            <h2 className="text-5xl font-bold text-center text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
  Vous pouvez contribuer à la réussite de notre association
</h2>
<button className="justify-center self-center px-8 py-4 mt-11 text-base font-medium text-right text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
  Je fais un don
</button>
</div>
</section>
<section className="mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
<div className="flex gap-5 text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:max-w-full">
<h2 className="flex-auto">Prochains évènements</h2>
<div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[808px]" />
</div>
<div className="mt-16 mb-5 w-full max-md:mt-10 max-md:max-w-full">
<div className="flex gap-5 max-md:flex-col max-md:gap-0">
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <EventCard
      day="13"
      month="Jun"
      title="La vie à t-elle un sens ? Partie 3"
      isLarge={true}
    />
  </div>
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <EventCard
      day="25"
      month="JUN"
      title="Week-end en Ariège"
      isLarge={false}
    />
  </div>
</div>
</div>
</section>
</main>

</div>
);
}

export default About;