const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.onclick = function(){	
	
	const imc_pacientes = document.querySelectorAll('.imc-paciente');
	
	for( i = 0; i < pacientes.length; i++)
	{
		imc_pacientes[i].textContent = pacientes[i].pegaImc();
	}
}	
