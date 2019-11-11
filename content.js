  var auj = new Date();
  //délai pour chaque jour, commence à dimanche
  var délai = [1, 1, 1, 1, 1, 3, 2]; 
  var livraison = new Date();
  livraison.setDate(auj.getDate()+délai[auj.getDay()]);

  //détecter le language du navigateur pour savoir comment imprimer la date: 20/09/2019 ou 09/20/2019
  var language = window.navigator.userLanguage || window.navigator.language;

//si le curseur est dans une zone de texte, alors on ajoute la date au début
	if ((document.activeElement.type == "text")||(document.activeElement.type == "textarea")){
  document.activeElement.value = livraison.toLocaleDateString('language')+document.activeElement.value;
  }
