export interface PokemonType {
  name: string;
  image: string;
}

export interface StatBlock {
  HP: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export type DamageRelation =
  | "neutral"
  | "resistant"
  | "twice_resistant"
  | "vulnerable"
  | "twice_vulnerable"
  | "immune";

export interface Resistance {
  name: string;
  damage_multiplier: number;
  damage_relation: DamageRelation;
}

export interface Ability {
  name: string;
  slug: string;
}

export interface Evolution {
  name: string;
  pokedexId: number;
}

export interface Pokemon {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: StatBlock;
  apiTypes: PokemonType[];
  apiGeneration: number;
  apiResistances: Resistance[];
  resistanceModifyingAbilitiesForApi: Ability;
  apiEvolutions: Evolution[];
  apiPreEvolution: string | "none" | Evolution[];
  apiResistancesWithAbilities: Resistance[];
}
