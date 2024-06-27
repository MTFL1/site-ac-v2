import * as React from "react";

function EventCard({ date, month, title, iconSrc }) {
  return (
    <article className="flex gap-5 justify-between px-11 py-12 mt-6 w-full text-white rounded-3xl bg-slate-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-start">
        <div className="flex flex-col font-medium whitespace-nowrap">
          <div className="text-5xl leading-[57.6px] max-md:text-4xl">{date}</div>
          <div className="mt-4 text-base uppercase tracking-[2px]">{month}</div>
        </div>
        <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit">
          <div className="shrink-0 self-end w-11 h-0.5 bg-white border-2 border-white border-solid" />
          <div className="mt-7">{title}</div>
        </div>
      </div>
      <img loading="lazy" src={iconSrc} alt="" className="shrink-0 my-auto w-14 aspect-square" />
    </article>
  );
}

function PageEvenement() {
  return (
    <div className="flex flex-col pt-2.5 bg-white">
      <main className="py-px w-full bg-slate-900 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd2fb83bbc6cf56efa5af3bb41e391a94c71dff0647b4d23edb1528ffeb3757?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="grow shrink-0 mt-36 max-w-full aspect-[0.79] fill-cyan-600 fill-opacity-20 w-[206px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 mt-28 text-white max-md:mt-10 max-md:max-w-full">
                      <h1 className="text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
                        La vie à t-elle un sens ? Partie 2
                      </h1>
                      <div className="flex gap-5 mt-16 w-full text-base font-medium leading-6 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/033f828388c3a1a5291ae789a4fd19887c42c22433b7ceee5d6bcd831438499a?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 border-2 border-white border-solid aspect-[0.85] stroke-[2px] stroke-white w-[22px]" />
                          <div className="flex-auto my-auto">Espace Allegria, Toulouse</div>
                        </div>
                        <div className="flex gap-2">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbcf674ed75217a3d94b4f6904928edec20da1d405e856191f0af43ede8bbfbc?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="shrink-0 border-2 border-white border-solid aspect-[0.88] fill-white stroke-[2px] stroke-white w-[23px]" />
                          <div className="flex-auto my-auto">Juin 25, 2024 8:30 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af6e353051aafc23c17db8e555964360184575c823a615c0e60742f69cae110?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="grow shrink-0 max-w-full aspect-[0.77] fill-cyan-600 fill-opacity-20 w-[201px] max-md:mt-10" />
                  </div>
                </div>
              </div>
              <button className="justify-center self-start px-8 py-4 mt-10 text-base font-medium text-right text-white bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5">
                Je m'inscris
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[757px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/053e78dcdd222373451df6bdd1434bdd37a737062b1fac8367c55004c0fa6678?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col mt-1.5 mb-36 max-w-full w-[768px] max-md:mb-10">
          <h2 className="text-5xl font-bold text-gray-800 leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Qu'est-ce qu'une vie qui à du sens ?
          </h2>
          <p className="mt-16 text-base leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
            Après avoir introduit la série de propos que nous débutons nous nous sommes demandés ce que signifiait, dans les discours ordinaires, ce que nous désignons par une vie ou une activité qui ont du sens. Nous aidant pour cela des analyses développées par Susan Wolf dans son petit livre Le sens dans la vie nous sommes parties de réponses ordinaires à cette question.
            <br /><br />
            La première réponse envisagée a été la suivante : "Une vie a du sens lorsque nous avons la chance de faire ce que l'on aime." Cette réponse nous a paru pertinente puisqu'elle garantit l'épanouissement de l'individu, dimension qui semble essentielle à une vie dotée de sens. Elle nous est cependant apparue insuffisante dans la mesure elle manque de valeur objective. On pourrait très bien imaginer un individu qui s'épanouit en causant du tort à son entourage ou en s'adonnant à des tâches futiles ; il semblerait alors que sa vie, bien qu'épanouie, ne puisse être qualifiée de douée de sens.
          </p>
        </div>
      </section>
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 w-full min-h-[757px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/053e78dcdd222373451df6bdd1434bdd37a737062b1fac8367c55004c0fa6678?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f71aacacc3eca1a388fed9558a5687ad7a9f5ced555c0373c0e4d1f46f6f35?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="z-10 mt-0 mb-0 max-w-full aspect-[0.75] w-[768px] max-md:mt-0 max-md:mb-2.5" />
      </section>
      <section className="flex z-10 flex-col items-start self-center px-5 mt-14 max-w-full w-[780px] max-md:mt-10">
        <p className="text-base leading-7 text-zinc-600 max-md:max-w-full">
          Une autre réponse courante à la question a alors été envisagée pour compléter la première : "Une vie a du sens lorsque nous oeuvrons à quelque chose qui a une valeur indépendante de nous même, c'est-à-dire objective. Cette dimension garantit alors que l'activité puisse être regardée comme estimable, comme douée en elle-même de valeur, ce qui semble essentiel à une vie douée de sens. C'est donc la réunion de ces deux réponses qui nous est apparu constituer une réponse satisfaisante à notre question : une vie a du sens lorsqu'une personne aime ce qu'elle fait et que ce qu'elle aime est digne de l'être.
        </p>
        <button className="justify-center px-8 py-4 mt-9 text-base font-medium text-right text-white bg-cyan-600 rounded backdrop-blur-2xl max-md:px-5">
          Je m'inscris
        </button>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <address className="flex flex-col mt-2 text-xl font-bold leading-7 text-black max-md:mt-3">
                <h3 className="leading-[160%]">Adresse</h3>
                <p className="mt-6 text-base">
                  110 Rue Achille Viadieu,<br />
                  31400 Toulouse.
                </p>
                <h3 className="mt-12 leading-8 max-md:mt-10">
                  Transports en<br />
                  commun
                </h3>
                <p className="mt-7 text-base">
                  Métro ligne B :<br />
                  Palais de justice
                </p>
              </address>
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4964231ccd6d0ac9ff789e3f94bf03b7889b823dca0eb6bf36094ced39619b40?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="Map of event location" className="grow w-full aspect-square max-md:max-w-full" />
            </div>
          </div>
        </div>
        <section className="flex gap-5 mt-28 text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h2 className="flex-auto">Prochains évènements</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0be8423fb094828914f8cab4e81546559c2e085a20dd53a0c94af959291139?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="grow shrink-0 my-auto border border-solid basis-0 border-neutral-200 stroke-[1px] stroke-neutral-200 w-fit" />
        </section>
        <EventCard
          date="23"
          month="apr"
          title="La vie à t-elle un sens ? Partie 3"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/81bcc91a76fb6da1200140bd9208d5ceddbbf7fd375b380639e059e0e65b2e41?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
        />
        <EventCard
          date="30"
          month="apr"
          title="Week-end en Ariège"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c89d7b1d547e0ec79b87867e26f98c6a3141b4b701a1c0ec845f204107440cd3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&"
        />
      </section>
      <footer className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 mt-0 w-full min-h-[560px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/739d8c448224b462ba083b5ed5b5e09b4f7670a2c4a9ccb60e5451a3c254c671?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e0c92742eb2e83ce6c102ac6cf0f3755bbea2c3efc8490ab67c17a10b23ea6?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="mt-44 mb-4 ml-7 max-w-full aspect-[0.75] w-[135px] max-md:mt-10 max-md:ml-2.5" />
      </footer>
    </div>
  );
}

export default PageEvenement;