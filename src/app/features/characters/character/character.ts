import { Component, inject, OnInit } from '@angular/core';
import { CharacterFacade } from '../state/characters.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-character',
  styleUrl: './character.css',
  templateUrl: './character.html',
})
export class Character implements OnInit {
  private readonly characterFacade = inject(CharacterFacade);
  characters = this.characterFacade.characters$;
  ngOnInit(): void {
    this.characterFacade.loadCharacters();
  }
}
