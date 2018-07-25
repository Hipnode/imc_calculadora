const 
	btnAdicionar = document.querySelector('#btnAdicionar');
    pacientes = [];
    tbody = document.querySelector('tbody');
	    
    
btnAdicionar.onclick = function(){

	const 
		nome   = document.querySelector('#nome').value;
		peso   = parseFloat(document.querySelector('#peso').value);
		altura = parseFloat(document.querySelector('#altura').value);
		nomesPacientes = pacientes.map( paciente => paciente.nome ); 
		
	
	if( !nomesPacientes.includes(nome) ){
	
		pacientes.push(
			new Paciente(nome,peso,altura)
		);
		
		const novoPaciente = `<tr class="paciente">
								<td class="nome-paciente">${nome}</td>
								<td class="altura-paciente">${altura}</td>
								<td class="peso-paciente">${peso}</td>
								<td class="imc-paciente">---</td>
								<td><a href="#" class="btnInfo" onclick="openModal(this)">Informações</a></td>
								<td><input type="button" id="btnExcluir" value="Excluir" onclick="excluirPaciente(this)"></td>
							  </tr>`;
		
		tbody.insertAdjacentHTML('beforeend', novoPaciente);
		
		
	}else{
		alert("O paciente já foi cadastrado! ");
	}
}
