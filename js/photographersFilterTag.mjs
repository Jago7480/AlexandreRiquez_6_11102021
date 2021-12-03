export default function photographersFilterTag(photographersArray, tag){

     /** 
   * Cette fonction permet de filtrer les photographes de la page index.html
   * @param {array} photographersArray
   * @param {string} tag
   * @return {array}

    */

    // Tu filtres les photographes avec la methode array.filter() et tu retournes le nouveau tableau contenant les photographes filtres.
 
    return photographersArray.filter((photograph)=>{

         if(photograph?.tags.includes(tag.toLowerCase()) === true){

              return photograph;

         }

    });

}