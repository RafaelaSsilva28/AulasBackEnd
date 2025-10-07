let serie = {
    titulo:  'Shingeki no Kyojin',
    diretor: 'Hajime Isayama',
    generos: [ 'Ação', 'Fantasia Sombria', 'Pós-Apocalitico'],  
    anoLancamento: '2013-2023',
    nrTemporadas: 4,
    episodios: [
        {Temporada: 1, nrEpisodio: 1, titulo: 'Para Você a 2 Mil Anos no Futuro - A Queda de Shiganshina', duracao: 25},
        {Temporada: 2, nrEpisodio: 2, titulo: 'Estou em casa', duracao: 25},
        {Temporada: 4, nrEpisodio: 5, titulo: 'Declaração de guerra', duracao: 25}
    ]
}
    for(let chave in serie){
    console.log(`O nome da serie é ${serie.titulo} o episodio que estou é o 
        numero ${serie.episodios[2].nrEpisodio} da temporada ${serie.episodios[2].Temporada}, 
        ${serie.episodios[2].titulo} com duração de ${serie.episodios[2].duracao}`);
    }