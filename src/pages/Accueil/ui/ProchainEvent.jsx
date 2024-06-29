import React from "react";

function ProchainEvent() {

    const EventCard = ({ day, month, title, isLarge }) => (
        <div className={`flex grow p-8 mx-auto w-[100%] text-white bg-gray-900 rounded-3xl md:flex-wrap  md:mt-4 md:max-w-full ${isLarge ? 'pb-12 ' : ''}`}>
          <div className="flex flex-auto gap-4 w-[90%] items-start">
            <div className="flex flex-col  font-medium whitespace-nowrap">
              <div className="text-4xl leading-[48px] md:text-3xl">{day}</div>
              <div className="text-xl text-base uppercase tracking-wide">{month}</div>
              <div className="shrink-0 self-start w-10 h-0.5 bg-white border-2 border-white border-solid" />
            </div>
            <div className={`flex flex-col grow shrink-0 mt-2 text-2xl font-bold leading-8 basis-0 w-fit ${isLarge ? 'flex-auto self-start mt-1.5' : ''} md:text-xl md:leading-6`}>
        
            <div className={isLarge ? "flex-auto self-start md:text-3xl " : ""}>{title}</div>
            </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className={`shrink-0 w-12 aspect-square ${isLarge ? 'self-end mt-4' : 'my-auto'}`} />
          </div>
        </div>
      );

        return(

              <section className="relative section-events flex flex-col items-center px-4 my-20 mt-8 w-full md:px-2 md:mt-6 md:max-w-full">
                <div className="petal absolute inset-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-5 left-14 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
                </div>
               
              <div className="relative z-10 flex gap-4 justify-between items-start w-full text-3xl font-medium text-gray-800 leading-[48px] max-w-[1200px] md:flex-wrap md:max-w-full">
                <div className="flex items-center space-x-3 ml-[5%]">
                    <span className="block w-10 h-1 bg-cyan-600"></span>
                    <h3 className=" font-bold">Prochains évènements</h3>
                </div>
                </div>
                <div className="relative z-10 mt-6 w-full max-w-screen-xl md:max-w-[90%]">
                    <div className="flex flex-col md:flex-row md:gap-4">
                    <div className="flex flex-col w-full md:w-1/2">
                        <EventCard day="13" month="Jun" title="La vie à t-elle un sens ? Partie 3" isLarge={true} />
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
                        <EventCard day="25" month="JUN" title="Week-end en Ariège" isLarge={true} />
                    </div>
                </div>
              </div>
              </section>
            
        )
}

export default ProchainEvent;