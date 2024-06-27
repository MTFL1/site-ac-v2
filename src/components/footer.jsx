import LogoFooter from "../img/g16.svg"
import BrancheLogoFooter from "../img/brancheLogoFooter.svg"


function Footer () {

    const footerNavs = [
        {
            label: "Plan du site",
            items: [
                {
                    href: '/',
                    name: 'Accueil'
                },
                {
                    href: '/evenements',
                    name: 'Évènements'
                },
                {
                    href: '/antreConnaissance',
                    name: 'Antre connaissance'
                },
                {
                    href: '/entreConnaissance',
                    name: 'Entre connaissance'
                },
            ],
        },
        {
            label: "Infos",
            items: [
                {
                    href: '/a propos',
                    name: 'À propos'
                },
                {
                    href: '/contact',
                    name: 'Contact'
                },
                {
                    href: '#',
                    name: 'Confidentalité'
                },
                {
                    href: '#',
                    name: 'Cookies'
                },
            ]
        },
        {
            label: "Connexion",
            items: [
                {
                    href: 'https://www.instagram.com/lantreconnaissance31/',
                    name: 'Instagram'
                },
                {
                    href: 'https://www.facebook.com/profile.php?id=100069804702780',
                    name: 'Facebook'
                },
            ],
        }
    ]

    return (
<footer className="relative pt-10 bg-gray-900">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
            <div className="flex-1 max-w-lg">
                <h3 className="text-white text-2xl font-bold">
                S'abonner pour être informé des prochains évènements
                </h3>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                    <div className="relative">
                        <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-cyan-600 hover:bg-cyan-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                        S'abonner
                    </button>
                </form>
            </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
            <img 
                loading="lazy" 
                src={LogoFooter} 
                alt="Logo" 
                className="shrink-0 my-auto max-w-full aspect-[0.75] w-[130px]" 
            />
            {
                footerNavs.map((item, idx) => (
                    <ul
                        className="space-y-4 text-gray-300"
                        key={idx}
                    >
                        <h4 className="text-gray-200 font-semibold sm:pb-2">
                            {item.label}
                        </h4>
                        {
                            item.items.map(((el, idx) => (
                                <li key={idx}>
                                    <a
                                        href={el.href}
                                        className="duration-150 hover:text-gray-400"
                                    >
                                        {el.name}
                                    </a>
                                </li>
                            )))
                        }
                    </ul>
                ))
            }
        </div>
        <div className="mt-10 py-10 border-t border-gray-700 flex items-center justify-between">
            <div>
                <p className="text-gray-300">© 2024 L'Antre connaissance. Tous droits réservés.</p>
                <p className="text-gray-300">Fait avec ❤️ par <a className="text-cyan-600" href="https://www.atelierdecember.fr/">Atelier December</a></p>
            </div>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6 md:mt-0">
                <a href="https://www.facebook.com/profile.php?id=100069804702780">
                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                        <g clip-path="url(#a)">
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
                        <g clip-path="url(#clip0_17_63)">
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
    <div className="absolute bottom-0 right-0">
        <img 
            loading="lazy" 
            src={BrancheLogoFooter} 
            alt="motif background" 
            className="w-[250px] aspect-[0.65]" 
        />
    </div>
</footer>

    )
}

export default Footer;