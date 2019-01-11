import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrl = 'https://orgnova.concore.io/pokemon/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.pokemonUrl}`);
  }
}
