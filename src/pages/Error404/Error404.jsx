 import React from "react";
 
 
 function Error404() {
    return (
        <main>
 <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-cyan-600 font-semibold">
            Erreur 404
        </h3>
        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page non trouvée
        </p>
        <p className="text-gray-600">
            Désolé, la page que vous recherchez est introuvable ou a été supprimée.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/" className="block py-2 px-4 text-white font-medium bg-cyan-600 duration-150 hover:bg-cyan-500 active:bg-cyan-700 rounded-lg">
                Revenir à l'accueil
            </a>
        </div>
    </div>
</div>

        </main>
    )
}

export default Error404;