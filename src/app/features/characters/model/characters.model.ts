export interface CharacterModel {
  id: number;
  name: string;
  moveCount: number;
  imagePath: string | null;
}

export interface CharacterMoves {
  characterMoves: CharacterMoveSet[];
}
export interface Move {
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

export interface CharacterMoveSet {
  characterId: number;
  Moves: Move[];
}

export interface CharacterState {
  characters: CharacterModel[];
  areCharacterLoaded: boolean;
}

export interface CharacterMovesState {
  characterMoves: CharacterMoves[];
  isThisCharacterMovesLoaded: boolean;
}
