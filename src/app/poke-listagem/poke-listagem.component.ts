import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-listagem',
  templateUrl: './poke-listagem.component.html',
  styleUrls: ['./poke-listagem.component.css']
})
export class PokeListagemComponent implements OnInit {

  pokemons: Array<any>

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.listar();
  }
  
  listar() {
    this.pokemonService.listar().subscribe(dados => this.pokemons = dados);
  }

}
