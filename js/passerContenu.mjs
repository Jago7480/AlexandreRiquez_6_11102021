export default function scroll(){

        // Affichage du bouton "Passer au contenu" lors d'un scroll

        // Création de la function onscroll
        window.onscroll = function() {retourContenu()};

        // Si la page est scroll à plus de "50" pixels, l'élément apparait.
        function retourContenu() {

            if  (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

            document.getElementById("retour-contenu").style.display = "flex";

            } else {

            // Si l'utilisateur clique sur le bouton pour "passer au contenu" ou scroll tout en haut, l'élément disparait.
            document.getElementById("retour-contenu").style.display = "none";

            }
        }
 

}