interface NameUrlPair {
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface AdvancedSprite extends SimpleSprite {
  front_shiny: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
  versions: {
    "generation-v": {
      "black-white": {
        animated: AdvancedSprite;
      };
    };
  };
}

interface OtherSprites {
  dream_world: SimpleSprite;
  home: AdvancedSprite;
  "official-artwork": SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  types: TypeOfPokemon[];
  weight: number;
  stats: Stats[];
}
