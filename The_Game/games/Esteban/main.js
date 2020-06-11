/* Votre code Javascript : */

const buttons = document.querySelectorAll ("button");

for (let i = 0; i< buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		const joueur = buttons[i].innerHTML;
		const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
		let resultat = "";
		
		if (joueur === robot) {
			resultat = '<span class = "egalite">Egalité</span>';
		}
		else if ((joueur === "Caillou" && robot === "Ciseaux") || (joueur
			=== "Feuille" && robot === "Caillou") || (joueur === "Ciseaux" && robot === "Feuille")) {
			resultat = '<span class = "gagne">Gagné</span>';
		}
		else {
			resultat = '<span class = "fin">Perdu</span>';
		}
		
		document.querySelector (".resultat").style.display = "flex";
		document.querySelector (".rejouer").style.display = "block";
		document.querySelector (".resultat").innerHTML = `
			<span class = "joueur">Joueur : ${joueur}</span> </br>
			<span class = "robot">Robot : ${robot}</span> </br>
			${resultat}
		
			`;
		
	});
	document.querySelector(".rejouer").addEventListener("click", function() {
		document.querySelector (".resultat").style.display = "none";
		document.querySelector (".rejouer").style.display = "none";
	});
}
