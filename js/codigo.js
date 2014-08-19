function numberpc(MIN, MAX){
	return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

piedra = 0;
papel = 1;
tijera = 2;

var in_op = ["Piedra", "Papel", "Tijera"];

alert("Bienvenido al juego de Chimpunpapas...\nIngrese el numero que se le indique segun la opcion.");

var ok = true;
var bn = true;

while(ok){
	var opcionJS = numberpc(0,2);
	var opcionUser=parseInt(prompt("0 - Piedra\n1 - Papel\n2 - Tijera"));
	
	if(opcionUser==piedra || opcionUser==papel || opcionUser==tijera){
		alert("Usted sacó "+ in_op[opcionUser]);
		alert("JS eligió "+ in_op[opcionJS]);
		bn = true;
	} 
	else{
		alert("Usted saco alguna otra cosa en su manota!!!")
		bn = false;
	}

	var prob_a = opcionJS==opcionUser;
	var prob_b = opcionJS==piedra && opcionUser==tijera; // [0] = Piedra vs [2] = Tijera
	var prob_c = opcionJS==papel && opcionUser==piedra; // [1] = Papel vs [0] = Piedra
	var prob_d = opcionJS==tijera && opcionUser==papel; // [2] = Tijera vs [1] = Papel
	
	if(bn==true){
		if(prob_a){
			alert("Empatados!!!");
		}
		else if(prob_b || prob_c || prob_d){
			alert("Yo te gane!!!");
		}
		else{
			alert("Ganaste!!!");
		}

		var res = true;
		while(res){
			var op = prompt("¿Quieres Seguir jugando?","si").toLowerCase();
			
			if(op=="si"){
				ok = true;
				res = false;
			}
			else if(op=="no"){
				alert("Adiossss....");
				ok = false;
				res = false;
			}
			else{
				res = true;
			}
		}
	}
}