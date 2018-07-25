const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.onclick = function(){	
	const imc_pacientes = document.querySelectorAll('.imc-paciente');
	
	pacientes.forEach( (paciente,i) => {
		imc_pacientes[i].textContent = paciente.pegaImc();
	});
}	
