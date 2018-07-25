function displayInformations(imc){
	const situacao = document.querySelector('#imcInfo');
	if( !isNaN(imc) ){
		if( imc < 16.9 )
			situacao.textContent = "Muito abaixo do peso"; 
		else if( imc > 17 && imc < 18.4)
			situacao.textContent = "Abaixo do peso";
		else if( imc > 18.5 && imc < 24.9 )
			situacao.textContent = "Peso Normal";
		else if( imc > 25 && imc < 29.9 )
			situacao.textContent = "Acima do peso";
		else if( imc > 30 && imc < 34.9 )
			situacao.textContent = "Obesidade Grau I";
		else if( imc > 35 && imc < 40 )
			situacao.textContent = "Obesidade Grau II";
		else  
			situacao.textContent = "Obesidade Grau III";
	}
}
