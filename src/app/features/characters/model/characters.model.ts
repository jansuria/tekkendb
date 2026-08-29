export interface CharacterModel {
  id: number;
  name: string;
  moveCount: number;
  imagePath: string | null;
}

export interface CharacterMoves {
  id: number;
  num: number;
  name: string;
  input: string;
  target: string;
  damage: string;
  startup: string;
  block: string;
  hit: string;
  startupFrames: number;
  parentId: number;
}

export interface CharacterState {
  characters: CharacterModel[];
  isCharacterLoaded: boolean;
  characterMoves: CharacterMoves[] | null;
  isCharacterMovesLoaded: boolean;
}
