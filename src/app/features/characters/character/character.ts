import { Component, inject, OnInit } from '@angular/core';
import { CharacterFacade } from '../state/characters.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [AsyncPipe, JsonPipe, RouterLink],
  selector: 'app-character',
  styleUrl: './character.css',
  templateUrl: './character.html',
})
export class Character implements OnInit {
  private readonly characterFacade = inject(CharacterFacade);
  characters = this.characterFacade.characters;

  ngOnInit(): void {
    this.characterFacade.loadCharacters();
  }
}
