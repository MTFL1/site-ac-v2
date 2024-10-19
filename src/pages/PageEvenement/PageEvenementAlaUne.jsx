import * as React from "react";
import BanniereEvenement from "./ui/BanniereEvenement"
import DetailsEvenements from "./ui/Detailsevenements"
import FormWidget from "./ui/FormWidget";



function PageEvenementAlaUne() {
  return (
    <main>
    <BanniereEvenement/>
    <DetailsEvenements/>
    <FormWidget/>
    </main>
  );
}

export default PageEvenementAlaUne;