import React from "react";
import { useParams, Link } from "react-router-dom";
import eventsData from "../Event/eventsData";
import BrancheLogoFooter from "../../img/brancheLogoFooter.svg";

function PageEvenementTemplate() {
  const { slug } = useParams();
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
        <h1 className="text-3xl font-bold mb-4">Événement introuvable</h1>
        <p className="text-gray-600 mb-8">
          Cet événement n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/event"
          className="px-6 py-3 bg-gray-900 text-white font-bold rounded hover:bg-gray-700 transition duration-150"
        >
          Voir tous les événements
        </Link>
      </main>
    );
  }

  return (
    <main>
        {/* Bannière */}
        <section className="w-full relative justify-center items-center px-16 py-20 bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center justify-center text-white mx-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-4xl font-bold max-md:text-2xl max-md:leading-[54px] text-center">
              {event.title}
            </h1>
            {(event.lieu || event.heure) && (
              <div className="mt-10 space-y-4 flex flex-col items-center">
                {event.lieu && (
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-location-dot text-2xl"></i>
                    <p className="text-base leading-7">{event.lieu}</p>
                  </div>
                )}
                {event.heure && (
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-calendar text-2xl"></i>
                    <p className="text-base leading-7">{event.heure}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Branches décoratives */}
          <div className="absolute top-0 left-0 transform rotate-180">
            <img
              loading="lazy"
              src={BrancheLogoFooter}
              alt=""
              className="w-[150px] aspect-[0.65]"
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              loading="lazy"
              src={BrancheLogoFooter}
              alt=""
              className="w-[150px] aspect-[0.65]"
            />
          </div>
        </section>

        {/* Contenu */}
        <section className="relative">
          <div className="relative flex flex-col w-full mx-auto text-gray-900 py-10 px-5 md:w-[60%]">
            {event.speaker && (
              <h2 className="text-4xl font-bold mb-6">{event.speaker}</h2>
            )}

            {event.description && (
              <p className="text-justify leading-7 mb-6 whitespace-pre-line">
                {event.description}
              </p>
            )}

            <img
              loading="lazy"
              src={event.img}
              alt={`Flyer — ${event.title}`}
              className="object-contain rounded mb-6 w-full"
            />

            {event.inscriptionUrl && (
              <iframe
                id="haWidget"
                title="Inscription HelloAsso"
                scrolling="none"
                src={event.inscriptionUrl}
                style={{
                  width: "100%",
                  height: "1400px",
                  border: "none",
                  marginBottom: "0",
                }}
              />
            )}
          </div>
        </section>
    </main>
  );
}

export default PageEvenementTemplate;
