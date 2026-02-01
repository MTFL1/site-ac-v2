import * as React from "react";
import BanniereEvenement from "./BanniereCyclePhilo"
import DetailsEvenements from "./DetailsCyclePhilo"
import FormWidget from "./FormWidgetMars";



function CyclePhilosophique() {
  return (
    <main>
    <BanniereEvenement/>
    <DetailsEvenements/>
    <FormWidget/>
    </main>
  );
}

export default CyclePhilosophique;