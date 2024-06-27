import React from "react";
import BrancheLogoFooter from "../../../img/brancheLogoFooter.svg"

import "../ui/Hero.css"

function Hero() {
    return (
        <section className="section-hero w-full bg-gray-900 max-md:max-w-full">
            <div className="flex  max-md:flex-col max-md:gap-0">
                {/* Gauche */}
                <div className="section-branche flex flex-col w-[25%] relative  max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden  flex-col grow items-end px-16 pt-20 mt-72 text-lg font-medium text-right text-white aspect-[0.74] fill-cyan-600 max-md:mt-10">
                        <div className="absolute top-0 left-0 rotate-180">
                            <img
                                loading="lazy"
                                src={BrancheLogoFooter}
                                alt="motif background"
                                className="b-1 w-[150px] aspect-[0.65]"
                            />
                        </div>
                        <div className="absolute top-0 left-0 rotate-180">
                            <img
                                loading="lazy"
                                src={BrancheLogoFooter}
                                alt="motif background"
                                className="b-2 w-[250px] aspect-[0.65]"
                            />
                        </div>
                    </div>
                </div>
                
{/* Centre */}
<section className="WelcomeBanner w-[50%] relative max-md:w-full max-md:h-[33vh] ">
                    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(255, 255, 255, 0.2) 0%, rgba(192, 192, 192, 0.3) 100%)" }}></div>
                    <div className="relative z-7 max-w-screen-xl mx-auto px-4 py-28 md:px-8 max-md:py-10 ">
                        <div className="space-y-5 max-w-4xl mx-auto text-center ">
                            <h2 className="text-4xl text-[#f4f3f3] font-extrabold mx-auto md:text-5xl max-md:text-3xl ">
                                Partir à la découverte <br /> de soi et des autres
                            </h2>
                            <div className="justify-center items-center gap-x-3 sm:flex">
                                <a href="#contact">
                                    <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-bold bg-cyan-600 hover:bg-cyan-700 hover:text-[#f4f3f3] active:bg-[#4f7090] duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                        Contact
                                    </button>
                                </a>
                            </div>
                            <div className="flex justify-center items-center gap-x-6 text-gray-400 mt-6">
                                <a href="https://www.facebook.com/profile.php?id=100069804702780">
                                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                                        <g clipPath="url(#a)">
                                            <path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" />
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path fill="#fff" d="M0 0h48v48H0z" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/lantreconnaissance31/">
                                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                                        <g clipPath="url(#clip0_17_63)">
                                            <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                                            <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_17_63">
                                                <path d="M0 0h48v48H0z" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Droite */}
                <div className="section-branche flex flex-col w-[25%]  max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-20 mt-72 text-lg font-medium text-right text-white aspect-[0.74] fill-cyan-600 max-md:mt-10">
                        <div className="absolute bottom-0 right-0">
                            <img
                                loading="lazy"
                                src={BrancheLogoFooter}
                                alt="motif background"
                                className="b-1 w-[150px] aspect-[0.65]"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <img
                                loading="lazy"
                                src={BrancheLogoFooter}
                                alt="motif background"
                                className="b-2 w-[250px] aspect-[0.65]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
