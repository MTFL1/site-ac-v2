import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoNav from '../../img/logo.svg';
import './navbar.css';

function Navbar() {
    const [state, setState] = useState(false);

    // Liste de navigation
    const navigation = [
        { title: "Accueil", path: "/" },
        { title: "À propos", path: "/a propos" },
        { title: "Évènements", path: "/event" },
        { title: "Antre-connaissance", path: "/antreConnaissance" },
        { title: "Entre-connaissance", path: "/entreConnaissance" },
        { title: "Contact", path: "/contact" }
    ];

    // Fonction pour fermer la navigation après un clic sur un lien
    const handleLinkClick = () => {
        setState(false);
    };

    return (
        <nav className="bg-white w-full lg:static relative">
            <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
                <div className="flex items-center justify-between lg:block">
                    <NavLink to="/">
                        <img
                            src={logoNav}
                            width={46}
                            height={48}
                            alt="AC logo"
                            className="nav-logo"
                        />
                    </NavLink>
                    <div className="lg:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-start pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="space-y-8 lg:flex lg:space-x-6 lg:space-y-0 lg:justify-center lg:items-center">
                        {
                            navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-900 hover:text-cyan-600">
                                    <NavLink
                                        to={item.path}
                                        activeclassname="active"
                                        exact="true"
                                        onClick={handleLinkClick} // Appelle handleLinkClick
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                        {/* Bouton "Don" visible en mode mobile/tablette */}
                        <li className="text-gray-900 hover:text-cyan-600 lg:hidden">
                            <a
                                href="https://www.helloasso.com/associations/l-antre-connaissance/formulaires/6"
                                className="py-3 px-8 text-white bg-gray-900 hover:bg-cyan-600 rounded-md shadow-md"
                                onClick={handleLinkClick} // Assure la fermeture pour ce lien aussi
                            >
                                Don
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Bouton "Don" visible uniquement en mode bureau */}
                <div className="hidden lg:inline-block">
                    <a href="https://www.helloasso.com/associations/l-antre-connaissance/formulaires/6" className="py-3 px-8 text-white bg-gray-900 hover:bg-cyan-600 rounded-md shadow-md">
                        Don
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
