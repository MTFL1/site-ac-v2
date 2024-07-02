import React from "react";
import ImageToulouse from "../../../img/ImageToulouse.jpg"



function Toulouse(){

return(

<div className=" flex flex-col w-full text-white max-md:max-w-full">
  <img
    loading="lazy"
    src={ImageToulouse}
    alt="Pont Saint Pierre"
    className="object-cover inset-0 w-full h-full"
  />
</div>

)
}

export default Toulouse;