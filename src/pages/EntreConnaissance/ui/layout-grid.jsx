import React from 'react';
import Conf1 from '../../../img/conf1.webp';
import Conf2 from '../../../img/conf2.webp';
import Conf3 from '../../../img/conf3.webp';
import Conf4 from '../../../img/conf4.webp';

const LayoutGrid = () => {
  const cards = [
    { id: 1, thumbnail: Conf1, colSpan: 'md:col-span-2', rowSpan: 'row-span-1' },
    { id: 2, thumbnail: Conf2, colSpan: 'md:col-span-1', rowSpan: 'row-span-1' },
    { id: 3, thumbnail: Conf3, colSpan: 'md:col-span-1', rowSpan: 'row-span-1' },
    { id: 4, thumbnail: Conf4, colSpan: 'md:col-span-1', rowSpan: 'row-span-1' },
    
  ];

  return (
    <section className='relative'>
      <div className="flex items-center space-x-3 top-0 left-0 mt-10 ml-5 md:ml-20">
        <span className="block w-10 h-1 bg-cyan-600"></span>
        <h3 className="text-grey-600 font-bold">GALLERIE</h3>
      </div>
      
      <div className="petal absolute inset-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-5 left-14 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      </div>
      
      <div className="relative flex items-center justify-center">
        <div className="w-full h-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto grid-rows-auto">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`rounded-xl overflow-hidden shadow-md ${card.colSpan} ${card.rowSpan}`}
            >
              <img 
                src={card.thumbnail} 
                alt={`thumbnail-${card.id}`} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayoutGrid;