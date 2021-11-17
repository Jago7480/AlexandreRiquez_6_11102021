/** 
   * Fonction qui recupere des donnees du fichiers json
   * @param {"../json/fishEye.json"} url
   * @return {promise}

 */  
 
export default function fetchData(url) {

    return new Promise((resolve, reject) => {

         // FETCH JSON DATA 

        fetch(url).then(function (response) {
            return response.json();
            // convertit le body du JSON, et le convertit en un objet js. Puis retourne une nouvelle promesse
        })
        .then(function (data) {
            resolve(data);

            // Commencement de la création du code
            

            // Chaînage optionnel des data et nomonclature des propriétés
            const photographers = data?.photographers;

            let html = "";

            // Création de gabarits de littéraux avec backticks
            photographers.forEach((photographer)=>{

                html+= `
                    <article class="panel-photographe">
                        <a href="mimi-keel.html" class="link-photographe">
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
                        <div class="tagsbar">${photographer.tags}</div>
                    </article>

                `
       
        });

        document.querySelector(".container_photographes").innerHTML = html;

        })
        .catch(function (err) {
             resolve("Impossible de recupérer les données");
            // Si erreur il y a, elle sera récupérée ici.
        });

    });

}