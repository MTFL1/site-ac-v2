import React from "react";
import AlaUne from "./ui/AlaUne";
import ProchainEvent from "../../components/ProchainEvent"
import ScrollToTopButton from "../../components/ScrollButton/ScrollButton";
import DernierEvent from "../../components/DernierEvent";






function Evenements() {
  return (

<main>
<AlaUne/>
<ScrollToTopButton/>
<ProchainEvent/>
<DernierEvent/>

</main>

  );
}

export default Evenements;