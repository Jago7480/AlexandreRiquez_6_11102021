export default function displayPhotographers(arrOfPhotographers){
   /** 
   * Cette fonction permet d'afficher les photographes
   * @param {array} arrOfPhotographers
   * @return {html}

    */


    let html = "";

    // Création de gabarits de littéraux avec backticks
    arrOfPhotographers.forEach((photographer)=>{

        html+= `
            <article class="panel-photographe">
                <a href="photographer-page.html?id=${photographer.id}" class="link-photographe">
                    <div class="container-avatar">
                        <img src="img_vid/Photographers_ID_Photos/${photographer.portrait}" alt="${photographer?.name}">
                    </div>
                    <h2 class="nom-photographe">${photographer?.name}</h2>
                </a>
                <div class="infos-photographe">
                    <div class="localisation-photographe">
                        <h4 class="localisation">${photographer.city}, ${photographer.country}</h4>
                    </div>
                    <p class="text-photographe">${photographer.tagline}</p>
                    <h5 class="prix">${photographer.price}€/jour</h5>
                </div>
                <div class="tagsbar">

                   ${photographer.tags.map((tag)=>{

                       return `<span class='photographer-tag'>#${tag}</span>`

                   }).join("  ")}
                
                </div>
            </article>

        `

    });

    return html;
 
}   