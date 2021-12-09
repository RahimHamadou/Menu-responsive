// Declaration de variables

const liste = document.querySelector(".liste");
const btnResponsive = document.querySelector(".btn-responsive");

// mettre la class show sur l'element liste quand on click sur le btn
btnResponsive.addEventListener("click", () => {
	liste.classList.toggle("show");
});

// on retire la class show lorsque l'on redimensionne la fenetre
// ca evite de trouver le menu ouvert lorsque l'on revient a la taille mobile
window.addEventListener("resize", () => {
	if (window.innerWidth > 650) {
		liste.classList.remove("show");
	}
});
