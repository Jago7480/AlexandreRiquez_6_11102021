import scroll from "./passerContenu.mjs";
import fetchData from "./fetchData.mjs";
import createPhotographersList from "./createPhotographersList.mjs";
const jsonUrl = "../json/fishEye.json";

fetchData(jsonUrl).then((response)=>{

      // response contient les informations sur les photographes

      document.querySelector(".container_photographes").innerHTML = createPhotographersList(response?.photographers);

});

scroll();