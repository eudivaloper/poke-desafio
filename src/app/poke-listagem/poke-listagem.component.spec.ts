import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListagemComponent } from './poke-listagem.component';

describe('PokeListagemComponent', () => {
  let component: PokeListagemComponent;
  let fixture: ComponentFixture<PokeListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
