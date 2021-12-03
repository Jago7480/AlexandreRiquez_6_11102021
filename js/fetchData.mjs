export default function fetchData(url) {

     /** 
   * Cette fonction de recuperer des donnees au format JSON
   * @param {string} url
   * @return {json}

    */

    return new Promise((resolve, reject) => {

         // FETCH JSON DATA 

        fetch(url).then(function (response) {
            return response.json();
            // convertit le body du JSON, et le convertit en un objet js. Puis retourne une nouvelle promesse
        })
        .then(function (data) {
            resolve(data);
        })
        .catch(function (err) {
             resolve("Impossible de recupérer les données");
            // Si erreur il y a, elle sera récupérée ici.
        });

    });

}