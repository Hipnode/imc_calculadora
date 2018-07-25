const modal = document.querySelector('.modal');

function openModal(link){
	modal.classList.add('active');
	const imc = link.parentNode.parentNode.querySelector('.imc-paciente');

	displayInformations(parseFloat(imc.textContent));
}

function closeModal(){
	modal.classList.remove('active');

}

window.onclick = function(event){
	if( event.target == modal )
		modal.classList.remove('active');
}
