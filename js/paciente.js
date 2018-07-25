class Paciente{

	constructor(nome, peso, altura){
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}

	pegaImc(){
		if( this.altura != 0 )	
			
			return ( this.peso / Math.pow(this.altura,2) ).toFixed(2);
		
	}
	

}
