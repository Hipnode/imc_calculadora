function excluirPaciente(btn){
	const 
		tr 	 = btn.parentNode.parentNode;
	    nome = tr.querySelector('.nome-paciente').textContent;
	
	pacientes = pacientes.filter( paciente => paciente.nome !== nome );
	
	tr.remove();
}
