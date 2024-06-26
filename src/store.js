import { reactive } from "vue";

//*Importo le imagini per fare il carrousel

import image1 from "./assets/img/h3-rev-img-2.png";
import image2 from "./assets/img/h3-rev-img-4.png";
import image3 from "./assets/img/h3-rev-img-6.png";

//!imagini per fix
// import backgroundImage1 from "./assets/img/h3-rev-img-1.png";
// import backgroundImage2 from "./assets/img/h3-rev-img-3.png";
// import backgroundImage3 from "./assets/img/h3-rev-img-5.png";
//!imagini per fix////

//*Creo l'array degli img per il carrousel

export const store = reactive({
  images: [
    image1,
    image2,
    image3,
  ],

  textData: [
    '"FORGET THE MAINSTREAM PIZZERIAS; THIS HIDDEN GEM DELIVERS THE ULTIMATE NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
    '"SKIP THE HIP PIZZERIAS; THIS UNDER-THE-RADAR SPOT WHIPS UP THE FINEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
    '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
    // Agrega más textos si es necesario
  ],
  //!imagini per bg fixare
  // backgroundImages: [
  //   backgroundImage1,
  //   backgroundImage2,
  //   backgroundImage3,
  // ]
  //!imagini per fix////
});
