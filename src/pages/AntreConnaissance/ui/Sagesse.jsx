import React from "react";

import Sagesse1 from "../../../img/Sagesse1.jpg"
import Sagesse2 from "../../../img/Sagesse2.jpg"
import Sagesse3 from "../../../img/Sagesse3.jpg"
import Sagesse4 from "../../../img/Sagesse4.jpg"
import Sagesse5 from "../../../img/Sagesse5.jpg"
import Sagesse6 from "../../../img/Sagesse6.jpg"
import Sagesse7 from "../../../img/Sagesse7.jpg"
import Sagesse8 from "../../../img/Sagesse8.jpg"
import Sagesse9 from "../../../img/Sagesse9.jpg"


    function Sagesse(){

        const sagesses = [
            {
                title: "Flyer",
                img: Sagesse1,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse2,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse3,
                href: "#"
            },
            {
                title: "Flyer",
                img: Sagesse4,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse5,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse6,
                href: "#"
            },
            {
                title: "Flyer",
                img: Sagesse7,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse8,
                href: "#"
            },
            {
                title: "A Quick Guide to WordPress Hosting",
                img: Sagesse9,
                href: "#"
            }
           
        ]

        return (
           
            <section className="relative py-20">
  <div className="petal absolute inset-0">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-24 right-14 aspect-[0.66] fill-teal-300 fill-opacity-20 w-[49px] max-md:mt-10" />
  </div>

              <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex items-center space-x-3">
                  <span className="block w-10 h-1 bg-cyan-600"></span>
                  <h3 className="text-gray-900 font-bold">SAGESSE</h3>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sagesses.map((items, key) => (
                    <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                      <a href={items.href}>
                        <div className="relative w-full pt-[100%]"> {/* Proportion 1:1 */}
                          <img
                            src={items.img}
                            loading="lazy"
                            alt={items.title}
                            className="absolute inset-0 shadow-md w-full h-full object-fill rounded-lg"
                          />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
        )
    }

    export default Sagesse;

   