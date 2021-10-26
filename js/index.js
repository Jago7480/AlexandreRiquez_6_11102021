//Création de la function onscroll
window.onscroll = function() {myFunction()};

//Si la page est scroll à "50" pixels, l'élément sélectionné apparait. Il disparait quand nous revenons en haut de la page.
function myFunction() {
    if (document.scrollTop > 50 || document.querySelector.scrollTop > 50) {
        // const btnContenu = document.querySelector('#retour-contenu');
        // btnContenu.style.display = "none"
    } else {
        const btnContenu = document.querySelector('#retour-contenu');
        btnContenu.style.display = "flex";
    }
}