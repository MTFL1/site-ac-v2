import React from "react";

function DetailsContact()  {
  const ContactInfo = ({ label, value }) => (
    <div className="flex flex-col">
      <div className="text-base leading-7">{value}</div>
      {label && <div className="mt-14 text-xl font-bold leading-8 max-md:mt-10">{label}</div>}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-900">
      <section className="flex flex-col w-full md:w-[55%] relative justify-center items-center px-16 py-20 bg-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
          <h1 className="text-6xl font-bold leading-[67px] max-md:text-4xl max-md:leading-[54px]">
            Nous aimerions vous connaître
          </h1>
          <p className="mt-9 text-base leading-7 max-md:max-w-full">
            Vous avez une question ou vous souhaitez obtenir des informations ? N'hésitez pas à nous contacter via les réseaux sociaux ou les coordonnées suivantes.
          </p>
        </div>
      </section>
      
      <section className="flex flex-col ml-5 mt-5 w-full md:w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
          <h2 className="text-2xl font-bold leading-10">Discutons-en !</h2>
          <hr className="shrink-0 mt-2 h-px border border-solid bg-neutral-200 border-neutral-200" />
          <div className="gap-5 mt-5">
            <ContactInfo value="+33 (0)6 41 06 62 83" label="" />
            <div className="flex-auto self-start text-base leading-7">
            association.lantreconnaissance@gmail.com
            </div>
          </div>
          <address className="mt-6 text-base leading-7 not-italic">
            110 Rue Achille Viadieu,
            <br />
            31400 Toulouse
          </address>
        </div>
        <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
          <h2 className="text-2xl font-bold leading-10">Suivez-nous :</h2>
          <hr className="shrink-0 mt-4 h-px border border-solid bg-neutral-200 border-neutral-200" />

          <div className="flex flex-col gap-6 text-white">
            <a
              href="https://www.facebook.com/profile.php?id=100069804702780"
              className="flex items-center mt-4 gap-2 hover:text-cyan-500 duration-150"
            >
              <svg
                className="w-6 h-6 text-white-400 hover:text-cyan-500 duration-150"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="white"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/lantreconnaissance31/"
              className="flex items-center gap-2 hover:text-cyan-500 duration-150"
            >
              <svg
                className="w-6 h-6 fill-current text-white hover:text-cyan-500 duration-150"
                viewBox="0 0 48 48"
              >
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
              <span className="white">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsContact;
