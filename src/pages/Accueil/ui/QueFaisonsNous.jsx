import React from "react"

import QFN from "../../../img/QFN.svg"


function QueFaisonsNous() {

    const features = [
        {
           
            title: "Conférences",
            desc: "Nous proposons des conférences sur divers sujets. Elles sont animées par des experts et permettent des échanges enrichissants."
        },
        {
          
            title: "Maraudes",
            desc: "Nos maraudes visent à aider les personnes sans-abri. Nous distribuons des repas et des vêtements, tout en apportant du soutien moral."
        },
        {
          
            title: "Excursions",
            desc: "Nous organisons des excursions pour découvrir notre région. Ces sorties renforcent les liens entre participants et favorisent la convivialité."
        },
        {
          
          title: "Initiation à la méditation",
          desc: "Nous organisons régulièrement des séances de méditation collectives."
      },
        {
          
            title: "Rencontres interculturelles",
            desc: "Nos rencontres interculturelles célèbrent la diversité. Elles incluent des ateliers et des discussions pour mieux comprendre les cultures du monde."
        }
    ]

    return (
        <section className="py-14 bg-gray-900 relative">
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
        <div className="max-w-screen-xl mx-auto px-4 text-white gap-16 justify-between md:px-8 lg:flex relative z-10">
          <div>
            <div className="max-w-xl space-y-3">
              <div className="flex items-center space-x-3">
                <span className="block w-10 h-1 bg-cyan-600"></span>
                <h3 className="text-cyan-600 font-bold">
                  QUE FAISONS NOUS
                </h3>
              </div>
              <p className="text-3xl font-semibold sm:text-4xl">
                Quelques activités que nous organisons
              </p>
              
            </div>
            <div className="mt-12 max-w-lg lg:max-w-none">
              <ul className="space-y-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-cyan-600">
                {
                  features.map((item, idx) => (
                    <li key={idx} className="flex gap-x-4 pl-4">
                      <div className="flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold">
                          {item.title}
                        </h4>
                        <p className="mt-3">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img src={QFN} alt="" className="w-full shadow-lg rounded-lg" />
          </div>
        </div>
      </section>
      
    )
}

export default QueFaisonsNous;