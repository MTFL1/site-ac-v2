import React from "react";
import AlaUne from "./ui/AlaUne";
import ProchainEvent from "../../components/ProchainEvent"
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import DernierEvent from "../../components/DernierEvent";
import BandeauDon from "../../components/BandeauDon";






function Evenements() {
  return (

<main>
<AlaUne/>
<ScrollToTopButton/>
<ProchainEvent/>
<div className="relative ml-embedded z-99999999999999" data-form="l7qBcC"></div>
<DernierEvent/>
<BandeauDon/>

</main>

  );
}

export default Evenements;