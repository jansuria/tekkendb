import { Injectable } from '@angular/core';
import { CharacterModel, CharacterMoves } from '../../features/characters/model/characters.model';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
// import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getCharacters(): Promise<CharacterModel[]> {
    const { data, error } = await this.supabase
      .from('characters')
      .select('id, name, slug, move_count, image_path')
      .neq('slug', 'generic')
      .order('name');

    if (error) throw error;
    return data.map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      moveCount: row.move_count,
      imagePath: row.image_path
        ? this.supabase.storage.from('character-images').getPublicUrl(row.image_path).data.publicUrl
        : null,
      characterMoves: null,
    }));
  }

  async getCharacterById(
    characterId: number,
    characterName: string,
  ): Promise<CharacterMoves['Moves']> {
    const { data, error } = await this.supabase
      .from('moves')
      .select(
        'character_id, id, num, name, input, target, damage, startup, block, hit, resolved_input, resolved_target, resolved_damage, startup_frames, parent_id',
      )
      .eq('character_id', characterId)
      .order('id');

    if (error) throw error;
    return data.map((row) => ({
      id: row.id,
      num: row.num,
      name: row.name,
      input: row.input,
      target: row.target,
      damage: row.damage,
      startup: row.startup,
      block: row.block,
      hit: row.hit,
      startupFrames: row.startup_frames,
      parentId: row.parent_id,
    }));
  }
}
