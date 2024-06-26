import React from "react";
import LogoFooter from "../img/g16.svg"
import BrancheLogoFooter from "../img/brancheLogoFooter.svg"

function Footer() {
    return (
        <footer className="flex gap-5 items-start pt-20 pl-20 mt-4 w-full bg-gray-900 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <img 
                loading="lazy" 
                src={LogoFooter} 
                alt="Logo" 
                className="shrink-0 my-auto max-w-full aspect-[0.75] w-[135px]" 
            />
            <nav className="flex gap-5 justify-between my-auto text-sm leading-6 text-white">
                <div className="flex flex-col">
                    <h3 className="text-base font-bold">Accueil</h3>
                    <a href="#" className="mt-9">À propos</a>
                    <a href="#" className="mt-7">Évènements</a>
                    <a href="#" className="mt-10">Antre-connaissance</a>
                    <a href="#" className="mt-9">Entre-connaissance</a>
                </div>
                <div className="flex flex-col self-start whitespace-nowrap">
                    <h3 className="text-base font-bold">Plus</h3>
                    <a href="#" className="mt-9">Contact</a>
                    <a href="#" className="mt-9">Don</a>
                </div>
            </nav>
            <div className="flex flex-col self-start mt-6 text-sm leading-6 text-white">
                <h3 className="text-base font-bold">Connect</h3>
                <a href="#" className="mt-10">Facebook</a>
                <a href="#" className="mt-9">Instagram</a>
            </div>
            <div className="flex-auto self-end mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:max-w-full">
                            <h3 className="text-3xl font-bold leading-10 text-white max-md:max-w-full">
                                S'abonner pour être informé des prochains évènements
                            </h3>
                            <form className="flex gap-0 mt-9 text-base max-md:flex-wrap max-md:max-w-full">
                                <label htmlFor="email" className="sr-only">Votre email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Votre email"
                                    className="z-10 grow justify-center items-start px-6 py-7 rounded border border-solid border-indigo-50 border-opacity-30 text-indigo-50 text-opacity-30 w-fit max-md:px-5 max-md:max-w-full"
                                />
                                <button 
                                    type="submit" 
                                    className="justify-center px-8 py-4 font-medium text-right text-gray-800 whitespace-nowrap bg-white rounded backdrop-blur-2xl max-md:px-5"
                                >
                                    S'abonner
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                        <img 
                            loading="lazy" 
                            src={BrancheLogoFooter}
                            alt="motif background" 
                            className="grow shrink-0 mt-14 max-w-full aspect-[0.65] fill-teal-500 fill-opacity-20 w-[180px] max-md:mt-10" 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
