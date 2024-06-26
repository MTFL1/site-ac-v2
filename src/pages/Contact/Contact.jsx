import React from "react";
import "./Contact.css";
import Map from "../../img/Map.jpg";

function Logo({ src, className }) {
  return <img loading="lazy" src={src} alt="" className={className} />;
}

function ContactInfo({ title, content }) {
  return (
    <div className="flex flex-col">
      <div className="text-base leading-7">{content}</div>
      {title && <div className="mt-14 text-xl font-bold leading-8 max-md:mt-10">{title}</div>}
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col bg-white">
      <main className="flex justify-center items-center px-16 py-20 w-full bg-slate-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-6 mb-2 w-full max-w-[1058px] max-md:max-w-full">
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3f709664aa98339335001b6613af153621b8f99261f5530271cf348134afb3?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" className="border-2 border-white border-solid aspect-[33.33] fill-white stroke-[2px] stroke-white w-[72px]" />
          <section className="flex flex-col pl-20 mt-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="ml-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Nous aimerions vous connaître
                    </h1>
                    <p className="mt-9 text-base leading-7 max-md:max-w-full">
                      Vous avez une question à poser ou vous souhaitez obtenir des informations ? N'hésitez pas à nous contacter via le formulaire ou les coordonnées suivantes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
                    <h2 className="text-2xl font-bold leading-10">Discutons-en !</h2>
                    <hr className="shrink-0 mt-2 h-px border border-solid bg-neutral-200 border-neutral-200" />
                    <div className="flex gap-5 mt-5">
                      <ContactInfo content="+33 6012346514" title="Adresse" />
                      <div className="flex-auto self-start text-base leading-7">hello@antre-connaissance.com</div>
                    </div>
                    <address className="mt-6 text-base leading-7 not-italic">
                      110 Rue Achille Viadieu, <br /> 31400 Toulouse.
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/563481ec0ebc7ca7732c47708829208e96cf3da938bf7d4b4f1d9d30ae2ea1bd?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" className="self-end mt-9 mr-72 max-w-full aspect-[5] w-[100px] max-md:mr-2.5" />
          </section>
        </div>
      </main>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5cd9df2c1d468b90bc32015cb8f6e2797784cd569b14bb854d551ec1e8b4634?apiKey=aa921c22d5e8470a9701bc1a79b29d5d&" className="brancheLogoAdress" />
      <div className="flex overflow-hidden relative flex-col justify-center items-start w-full min-h-[448px] max-md:max-w-full no-padding-margin">
        <img loading="lazy" src={Map} alt="" className="object-contain absolute inset-0 size-full" />
      </div>
    </div>
  );
}

export default Contact;
