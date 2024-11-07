import React from "react";
import AlaUne from "./ui/AlaUne";
import ProchainEvent from "../../components/ProchainEvent"
import DernierEvent from "../../components/DernierEvent";
import BandeauDon from "../../components/BandeauDon";
import MailerLiteScript from "./ui/MailerliteScript";





function Evenements() {
  return (

<main>
<AlaUne/>
<DernierEvent/>
<ProchainEvent/>
<MailerLiteScript/>
<BandeauDon/>
</main>

  );
}

export default Evenements;