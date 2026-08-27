export interface CharacterModel {
  id: number;
  name: string;
  photoLocation: string | null;
}

export interface CharacterState {
  characters: CharacterModel[];
  isLoaded: boolean;
}
