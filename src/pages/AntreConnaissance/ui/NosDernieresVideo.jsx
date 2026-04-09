import React from "react"

const videos = [
    { id: "W7rXQtb8BlY", si: "_SnvMgtJmz6EqX_t" },
    { id: "4AY6C4dUMkI", si: "LE_GybvUtwGCVGgH" },
    { id: "BgOHtRXWgQg", si: "CMIlulc9UPz9E4fk" },
    { id: "H9uMmWnx81M", si: "gxNAOigsGLfPs8HY" },
    { id: "_G_PO-SIa80", si: "JwOs7M5w9ZhGQWNq" },
    { id: "zyUIahqanjs", si: "WzR8MPsOl0OJzATp" },
]

function NosDernieresVideo() {
    return (
        <section className="py-14 relative">
            <div className="petal absolute inset-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 bottom-2 ml-14 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-2/3 left-1/2 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute shrink-0 top-14 left-0 ml-64 rotate-45 aspect-[0.56] fill-teal-300 fill-opacity-20 w-[40px] max-md:mt-10" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-52 right-16 rotate-45 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/077526e80df6595ab71c00788b3a9e12ea1dfdd7ed1017c00c1c9e91f217aab0?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute top-6 right-1/4 w-9 aspect-[0.67] fill-yellow-600 fill-opacity-20" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d0cc958661239053bacf859eb20cb7705bd8eaaa3a7ec83096b7f29ce6c224?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" alt="" className="absolute bottom-24 right-14 aspect-[0.66] fill-teal-300 fill-opacity-20 w-[49px] max-md:mt-10" />
            </div>
            <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex items-center space-x-3">
                    <span className="block w-10 h-1 bg-cyan-600"></span>
                    <h3 className="text-gray-900 font-bold">NOS DERNIÈRES VIDEOS</h3>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {videos.map((video) => (
                            <li key={video.id}>
                                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?si=${video.si}`}
                                        title="YouTube video player"
                                        style={{ border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default NosDernieresVideo;
