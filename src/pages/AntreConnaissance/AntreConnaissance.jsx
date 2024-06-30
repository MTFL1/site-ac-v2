import React from "react";
import BandeauDon from "../../components/BandeauDon"
import Sagesse from "./ui/Sagesse";
import NosDernieresVideo from "./ui/NosDernieresVideo"
import ProchainEvent from "../../components/ProchainEvent"





function AntreConnaissance() {
  return (
      <main>
        <Sagesse/>
        <NosDernieresVideo/>
        <ProchainEvent/>
        <BandeauDon/>
      </main>
  );
}

export default AntreConnaissance;