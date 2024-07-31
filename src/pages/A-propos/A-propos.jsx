import * as React from "react";
import BandeauDon from "../../components/BandeauDon";
import QuiSommesNousApropos from "./ui/QuiSommesNousApropos"
import NotreMissionNotreVision from "./ui/NotreMissionNotreVision"


function About() {
  
  return (
      <main className="flex flex-col">
        <QuiSommesNousApropos/>
        <NotreMissionNotreVision/>
        <BandeauDon/>
      </main>
);
}

export default About;