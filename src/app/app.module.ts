import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokeListagemComponent } from './poke-listagem/poke-listagem.component';
import { PokemonService } from './pokemon.service'

@NgModule({
  declarations: [
    AppComponent,
    PokeListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PokemonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
