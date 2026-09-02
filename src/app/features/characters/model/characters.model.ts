export interface CharacterModel {
  id: number;
  name: string;
  moveCount: number;
  imagePath: string | null;
  characterMoves: CharacterMoves[] | null;
}

export interface CharacterMoves {
  isThisCharacterMovesLoaded: boolean;
  Moves: {
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
  }[];
}

export interface CharacterState {
  characters: CharacterModel[];
  isCharacterLoaded: boolean;
}
