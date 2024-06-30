import React from 'react';

const LayoutGrid = () => {
  const cards = [
    { id: 1, thumbnail: 'https://via.placeholder.com/600x150', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { id: 2, thumbnail: 'https://via.placeholder.com/200x200', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 3, thumbnail: 'https://via.placeholder.com/200x200', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 4, thumbnail: 'https://via.placeholder.com/600x150', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { id: 5, thumbnail: 'https://via.placeholder.com/300x300', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { id: 6, thumbnail: 'https://via.placeholder.com/300x300', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  ];

  return (
    <section className='relative'>
          <div className="petal absolute inset-0">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-5 left-14 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    </div>

    <div className="relative flex items-center justify-center">
      <div className="w-full h-full p-10 grid grid-cols-2 gap-4 max-w-7xl mx-auto grid-rows-auto">
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
