import * as React from "react";
import BanniereConfPhilo from "./BanniereConfPhilo";
import DetailsConfPhilo from "./DetailsConfPhilo"
import FormWidget from "./FormWidget";



function ConferencePhilosophique() {
  return (
    <main>
    <BanniereConfPhilo/>
    <DetailsConfPhilo/>
    <FormWidget/>
    </main>
  );
}

export default ConferencePhilosophique;