  var auj = new Date();
  //délai pour chaque jour, commence à dimanche
  var délai = [1, 1, 1, 1, 1,3, 2]; 
  var livraison = new Date();
  livraison.setDate(auj.getDate()+délai[auj.getDay()]);
	if ((document.activeElement.type == "text")||(document.activeElement.type == "textarea")){
  document.activeElement.value = livraison.toLocaleDateString('fr-FR')+document.activeElement.value;
  }