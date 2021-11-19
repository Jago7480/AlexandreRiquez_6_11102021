import photographersFilterTag from "./photographersFilterTag.mjs";
import createPhotographersList from "./createPhotographersList.mjs";
export default function handleTagsList(photographersArray){

    /** 
   * Cette fonction permet gerer la liste de tags de la page d'accueil
   * @param {array} photographersArray
   * @return {true}

    */

    document.querySelector(".navbar").addEventListener("click", (event)=>{
        
            if(event.target !== event.currentTarget){

                 const navbarChildTagName = event.target?.dataset?.tag;

                 const arrayFilteredPhotographers = photographersFilterTag(photographersArray, navbarChildTagName);

                 document.querySelector(".container_photographes").innerHTML = createPhotographersList(arrayFilteredPhotographers);
                 

            }

    });

}