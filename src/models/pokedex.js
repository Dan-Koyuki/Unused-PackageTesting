const Pokedex = [
  {
    id: "0001",
    name: "Bulbasaur",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bulbasaur.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bulbasaur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bulbasaur.gif",
    },
    stats: {
      hp: "45",
      atk: "49",
      def: "49",
      spa: "65",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  },
  {
    id: "0002",
    name: "Ivysaur",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ivysaur.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ivysaur.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ivysaur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ivysaur.gif",
    },
    stats: {
      hp: "60",
      atk: "62",
      def: "63",
      spa: "80",
      spd: "80",
      speed: "60",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  },
  {
    id: "0003",
    name: "Venusaur",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/venusaur.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/venusaur.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/venusaur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/venusaur.gif",
    },
    stats: {
      hp: "80",
      atk: "82",
      def: "83",
      spa: "100",
      spd: "100",
      speed: "80",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
  },
  {
    id: "0004",
    name: "Charmander",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Solar Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/charmander.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/charmander.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/charmander.gif",
    },
    stats: {
      hp: "39",
      atk: "52",
      def: "43",
      spa: "60",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  },
  {
    id: "0005",
    name: "Charmeleon",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Solar Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/charmeleon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/charmeleon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/charmeleon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/charmeleon.gif",
    },
    stats: {
      hp: "58",
      atk: "64",
      def: "58",
      spa: "80",
      spd: "65",
      speed: "80",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
  },
  {
    id: "0006",
    name: "Charizard",
    region: "Kanto",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Solar Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/charizard.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/charizard.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/charizard.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/charizard.gif",
    },
    stats: {
      hp: "78",
      atk: "84",
      def: "78",
      spa: "109",
      spd: "85",
      speed: "100",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
  },
  {
    id: "0007",
    name: "Squirtle",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/squirtle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/squirtle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/squirtle.gif",
    },
    stats: {
      hp: "44",
      atk: "48",
      def: "65",
      spa: "50",
      spd: "64",
      speed: "43",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  },
  {
    id: "0008",
    name: "Wartortle",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wartortle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wartortle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wartortle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wartortle.gif",
    },
    stats: {
      hp: "59",
      atk: "63",
      def: "80",
      spa: "65",
      spd: "80",
      speed: "58",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
  },
  {
    id: "0009",
    name: "Blastoise",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/blastoise.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/blastoise.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/blastoise.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/blastoise.gif",
    },
    stats: {
      hp: "79",
      atk: "83",
      def: "100",
      spa: "85",
      spd: "105",
      speed: "78",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  },
  {
    id: "0010",
    name: "Caterpie",
    region: "Kanto",
    types: ["Bug"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/caterpie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/caterpie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/caterpie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/caterpie.gif",
    },
    stats: {
      hp: "45",
      atk: "30",
      def: "35",
      spa: "20",
      spd: "20",
      speed: "45",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
  },
  {
    id: "0011",
    name: "Metapod",
    region: "Kanto",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/metapod.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/metapod.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/metapod.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/metapod.gif",
    },
    stats: {
      hp: "50",
      atk: "20",
      def: "55",
      spa: "25",
      spd: "25",
      speed: "30",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
  },
  {
    id: "0012",
    name: "Butterfree",
    region: "Kanto",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Compound Eyes"],
      hidden: "Tinted Lens",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/butterfree.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/butterfree.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/butterfree.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/butterfree.gif",
    },
    stats: {
      hp: "60",
      atk: "45",
      def: "50",
      spa: "90",
      spd: "80",
      speed: "70",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
  },
  {
    id: "0013",
    name: "Weedle",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/weedle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/weedle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/weedle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/weedle.gif",
    },
    stats: {
      hp: "40",
      atk: "35",
      def: "30",
      spa: "20",
      spd: "20",
      speed: "50",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
  },
  {
    id: "0014",
    name: "Kakuna",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kakuna.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kakuna.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kakuna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kakuna.gif",
    },
    stats: {
      hp: "45",
      atk: "25",
      def: "50",
      spa: "25",
      spd: "25",
      speed: "35",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
  },
  {
    id: "0015",
    name: "Beedrill",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Swarm"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/beedrill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/beedrill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/beedrill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/beedrill.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "40",
      spa: "45",
      spd: "80",
      speed: "75",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
  },
  {
    id: "0016",
    name: "Pidgey",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Tangled Feet"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pidgey.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pidgey.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pidgey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pidgey.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "40",
      spa: "35",
      spd: "35",
      speed: "56",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
  },
  {
    id: "0017",
    name: "Pidgeotto",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Tangled Feet"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pidgeotto.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pidgeotto.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pidgeotto.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pidgeotto.gif",
    },
    stats: {
      hp: "63",
      atk: "60",
      def: "55",
      spa: "50",
      spd: "50",
      speed: "71",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
  },
  {
    id: "0018",
    name: "Pidgeot",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Tangled Feet"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pidgeot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pidgeot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pidgeot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pidgeot.gif",
    },
    stats: {
      hp: "83",
      atk: "80",
      def: "75",
      spa: "70",
      spd: "70",
      speed: "101",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
  },
  {
    id: "0019",
    name: "Rattata",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Guts"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rattata.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rattata.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rattata.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rattata.gif",
    },
    stats: {
      hp: "30",
      atk: "56",
      def: "35",
      spa: "25",
      spd: "35",
      speed: "72",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
  },
  {
    id: "0020",
    name: "Raticate",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Guts"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/raticate.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/raticate.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/raticate.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/raticate.gif",
    },
    stats: {
      hp: "55",
      atk: "81",
      def: "60",
      spa: "50",
      spd: "70",
      speed: "97",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
  },
  {
    id: "0021",
    name: "Spearow",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spearow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spearow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spearow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spearow.gif",
    },
    stats: {
      hp: "40",
      atk: "60",
      def: "30",
      spa: "31",
      spd: "31",
      speed: "70",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
  },
  {
    id: "0022",
    name: "Fearow",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fearow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fearow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fearow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fearow.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "65",
      spa: "61",
      spd: "61",
      speed: "100",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
  },
  {
    id: "0023",
    name: "Ekans",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Intimidate", "Shed Skin"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ekans.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ekans.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ekans.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ekans.gif",
    },
    stats: {
      hp: "35",
      atk: "60",
      def: "44",
      spa: "40",
      spd: "54",
      speed: "55",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
  },
  {
    id: "0024",
    name: "Arbok",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Intimidate", "Shed Skin"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/arbok.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/arbok.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/arbok.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/arbok.gif",
    },
    stats: {
      hp: "60",
      atk: "95",
      def: "69",
      spa: "65",
      spd: "79",
      speed: "80",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
  },
  {
    id: "0025",
    name: "Pikachu",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pikachu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pikachu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pikachu.gif",
    },
    stats: {
      hp: "35",
      atk: "55",
      def: "40",
      spa: "50",
      spd: "50",
      speed: "90",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up.",
  },
  {
    id: "0026",
    name: "Raichu",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/raichu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/raichu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/raichu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/raichu.gif",
    },
    stats: {
      hp: "60",
      atk: "90",
      def: "55",
      spa: "90",
      spd: "80",
      speed: "110",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "This Pokémon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electricity.",
  },
  {
    id: "0027",
    name: "Sandshrew",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Sand Rush",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sandshrew.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sandshrew.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sandshrew.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sandshrew.gif",
    },
    stats: {
      hp: "50",
      atk: "75",
      def: "85",
      spa: "20",
      spd: "30",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep.",
  },
  {
    id: "0028",
    name: "Sandslash",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Sand Rush",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sandslash.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sandslash.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sandslash.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sandslash.gif",
    },
    stats: {
      hp: "75",
      atk: "100",
      def: "110",
      spa: "45",
      spd: "55",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pokémon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly with its sharp claws.",
  },
  {
    id: "0029",
    name: "Nidoran F",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidoran f.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidoran f.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidoran f.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidoran f.gif",
    },
    stats: {
      hp: "55",
      atk: "47",
      def: "52",
      spa: "40",
      spd: "40",
      speed: "41",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [0, 100],
    description:
      "Nidoran_F has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pok茅mon. When enraged, it releases a horrible toxin from its horn.",
  },
  {
    id: "0030",
    name: "Nidorina",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidorina.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidorina.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidorina.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidorina.gif",
    },
    stats: {
      hp: "70",
      atk: "62",
      def: "67",
      spa: "55",
      spd: "55",
      speed: "56",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
  },
  {
    id: "0031",
    name: "Nidoqueen",
    region: "Kanto",
    types: ["Poison", "Ground"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidoqueen.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidoqueen.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidoqueen.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidoqueen.gif",
    },
    stats: {
      hp: "90",
      atk: "92",
      def: "87",
      spa: "75",
      spd: "85",
      speed: "76",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
  },
  {
    id: "0032",
    name: "Nidoran M",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidoran m.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidoran m.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidoran m.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidoran m.gif",
    },
    stats: {
      hp: "46",
      atk: "57",
      def: "40",
      spa: "40",
      spd: "40",
      speed: "50",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [100, 0],
    description:
      "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
  },
  {
    id: "0033",
    name: "Nidorino",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidorino.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidorino.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidorino.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidorino.gif",
    },
    stats: {
      hp: "61",
      atk: "72",
      def: "57",
      spa: "55",
      spd: "55",
      speed: "65",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [100, 0],
    description:
      "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
  },
  {
    id: "0034",
    name: "Nidoking",
    region: "Kanto",
    types: ["Poison", "Ground"],
    abilities: {
      normal: ["Poison Point", "Rivalry"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nidoking.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nidoking.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nidoking.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nidoking.gif",
    },
    stats: {
      hp: "81",
      atk: "102",
      def: "77",
      spa: "85",
      spd: "75",
      speed: "85",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [100, 0],
    description:
      "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
  },
  {
    id: "0035",
    name: "Clefairy",
    region: "Kanto",
    types: ["Fairy"],
    abilities: {
      normal: ["Cute Charm", "Magic Guard"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/clefairy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/clefairy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/clefairy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/clefairy.gif",
    },
    stats: {
      hp: "70",
      atk: "45",
      def: "48",
      spa: "60",
      spd: "65",
      speed: "35",
    },
    eggGroups: ["Fairy"],
    genderRatios: [25, 75],
    description:
      "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
  },
  {
    id: "0036",
    name: "Clefable",
    region: "Kanto",
    types: ["Fairy"],
    abilities: {
      normal: ["Cute Charm", "Magic Guard"],
      hidden: "Unaware",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/clefable.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/clefable.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/clefable.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/clefable.gif",
    },
    stats: {
      hp: "95",
      atk: "70",
      def: "73",
      spa: "95",
      spd: "90",
      speed: "60",
    },
    eggGroups: ["Fairy"],
    genderRatios: [25, 75],
    description:
      "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
  },
  {
    id: "0037",
    name: "Vulpix",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Flash Fire"],
      hidden: "Drought",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vulpix.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vulpix.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vulpix.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vulpix.gif",
    },
    stats: {
      hp: "38",
      atk: "41",
      def: "40",
      spa: "50",
      spd: "65",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "Inside Vulpix's body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pokémon releases flames from its mouth to prevent its body from growing too hot.",
  },
  {
    id: "0038",
    name: "Ninetales",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Flash Fire"],
      hidden: "Drought",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ninetales.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ninetales.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ninetales.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ninetales.gif",
    },
    stats: {
      hp: "73",
      atk: "76",
      def: "75",
      spa: "81",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand human speech.",
  },
  {
    id: "0039",
    name: "Jigglypuff",
    region: "Kanto",
    types: ["Normal", "Fairy"],
    abilities: {
      normal: ["Cute Charm", "Competitive"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jigglypuff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jigglypuff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jigglypuff.gif",
    },
    stats: {
      hp: "115",
      atk: "45",
      def: "20",
      spa: "45",
      spd: "25",
      speed: "20",
    },
    eggGroups: ["Fairy"],
    genderRatios: [25, 75],
    description:
      "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
  },
  {
    id: "0040",
    name: "Wigglytuff",
    region: "Kanto",
    types: ["Normal", "Fairy"],
    abilities: {
      normal: ["Cute Charm", "Competitive"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wigglytuff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wigglytuff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wigglytuff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wigglytuff.gif",
    },
    stats: {
      hp: "140",
      atk: "70",
      def: "45",
      spa: "85",
      spd: "50",
      speed: "45",
    },
    eggGroups: ["Fairy"],
    genderRatios: [25, 75],
    description:
      "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
  },
  {
    id: "0041",
    name: "Zubat",
    region: "Kanto",
    types: ["Poison", "Flying"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zubat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zubat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zubat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zubat.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "35",
      spa: "30",
      spd: "40",
      speed: "55",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside down.",
  },
  {
    id: "0042",
    name: "Golbat",
    region: "Kanto",
    types: ["Poison", "Flying"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golbat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golbat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golbat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golbat.gif",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "70",
      spa: "65",
      spd: "75",
      speed: "90",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon.",
  },
  {
    id: "0043",
    name: "Oddish",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/oddish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/oddish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/oddish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/oddish.gif",
    },
    stats: {
      hp: "45",
      atk: "50",
      def: "55",
      spa: "75",
      spd: "65",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon's feet are thought to change shape and become similar to the roots of trees.",
  },
  {
    id: "0044",
    name: "Gloom",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Stench",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gloom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gloom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gloom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gloom.gif",
    },
    stats: {
      hp: "60",
      atk: "65",
      def: "70",
      spa: "85",
      spd: "75",
      speed: "40",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
  },
  {
    id: "0045",
    name: "Vileplume",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Effect Spore",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vileplume.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vileplume.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vileplume.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vileplume.gif",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "85",
      spa: "110",
      spd: "90",
      speed: "50",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
  },
  {
    id: "0046",
    name: "Paras",
    region: "Kanto",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Effect Spore", "Dry Skin"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/paras.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/paras.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/paras.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/paras.gif",
    },
    stats: {
      hp: "35",
      atk: "70",
      def: "55",
      spa: "45",
      spd: "55",
      speed: "25",
    },
    eggGroups: ["Bug", "Grass"],
    genderRatios: [50, 50],
    description:
      "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
  },
  {
    id: "0047",
    name: "Parasect",
    region: "Kanto",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Effect Spore", "Dry Skin"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/parasect.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/parasect.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/parasect.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/parasect.gif",
    },
    stats: {
      hp: "60",
      atk: "95",
      def: "80",
      spa: "60",
      spd: "80",
      speed: "30",
    },
    eggGroups: ["Bug", "Grass"],
    genderRatios: [50, 50],
    description:
      "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
  },
  {
    id: "0048",
    name: "Venonat",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Compound Eyes", "Tinted Lens"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/venonat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/venonat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/venonat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/venonat.gif",
    },
    stats: {
      hp: "60",
      atk: "55",
      def: "50",
      spa: "40",
      spd: "55",
      speed: "45",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
  },
  {
    id: "0049",
    name: "Venomoth",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Shield Dust", "Tinted Lens"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/venomoth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/venomoth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/venomoth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/venomoth.gif",
    },
    stats: {
      hp: "70",
      atk: "65",
      def: "60",
      spa: "90",
      spd: "75",
      speed: "90",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
  },
  {
    id: "0050",
    name: "Diglett",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Veil", "Arena Trap"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/diglett.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/diglett.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/diglett.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/diglett.gif",
    },
    stats: {
      hp: "10",
      atk: "55",
      def: "25",
      spa: "35",
      spd: "45",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
  },
  {
    id: "0051",
    name: "Dugtrio",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Veil", "Arena Trap"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dugtrio.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dugtrio.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dugtrio.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dugtrio.gif",
    },
    stats: {
      hp: "35",
      atk: "100",
      def: "50",
      spa: "50",
      spd: "70",
      speed: "120",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
  },
  {
    id: "0052",
    name: "Meowth",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Technician"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meowth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meowth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meowth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meowth.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "35",
      spa: "40",
      spd: "40",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
  },
  {
    id: "0053",
    name: "Persian",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Limber", "Technician"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/persian.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/persian.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/persian.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/persian.gif",
    },
    stats: {
      hp: "65",
      atk: "70",
      def: "60",
      spa: "65",
      spd: "65",
      speed: "115",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
  },
  {
    id: "0054",
    name: "Psyduck",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Damp", "Cloud Nine"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/psyduck.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/psyduck.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/psyduck.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/psyduck.gif",
    },
    stats: {
      hp: "50",
      atk: "52",
      def: "48",
      spa: "65",
      spd: "50",
      speed: "55",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "If it uses its mysterious power, Psyduck can't remember having done so. It apparently can't form a memory of such an event because it goes into an altered state that is much like deep sleep.",
  },
  {
    id: "0055",
    name: "Golduck",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Damp", "Cloud Nine"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golduck.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golduck.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golduck.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golduck.gif",
    },
    stats: {
      hp: "80",
      atk: "82",
      def: "78",
      spa: "95",
      spd: "80",
      speed: "85",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Golduck is the fastest swimmer among all Pokémon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas.",
  },
  {
    id: "0056",
    name: "Mankey",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Vital Spirit", "Anger Point"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mankey.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mankey.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mankey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mankey.gif",
    },
    stats: {
      hp: "40",
      atk: "80",
      def: "35",
      spa: "35",
      spd: "45",
      speed: "70",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
  },
  {
    id: "0057",
    name: "Primeape",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Vital Spirit", "Anger Point"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/primeape.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/primeape.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/primeape.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/primeape.gif",
    },
    stats: {
      hp: "65",
      atk: "105",
      def: "60",
      spa: "60",
      spd: "70",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
  },
  {
    id: "0058",
    name: "Growlithe",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Intimidate", "Flash Fire"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/growlithe.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/growlithe.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/growlithe.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/growlithe.gif",
    },
    stats: {
      hp: "55",
      atk: "70",
      def: "45",
      spa: "70",
      spd: "50",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [75, 25],
    description:
      "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
  },
  {
    id: "0059",
    name: "Arcanine",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Intimidate", "Flash Fire"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/arcanine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/arcanine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/arcanine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/arcanine.gif",
    },
    stats: {
      hp: "90",
      atk: "110",
      def: "80",
      spa: "100",
      spd: "80",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [75, 25],
    description:
      "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
  },
  {
    id: "0060",
    name: "Poliwag",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Water Absorb", "Damp"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/poliwag.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/poliwag.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/poliwag.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/poliwag.gif",
    },
    stats: {
      hp: "40",
      atk: "50",
      def: "40",
      spa: "40",
      spd: "40",
      speed: "90",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
  },
  {
    id: "0061",
    name: "Poliwhirl",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Water Absorb", "Damp"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/poliwhirl.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/poliwhirl.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/poliwhirl.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/poliwhirl.gif",
    },
    stats: {
      hp: "65",
      atk: "65",
      def: "65",
      spa: "50",
      spd: "50",
      speed: "90",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.",
  },
  {
    id: "0062",
    name: "Poliwrath",
    region: "Kanto",
    types: ["Water", "Fighting"],
    abilities: {
      normal: ["Water Absorb", "Damp"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/poliwrath.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/poliwrath.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/poliwrath.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/poliwrath.gif",
    },
    stats: {
      hp: "90",
      atk: "95",
      def: "95",
      spa: "70",
      spd: "90",
      speed: "70",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
  },
  {
    id: "0063",
    name: "Abra",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize", "Inner Focus"],
      hidden: "Magic Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/abra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/abra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/abra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/abra.gif",
    },
    stats: {
      hp: "25",
      atk: "20",
      def: "15",
      spa: "105",
      spd: "55",
      speed: "90",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Abra needs to sleep for eighteen hours a day. If it doesn't, this Pokémon loses its ability to use telekinetic powers. If it is attacked, Abra escapes using Teleport while it is still sleeping.",
  },
  {
    id: "0064",
    name: "Kadabra",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize", "Inner Focus"],
      hidden: "Magic Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kadabra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kadabra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kadabra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kadabra.gif",
    },
    stats: {
      hp: "40",
      atk: "35",
      def: "30",
      spa: "120",
      spd: "70",
      speed: "105",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Kadabra holds a silver spoon in its hand. The spoon is used to amplify the alpha waves in its brain. Without the spoon, the Pokémon is said to be limited to half the usual amount of its telekinetic powers.",
  },
  {
    id: "0065",
    name: "Alakazam",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize", "Inner Focus"],
      hidden: "Magic Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/alakazam.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/alakazam.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/alakazam.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/alakazam.gif",
    },
    stats: {
      hp: "55",
      atk: "50",
      def: "45",
      spa: "135",
      spd: "95",
      speed: "120",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Alakazam's brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pokémon an astoundingly high IQ of 5,000. It has a thorough memory of everything that has occurred in the world.",
  },
  {
    id: "0066",
    name: "Machop",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "No Guard"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/machop.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/machop.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/machop.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/machop.gif",
    },
    stats: {
      hp: "70",
      atk: "80",
      def: "50",
      spa: "35",
      spd: "35",
      speed: "35",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
  },
  {
    id: "0067",
    name: "Machoke",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "No Guard"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/machoke.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/machoke.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/machoke.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/machoke.gif",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "70",
      spa: "50",
      spd: "60",
      speed: "45",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Machoke undertakes bodybuilding every day even as it helps people with tough, physically demanding labor. On its days off, this Pokémon heads to the fields and mountains to exercise and train.",
  },
  {
    id: "0068",
    name: "Machamp",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "No Guard"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/machamp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/machamp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/machamp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/machamp.gif",
    },
    stats: {
      hp: "90",
      atk: "130",
      def: "80",
      spa: "65",
      spd: "85",
      speed: "55",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Machamp is known as the Pokémon that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.",
  },
  {
    id: "0069",
    name: "Bellsprout",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bellsprout.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bellsprout.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bellsprout.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bellsprout.gif",
    },
    stats: {
      hp: "50",
      atk: "75",
      def: "35",
      spa: "70",
      spd: "30",
      speed: "40",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
  },
  {
    id: "0070",
    name: "Weepinbell",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/weepinbell.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/weepinbell.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/weepinbell.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/weepinbell.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "50",
      spa: "85",
      spd: "45",
      speed: "55",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
  },
  {
    id: "0071",
    name: "Victreebel",
    region: "Kanto",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/victreebel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/victreebel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/victreebel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/victreebel.gif",
    },
    stats: {
      hp: "80",
      atk: "105",
      def: "65",
      spa: "100",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
  },
  {
    id: "0072",
    name: "Tentacool",
    region: "Kanto",
    types: ["Water", "Poison"],
    abilities: {
      normal: ["Clear Body", "Liquid Ooze"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tentacool.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tentacool.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tentacool.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tentacool.gif",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "35",
      spa: "50",
      spd: "100",
      speed: "70",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Tentacool absorbs sunlight and refracts it using water inside its body to convert it into beam energy. This Pokémon shoots beams from the small round organ above its eyes.",
  },
  {
    id: "0073",
    name: "Tentacruel",
    region: "Kanto",
    types: ["Water", "Poison"],
    abilities: {
      normal: ["Clear Body", "Liquid Ooze"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tentacruel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tentacruel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tentacruel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tentacruel.gif",
    },
    stats: {
      hp: "80",
      atk: "70",
      def: "65",
      spa: "80",
      spd: "120",
      speed: "100",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Tentacruel has tentacles that can be freely elongated and shortened at will. It ensnares prey with its tentacles and weakens the prey by dosing it with a harsh toxin. It can catch up to 80 prey at the same time.",
  },
  {
    id: "0074",
    name: "Geodude",
    region: "Kanto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Rock Head", "Sturdy"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/geodude.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/geodude.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/geodude.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/geodude.gif",
    },
    stats: {
      hp: "40",
      atk: "80",
      def: "100",
      spa: "30",
      spd: "30",
      speed: "20",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "When Geodude sleeps deeply, it buries itself halfway into the ground. It will not awaken even if hikers step on it unwittingly. In the morning, this Pokémon rolls downhill in search of food.",
  },
  {
    id: "0075",
    name: "Graveler",
    region: "Kanto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Rock Head", "Sturdy"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/graveler.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/graveler.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/graveler.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/graveler.gif",
    },
    stats: {
      hp: "55",
      atk: "95",
      def: "115",
      spa: "45",
      spd: "45",
      speed: "35",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Rocks are Graveler's favorite food. This Pokémon will climb a mountain from the base to the summit, crunchingly feasting on rocks all the while. Upon reaching the peak, it rolls back down to the bottom.",
  },
  {
    id: "0076",
    name: "Golem",
    region: "Kanto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Rock Head", "Sturdy"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golem.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golem.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golem.gif",
    },
    stats: {
      hp: "80",
      atk: "120",
      def: "130",
      spa: "55",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways for diverting this Pokémon's course.",
  },
  {
    id: "0077",
    name: "Ponyta",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Run Away", "Flash Fire"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ponyta.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ponyta.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ponyta.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ponyta.gif",
    },
    stats: {
      hp: "50",
      atk: "85",
      def: "55",
      spa: "65",
      spd: "65",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
  },
  {
    id: "0078",
    name: "Rapidash",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Run Away", "Flash Fire"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rapidash.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rapidash.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rapidash.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rapidash.gif",
    },
    stats: {
      hp: "65",
      atk: "100",
      def: "70",
      spa: "80",
      spd: "80",
      speed: "105",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
  },
  {
    id: "0079",
    name: "Slowpoke",
    region: "Kanto",
    types: ["Water", "Psychic"],
    abilities: {
      normal: ["Oblivious", "Own Tempo"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slowpoke.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slowpoke.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slowpoke.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slowpoke.gif",
    },
    stats: {
      hp: "90",
      atk: "65",
      def: "65",
      spa: "40",
      spd: "40",
      speed: "15",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
  },
  {
    id: "0080",
    name: "Slowbro",
    region: "Kanto",
    types: ["Water", "Psychic"],
    abilities: {
      normal: ["Oblivious", "Own Tempo"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slowbro.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slowbro.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slowbro.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slowbro.gif",
    },
    stats: {
      hp: "95",
      atk: "75",
      def: "110",
      spa: "100",
      spd: "80",
      speed: "30",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
  },
  {
    id: "0081",
    name: "Magnemite",
    region: "Kanto",
    types: ["Electric", "Steel"],
    abilities: {
      normal: ["Magnet Pull", "Sturdy"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magnemite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magnemite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magnemite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magnemite.gif",
    },
    stats: {
      hp: "25",
      atk: "35",
      def: "70",
      spa: "95",
      spd: "55",
      speed: "45",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Magnemite floats in the air by emitting electromagnetic waves from the units at its sides. These waves block gravity. This Pokémon becomes incapable of flight if its internal electrical supply is depleted.",
  },
  {
    id: "0082",
    name: "Magneton",
    region: "Kanto",
    types: ["Electric", "Steel"],
    abilities: {
      normal: ["Magnet Pull", "Sturdy"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magneton.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magneton.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magneton.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magneton.gif",
    },
    stats: {
      hp: "50",
      atk: "60",
      def: "95",
      spa: "120",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Magneton emits a powerful magnetic force that is fatal to electronics and precision instruments. Because of this, it is said that some towns warn people to keep this Pokémon inside a Poké Ball.",
  },
  {
    id: "0083",
    name: "Farfetchd",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Inner Focus"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/farfetchd.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/farfetchd.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/farfetchd.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/farfetchd.gif",
    },
    stats: {
      hp: "52",
      atk: "90",
      def: "55",
      spa: "58",
      spd: "62",
      speed: "60",
    },
    eggGroups: ["Flying", "Field"],
    genderRatios: [50, 50],
    description:
      "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
  },
  {
    id: "0084",
    name: "Doduo",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Run Away", "Early Bird"],
      hidden: "Tangled Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/doduo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/doduo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/doduo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/doduo.gif",
    },
    stats: {
      hp: "35",
      atk: "85",
      def: "45",
      spa: "35",
      spd: "35",
      speed: "75",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
  },
  {
    id: "0085",
    name: "Dodrio",
    region: "Kanto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Run Away", "Early Bird"],
      hidden: "Tangled Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dodrio.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dodrio.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dodrio.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dodrio.gif",
    },
    stats: {
      hp: "60",
      atk: "110",
      def: "70",
      spa: "60",
      spd: "60",
      speed: "110",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Apparently, the heads aren't the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
  },
  {
    id: "0086",
    name: "Seel",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Thick Fat", "Hydration"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seel.gif",
    },
    stats: {
      hp: "65",
      atk: "45",
      def: "55",
      spa: "45",
      spd: "70",
      speed: "45",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
  },
  {
    id: "0087",
    name: "Dewgong",
    region: "Kanto",
    types: ["Water", "Ice"],
    abilities: {
      normal: ["Thick Fat", "Hydration"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dewgong.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dewgong.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dewgong.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dewgong.gif",
    },
    stats: {
      hp: "90",
      atk: "70",
      def: "80",
      spa: "70",
      spd: "95",
      speed: "70",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
  },
  {
    id: "0088",
    name: "Grimer",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Stench", "Sticky Hold"],
      hidden: "Poison Touch",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/grimer.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/grimer.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/grimer.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/grimer.gif",
    },
    stats: {
      hp: "80",
      atk: "80",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "25",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Grimer emerged from the sludge that settled on a polluted seabed. This Pokémon loves anything filthy. It constantly leaks a horribly germ-infested fluid from all over its body.",
  },
  {
    id: "0089",
    name: "Muk",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Stench", "Sticky Hold"],
      hidden: "Poison Touch",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/muk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/muk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/muk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/muk.gif",
    },
    stats: {
      hp: "105",
      atk: "105",
      def: "75",
      spa: "65",
      spd: "100",
      speed: "50",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "This Pokémon's favorite food is anything that is repugnantly filthy. In dirty towns where people think nothing of throwing away litter on the streets, Muk are certain to gather.",
  },
  {
    id: "0090",
    name: "Shellder",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Shell Armor", "Skill Link"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shellder.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shellder.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shellder.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shellder.gif",
    },
    stats: {
      hp: "30",
      atk: "65",
      def: "100",
      spa: "45",
      spd: "25",
      speed: "40",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
  },
  {
    id: "0091",
    name: "Cloyster",
    region: "Kanto",
    types: ["Water", "Ice"],
    abilities: {
      normal: ["Shell Armor", "Skill Link"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cloyster.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cloyster.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cloyster.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cloyster.gif",
    },
    stats: {
      hp: "50",
      atk: "95",
      def: "180",
      spa: "85",
      spd: "45",
      speed: "70",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.",
  },
  {
    id: "0092",
    name: "Gastly",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gastly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gastly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gastly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gastly.gif",
    },
    stats: {
      hp: "30",
      atk: "35",
      def: "30",
      spa: "100",
      spd: "35",
      speed: "80",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.",
  },
  {
    id: "0093",
    name: "Haunter",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/haunter.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/haunter.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/haunter.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/haunter.gif",
    },
    stats: {
      hp: "45",
      atk: "50",
      def: "45",
      spa: "115",
      spd: "55",
      speed: "95",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
  },
  {
    id: "0094",
    name: "Gengar",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Cursed Body"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gengar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gengar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gengar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gengar.gif",
    },
    stats: {
      hp: "60",
      atk: "65",
      def: "60",
      spa: "130",
      spd: "75",
      speed: "110",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
  },
  {
    id: "0095",
    name: "Onix",
    region: "Kanto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Rock Head", "Sturdy"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/onix.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/onix.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/onix.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/onix.gif",
    },
    stats: {
      hp: "35",
      atk: "45",
      def: "160",
      spa: "30",
      spd: "45",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
  },
  {
    id: "0096",
    name: "Drowzee",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Insomnia", "Forewarn"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drowzee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drowzee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drowzee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drowzee.gif",
    },
    stats: {
      hp: "60",
      atk: "48",
      def: "45",
      spa: "43",
      spd: "90",
      speed: "42",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.",
  },
  {
    id: "0097",
    name: "Hypno",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Insomnia", "Forewarn"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hypno.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hypno.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hypno.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hypno.gif",
    },
    stats: {
      hp: "85",
      atk: "73",
      def: "70",
      spa: "73",
      spd: "115",
      speed: "67",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
  },
  {
    id: "0098",
    name: "Krabby",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Hyper Cutter", "Shell Armor"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/krabby.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/krabby.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/krabby.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/krabby.gif",
    },
    stats: {
      hp: "30",
      atk: "105",
      def: "90",
      spa: "25",
      spd: "25",
      speed: "50",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
  },
  {
    id: "0099",
    name: "Kingler",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Hyper Cutter", "Shell Armor"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kingler.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kingler.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kingler.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kingler.gif",
    },
    stats: {
      hp: "55",
      atk: "130",
      def: "115",
      spa: "50",
      spd: "50",
      speed: "75",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
  },
  {
    id: "0100",
    name: "Voltorb",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Soundproof", "Static"],
      hidden: "Aftermath",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/voltorb.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/voltorb.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/voltorb.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/voltorb.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "50",
      spa: "55",
      spd: "55",
      speed: "100",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
  },
  {
    id: "0101",
    name: "Electrode",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Soundproof", "Static"],
      hidden: "Aftermath",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/electrode.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/electrode.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/electrode.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/electrode.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "70",
      spa: "80",
      spd: "80",
      speed: "150",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
  },
  {
    id: "0102",
    name: "Exeggcute",
    region: "Kanto",
    types: ["Grass", "Psychic"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/exeggcute.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/exeggcute.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/exeggcute.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/exeggcute.gif",
    },
    stats: {
      hp: "60",
      atk: "40",
      def: "80",
      spa: "60",
      spd: "45",
      speed: "40",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
  },
  {
    id: "0103",
    name: "Exeggutor",
    region: "Kanto",
    types: ["Grass", "Psychic"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/exeggutor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/exeggutor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/exeggutor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/exeggutor.gif",
    },
    stats: {
      hp: "95",
      atk: "95",
      def: "85",
      spa: "125",
      spd: "75",
      speed: "55",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
  },
  {
    id: "0104",
    name: "Cubone",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Rock Head", "Lightning Rod"],
      hidden: "Battle Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cubone.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cubone.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cubone.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cubone.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "95",
      spa: "40",
      spd: "50",
      speed: "35",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.",
  },
  {
    id: "0105",
    name: "Marowak",
    region: "Kanto",
    types: ["Ground"],
    abilities: {
      normal: ["Rock Head", "Lightning Rod"],
      hidden: "Battle Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/marowak.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/marowak.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/marowak.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/marowak.gif",
    },
    stats: {
      hp: "60",
      atk: "80",
      def: "110",
      spa: "50",
      spd: "80",
      speed: "45",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.",
  },
  {
    id: "0106",
    name: "Hitmonlee",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Limber", "Reckless"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hitmonlee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hitmonlee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hitmonlee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hitmonlee.gif",
    },
    stats: {
      hp: "50",
      atk: "120",
      def: "53",
      spa: "35",
      spd: "110",
      speed: "87",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [100, 0],
    description:
      "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
  },
  {
    id: "0107",
    name: "Hitmonchan",
    region: "Kanto",
    types: ["Fighting"],
    abilities: {
      normal: ["Keen Eye", "Iron Fist"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hitmonchan.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hitmonchan.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hitmonchan.gif",
    },
    stats: {
      hp: "50",
      atk: "105",
      def: "79",
      spa: "35",
      spd: "110",
      speed: "76",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [100, 0],
    description:
      "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
  },
  {
    id: "0108",
    name: "Lickitung",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "Oblivious"],
      hidden: "Cloud Nine",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lickitung.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lickitung.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lickitung.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lickitung.gif",
    },
    stats: {
      hp: "90",
      atk: "55",
      def: "75",
      spa: "60",
      spd: "75",
      speed: "30",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
  },
  {
    id: "0109",
    name: "Koffing",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Levitate", "Neutralizing Gas"],
      hidden: "Stench",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/koffing.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/koffing.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/koffing.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/koffing.gif",
    },
    stats: {
      hp: "40",
      atk: "65",
      def: "95",
      spa: "60",
      spd: "45",
      speed: "35",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.",
  },
  {
    id: "0110",
    name: "Weezing",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Levitate", "Neutralizing Gas"],
      hidden: "Stench",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/weezing.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/weezing.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/weezing.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/weezing.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "120",
      spa: "85",
      spd: "70",
      speed: "60",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
  },
  {
    id: "0111",
    name: "Rhyhorn",
    region: "Kanto",
    types: ["Ground", "Rock"],
    abilities: {
      normal: ["Lightning Rod", "Rock Head"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rhyhorn.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rhyhorn.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rhyhorn.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rhyhorn.gif",
    },
    stats: {
      hp: "80",
      atk: "85",
      def: "95",
      spa: "30",
      spd: "30",
      speed: "25",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
  },
  {
    id: "0112",
    name: "Rhydon",
    region: "Kanto",
    types: ["Ground", "Rock"],
    abilities: {
      normal: ["Lightning Rod", "Rock Head"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rhydon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rhydon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rhydon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rhydon.gif",
    },
    stats: {
      hp: "105",
      atk: "130",
      def: "120",
      spa: "45",
      spd: "45",
      speed: "40",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
  },
  {
    id: "0113",
    name: "Chansey",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Natural Cure", "Serene Grace"],
      hidden: "Healer",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chansey.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chansey.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chansey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chansey.gif",
    },
    stats: {
      hp: "250",
      atk: "5",
      def: "5",
      spa: "35",
      spd: "105",
      speed: "50",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
  },
  {
    id: "0114",
    name: "Tangela",
    region: "Kanto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Leaf Guard"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tangela.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tangela.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tangela.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tangela.gif",
    },
    stats: {
      hp: "65",
      atk: "55",
      def: "115",
      spa: "100",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["Grass"],
    genderRatios: [null, null],
    description:
      "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
  },
  {
    id: "0115",
    name: "Kangaskhan",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Early Bird", "Scrappy"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kangaskhan.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kangaskhan.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kangaskhan.gif",
    },
    stats: {
      hp: "105",
      atk: "95",
      def: "80",
      spa: "40",
      spd: "80",
      speed: "90",
    },
    eggGroups: ["Monster"],
    genderRatios: [0, 100],
    description:
      "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.",
  },
  {
    id: "0116",
    name: "Horsea",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Sniper"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/horsea.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/horsea.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/horsea.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/horsea.gif",
    },
    stats: {
      hp: "30",
      atk: "40",
      def: "70",
      spa: "70",
      spd: "25",
      speed: "60",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
  },
  {
    id: "0117",
    name: "Seadra",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Poison Point", "Sniper"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seadra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seadra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seadra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seadra.gif",
    },
    stats: {
      hp: "55",
      atk: "65",
      def: "95",
      spa: "95",
      spd: "45",
      speed: "85",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
  },
  {
    id: "0118",
    name: "Goldeen",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Water Veil"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/goldeen.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/goldeen.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/goldeen.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/goldeen.gif",
    },
    stats: {
      hp: "45",
      atk: "67",
      def: "60",
      spa: "35",
      spd: "50",
      speed: "63",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Goldeen loves swimming wild and free in rivers and ponds. If one of these Pokémon is placed in an aquarium, it will shatter even the thickest glass with one ram of its horn and make its escape.",
  },
  {
    id: "0119",
    name: "Seaking",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Water Veil"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seaking.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seaking.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seaking.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seaking.gif",
    },
    stats: {
      hp: "80",
      atk: "92",
      def: "65",
      spa: "65",
      spd: "80",
      speed: "68",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Seaking is very protective of its eggs. The male and female will take turns patrolling around their nest and eggs. The guarding of eggs by these Pokémon goes on for over a month.",
  },
  {
    id: "0120",
    name: "Staryu",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Illuminate", "Natural Cure"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/staryu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/staryu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/staryu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/staryu.gif",
    },
    stats: {
      hp: "30",
      atk: "45",
      def: "55",
      spa: "70",
      spd: "55",
      speed: "85",
    },
    eggGroups: ["Water 3"],
    genderRatios: [0, 0],
    description:
      "Staryu apparently communicates with the stars in the night sky by flashing the red core at the center of its body. If parts of its body are torn, this Pokémon simply regenerates the missing pieces and limbs.",
  },
  {
    id: "0121",
    name: "Starmie",
    region: "Kanto",
    types: ["Water", "Psychic"],
    abilities: {
      normal: ["Illuminate", "Natural Cure"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/starmie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/starmie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/starmie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/starmie.gif",
    },
    stats: {
      hp: "60",
      atk: "75",
      def: "85",
      spa: "100",
      spd: "85",
      speed: "115",
    },
    eggGroups: ["Water 3"],
    genderRatios: [0, 0],
    description:
      "Starmie swims through water by spinning its star-shaped body as if it were a propeller on a ship. The core at the center of this Pokémon's body glows in seven colors.",
  },
  {
    id: "0122",
    name: "Mr.Mime",
    region: "Kanto",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Soundproof", "Filter"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mr.mime.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mr.mime.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mr.mime.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mr.mime.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "65",
      spa: "100",
      spd: "120",
      speed: "90",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
  },
  {
    id: "0123",
    name: "Scyther",
    region: "Kanto",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Swarm", "Technician"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scyther.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scyther.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scyther.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scyther.gif",
    },
    stats: {
      hp: "70",
      atk: "110",
      def: "80",
      spa: "55",
      spd: "80",
      speed: "105",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
  },
  {
    id: "0124",
    name: "Jynx",
    region: "Kanto",
    types: ["Ice", "Psychic"],
    abilities: {
      normal: ["Oblivious", "Forewarn"],
      hidden: "Dry Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jynx.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jynx.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jynx.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jynx.gif",
    },
    stats: {
      hp: "65",
      atk: "50",
      def: "35",
      spa: "115",
      spd: "95",
      speed: "95",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [0, 100],
    description:
      "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
  },
  {
    id: "0125",
    name: "Electabuzz",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/electabuzz.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/electabuzz.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/electabuzz.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/electabuzz.gif",
    },
    stats: {
      hp: "65",
      atk: "83",
      def: "57",
      spa: "95",
      spd: "85",
      speed: "105",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
  },
  {
    id: "0126",
    name: "Magmar",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magmar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magmar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magmar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magmar.gif",
    },
    stats: {
      hp: "65",
      atk: "95",
      def: "57",
      spa: "100",
      spd: "85",
      speed: "93",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
  },
  {
    id: "0127",
    name: "Pinsir",
    region: "Kanto",
    types: ["Bug"],
    abilities: {
      normal: ["Hyper Cutter", "Mold Breaker"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pinsir.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pinsir.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pinsir.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pinsir.gif",
    },
    stats: {
      hp: "65",
      atk: "125",
      def: "100",
      spa: "55",
      spd: "70",
      speed: "85",
    },
    eggGroups: ["Bug"],
    genderRatios: [null, null],
    description:
      "Pinsir has a pair of massive horns. Protruding from the surface of these horns are thorns. These thorns are driven deeply into the foe's body when the pincer closes, making it tough for the foe to escape.",
  },
  {
    id: "0128",
    name: "Tauros",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Intimidate", "Anger Point"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tauros.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tauros.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tauros.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tauros.gif",
    },
    stats: {
      hp: "75",
      atk: "100",
      def: "95",
      spa: "40",
      spd: "70",
      speed: "110",
    },
    eggGroups: ["Field"],
    genderRatios: [100, 0],
    description:
      "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
  },
  {
    id: "0129",
    name: "Magikarp",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magikarp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magikarp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magikarp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magikarp.gif",
    },
    stats: {
      hp: "20",
      atk: "10",
      def: "55",
      spa: "15",
      spd: "20",
      speed: "80",
    },
    eggGroups: ["Water 2", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Magikarp is virtually useless in battle as it can only splash around. As a result, it is considered to be weak. However, it is actually a very hardy Pokémon that can survive in any body of water no matter how polluted it is.",
  },
  {
    id: "0130",
    name: "Gyarados",
    region: "Kanto",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Intimidate"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gyarados.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gyarados.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gyarados.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gyarados.gif",
    },
    stats: {
      hp: "95",
      atk: "125",
      def: "79",
      spa: "60",
      spd: "100",
      speed: "81",
    },
    eggGroups: ["Water 2", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Once Gyarados goes on a rampage, its ferociously violent blood doesn't calm until it has burned everything down. There are records of this Pokémon's rampages lasting a whole month.",
  },
  {
    id: "0131",
    name: "Lapras",
    region: "Kanto",
    types: ["Water", "Ice"],
    abilities: {
      normal: ["Water Absorb", "Shell Armor"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lapras.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lapras.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lapras.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lapras.gif",
    },
    stats: {
      hp: "130",
      atk: "85",
      def: "80",
      spa: "85",
      spd: "95",
      speed: "60",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
  },
  {
    id: "0132",
    name: "Ditto",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Limber"],
      hidden: "Imposter",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ditto.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ditto.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ditto.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ditto.gif",
    },
    stats: {
      hp: "48",
      atk: "48",
      def: "48",
      spa: "48",
      spd: "48",
      speed: "48",
    },
    eggGroups: ["Ditto"],
    genderRatios: [0, 0],
    description:
      "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.",
  },
  {
    id: "0133",
    name: "Eevee",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Adaptability"],
      hidden: "Anticipation",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/eevee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/eevee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/eevee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/eevee.gif",
    },
    stats: {
      hp: "55",
      atk: "55",
      def: "50",
      spa: "45",
      spd: "65",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
  },
  {
    id: "0134",
    name: "Vaporeon",
    region: "Kanto",
    types: ["Water"],
    abilities: {
      normal: ["Water Absorb"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vaporeon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vaporeon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vaporeon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vaporeon.gif",
    },
    stats: {
      hp: "130",
      atk: "65",
      def: "60",
      spa: "110",
      spd: "95",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.",
  },
  {
    id: "0135",
    name: "Jolteon",
    region: "Kanto",
    types: ["Electric"],
    abilities: {
      normal: ["Volt Absorb"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jolteon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jolteon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jolteon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jolteon.gif",
    },
    stats: {
      hp: "65",
      atk: "65",
      def: "60",
      spa: "110",
      spd: "95",
      speed: "130",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
  },
  {
    id: "0136",
    name: "Flareon",
    region: "Kanto",
    types: ["Fire"],
    abilities: {
      normal: ["Flash Fire"],
      hidden: "Guts",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/flareon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/flareon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/flareon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/flareon.gif",
    },
    stats: {
      hp: "65",
      atk: "130",
      def: "60",
      spa: "95",
      spd: "110",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
  },
  {
    id: "0137",
    name: "Porygon",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Trace", "Download"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/porygon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/porygon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/porygon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/porygon.gif",
    },
    stats: {
      hp: "65",
      atk: "60",
      def: "70",
      spa: "85",
      spd: "75",
      speed: "40",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.",
  },
  {
    id: "0138",
    name: "Omanyte",
    region: "Kanto",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Swift Swim", "Shell Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/omanyte.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/omanyte.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/omanyte.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/omanyte.gif",
    },
    stats: {
      hp: "35",
      atk: "40",
      def: "100",
      spa: "90",
      spd: "55",
      speed: "35",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
  },
  {
    id: "0139",
    name: "Omastar",
    region: "Kanto",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Swift Swim", "Shell Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/omastar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/omastar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/omastar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/omastar.gif",
    },
    stats: {
      hp: "70",
      atk: "60",
      def: "125",
      spa: "115",
      spd: "70",
      speed: "55",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.",
  },
  {
    id: "0140",
    name: "Kabuto",
    region: "Kanto",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Swift Swim", "Battle Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kabuto.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kabuto.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kabuto.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kabuto.gif",
    },
    stats: {
      hp: "30",
      atk: "80",
      def: "90",
      spa: "55",
      spd: "45",
      speed: "55",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.",
  },
  {
    id: "0141",
    name: "Kabutops",
    region: "Kanto",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Swift Swim", "Battle Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kabutops.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kabutops.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kabutops.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kabutops.gif",
    },
    stats: {
      hp: "60",
      atk: "115",
      def: "105",
      spa: "65",
      spd: "70",
      speed: "80",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.",
  },
  {
    id: "0142",
    name: "Aerodactyl",
    region: "Kanto",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Rock Head", "Pressure"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aerodactyl.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aerodactyl.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aerodactyl.gif",
    },
    stats: {
      hp: "80",
      atk: "105",
      def: "65",
      spa: "60",
      spd: "75",
      speed: "130",
    },
    eggGroups: ["Flying"],
    genderRatios: [87.5, 12.5],
    description:
      "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times",
  },
  {
    id: "0143",
    name: "Snorlax",
    region: "Kanto",
    types: ["Normal"],
    abilities: {
      normal: ["Immunity", "Thick Fat"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/snorlax.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/snorlax.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/snorlax.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/snorlax.gif",
    },
    stats: {
      hp: "160",
      atk: "110",
      def: "65",
      spa: "65",
      spd: "110",
      speed: "30",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
  },
  {
    id: "0144",
    name: "Articuno",
    region: "Kanto",
    types: ["Ice", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Snow Cloak",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/articuno.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/articuno.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/articuno.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/articuno.gif",
    },
    stats: {
      hp: "90",
      atk: "85",
      def: "100",
      spa: "95",
      spd: "125",
      speed: "85",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
  },
  {
    id: "0145",
    name: "Zapdos",
    region: "Kanto",
    types: ["Electric", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Static",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zapdos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zapdos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zapdos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zapdos.gif",
    },
    stats: {
      hp: "90",
      atk: "90",
      def: "85",
      spa: "125",
      spd: "90",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
  },
  {
    id: "0146",
    name: "Moltres",
    region: "Kanto",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/moltres.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/moltres.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/moltres.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/moltres.gif",
    },
    stats: {
      hp: "90",
      atk: "100",
      def: "90",
      spa: "125",
      spd: "85",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
  },
  {
    id: "0147",
    name: "Dratini",
    region: "Kanto",
    types: ["Dragon"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Marvel Scale",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dratini.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dratini.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dratini.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dratini.gif",
    },
    stats: {
      hp: "41",
      atk: "64",
      def: "45",
      spa: "50",
      spd: "50",
      speed: "50",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
  },
  {
    id: "0148",
    name: "Dragonair",
    region: "Kanto",
    types: ["Dragon"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Marvel Scale",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dragonair.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dragonair.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dragonair.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dragonair.gif",
    },
    stats: {
      hp: "61",
      atk: "84",
      def: "65",
      spa: "70",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.",
  },
  {
    id: "0149",
    name: "Dragonite",
    region: "Kanto",
    types: ["Dragon", "Flying"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "Multiscale",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dragonite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dragonite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dragonite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dragonite.gif",
    },
    stats: {
      hp: "91",
      atk: "134",
      def: "95",
      spa: "100",
      spd: "100",
      speed: "80",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
  },
  {
    id: "0150",
    name: "Mewtwo",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mewtwo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mewtwo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mewtwo.gif",
    },
    stats: {
      hp: "106",
      atk: "110",
      def: "90",
      spa: "154",
      spd: "90",
      speed: "130",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
  },
  {
    id: "0151",
    name: "Mew",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mew.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mew.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mew.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mew.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
  },
  {
    id: "0152",
    name: "Chikorita",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chikorita.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chikorita.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chikorita.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chikorita.gif",
    },
    stats: {
      hp: "45",
      atk: "49",
      def: "65",
      spa: "49",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
  },
  {
    id: "0153",
    name: "Bayleef",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bayleef.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bayleef.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bayleef.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bayleef.gif",
    },
    stats: {
      hp: "60",
      atk: "62",
      def: "80",
      spa: "63",
      spd: "80",
      speed: "60",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
  },
  {
    id: "0154",
    name: "Meganium",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meganium.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meganium.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meganium.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meganium.gif",
    },
    stats: {
      hp: "80",
      atk: "82",
      def: "100",
      spa: "83",
      spd: "100",
      speed: "80",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe's fighting spirit.",
  },
  {
    id: "0155",
    name: "Cyndaquil",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cyndaquil.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cyndaquil.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cyndaquil.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cyndaquil.gif",
    },
    stats: {
      hp: "39",
      atk: "52",
      def: "43",
      spa: "60",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
  },
  {
    id: "0156",
    name: "Quilava",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/quilava.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/quilava.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/quilava.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/quilava.gif",
    },
    stats: {
      hp: "58",
      atk: "64",
      def: "58",
      spa: "80",
      spd: "65",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
  },
  {
    id: "0157",
    name: "Typhlosion",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/typhlosion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/typhlosion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/typhlosion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/typhlosion.gif",
    },
    stats: {
      hp: "78",
      atk: "84",
      def: "78",
      spa: "109",
      spd: "85",
      speed: "100",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
  },
  {
    id: "0158",
    name: "Totodile",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/totodile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/totodile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/totodile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/totodile.gif",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "64",
      spa: "44",
      spd: "48",
      speed: "43",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
  },
  {
    id: "0159",
    name: "Croconaw",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/croconaw.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/croconaw.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/croconaw.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/croconaw.gif",
    },
    stats: {
      hp: "65",
      atk: "80",
      def: "80",
      spa: "59",
      spd: "63",
      speed: "58",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
  },
  {
    id: "0160",
    name: "Feraligatr",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/feraligatr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/feraligatr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/feraligatr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/feraligatr.gif",
    },
    stats: {
      hp: "85",
      atk: "105",
      def: "100",
      spa: "79",
      spd: "83",
      speed: "78",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
  },
  {
    id: "0161",
    name: "Sentret",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Keen Eye"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sentret.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sentret.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sentret.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sentret.gif",
    },
    stats: {
      hp: "35",
      atk: "46",
      def: "34",
      spa: "35",
      spd: "45",
      speed: "20",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
  },
  {
    id: "0162",
    name: "Furret",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Keen Eye"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/furret.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/furret.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/furret.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/furret.gif",
    },
    stats: {
      hp: "85",
      atk: "76",
      def: "64",
      spa: "45",
      spd: "55",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
  },
  {
    id: "0163",
    name: "Hoothoot",
    region: "Johto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Insomnia", "Keen Eye"],
      hidden: "Tinted Lens",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hoothoot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hoothoot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hoothoot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hoothoot.gif",
    },
    stats: {
      hp: "60",
      atk: "30",
      def: "30",
      spa: "36",
      spd: "56",
      speed: "50",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pokémon begins hooting at precisely the same time every day.",
  },
  {
    id: "0164",
    name: "Noctowl",
    region: "Johto",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Insomnia", "Keen Eye"],
      hidden: "Tinted Lens",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/noctowl.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/noctowl.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/noctowl.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/noctowl.gif",
    },
    stats: {
      hp: "100",
      atk: "50",
      def: "50",
      spa: "86",
      spd: "96",
      speed: "70",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Noctowl never fails at catching prey in darkness. This Pokémon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.",
  },
  {
    id: "0165",
    name: "Ledyba",
    region: "Johto",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Swarm", "Early Bird"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ledyba.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ledyba.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ledyba.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ledyba.gif",
    },
    stats: {
      hp: "40",
      atk: "20",
      def: "30",
      spa: "40",
      spd: "80",
      speed: "55",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pokémon conveys its feelings to others by altering the fluid's scent.",
  },
  {
    id: "0166",
    name: "Ledian",
    region: "Johto",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Swarm", "Early Bird"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ledian.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ledian.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ledian.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ledian.gif",
    },
    stats: {
      hp: "55",
      atk: "35",
      def: "50",
      spa: "55",
      spd: "110",
      speed: "85",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this—the Pokémon uses the light of the stars as its energy.",
  },
  {
    id: "0167",
    name: "Spinarak",
    region: "Johto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Swarm", "Insomnia"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spinarak.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spinarak.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spinarak.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spinarak.gif",
    },
    stats: {
      hp: "40",
      atk: "60",
      def: "40",
      spa: "40",
      spd: "40",
      speed: "30",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
  },
  {
    id: "0168",
    name: "Ariados",
    region: "Johto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Swarm", "Insomnia"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ariados.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ariados.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ariados.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ariados.gif",
    },
    stats: {
      hp: "70",
      atk: "90",
      def: "70",
      spa: "60",
      spd: "70",
      speed: "40",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
  },
  {
    id: "0169",
    name: "Crobat",
    region: "Johto",
    types: ["Poison", "Flying"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/crobat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/crobat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/crobat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/crobat.gif",
    },
    stats: {
      hp: "85",
      atk: "90",
      def: "80",
      spa: "70",
      spd: "80",
      speed: "130",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "If this Pokémon is flying by fluttering only a pair of wings on either the forelegs or hind legs, it's proof that Crobat has been flying a long distance. It switches the wings it uses if it is tired.",
  },
  {
    id: "0170",
    name: "Chinchou",
    region: "Johto",
    types: ["Water", "Electric"],
    abilities: {
      normal: ["Volt Absorb", "Illuminate"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chinchou.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chinchou.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chinchou.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chinchou.gif",
    },
    stats: {
      hp: "75",
      atk: "38",
      def: "38",
      spa: "56",
      spd: "56",
      speed: "67",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint. This Pokémon flashes its electric lights to exchange signals with others.",
  },
  {
    id: "0171",
    name: "Lanturn",
    region: "Johto",
    types: ["Water", "Electric"],
    abilities: {
      normal: ["Volt Absorb", "Illuminate"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lanturn.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lanturn.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lanturn.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lanturn.gif",
    },
    stats: {
      hp: "125",
      atk: "58",
      def: "58",
      spa: "76",
      spd: "76",
      speed: "67",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Lanturn is known to emit light. If you peer down into the dark sea from a ship at night, you can sometimes see this Pokémon's light rising from the depths where it swims. It gives the sea an appearance of a starlit night.",
  },
  {
    id: "0172",
    name: "Pichu",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pichu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pichu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pichu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pichu.gif",
    },
    stats: {
      hp: "20",
      atk: "40",
      def: "15",
      spa: "35",
      spd: "35",
      speed: "60",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "When Pichu plays with others, it may short out electricity with another Pichu, creating a shower of sparks. In that event, this Pokémon will begin crying, startled by the flash of sparks.",
  },
  {
    id: "0173",
    name: "Cleffa",
    region: "Johto",
    types: ["Fairy"],
    abilities: {
      normal: ["Cute Charm", "Magic Guard"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cleffa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cleffa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cleffa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cleffa.gif",
    },
    stats: {
      hp: "50",
      atk: "25",
      def: "28",
      spa: "45",
      spd: "55",
      speed: "15",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [25, 75],
    description:
      "On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pokémon quench their thirst with the morning dew.",
  },
  {
    id: "0174",
    name: "Igglybuff",
    region: "Johto",
    types: ["Normal", "Fairy"],
    abilities: {
      normal: ["Cute Charm", "Competitive"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/igglybuff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/igglybuff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/igglybuff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/igglybuff.gif",
    },
    stats: {
      hp: "90",
      atk: "30",
      def: "15",
      spa: "40",
      spd: "20",
      speed: "15",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [25, 75],
    description:
      "Igglybuff has a soft and plushy body that feels very much like a marshmallow. From this body wafts a gently sweet fragrance that soothes and calms the emotions of its foes.",
  },
  {
    id: "0175",
    name: "Togepi",
    region: "Johto",
    types: ["Fairy"],
    abilities: {
      normal: ["Hustle", "Serene Grace"],
      hidden: "Super Luck",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/togepi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/togepi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/togepi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/togepi.gif",
    },
    stats: {
      hp: "35",
      atk: "20",
      def: "65",
      spa: "40",
      spd: "65",
      speed: "20",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [87.5, 12.5],
    description:
      "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
  },
  {
    id: "0176",
    name: "Togetic",
    region: "Johto",
    types: ["Fairy", "Flying"],
    abilities: {
      normal: ["Hustle", "Serene Grace"],
      hidden: "Super Luck",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/togetic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/togetic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/togetic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/togetic.gif",
    },
    stats: {
      hp: "55",
      atk: "40",
      def: "85",
      spa: "80",
      spd: "105",
      speed: "40",
    },
    eggGroups: ["Flying", "Fairy"],
    genderRatios: [87.5, 12.5],
    description:
      "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
  },
  {
    id: "0177",
    name: "Natu",
    region: "Johto",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Synchronize", "Early Bird"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/natu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/natu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/natu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/natu.gif",
    },
    stats: {
      hp: "40",
      atk: "50",
      def: "45",
      spa: "70",
      spd: "45",
      speed: "70",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Natu cannot fly because its wings are not yet fully grown. If your eyes meet with this Pokémon's eyes, it will stare back intently at you. But if you move even slightly, it will hop away to safety.",
  },
  {
    id: "0178",
    name: "Xatu",
    region: "Johto",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Synchronize", "Early Bird"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/xatu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/xatu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/xatu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/xatu.gif",
    },
    stats: {
      hp: "65",
      atk: "75",
      def: "70",
      spa: "95",
      spd: "70",
      speed: "95",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Xatu is known to stand motionless while staring at the sun all day long. Some people revere it as a mystical Pokémon out of their belief that Xatu is in possession of the power to see into the future.",
  },
  {
    id: "0179",
    name: "Mareep",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Plus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mareep.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mareep.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mareep.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mareep.gif",
    },
    stats: {
      hp: "55",
      atk: "40",
      def: "40",
      spa: "65",
      spd: "45",
      speed: "35",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.",
  },
  {
    id: "0180",
    name: "Flaaffy",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Plus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/flaaffy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/flaaffy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/flaaffy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/flaaffy.gif",
    },
    stats: {
      hp: "70",
      atk: "55",
      def: "55",
      spa: "80",
      spd: "60",
      speed: "45",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.",
  },
  {
    id: "0181",
    name: "Ampharos",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Plus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ampharos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ampharos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ampharos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ampharos.gif",
    },
    stats: {
      hp: "90",
      atk: "75",
      def: "85",
      spa: "115",
      spd: "90",
      speed: "55",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pokémon to send signals back and forth with others far away.",
  },
  {
    id: "0182",
    name: "Bellossom",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "Healer",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bellossom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bellossom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bellossom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bellossom.gif",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "95",
      spa: "90",
      spd: "100",
      speed: "50",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
  },
  {
    id: "0183",
    name: "Marill",
    region: "Johto",
    types: ["Water", "Fairy"],
    abilities: {
      normal: ["Thick Fat", "Huge Power"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/marill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/marill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/marill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/marill.gif",
    },
    stats: {
      hp: "70",
      atk: "20",
      def: "50",
      spa: "20",
      spd: "50",
      speed: "40",
    },
    eggGroups: ["Water 1", "Fairy"],
    genderRatios: [50, 50],
    description:
      "Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pokémon is diving beneath the water to feed on aquatic plants.",
  },
  {
    id: "0184",
    name: "Azumarill",
    region: "Johto",
    types: ["Water", "Fairy"],
    abilities: {
      normal: ["Thick Fat", "Huge Power"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/azumarill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/azumarill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/azumarill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/azumarill.gif",
    },
    stats: {
      hp: "100",
      atk: "50",
      def: "80",
      spa: "60",
      spd: "80",
      speed: "50",
    },
    eggGroups: ["Water 1", "Fairy"],
    genderRatios: [50, 50],
    description:
      "Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pokémon can identify what kinds of prey are around, even in rough and fast-running rivers.",
  },
  {
    id: "0185",
    name: "Sudowoodo",
    region: "Johto",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Rock Head"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sudowoodo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sudowoodo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sudowoodo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sudowoodo.gif",
    },
    stats: {
      hp: "70",
      atk: "100",
      def: "115",
      spa: "30",
      spd: "65",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pokémon is easily identified as a fake during the winter.",
  },
  {
    id: "0186",
    name: "Politoed",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Water Absorb", "Damp"],
      hidden: "Drizzle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/politoed.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/politoed.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/politoed.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/politoed.gif",
    },
    stats: {
      hp: "90",
      atk: "75",
      def: "75",
      spa: "90",
      spd: "100",
      speed: "70",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pokémon earns from its peers.",
  },
  {
    id: "0187",
    name: "Hoppip",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf Guard"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hoppip.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hoppip.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hoppip.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hoppip.gif",
    },
    stats: {
      hp: "35",
      atk: "35",
      def: "40",
      spa: "35",
      spd: "55",
      speed: "50",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
  },
  {
    id: "0188",
    name: "Skiploom",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf Guard"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skiploom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skiploom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skiploom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skiploom.gif",
    },
    stats: {
      hp: "55",
      atk: "45",
      def: "50",
      spa: "45",
      spd: "65",
      speed: "80",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
  },
  {
    id: "0189",
    name: "Jumpluff",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf Guard"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jumpluff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jumpluff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jumpluff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jumpluff.gif",
    },
    stats: {
      hp: "75",
      atk: "55",
      def: "70",
      spa: "55",
      spd: "95",
      speed: "110",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
  },
  {
    id: "0190",
    name: "Aipom",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Pickup"],
      hidden: "Skill Link",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aipom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aipom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aipom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aipom.gif",
    },
    stats: {
      hp: "55",
      atk: "70",
      def: "55",
      spa: "40",
      spd: "55",
      speed: "85",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pokémon uses its tail so much, its real hands have become rather clumsy.",
  },
  {
    id: "0191",
    name: "Sunkern",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Solar Power"],
      hidden: "Early Bird",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sunkern.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sunkern.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sunkern.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sunkern.gif",
    },
    stats: {
      hp: "30",
      atk: "30",
      def: "30",
      spa: "30",
      spd: "30",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
  },
  {
    id: "0192",
    name: "Sunflora",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Solar Power"],
      hidden: "Early Bird",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sunflora.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sunflora.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sunflora.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sunflora.gif",
    },
    stats: {
      hp: "75",
      atk: "75",
      def: "55",
      spa: "105",
      spd: "85",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
  },
  {
    id: "0193",
    name: "Yanma",
    region: "Johto",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Speed Boost", "Compound Eyes"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/yanma.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/yanma.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/yanma.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/yanma.gif",
    },
    stats: {
      hp: "65",
      atk: "65",
      def: "45",
      spa: "75",
      spd: "45",
      speed: "95",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
  },
  {
    id: "0194",
    name: "Wooper",
    region: "Johto",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Damp", "Water Absorb"],
      hidden: "Unaware",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wooper.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wooper.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wooper.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wooper.gif",
    },
    stats: {
      hp: "55",
      atk: "45",
      def: "45",
      spa: "25",
      spd: "25",
      speed: "15",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
  },
  {
    id: "0195",
    name: "Quagsire",
    region: "Johto",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Damp", "Water Absorb"],
      hidden: "Unaware",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/quagsire.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/quagsire.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/quagsire.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/quagsire.gif",
    },
    stats: {
      hp: "95",
      atk: "85",
      def: "85",
      spa: "65",
      spd: "65",
      speed: "35",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
  },
  {
    id: "0196",
    name: "Espeon",
    region: "Johto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/espeon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/espeon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/espeon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/espeon.gif",
    },
    stats: {
      hp: "65",
      atk: "65",
      def: "60",
      spa: "130",
      spd: "95",
      speed: "110",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pokémon developed its precognitive powers to protect its Trainer from harm.",
  },
  {
    id: "0197",
    name: "Umbreon",
    region: "Johto",
    types: ["Dark"],
    abilities: {
      normal: ["Synchronize"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/umbreon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/umbreon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/umbreon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/umbreon.gif",
    },
    stats: {
      hp: "95",
      atk: "65",
      def: "110",
      spa: "60",
      spd: "130",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.",
  },
  {
    id: "0198",
    name: "Murkrow",
    region: "Johto",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Insomnia", "Super Luck"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/murkrow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/murkrow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/murkrow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/murkrow.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "42",
      spa: "85",
      spd: "42",
      speed: "91",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pokémon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.",
  },
  {
    id: "0199",
    name: "Slowking",
    region: "Johto",
    types: ["Water", "Psychic"],
    abilities: {
      normal: ["Oblivious", "Own Tempo"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slowking.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slowking.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slowking.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slowking.gif",
    },
    stats: {
      hp: "95",
      atk: "75",
      def: "80",
      spa: "100",
      spd: "110",
      speed: "30",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.",
  },
  {
    id: "0200",
    name: "Misdreavus",
    region: "Johto",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/misdreavus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/misdreavus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/misdreavus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/misdreavus.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "60",
      spa: "85",
      spd: "85",
      speed: "85",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
  },
  {
    id: "0201",
    name: "Unown",
    region: "Johto",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/unown.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/unown.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/unown.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/unown.gif",
    },
    stats: {
      hp: "48",
      atk: "72",
      def: "48",
      spa: "72",
      spd: "48",
      speed: "48",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
  },
  {
    id: "0202",
    name: "Wobbuffet",
    region: "Johto",
    types: ["Psychic"],
    abilities: {
      normal: ["Shadow Tag"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wobbuffet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wobbuffet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wobbuffet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wobbuffet.gif",
    },
    stats: {
      hp: "190",
      atk: "33",
      def: "58",
      spa: "33",
      spd: "58",
      speed: "33",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "If two or more Wobbuffet meet, they will turn competitive and try to outdo each other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
  },
  {
    id: "0203",
    name: "Girafarig",
    region: "Johto",
    types: ["Normal", "Psychic"],
    abilities: {
      normal: ["Inner Focus", "Early Bird"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/girafarig.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/girafarig.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/girafarig.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/girafarig.gif",
    },
    stats: {
      hp: "70",
      atk: "80",
      def: "65",
      spa: "90",
      spd: "65",
      speed: "85",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
  },
  {
    id: "0204",
    name: "Pineco",
    region: "Johto",
    types: ["Bug"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pineco.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pineco.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pineco.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pineco.gif",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "90",
      spa: "35",
      spd: "35",
      speed: "15",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pokémon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.",
  },
  {
    id: "0205",
    name: "Forretress",
    region: "Johto",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/forretress.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/forretress.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/forretress.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/forretress.gif",
    },
    stats: {
      hp: "75",
      atk: "90",
      def: "140",
      spa: "60",
      spd: "60",
      speed: "40",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pokémon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.",
  },
  {
    id: "0206",
    name: "Dunsparce",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Serene Grace", "Run Away"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dunsparce.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dunsparce.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dunsparce.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dunsparce.gif",
    },
    stats: {
      hp: "100",
      atk: "70",
      def: "70",
      spa: "65",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pokémon is known to make its nest in complex shapes deep under the ground.",
  },
  {
    id: "0207",
    name: "Gligar",
    region: "Johto",
    types: ["Ground", "Flying"],
    abilities: {
      normal: ["Hyper Cutter", "Sand Veil"],
      hidden: "Immunity",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gligar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gligar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gligar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gligar.gif",
    },
    stats: {
      hp: "65",
      atk: "75",
      def: "105",
      spa: "35",
      spd: "65",
      speed: "85",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
  },
  {
    id: "0208",
    name: "Steelix",
    region: "Johto",
    types: ["Steel", "Ground"],
    abilities: {
      normal: ["Rock Head", "Sturdy"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/steelix.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/steelix.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/steelix.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/steelix.gif",
    },
    stats: {
      hp: "75",
      atk: "85",
      def: "200",
      spa: "55",
      spd: "65",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth's core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
  },
  {
    id: "0209",
    name: "Snubbull",
    region: "Johto",
    types: ["Fairy"],
    abilities: {
      normal: ["Intimidate", "Run Away"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/snubbull.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/snubbull.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/snubbull.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/snubbull.gif",
    },
    stats: {
      hp: "60",
      atk: "80",
      def: "50",
      spa: "40",
      spd: "40",
      speed: "30",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [25, 75],
    description:
      "By baring its fangs and making a scary face, Snubbull sends smaller Pokémon scurrying away in terror. However, this Pokémon seems a little sad at making its foes flee.",
  },
  {
    id: "0210",
    name: "Granbull",
    region: "Johto",
    types: ["Fairy"],
    abilities: {
      normal: ["Intimidate", "Quick Feet"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/granbull.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/granbull.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/granbull.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/granbull.gif",
    },
    stats: {
      hp: "90",
      atk: "120",
      def: "75",
      spa: "60",
      spd: "60",
      speed: "45",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [25, 75],
    description:
      "Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pokémon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.",
  },
  {
    id: "0211",
    name: "Qwilfish",
    region: "Johto",
    types: ["Water", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swift Swim"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/qwilfish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/qwilfish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/qwilfish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/qwilfish.gif",
    },
    stats: {
      hp: "65",
      atk: "95",
      def: "85",
      spa: "55",
      spd: "55",
      speed: "85",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
  },
  {
    id: "0212",
    name: "Scizor",
    region: "Johto",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Swarm", "Technician"],
      hidden: "Light Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scizor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scizor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scizor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scizor.gif",
    },
    stats: {
      hp: "70",
      atk: "130",
      def: "100",
      spa: "55",
      spd: "80",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pokémon flaps its wings to regulate its body temperature.",
  },
  {
    id: "0213",
    name: "Shuckle",
    region: "Johto",
    types: ["Bug", "Rock"],
    abilities: {
      normal: ["Sturdy", "Gluttony"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shuckle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shuckle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shuckle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shuckle.gif",
    },
    stats: {
      hp: "20",
      atk: "10",
      def: "230",
      spa: "10",
      spd: "230",
      speed: "5",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
  },
  {
    id: "0214",
    name: "Heracross",
    region: "Johto",
    types: ["Bug", "Fighting"],
    abilities: {
      normal: ["Swarm", "Guts"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/heracross.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/heracross.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/heracross.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/heracross.gif",
    },
    stats: {
      hp: "80",
      atk: "125",
      def: "75",
      spa: "40",
      spd: "95",
      speed: "85",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",
  },
  {
    id: "0215",
    name: "Sneasel",
    region: "Johto",
    types: ["Dark", "Ice"],
    abilities: {
      normal: ["Inner Focus", "Keen Eye"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sneasel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sneasel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sneasel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sneasel.gif",
    },
    stats: {
      hp: "55",
      atk: "95",
      def: "55",
      spa: "35",
      spd: "75",
      speed: "115",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Sneasel scales trees by punching its hooked claws into the bark. This Pokémon seeks out unguarded nests and steals eggs for food while the parents are away.",
  },
  {
    id: "0216",
    name: "Teddiursa",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Quick Feet"],
      hidden: "Honey Gather",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/teddiursa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/teddiursa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/teddiursa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/teddiursa.gif",
    },
    stats: {
      hp: "60",
      atk: "80",
      def: "50",
      spa: "50",
      spd: "50",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
  },
  {
    id: "0217",
    name: "Ursaring",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Guts", "Quick Feet"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ursaring.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ursaring.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ursaring.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ursaring.gif",
    },
    stats: {
      hp: "90",
      atk: "130",
      def: "75",
      spa: "75",
      spd: "75",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
  },
  {
    id: "0218",
    name: "Slugma",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Magma Armor", "Flame Body"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slugma.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slugma.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slugma.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slugma.gif",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "40",
      spa: "70",
      spd: "40",
      speed: "20",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Molten magma courses throughout Slugma's circulatory system. If this Pokémon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
  },
  {
    id: "0219",
    name: "Magcargo",
    region: "Johto",
    types: ["Fire", "Rock"],
    abilities: {
      normal: ["Magma Armor", "Flame Body"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magcargo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magcargo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magcargo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magcargo.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "120",
      spa: "90",
      spd: "80",
      speed: "30",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile—just touching it causes it to crumble apart. This Pokémon returns to its original size by dipping itself in magma.",
  },
  {
    id: "0220",
    name: "Swinub",
    region: "Johto",
    types: ["Ice", "Ground"],
    abilities: {
      normal: ["Oblivious", "Snow Cloak"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swinub.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swinub.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swinub.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swinub.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "40",
      spa: "30",
      spd: "30",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
  },
  {
    id: "0221",
    name: "Piloswine",
    region: "Johto",
    types: ["Ice", "Ground"],
    abilities: {
      normal: ["Oblivious", "Snow Cloak"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/piloswine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/piloswine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/piloswine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/piloswine.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "80",
      spa: "60",
      spd: "60",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
  },
  {
    id: "0222",
    name: "Corsola",
    region: "Johto",
    types: ["Water", "Rock"],
    abilities: {
      normal: ["Hustle", "Natural Cure"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/corsola.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/corsola.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/corsola.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/corsola.gif",
    },
    stats: {
      hp: "65",
      atk: "55",
      def: "95",
      spa: "65",
      spd: "95",
      speed: "35",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [25, 75],
    description:
      "Clusters of Corsola congregate in warm seas where they serve as ideal hiding places for smaller Pokémon. When the water temperature falls, this Pokémon migrates to the southern seas.",
  },
  {
    id: "0223",
    name: "Remoraid",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Hustle", "Sniper"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/remoraid.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/remoraid.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/remoraid.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/remoraid.gif",
    },
    stats: {
      hp: "35",
      atk: "65",
      def: "35",
      spa: "65",
      spd: "35",
      speed: "65",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [50, 50],
    description:
      "Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pokémon travels downstream from rivers.",
  },
  {
    id: "0224",
    name: "Octillery",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Suction Cups", "Sniper"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/octillery.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/octillery.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/octillery.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/octillery.gif",
    },
    stats: {
      hp: "75",
      atk: "105",
      def: "75",
      spa: "105",
      spd: "75",
      speed: "45",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [50, 50],
    description:
      "Octillery grabs onto its foe using its tentacles. This Pokémon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.",
  },
  {
    id: "0225",
    name: "Delibird",
    region: "Johto",
    types: ["Ice", "Flying"],
    abilities: {
      normal: ["Vital Spirit", "Hustle"],
      hidden: "Insomnia",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/delibird.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/delibird.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/delibird.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/delibird.gif",
    },
    stats: {
      hp: "45",
      atk: "55",
      def: "45",
      spa: "65",
      spd: "45",
      speed: "75",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pokémon sharing its food.",
  },
  {
    id: "0226",
    name: "Mantine",
    region: "Johto",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Swift Swim", "Water Absorb"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mantine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mantine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mantine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mantine.gif",
    },
    stats: {
      hp: "85",
      atk: "40",
      def: "70",
      spa: "80",
      spd: "140",
      speed: "70",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
  },
  {
    id: "0227",
    name: "Skarmory",
    region: "Johto",
    types: ["Steel", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Sturdy"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skarmory.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skarmory.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skarmory.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skarmory.gif",
    },
    stats: {
      hp: "65",
      atk: "80",
      def: "140",
      spa: "40",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Skarmory's steel wings become tattered and bashed in from repeated battles. Once a year, the battered wings grow back completely, restoring the cutting edges to their pristine state.",
  },
  {
    id: "0228",
    name: "Houndour",
    region: "Johto",
    types: ["Dark", "Fire"],
    abilities: {
      normal: ["Early Bird", "Flash Fire"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/houndour.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/houndour.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/houndour.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/houndour.gif",
    },
    stats: {
      hp: "45",
      atk: "60",
      def: "30",
      spa: "80",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
  },
  {
    id: "0229",
    name: "Houndoom",
    region: "Johto",
    types: ["Dark", "Fire"],
    abilities: {
      normal: ["Early Bird", "Flash Fire"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/houndoom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/houndoom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/houndoom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/houndoom.gif",
    },
    stats: {
      hp: "75",
      atk: "90",
      def: "50",
      spa: "110",
      spd: "80",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.",
  },
  {
    id: "0230",
    name: "Kingdra",
    region: "Johto",
    types: ["Water", "Dragon"],
    abilities: {
      normal: ["Swift Swim", "Sniper"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kingdra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kingdra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kingdra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kingdra.gif",
    },
    stats: {
      hp: "75",
      atk: "95",
      def: "95",
      spa: "95",
      spd: "95",
      speed: "85",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.",
  },
  {
    id: "0231",
    name: "Phanpy",
    region: "Johto",
    types: ["Ground"],
    abilities: {
      normal: ["Pickup"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/phanpy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/phanpy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/phanpy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/phanpy.gif",
    },
    stats: {
      hp: "90",
      atk: "60",
      def: "60",
      spa: "40",
      spd: "40",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
  },
  {
    id: "0232",
    name: "Donphan",
    region: "Johto",
    types: ["Ground"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/donphan.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/donphan.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/donphan.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/donphan.gif",
    },
    stats: {
      hp: "90",
      atk: "120",
      def: "120",
      spa: "60",
      spd: "60",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
  },
  {
    id: "0233",
    name: "Porygon2",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Trace", "Download"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/porygon2.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/porygon2.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/porygon2.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/porygon2.gif",
    },
    stats: {
      hp: "85",
      atk: "80",
      def: "90",
      spa: "105",
      spd: "95",
      speed: "60",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Porygon2 was created by humans using the power of science. The man-made Pokémon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.",
  },
  {
    id: "0234",
    name: "Stantler",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Intimidate", "Frisk"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stantler.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stantler.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stantler.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stantler.gif",
    },
    stats: {
      hp: "73",
      atk: "95",
      def: "62",
      spa: "85",
      spd: "65",
      speed: "85",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
  },
  {
    id: "0235",
    name: "Smeargle",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "Technician"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/smeargle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/smeargle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/smeargle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/smeargle.gif",
    },
    stats: {
      hp: "55",
      atk: "20",
      def: "35",
      spa: "20",
      spd: "45",
      speed: "75",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pokémon have been found.",
  },
  {
    id: "0236",
    name: "Tyrogue",
    region: "Johto",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "Steadfast"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tyrogue.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tyrogue.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tyrogue.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tyrogue.gif",
    },
    stats: {
      hp: "35",
      atk: "35",
      def: "35",
      spa: "35",
      spd: "35",
      speed: "35",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [100, 0],
    description:
      "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
  },
  {
    id: "0237",
    name: "Hitmontop",
    region: "Johto",
    types: ["Fighting"],
    abilities: {
      normal: ["Intimidate", "Technician"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hitmontop.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hitmontop.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hitmontop.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hitmontop.gif",
    },
    stats: {
      hp: "50",
      atk: "95",
      def: "95",
      spa: "35",
      spd: "110",
      speed: "70",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [100, 0],
    description:
      "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
  },
  {
    id: "0238",
    name: "Smoochum",
    region: "Johto",
    types: ["Ice", "Psychic"],
    abilities: {
      normal: ["Oblivious", "Forewarn"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/smoochum.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/smoochum.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/smoochum.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/smoochum.gif",
    },
    stats: {
      hp: "45",
      atk: "30",
      def: "15",
      spa: "85",
      spd: "65",
      speed: "65",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.",
  },
  {
    id: "0239",
    name: "Elekid",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Static"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/elekid.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/elekid.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/elekid.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/elekid.gif",
    },
    stats: {
      hp: "45",
      atk: "63",
      def: "37",
      spa: "65",
      spd: "55",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [75, 25],
    description:
      "Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pokémon begins swinging its arms in circles to recharge itself.",
  },
  {
    id: "0240",
    name: "Magby",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magby.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magby.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magby.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magby.gif",
    },
    stats: {
      hp: "45",
      atk: "75",
      def: "37",
      spa: "70",
      spd: "55",
      speed: "83",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [75, 25],
    description:
      "Magby's state of health is determined by observing the fire it breathes. If the Pokémon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.",
  },
  {
    id: "0241",
    name: "Miltank",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Thick Fat", "Scrappy"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/miltank.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/miltank.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/miltank.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/miltank.gif",
    },
    stats: {
      hp: "95",
      atk: "80",
      def: "105",
      spa: "40",
      spd: "70",
      speed: "100",
    },
    eggGroups: ["Field"],
    genderRatios: [0, 100],
    description:
      "Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.",
  },
  {
    id: "0242",
    name: "Blissey",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Natural Cure", "Serene Grace"],
      hidden: "Healer",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/blissey.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/blissey.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/blissey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/blissey.gif",
    },
    stats: {
      hp: "255",
      atk: "10",
      def: "10",
      spa: "75",
      spd: "135",
      speed: "55",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "Blissey senses sadness with its fluffy coat of fur. If it does so, this Pokémon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.",
  },
  {
    id: "0243",
    name: "Raikou",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/raikou.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/raikou.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/raikou.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/raikou.gif",
    },
    stats: {
      hp: "90",
      atk: "85",
      def: "75",
      spa: "115",
      spd: "100",
      speed: "115",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
  },
  {
    id: "0244",
    name: "Entei",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/entei.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/entei.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/entei.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/entei.gif",
    },
    stats: {
      hp: "115",
      atk: "115",
      def: "85",
      spa: "90",
      spd: "75",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
  },
  {
    id: "0245",
    name: "Suicune",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/suicune.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/suicune.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/suicune.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/suicune.gif",
    },
    stats: {
      hp: "100",
      atk: "75",
      def: "115",
      spa: "90",
      spd: "115",
      speed: "85",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
  },
  {
    id: "0246",
    name: "Larvitar",
    region: "Johto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Guts"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/larvitar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/larvitar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/larvitar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/larvitar.gif",
    },
    stats: {
      hp: "50",
      atk: "64",
      def: "50",
      spa: "45",
      spd: "50",
      speed: "41",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Larvitar is born deep under the ground. To come up to the surface, this Pokémon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents.",
  },
  {
    id: "0247",
    name: "Pupitar",
    region: "Johto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pupitar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pupitar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pupitar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pupitar.gif",
    },
    stats: {
      hp: "70",
      atk: "84",
      def: "70",
      spa: "65",
      spd: "70",
      speed: "51",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Pupitar creates a gas inside its body that it compresses and forcefully ejects to propel itself like a jet. The body is very durable—it avoids damage even if it hits solid steel.",
  },
  {
    id: "0248",
    name: "Tyranitar",
    region: "Johto",
    types: ["Rock", "Dark"],
    abilities: {
      normal: ["Sand Stream"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tyranitar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tyranitar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tyranitar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tyranitar.gif",
    },
    stats: {
      hp: "100",
      atk: "134",
      def: "110",
      spa: "95",
      spd: "100",
      speed: "61",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pokémon wanders about in mountains seeking new opponents to fight.",
  },
  {
    id: "0249",
    name: "Lugia",
    region: "Johto",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Multiscale",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lugia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lugia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lugia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lugia.gif",
    },
    stats: {
      hp: "106",
      atk: "90",
      def: "130",
      spa: "90",
      spd: "154",
      speed: "110",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
  },
  {
    id: "0250",
    name: "Ho-Oh",
    region: "Johto",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ho-oh.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ho-oh.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ho-oh.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ho-oh.gif",
    },
    stats: {
      hp: "106",
      atk: "130",
      def: "90",
      spa: "110",
      spd: "154",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
  },
  {
    id: "0251",
    name: "Celebi",
    region: "Johto",
    types: ["Psychic", "Grass"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/celebi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/celebi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/celebi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/celebi.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
  },
  {
    id: "0252",
    name: "Treecko",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/treecko.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/treecko.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/treecko.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/treecko.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "35",
      spa: "65",
      spd: "55",
      speed: "70",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
  },
  {
    id: "0253",
    name: "Grovyle",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/grovyle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/grovyle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/grovyle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/grovyle.gif",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "45",
      spa: "85",
      spd: "65",
      speed: "95",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "The leaves growing out of Grovyle's body are convenient for camouflaging it from enemies in the forest. This Pokémon is a master at climbing trees in jungles.",
  },
  {
    id: "0254",
    name: "Sceptile",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sceptile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sceptile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sceptile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sceptile.gif",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "65",
      spa: "105",
      spd: "85",
      speed: "120",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "The leaves growing on Sceptile's body are very sharp edged. This Pokémon is very agile—it leaps all over the branches of trees and jumps on its foe from above or behind.",
  },
  {
    id: "0255",
    name: "Torchic",
    region: "Hoenn",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/torchic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/torchic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/torchic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/torchic.gif",
    },
    stats: {
      hp: "45",
      atk: "60",
      def: "40",
      spa: "70",
      spd: "50",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees Fahrenheit, including fireballs that leave the foe scorched black.",
  },
  {
    id: "0256",
    name: "Combusken",
    region: "Hoenn",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/combusken.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/combusken.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/combusken.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/combusken.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "60",
      spa: "85",
      spd: "60",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Combusken toughens up its legs and thighs by running through fields and mountains. This Pokémon's legs possess both speed and power, enabling it to dole out 10 kicks in one second.",
  },
  {
    id: "0257",
    name: "Blaziken",
    region: "Hoenn",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/blaziken.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/blaziken.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/blaziken.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/blaziken.gif",
    },
    stats: {
      hp: "80",
      atk: "120",
      def: "70",
      spa: "110",
      spd: "70",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "In battle, Blaziken blows out intense flames from its wrists and attacks foes courageously. The stronger the foe, the more intensely this Pokémon's wrists burn.",
  },
  {
    id: "0258",
    name: "Mudkip",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mudkip.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mudkip.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mudkip.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mudkip.gif",
    },
    stats: {
      hp: "50",
      atk: "70",
      def: "50",
      spa: "50",
      spd: "50",
      speed: "40",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
  },
  {
    id: "0259",
    name: "Marshtomp",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/marshtomp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/marshtomp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/marshtomp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/marshtomp.gif",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "70",
      spa: "60",
      spd: "70",
      speed: "50",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon's hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
  },
  {
    id: "0260",
    name: "Swampert",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swampert.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swampert.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swampert.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swampert.gif",
    },
    stats: {
      hp: "100",
      atk: "110",
      def: "90",
      spa: "85",
      spd: "90",
      speed: "60",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
  },
  {
    id: "0261",
    name: "Poochyena",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Run Away", "Quick Feet"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/poochyena.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/poochyena.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/poochyena.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/poochyena.gif",
    },
    stats: {
      hp: "35",
      atk: "55",
      def: "35",
      spa: "30",
      spd: "30",
      speed: "35",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
  },
  {
    id: "0262",
    name: "Mightyena",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Intimidate", "Quick Feet"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mightyena.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mightyena.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mightyena.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mightyena.gif",
    },
    stats: {
      hp: "70",
      atk: "90",
      def: "70",
      spa: "60",
      spd: "60",
      speed: "70",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
  },
  {
    id: "0263",
    name: "Zigzagoon",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Gluttony"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zigzagoon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zigzagoon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zigzagoon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zigzagoon.gif",
    },
    stats: {
      hp: "38",
      atk: "30",
      def: "41",
      spa: "30",
      spd: "41",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The hair on Zigzagoon's back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
  },
  {
    id: "0264",
    name: "Linoone",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Gluttony"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/linoone.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/linoone.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/linoone.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/linoone.gif",
    },
    stats: {
      hp: "78",
      atk: "70",
      def: "61",
      spa: "50",
      spd: "61",
      speed: "100",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
  },
  {
    id: "0265",
    name: "Wurmple",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wurmple.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wurmple.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wurmple.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wurmple.gif",
    },
    stats: {
      hp: "45",
      atk: "45",
      def: "35",
      spa: "20",
      spd: "30",
      speed: "20",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
  },
  {
    id: "0266",
    name: "Silcoon",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/silcoon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/silcoon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/silcoon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/silcoon.gif",
    },
    stats: {
      hp: "50",
      atk: "35",
      def: "55",
      spa: "25",
      spd: "25",
      speed: "15",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.",
  },
  {
    id: "0267",
    name: "Beautifly",
    region: "Hoenn",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Swarm"],
      hidden: "Rivalry",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/beautifly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/beautifly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/beautifly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/beautifly.gif",
    },
    stats: {
      hp: "60",
      atk: "70",
      def: "50",
      spa: "100",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Beautifly's favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window. Beautifly is sure to come looking for pollen.",
  },
  {
    id: "0268",
    name: "Cascoon",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cascoon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cascoon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cascoon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cascoon.gif",
    },
    stats: {
      hp: "50",
      atk: "35",
      def: "55",
      spa: "25",
      spd: "25",
      speed: "15",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Cascoon makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This Pokémon prepares for its evolution inside the cocoon.",
  },
  {
    id: "0269",
    name: "Dustox",
    region: "Hoenn",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Compound Eyes",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dustox.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dustox.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dustox.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dustox.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "70",
      spa: "50",
      spd: "90",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
  },
  {
    id: "0270",
    name: "Lotad",
    region: "Hoenn",
    types: ["Water", "Grass"],
    abilities: {
      normal: ["Swift Swim", "Rain Dish"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lotad.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lotad.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lotad.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lotad.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "30",
      spa: "40",
      spd: "50",
      speed: "30",
    },
    eggGroups: ["Water 1", "Grass"],
    genderRatios: [50, 50],
    description:
      "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.",
  },
  {
    id: "0271",
    name: "Lombre",
    region: "Hoenn",
    types: ["Water", "Grass"],
    abilities: {
      normal: ["Swift Swim", "Rain Dish"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lombre.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lombre.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lombre.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lombre.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "50",
      spa: "60",
      spd: "70",
      speed: "50",
    },
    eggGroups: ["Water 1", "Grass"],
    genderRatios: [50, 50],
    description:
      "Lombre is nocturnal—it will get active after dusk. It is also a mischief maker. When this Pokémon spots anglers, it tugs on their fishing lines from beneath the surface and enjoys their consternation.",
  },
  {
    id: "0272",
    name: "Ludicolo",
    region: "Hoenn",
    types: ["Water", "Grass"],
    abilities: {
      normal: ["Swift Swim", "Rain Dish"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ludicolo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ludicolo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ludicolo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ludicolo.gif",
    },
    stats: {
      hp: "80",
      atk: "70",
      def: "70",
      spa: "90",
      spd: "100",
      speed: "70",
    },
    eggGroups: ["Water 1", "Grass"],
    genderRatios: [50, 50],
    description:
      "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo's body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
  },
  {
    id: "0273",
    name: "Seedot",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Early Bird"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seedot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seedot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seedot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seedot.gif",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "50",
      spa: "30",
      spd: "30",
      speed: "30",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [50, 50],
    description:
      "Seedot attaches itself to a tree branch using the top of its head. It sucks moisture from the tree while hanging off the branch. The more water it drinks, the glossier this Pokémon's body becomes.",
  },
  {
    id: "0274",
    name: "Nuzleaf",
    region: "Hoenn",
    types: ["Grass", "Dark"],
    abilities: {
      normal: ["Chlorophyll", "Early Bird"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nuzleaf.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nuzleaf.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nuzleaf.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nuzleaf.gif",
    },
    stats: {
      hp: "70",
      atk: "70",
      def: "40",
      spa: "60",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [50, 50],
    description:
      "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf's flute strikes fear and uncertainty in the hearts of people lost in a forest.",
  },
  {
    id: "0275",
    name: "Shiftry",
    region: "Hoenn",
    types: ["Grass", "Dark"],
    abilities: {
      normal: ["Chlorophyll", "Wind Rider"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shiftry.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shiftry.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shiftry.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shiftry.gif",
    },
    stats: {
      hp: "90",
      atk: "100",
      def: "60",
      spa: "90",
      spd: "60",
      speed: "80",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [50, 50],
    description:
      "Shiftry's large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
  },
  {
    id: "0276",
    name: "Taillow",
    region: "Hoenn",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Guts"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/taillow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/taillow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/taillow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/taillow.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "30",
      spa: "30",
      spd: "30",
      speed: "85",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Taillow courageously stands its ground against foes, however strong they may be. This gutsy Pokémon will remain defiant even after a loss. On the other hand, it cries loudly if it becomes hungry.",
  },
  {
    id: "0277",
    name: "Swellow",
    region: "Hoenn",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Guts"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swellow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swellow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swellow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swellow.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "60",
      spa: "75",
      spd: "50",
      speed: "125",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Swellow flies high above our heads, making graceful arcs in the sky. This Pokémon dives at a steep angle as soon as it spots its prey. The hapless prey is tightly grasped by Swellow's clawed feet, preventing escape.",
  },
  {
    id: "0278",
    name: "Wingull",
    region: "Hoenn",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Hydration"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wingull.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wingull.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wingull.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wingull.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "30",
      spa: "55",
      spd: "30",
      speed: "85",
    },
    eggGroups: ["Water 1", "Flying"],
    genderRatios: [50, 50],
    description:
      "Wingull has the habit of carrying prey and valuables in its beak and hiding them in all sorts of locations. This Pokémon rides the winds and flies as if it were skating across the sky.",
  },
  {
    id: "0279",
    name: "Pelipper",
    region: "Hoenn",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Drizzle"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pelipper.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pelipper.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pelipper.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pelipper.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "100",
      spa: "95",
      spd: "70",
      speed: "65",
    },
    eggGroups: ["Water 1", "Flying"],
    genderRatios: [50, 50],
    description:
      "Pelipper searches for food while in flight by skimming the wave tops. This Pokémon dips its large bill in the sea to scoop up food, then swallows everything in one big gulp.",
  },
  {
    id: "0280",
    name: "Ralts",
    region: "Hoenn",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Synchronize", "Trace"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ralts.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ralts.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ralts.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ralts.gif",
    },
    stats: {
      hp: "28",
      atk: "25",
      def: "25",
      spa: "45",
      spd: "35",
      speed: "40",
    },
    eggGroups: ["Human-Like", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Ralts senses the emotions of people using the horns on its head. This Pokémon rarely appears before people. But when it does, it draws closer if it senses that the person has a positive disposition.",
  },
  {
    id: "0281",
    name: "Kirlia",
    region: "Hoenn",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Synchronize", "Trace"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kirlia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kirlia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kirlia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kirlia.gif",
    },
    stats: {
      hp: "38",
      atk: "35",
      def: "35",
      spa: "65",
      spd: "55",
      speed: "50",
    },
    eggGroups: ["Human-Like", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of -xistent scenery.",
  },
  {
    id: "0282",
    name: "Gardevoir",
    region: "Hoenn",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Synchronize", "Trace"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gardevoir.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gardevoir.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gardevoir.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gardevoir.gif",
    },
    stats: {
      hp: "68",
      atk: "65",
      def: "65",
      spa: "125",
      spd: "115",
      speed: "80",
    },
    eggGroups: ["Human-Like", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
  },
  {
    id: "0283",
    name: "Surskit",
    region: "Hoenn",
    types: ["Bug", "Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/surskit.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/surskit.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/surskit.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/surskit.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "32",
      spa: "50",
      spd: "52",
      speed: "65",
    },
    eggGroups: ["Water 1", "Bug"],
    genderRatios: [50, 50],
    description:
      "From the tips of its feet, Surskit secretes an oil that enables it to walk on water as if it were skating. This Pokémon feeds on microscopic organisms in ponds and lakes.",
  },
  {
    id: "0284",
    name: "Masquerain",
    region: "Hoenn",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Intimidate"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/masquerain.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/masquerain.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/masquerain.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/masquerain.gif",
    },
    stats: {
      hp: "70",
      atk: "60",
      def: "62",
      spa: "100",
      spd: "82",
      speed: "80",
    },
    eggGroups: ["Water 1", "Bug"],
    genderRatios: [50, 50],
    description:
      "Masquerain's antennas have eyelike patterns that usually give it an angry look. If the “eyes” are droopy and appear sad, it is said to be a sign that a heavy rainfall is on its way.",
  },
  {
    id: "0285",
    name: "Shroomish",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Effect Spore", "Poison Heal"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shroomish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shroomish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shroomish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shroomish.gif",
    },
    stats: {
      hp: "60",
      atk: "40",
      def: "60",
      spa: "40",
      spd: "60",
      speed: "35",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon's spores are so toxic, they make trees and weeds wilt.",
  },
  {
    id: "0286",
    name: "Breloom",
    region: "Hoenn",
    types: ["Grass", "Fighting"],
    abilities: {
      normal: ["Effect Spore", "Poison Heal"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/breloom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/breloom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/breloom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/breloom.gif",
    },
    stats: {
      hp: "60",
      atk: "130",
      def: "80",
      spa: "60",
      spd: "60",
      speed: "70",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "The seeds ringing Breloom's tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon's seed will cause your stomach to rumble.",
  },
  {
    id: "0287",
    name: "Slakoth",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Truant"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slakoth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slakoth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slakoth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slakoth.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "60",
      spa: "35",
      spd: "35",
      speed: "30",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Slakoth lolls around for over 20 hours every day. Because it moves so little, it does not need much food. This Pokémon's sole daily meal consists of just three leaves.",
  },
  {
    id: "0288",
    name: "Vigoroth",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Vital Spirit"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vigoroth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vigoroth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vigoroth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vigoroth.gif",
    },
    stats: {
      hp: "80",
      atk: "80",
      def: "80",
      spa: "55",
      spd: "55",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
  },
  {
    id: "0289",
    name: "Slaking",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Truant"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slaking.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slaking.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slaking.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slaking.gif",
    },
    stats: {
      hp: "150",
      atk: "160",
      def: "100",
      spa: "95",
      spd: "65",
      speed: "100",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
  },
  {
    id: "0290",
    name: "Nincada",
    region: "Hoenn",
    types: ["Bug", "Ground"],
    abilities: {
      normal: ["Compound Eyes"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nincada.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nincada.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nincada.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nincada.gif",
    },
    stats: {
      hp: "31",
      atk: "45",
      def: "90",
      spa: "30",
      spd: "30",
      speed: "40",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can't withstand bright sunlight so avoids it.",
  },
  {
    id: "0291",
    name: "Ninjask",
    region: "Hoenn",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Speed Boost"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ninjask.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ninjask.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ninjask.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ninjask.gif",
    },
    stats: {
      hp: "61",
      atk: "90",
      def: "45",
      spa: "50",
      spd: "50",
      speed: "160",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer's abilities to the test.",
  },
  {
    id: "0292",
    name: "Shedinja",
    region: "Hoenn",
    types: ["Bug", "Ghost"],
    abilities: {
      normal: ["Wonder Guard"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shedinja.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shedinja.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shedinja.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shedinja.gif",
    },
    stats: {
      hp: "1",
      atk: "90",
      def: "45",
      spa: "30",
      spd: "30",
      speed: "40",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Shedinja's hard body doesn't move—not even a twitch. In fact, its body appears to be merely a hollow shell. It is believed that this Pokémon will steal the spirit of anyone peering into its hollow body from its back.",
  },
  {
    id: "0293",
    name: "Whismur",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Soundproof"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/whismur.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/whismur.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/whismur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/whismur.gif",
    },
    stats: {
      hp: "64",
      atk: "51",
      def: "23",
      spa: "51",
      spd: "23",
      speed: "28",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
  },
  {
    id: "0294",
    name: "Loudred",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Soundproof"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/loudred.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/loudred.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/loudred.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/loudred.gif",
    },
    stats: {
      hp: "84",
      atk: "71",
      def: "43",
      spa: "71",
      spd: "43",
      speed: "48",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
  },
  {
    id: "0295",
    name: "Exploud",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Soundproof"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/exploud.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/exploud.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/exploud.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/exploud.gif",
    },
    stats: {
      hp: "104",
      atk: "91",
      def: "63",
      spa: "91",
      spd: "73",
      speed: "68",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "Exploud triggers earthquakes with the tremors it creates by bellowing. If this Pokémon violently inhales from the ports on its body, it's a sign that it is preparing to let loose a huge bellow.",
  },
  {
    id: "0296",
    name: "Makuhita",
    region: "Hoenn",
    types: ["Fighting"],
    abilities: {
      normal: ["Thick Fat", "Guts"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/makuhita.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/makuhita.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/makuhita.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/makuhita.gif",
    },
    stats: {
      hp: "72",
      atk: "60",
      def: "30",
      spa: "20",
      spd: "30",
      speed: "25",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Makuhita is tenacious—it will keep getting up and attacking its foe however many times it is knocked down. Every time it gets back up, this Pokémon stores more energy in its body for evolving.",
  },
  {
    id: "0297",
    name: "Hariyama",
    region: "Hoenn",
    types: ["Fighting"],
    abilities: {
      normal: ["Thick Fat", "Guts"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hariyama.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hariyama.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hariyama.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hariyama.gif",
    },
    stats: {
      hp: "144",
      atk: "120",
      def: "60",
      spa: "40",
      spd: "60",
      speed: "50",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Hariyama practices its straight-arm slaps in any number of locations. One hit of this Pokémon's powerful, openhanded, straight-arm punches could snap a telephone pole in two.",
  },
  {
    id: "0298",
    name: "Azurill",
    region: "Hoenn",
    types: ["Normal", "Fairy"],
    abilities: {
      normal: ["Thick Fat", "Huge Power"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/azurill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/azurill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/azurill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/azurill.gif",
    },
    stats: {
      hp: "50",
      atk: "20",
      def: "40",
      spa: "20",
      spd: "40",
      speed: "20",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [25, 75],
    description:
      "Azurill spins its tail as if it were a lasso, then hurls it far. The momentum of the throw sends its body flying, too. Using this unique action, one of these Pokémon managed to hurl itself a record 33 feet.",
  },
  {
    id: "0299",
    name: "Nosepass",
    region: "Hoenn",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Magnet Pull"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nosepass.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nosepass.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nosepass.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nosepass.gif",
    },
    stats: {
      hp: "30",
      atk: "45",
      def: "135",
      spa: "45",
      spd: "90",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [null, null],
    description:
      "Nosepass had been said to be completely unmoving, with its magnetic nose pointed due north. However, close observation has revealed that the Pokémon actually moves by a little over 3/8 of an inch every year.",
  },
  {
    id: "0300",
    name: "Skitty",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "Normalize"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skitty.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skitty.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skitty.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skitty.gif",
    },
    stats: {
      hp: "50",
      atk: "45",
      def: "45",
      spa: "35",
      spd: "35",
      speed: "50",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [25, 75],
    description:
      "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
  },
  {
    id: "0301",
    name: "Delcatty",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "Normalize"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/delcatty.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/delcatty.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/delcatty.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/delcatty.gif",
    },
    stats: {
      hp: "70",
      atk: "65",
      def: "65",
      spa: "55",
      spd: "55",
      speed: "90",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [25, 75],
    description:
      "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
  },
  {
    id: "0302",
    name: "Sableye",
    region: "Hoenn",
    types: ["Dark", "Ghost"],
    abilities: {
      normal: ["Keen Eye", "Stall"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sableye.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sableye.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sableye.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sableye.gif",
    },
    stats: {
      hp: "50",
      atk: "75",
      def: "75",
      spa: "65",
      spd: "65",
      speed: "50",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Sableye lead quiet lives deep inside caverns. They are feared, however, because these Pokémon are thought to steal the spirits of people when their eyes burn with a sinister glow in the darkness.",
  },
  {
    id: "0303",
    name: "Mawile",
    region: "Hoenn",
    types: ["Steel", "Fairy"],
    abilities: {
      normal: ["Hyper Cutter", "Intimidate"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mawile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mawile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mawile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mawile.gif",
    },
    stats: {
      hp: "50",
      atk: "85",
      def: "85",
      spa: "55",
      spd: "55",
      speed: "50",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "Don't be taken in by this Pokémon's cute face—it's very dangerous. Mawile fools the foe into letting down its guard, then chomps down with its massive jaws. The steel jaws are really horns that have been transformed.",
  },
  {
    id: "0304",
    name: "Aron",
    region: "Hoenn",
    types: ["Steel", "Rock"],
    abilities: {
      normal: ["Sturdy", "Rock Head"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aron.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aron.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aron.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aron.gif",
    },
    stats: {
      hp: "50",
      atk: "70",
      def: "100",
      spa: "40",
      spd: "40",
      speed: "30",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
  },
  {
    id: "0305",
    name: "Lairon",
    region: "Hoenn",
    types: ["Steel", "Rock"],
    abilities: {
      normal: ["Sturdy", "Rock Head"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lairon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lairon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lairon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lairon.gif",
    },
    stats: {
      hp: "60",
      atk: "90",
      def: "140",
      spa: "50",
      spd: "50",
      speed: "40",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
  },
  {
    id: "0306",
    name: "Aggron",
    region: "Hoenn",
    types: ["Steel", "Rock"],
    abilities: {
      normal: ["Sturdy", "Rock Head"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aggron.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aggron.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aggron.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aggron.gif",
    },
    stats: {
      hp: "70",
      atk: "110",
      def: "180",
      spa: "60",
      spd: "60",
      speed: "50",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
  },
  {
    id: "0307",
    name: "Meditite",
    region: "Hoenn",
    types: ["Fighting", "Psychic"],
    abilities: {
      normal: ["Pure Power"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meditite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meditite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meditite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meditite.gif",
    },
    stats: {
      hp: "30",
      atk: "40",
      def: "55",
      spa: "40",
      spd: "55",
      speed: "60",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Meditite undertakes rigorous mental training deep in the mountains. However, whenever it meditates, this Pokémon always loses its concentration and focus. As a result, its training never ends.",
  },
  {
    id: "0308",
    name: "Medicham",
    region: "Hoenn",
    types: ["Fighting", "Psychic"],
    abilities: {
      normal: ["Pure Power"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/medicham.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/medicham.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/medicham.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/medicham.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "75",
      spa: "60",
      spd: "75",
      speed: "80",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
  },
  {
    id: "0309",
    name: "Electrike",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Static", "Lightning Rod"],
      hidden: "Minus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/electrike.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/electrike.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/electrike.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/electrike.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "40",
      spa: "65",
      spd: "40",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Electrike stores electricity in its long body hair. This Pokémon stimulates its leg muscles with electric charges. These jolts of power give its legs explosive acceleration performance.",
  },
  {
    id: "0310",
    name: "Manectric",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Static", "Lightning Rod"],
      hidden: "Minus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/manectric.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/manectric.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/manectric.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/manectric.gif",
    },
    stats: {
      hp: "70",
      atk: "75",
      def: "60",
      spa: "105",
      spd: "60",
      speed: "105",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Manectric discharges strong electricity from its mane. The mane is used for collecting electricity in the atmosphere. This Pokémon creates thunderclouds above its head.",
  },
  {
    id: "0311",
    name: "Plusle",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Plus"],
      hidden: "Lightning Rod",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/plusle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/plusle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/plusle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/plusle.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "40",
      spa: "85",
      spd: "75",
      speed: "95",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "Plusle always acts as a cheerleader for its partners. Whenever a teammate puts out a good effort in battle, this Pokémon shorts out its body to create the crackling noises of sparks to show its joy.",
  },
  {
    id: "0312",
    name: "Minun",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Minus"],
      hidden: "Volt Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/minun.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/minun.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/minun.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/minun.gif",
    },
    stats: {
      hp: "60",
      atk: "40",
      def: "50",
      spa: "75",
      spd: "85",
      speed: "95",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "Minun is more concerned about cheering on its partners than its own safety. It shorts out the electricity in its body to create brilliant showers of sparks to cheer on its teammates.",
  },
  {
    id: "0313",
    name: "Volbeat",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Illuminate", "Swarm"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/volbeat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/volbeat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/volbeat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/volbeat.gif",
    },
    stats: {
      hp: "65",
      atk: "73",
      def: "75",
      spa: "47",
      spd: "85",
      speed: "85",
    },
    eggGroups: ["Bug", "Human-Like"],
    genderRatios: [100, 0],
    description:
      "With the arrival of night, Volbeat emits light from its tail. It communicates with others by adjusting the intensity and flashing of its light. This Pokémon is attracted by the sweet aroma of Illumise.",
  },
  {
    id: "0314",
    name: "Illumise",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Oblivious", "Tinted Lens"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/illumise.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/illumise.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/illumise.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/illumise.gif",
    },
    stats: {
      hp: "65",
      atk: "47",
      def: "75",
      spa: "73",
      spd: "85",
      speed: "85",
    },
    eggGroups: ["Bug", "Human-Like"],
    genderRatios: [0, 100],
    description:
      "Illumise attracts a swarm of Volbeat using a sweet fragrance. Once the Volbeat have gathered, this Pokémon leads the lit-up swarm in drawing geometric designs on the canvas of the night sky.",
  },
  {
    id: "0315",
    name: "Roselia",
    region: "Hoenn",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Natural Cure", "Poison Point"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/roselia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/roselia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/roselia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/roselia.gif",
    },
    stats: {
      hp: "50",
      atk: "60",
      def: "45",
      spa: "100",
      spd: "80",
      speed: "65",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Roselia shoots sharp thorns as projectiles at any opponent that tries to steal the flowers on its arms. The aroma of this Pokémon brings serenity to living things.",
  },
  {
    id: "0316",
    name: "Gulpin",
    region: "Hoenn",
    types: ["Poison"],
    abilities: {
      normal: ["Liquid Ooze", "Sticky Hold"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gulpin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gulpin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gulpin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gulpin.gif",
    },
    stats: {
      hp: "70",
      atk: "43",
      def: "53",
      spa: "43",
      spd: "53",
      speed: "40",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Most of Gulpin's body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon's stomach contains special enzymes that dissolve anything.",
  },
  {
    id: "0317",
    name: "Swalot",
    region: "Hoenn",
    types: ["Poison"],
    abilities: {
      normal: ["Liquid Ooze", "Sticky Hold"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swalot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swalot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swalot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swalot.gif",
    },
    stats: {
      hp: "100",
      atk: "73",
      def: "83",
      spa: "73",
      spd: "83",
      speed: "55",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "When Swalot spots prey, it spurts out a hideously toxic fluid from its pores and sprays the target. Once the prey has weakened, this Pokémon gulps it down whole with its cavernous mouth.",
  },
  {
    id: "0318",
    name: "Carvanha",
    region: "Hoenn",
    types: ["Water", "Dark"],
    abilities: {
      normal: ["Rough Skin"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/carvanha.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/carvanha.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/carvanha.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/carvanha.gif",
    },
    stats: {
      hp: "45",
      atk: "90",
      def: "20",
      spa: "65",
      spd: "20",
      speed: "65",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Carvanha's strongly developed jaws and its sharply pointed fangs pack the destructive power to rip out boat hulls. Many boats have been attacked and sunk by this Pokémon.",
  },
  {
    id: "0319",
    name: "Sharpedo",
    region: "Hoenn",
    types: ["Water", "Dark"],
    abilities: {
      normal: ["Rough Skin"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sharpedo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sharpedo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sharpedo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sharpedo.gif",
    },
    stats: {
      hp: "70",
      atk: "120",
      def: "40",
      spa: "95",
      spd: "40",
      speed: "95",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Nicknamed “the bully of the sea,” Sharpedo is widely feared. Its cruel fangs grow back immediately if they snap off. Just one of these Pokémon can thoroughly tear apart a supertanker.",
  },
  {
    id: "0320",
    name: "Wailmer",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Water Veil", "Oblivious"],
      hidden: "Pressure",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wailmer.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wailmer.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wailmer.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wailmer.gif",
    },
    stats: {
      hp: "130",
      atk: "70",
      def: "35",
      spa: "70",
      spd: "35",
      speed: "60",
    },
    eggGroups: ["Field", "Water 2"],
    genderRatios: [50, 50],
    description:
      "Wailmer can store water inside its body to transform itself into a ball for bouncing around on the ground. By filling itself up with more water, this Pokémon can elevate the height of its bounces.",
  },
  {
    id: "0321",
    name: "Wailord",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Water Veil", "Oblivious"],
      hidden: "Pressure",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wailord.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wailord.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wailord.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wailord.gif",
    },
    stats: {
      hp: "170",
      atk: "90",
      def: "45",
      spa: "90",
      spd: "45",
      speed: "60",
    },
    eggGroups: ["Field", "Water 2"],
    genderRatios: [50, 50],
    description:
      "When chasing prey, Wailord herds them by leaping out of the water and making a humongous splash. It is breathtaking to see this Pokémon leaping out of the sea with others in its pod.",
  },
  {
    id: "0322",
    name: "Numel",
    region: "Hoenn",
    types: ["Fire", "Ground"],
    abilities: {
      normal: ["Oblivious", "Simple"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/numel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/numel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/numel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/numel.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "40",
      spa: "65",
      spd: "45",
      speed: "35",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon's body grows heavy and its movements become sluggish.",
  },
  {
    id: "0323",
    name: "Camerupt",
    region: "Hoenn",
    types: ["Fire", "Ground"],
    abilities: {
      normal: ["Magma Armor", "Solid Rock"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/camerupt.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/camerupt.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/camerupt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/camerupt.gif",
    },
    stats: {
      hp: "70",
      atk: "100",
      def: "70",
      spa: "105",
      spd: "75",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Camerupt has a volcano inside its body. Magma of 18,000 degrees Fahrenheit courses through its body. Occasionally, the humps on this Pokémon's back erupt, spewing the superheated magma.",
  },
  {
    id: "0324",
    name: "Torkoal",
    region: "Hoenn",
    types: ["Fire"],
    abilities: {
      normal: ["White Smoke", "Drought"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/torkoal.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/torkoal.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/torkoal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/torkoal.gif",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "140",
      spa: "85",
      spd: "70",
      speed: "20",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Torkoal digs through mountains in search of coal. If it finds some, it fills hollow spaces on its shell with the coal and burns it. If it is attacked, this Pokémon spouts thick black smoke to beat a retreat.",
  },
  {
    id: "0325",
    name: "Spoink",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Thick Fat", "Own Tempo"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spoink.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spoink.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spoink.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spoink.gif",
    },
    stats: {
      hp: "60",
      atk: "25",
      def: "35",
      spa: "70",
      spd: "80",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Spoink bounces around on its tail. The shock of its bouncing makes its heart pump. As a result, this Pokémon cannot afford to stop bouncing—if it stops, its heart will stop.",
  },
  {
    id: "0326",
    name: "Grumpig",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Thick Fat", "Own Tempo"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/grumpig.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/grumpig.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/grumpig.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/grumpig.gif",
    },
    stats: {
      hp: "80",
      atk: "45",
      def: "65",
      spa: "90",
      spd: "110",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Grumpig uses the black pearls on its body to amplify its psychic power waves for gaining total control over its foe. When this Pokémon uses its special power, its snorting breath grows labored.",
  },
  {
    id: "0327",
    name: "Spinda",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "Tangled Feet"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spinda.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spinda.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spinda.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spinda.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "60",
      spa: "60",
      spd: "60",
      speed: "60",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "No two Spinda are said to have identical spot patterns on their hides. This Pokémon moves in a curious manner as if it is stumbling in dizziness. Its lurching movements can cause the opponent to become confused.",
  },
  {
    id: "0328",
    name: "Trapinch",
    region: "Hoenn",
    types: ["Ground"],
    abilities: {
      normal: ["Hyper Cutter", "Arena Trap"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/trapinch.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/trapinch.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/trapinch.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/trapinch.gif",
    },
    stats: {
      hp: "45",
      atk: "100",
      def: "45",
      spa: "45",
      spd: "45",
      speed: "10",
    },
    eggGroups: ["Bug", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Trapinch is a patient hunter. It digs an inescapable pit in a desert and waits for its prey to come tumbling down. This Pokémon can go a whole week without access to any water.",
  },
  {
    id: "0329",
    name: "Vibrava",
    region: "Hoenn",
    types: ["Ground", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vibrava.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vibrava.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vibrava.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vibrava.gif",
    },
    stats: {
      hp: "50",
      atk: "70",
      def: "50",
      spa: "50",
      spd: "50",
      speed: "70",
    },
    eggGroups: ["Bug", "Dragon"],
    genderRatios: [50, 50],
    description:
      "To make prey faint, Vibrava generates ultrasonic waves by vigorously making its two wings vibrate. This Pokémon's ultrasonic waves are so powerful, they can bring on headaches in people.",
  },
  {
    id: "0330",
    name: "Flygon",
    region: "Hoenn",
    types: ["Ground", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/flygon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/flygon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/flygon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/flygon.gif",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "80",
      spa: "80",
      spd: "80",
      speed: "100",
    },
    eggGroups: ["Bug", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Flygon whips up a sandstorm by flapping its wings. The wings create a series of notes that sound like singing. Because the “singing” is the only thing that can be heard in a sandstorm, this Pokémon is said to be the desert spirit.",
  },
  {
    id: "0331",
    name: "Cacnea",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cacnea.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cacnea.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cacnea.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cacnea.gif",
    },
    stats: {
      hp: "50",
      atk: "85",
      def: "40",
      spa: "85",
      spd: "40",
      speed: "35",
    },
    eggGroups: ["Grass", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Cacnea lives in arid locations such as deserts. It releases a strong aroma from its flower to attract prey. When prey comes near, this Pokémon shoots sharp thorns from its body to bring the victim down.",
  },
  {
    id: "0332",
    name: "Cacturne",
    region: "Hoenn",
    types: ["Grass", "Dark"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cacturne.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cacturne.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cacturne.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cacturne.gif",
    },
    stats: {
      hp: "70",
      atk: "115",
      def: "60",
      spa: "115",
      spd: "60",
      speed: "55",
    },
    eggGroups: ["Grass", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
  },
  {
    id: "0333",
    name: "Swablu",
    region: "Hoenn",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "Cloud Nine",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swablu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swablu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swablu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swablu.gif",
    },
    stats: {
      hp: "45",
      atk: "40",
      def: "60",
      spa: "40",
      spd: "75",
      speed: "50",
    },
    eggGroups: ["Flying", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
  },
  {
    id: "0334",
    name: "Altaria",
    region: "Hoenn",
    types: ["Dragon", "Flying"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "Cloud Nine",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/altaria.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/altaria.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/altaria.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/altaria.gif",
    },
    stats: {
      hp: "75",
      atk: "70",
      def: "90",
      spa: "70",
      spd: "105",
      speed: "80",
    },
    eggGroups: ["Flying", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Altaria dances and wheels through the sky among billowing, cotton-like clouds. By singing melodies in its crystal-clear voice, this Pokémon makes its listeners experience dreamy wonderment.",
  },
  {
    id: "0335",
    name: "Zangoose",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Immunity"],
      hidden: "Toxic Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zangoose.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zangoose.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zangoose.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zangoose.gif",
    },
    stats: {
      hp: "73",
      atk: "115",
      def: "60",
      spa: "60",
      spd: "60",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
  },
  {
    id: "0336",
    name: "Seviper",
    region: "Hoenn",
    types: ["Poison"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seviper.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seviper.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seviper.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seviper.gif",
    },
    stats: {
      hp: "73",
      atk: "100",
      def: "60",
      spa: "100",
      spd: "60",
      speed: "65",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Seviper's swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
  },
  {
    id: "0337",
    name: "Lunatone",
    region: "Hoenn",
    types: ["Rock", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lunatone.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lunatone.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lunatone.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lunatone.gif",
    },
    stats: {
      hp: "90",
      atk: "55",
      def: "65",
      spa: "95",
      spd: "85",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon's intimidating red eyes cause all those who see it to become transfixed with fear.",
  },
  {
    id: "0338",
    name: "Solrock",
    region: "Hoenn",
    types: ["Rock", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/solrock.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/solrock.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/solrock.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/solrock.gif",
    },
    stats: {
      hp: "90",
      atk: "95",
      def: "85",
      spa: "55",
      spd: "65",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Solrock is a new species of Pokémon that is said to have fallen from space. It floats in air and moves silently. In battle, this Pokémon releases intensely bright light.",
  },
  {
    id: "0339",
    name: "Barboach",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Oblivious", "Anticipation"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/barboach.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/barboach.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/barboach.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/barboach.gif",
    },
    stats: {
      hp: "50",
      atk: "48",
      def: "43",
      spa: "46",
      spd: "41",
      speed: "60",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Barboach's body is covered with a slimy film. If a foe grabs it, this Pokémon just slips out of the enemy's grip. This Pokémon grows weak if the slimy coating dries up.",
  },
  {
    id: "0340",
    name: "Whiscash",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Oblivious", "Anticipation"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/whiscash.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/whiscash.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/whiscash.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/whiscash.gif",
    },
    stats: {
      hp: "110",
      atk: "78",
      def: "73",
      spa: "76",
      spd: "71",
      speed: "60",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Whiscash is extremely territorial. Just one of these Pokémon will claim a large pond as its exclusive territory. If a foe approaches it, it thrashes about and triggers a massive earthquake.",
  },
  {
    id: "0341",
    name: "Corphish",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Hyper Cutter", "Shell Armor"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/corphish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/corphish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/corphish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/corphish.gif",
    },
    stats: {
      hp: "43",
      atk: "80",
      def: "65",
      spa: "50",
      spd: "35",
      speed: "35",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Corphish were originally foreign Pokémon that were imported as pets. They eventually turned up in the wild. This Pokémon is very hardy and has greatly increased its population.",
  },
  {
    id: "0342",
    name: "Crawdaunt",
    region: "Hoenn",
    types: ["Water", "Dark"],
    abilities: {
      normal: ["Hyper Cutter", "Shell Armor"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/crawdaunt.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/crawdaunt.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/crawdaunt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/crawdaunt.gif",
    },
    stats: {
      hp: "63",
      atk: "120",
      def: "85",
      spa: "90",
      spd: "55",
      speed: "55",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Crawdaunt molts (sheds) its shell regularly. Immediately after molting, its shell is soft and tender. Until the shell hardens, this Pokémon hides in its streambed burrow to avoid attack from its foes.",
  },
  {
    id: "0343",
    name: "Baltoy",
    region: "Hoenn",
    types: ["Ground", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/baltoy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/baltoy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/baltoy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/baltoy.gif",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "55",
      spa: "40",
      spd: "70",
      speed: "55",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "As soon as it spots others of its kind, Baltoy congregates with them and then begins crying noisily in unison. This Pokémon sleeps while cleverly balancing itself on its one foot.",
  },
  {
    id: "0344",
    name: "Claydol",
    region: "Hoenn",
    types: ["Ground", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/claydol.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/claydol.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/claydol.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/claydol.gif",
    },
    stats: {
      hp: "60",
      atk: "70",
      def: "105",
      spa: "70",
      spd: "120",
      speed: "75",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Claydol are said to be dolls of mud made by primitive humans and brought to life by exposure to a mysterious ray. This Pokémon moves about while levitating.",
  },
  {
    id: "0345",
    name: "Lileep",
    region: "Hoenn",
    types: ["Rock", "Grass"],
    abilities: {
      normal: ["Suction Cups"],
      hidden: "Storm Drain",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lileep.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lileep.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lileep.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lileep.gif",
    },
    stats: {
      hp: "66",
      atk: "41",
      def: "77",
      spa: "61",
      spd: "87",
      speed: "23",
    },
    eggGroups: ["Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Lileep became extinct approximately a hundred million years ago. This ancient Pokémon attaches itself to a rock on the seafloor and catches approaching prey using tentacles shaped like flower petals.",
  },
  {
    id: "0346",
    name: "Cradily",
    region: "Hoenn",
    types: ["Rock", "Grass"],
    abilities: {
      normal: ["Suction Cups"],
      hidden: "Storm Drain",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cradily.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cradily.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cradily.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cradily.gif",
    },
    stats: {
      hp: "86",
      atk: "81",
      def: "97",
      spa: "81",
      spd: "107",
      speed: "43",
    },
    eggGroups: ["Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Cradily roams around the ocean floor in search of food. This Pokémon freely extends its tree trunk-like neck and captures unwary prey using its eight tentacles.",
  },
  {
    id: "0347",
    name: "Anorith",
    region: "Hoenn",
    types: ["Rock", "Bug"],
    abilities: {
      normal: ["Battle Armor"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/anorith.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/anorith.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/anorith.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/anorith.gif",
    },
    stats: {
      hp: "45",
      atk: "95",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "75",
    },
    eggGroups: ["Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Anorith is said to be a type of Pokémon predecessor, with eight wings at the sides of its body. This Pokémon swam in the primordial sea by undulating these eight wings.",
  },
  {
    id: "0348",
    name: "Armaldo",
    region: "Hoenn",
    types: ["Rock", "Bug"],
    abilities: {
      normal: ["Battle Armor"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/armaldo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/armaldo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/armaldo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/armaldo.gif",
    },
    stats: {
      hp: "75",
      atk: "125",
      def: "100",
      spa: "70",
      spd: "80",
      speed: "45",
    },
    eggGroups: ["Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Armaldo is a Pokémon species that became extinct in prehistoric times. This Pokémon is said to have walked on its hind legs, which would have been more convenient for life on land.",
  },
  {
    id: "0349",
    name: "Feebas",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Oblivious"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/feebas.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/feebas.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/feebas.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/feebas.gif",
    },
    stats: {
      hp: "20",
      atk: "15",
      def: "20",
      spa: "10",
      spd: "55",
      speed: "80",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "While Feebas's body is in tatters, it has a hardy and tenacious life force that enables it to live anywhere. However, this Pokémon is also slow and dimwitted, making it an easy catch.",
  },
  {
    id: "0350",
    name: "Milotic",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Marvel Scale", "Competitive"],
      hidden: "Cute Charm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/milotic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/milotic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/milotic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/milotic.gif",
    },
    stats: {
      hp: "95",
      atk: "60",
      def: "79",
      spa: "100",
      spd: "125",
      speed: "81",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Milotic live at the bottom of large lakes. When this Pokémon's body glows a vivid pink, it releases a pulsing wave of energy that brings soothing calm to troubled hearts.",
  },
  {
    id: "0351",
    name: "Castform",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Forecast"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/castform.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/castform.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/castform.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/castform.gif",
    },
    stats: {
      hp: "70",
      atk: "70",
      def: "70",
      spa: "70",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Fairy", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Castform borrows the power of nature to transform itself into the guises of the sun, rain, and snow-clouds. This Pokémon's feelings change with the weather.",
  },
  {
    id: "0352",
    name: "Kecleon",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Color Change"],
      hidden: "Protean",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kecleon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kecleon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kecleon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kecleon.gif",
    },
    stats: {
      hp: "60",
      atk: "90",
      def: "70",
      spa: "60",
      spd: "120",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Kecleon alters its body coloration to blend in with its surroundings, allowing it to sneak up on its prey unnoticed. Then it lashes out with its long, stretchy tongue to instantly ensnare the unsuspecting target.",
  },
  {
    id: "0353",
    name: "Shuppet",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Insomnia", "Frisk"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shuppet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shuppet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shuppet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shuppet.gif",
    },
    stats: {
      hp: "44",
      atk: "75",
      def: "35",
      spa: "63",
      spd: "33",
      speed: "45",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Shuppet is attracted by feelings of jealousy and vindictiveness. If someone develops strong feelings of vengeance, this Pokémon will appear in a swarm and line up beneath the eaves of that person's home.",
  },
  {
    id: "0354",
    name: "Banette",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Insomnia", "Frisk"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/banette.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/banette.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/banette.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/banette.gif",
    },
    stats: {
      hp: "64",
      atk: "115",
      def: "65",
      spa: "83",
      spd: "63",
      speed: "65",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "A cursed energy permeated the stuffing of a discarded and forgotten plush doll, giving it new life as Banette. The Pokémon's energy would escape if it were to ever open its mouth.",
  },
  {
    id: "0355",
    name: "Duskull",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/duskull.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/duskull.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/duskull.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/duskull.gif",
    },
    stats: {
      hp: "20",
      atk: "40",
      def: "90",
      spa: "30",
      spd: "90",
      speed: "25",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
  },
  {
    id: "0356",
    name: "Dusclops",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dusclops.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dusclops.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dusclops.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dusclops.gif",
    },
    stats: {
      hp: "40",
      atk: "70",
      def: "130",
      spa: "60",
      spd: "130",
      speed: "25",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops's bidding.",
  },
  {
    id: "0357",
    name: "Tropius",
    region: "Hoenn",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Solar Power"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tropius.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tropius.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tropius.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tropius.gif",
    },
    stats: {
      hp: "99",
      atk: "68",
      def: "83",
      spa: "72",
      spd: "87",
      speed: "51",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [50, 50],
    description:
      "The bunches of fruit around Tropius's neck are very popular with children. This Pokémon loves fruit, and eats it continuously. Apparently, its love for fruit resulted in its own outgrowth of fruit.",
  },
  {
    id: "0358",
    name: "Chimecho",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chimecho.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chimecho.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chimecho.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chimecho.gif",
    },
    stats: {
      hp: "75",
      atk: "50",
      def: "80",
      spa: "95",
      spd: "90",
      speed: "65",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
  },
  {
    id: "0359",
    name: "Absol",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Pressure", "Super Luck"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/absol.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/absol.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/absol.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/absol.gif",
    },
    stats: {
      hp: "65",
      atk: "130",
      def: "60",
      spa: "75",
      spd: "60",
      speed: "75",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Absol has the ability to foretell the coming of natural disasters. It lives in a harsh, rugged mountain environment. This Pokémon very rarely ventures down from the mountains.",
  },
  {
    id: "0360",
    name: "Wynaut",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Shadow Tag"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wynaut.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wynaut.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wynaut.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wynaut.gif",
    },
    stats: {
      hp: "95",
      atk: "23",
      def: "48",
      spa: "23",
      spd: "48",
      speed: "23",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
  },
  {
    id: "0361",
    name: "Snorunt",
    region: "Hoenn",
    types: ["Ice"],
    abilities: {
      normal: ["Inner Focus", "Ice Body"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/snorunt.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/snorunt.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/snorunt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/snorunt.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "50",
      spa: "50",
      spd: "50",
      speed: "50",
    },
    eggGroups: ["Fairy", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Snorunt live in regions with heavy snowfall. In seasons without snow, such as spring and summer, this Pokémon steals away to live quietly among stalactites and stalagmites deep in caverns.",
  },
  {
    id: "0362",
    name: "Glalie",
    region: "Hoenn",
    types: ["Ice"],
    abilities: {
      normal: ["Inner Focus", "Ice Body"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/glalie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/glalie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/glalie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/glalie.gif",
    },
    stats: {
      hp: "80",
      atk: "80",
      def: "80",
      spa: "80",
      spd: "80",
      speed: "80",
    },
    eggGroups: ["Fairy", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Glalie has the ability to freely control ice. For example, it can instantly freeze its prey solid. After immobilizing its prey in ice, this Pokémon enjoys eating it in leisurely fashion.",
  },
  {
    id: "0363",
    name: "Spheal",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice Body"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spheal.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spheal.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spheal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spheal.gif",
    },
    stats: {
      hp: "70",
      atk: "40",
      def: "50",
      spa: "55",
      spd: "50",
      speed: "25",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Spheal is much faster rolling than walking to get around. When groups of this Pokémon eat, they all clap at once to show their pleasure. Because of this, their mealtimes are noisy.",
  },
  {
    id: "0364",
    name: "Sealeo",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice Body"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sealeo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sealeo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sealeo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sealeo.gif",
    },
    stats: {
      hp: "90",
      atk: "60",
      def: "70",
      spa: "75",
      spd: "70",
      speed: "45",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object's aroma and texture to determine whether it likes the object or not.",
  },
  {
    id: "0365",
    name: "Walrein",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice Body"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/walrein.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/walrein.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/walrein.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/walrein.gif",
    },
    stats: {
      hp: "110",
      atk: "80",
      def: "90",
      spa: "95",
      spd: "90",
      speed: "65",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Walrein's two massively developed tusks can totally shatter blocks of ice weighing 10 tons with one blow. This Pokémon's thick coat of blubber insulates it from subzero temperatures.",
  },
  {
    id: "0366",
    name: "Clamperl",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Shell Armor"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/clamperl.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/clamperl.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/clamperl.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/clamperl.gif",
    },
    stats: {
      hp: "35",
      atk: "64",
      def: "85",
      spa: "74",
      spd: "55",
      speed: "32",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "Clamperl grows while being protected by its rock-hard shell. When its body becomes too large to fit inside the shell, it is sure evidence that this Pokémon is getting close to evolution.",
  },
  {
    id: "0367",
    name: "Huntail",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/huntail.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/huntail.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/huntail.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/huntail.gif",
    },
    stats: {
      hp: "55",
      atk: "104",
      def: "105",
      spa: "94",
      spd: "75",
      speed: "52",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "Huntail's tail is shaped like a fish. It uses the tail to attract prey, then swallows the prey whole with its large, gaping mouth. This Pokémon swims by wiggling its slender body like a snake.",
  },
  {
    id: "0368",
    name: "Gorebyss",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gorebyss.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gorebyss.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gorebyss.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gorebyss.gif",
    },
    stats: {
      hp: "55",
      atk: "84",
      def: "105",
      spa: "114",
      spd: "75",
      speed: "52",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "Gorebyss lives in the southern seas at extreme depths. Its body is built to withstand the enormous pressure of water at incredible depths. Because of this, this Pokémon's body is unharmed by ordinary attacks.",
  },
  {
    id: "0369",
    name: "Relicanth",
    region: "Hoenn",
    types: ["Water", "Rock"],
    abilities: {
      normal: ["Swift Swim", "Rock Head"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/relicanth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/relicanth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/relicanth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/relicanth.gif",
    },
    stats: {
      hp: "100",
      atk: "90",
      def: "130",
      spa: "45",
      spd: "65",
      speed: "55",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [87.5, 12.5],
    description:
      "Relicanth is a rare species that was discovered in deep-sea explorations. This Pokémon's body withstands the enormous water pressure of the ocean depths. Its body is covered in tough scales that are like craggy rocks.",
  },
  {
    id: "0370",
    name: "Luvdisc",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/luvdisc.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/luvdisc.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/luvdisc.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/luvdisc.gif",
    },
    stats: {
      hp: "43",
      atk: "30",
      def: "55",
      spa: "40",
      spd: "65",
      speed: "97",
    },
    eggGroups: ["Water 2"],
    genderRatios: [25, 75],
    description:
      "Luvdisc's heart-shaped body is a symbol of love and romance. It is said that any couple meeting this Pokémon is promised a loving relationship that never ends.",
  },
  {
    id: "0371",
    name: "Bagon",
    region: "Hoenn",
    types: ["Dragon"],
    abilities: {
      normal: ["Rock Head"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bagon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bagon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bagon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bagon.gif",
    },
    stats: {
      hp: "45",
      atk: "75",
      def: "60",
      spa: "40",
      spd: "30",
      speed: "50",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "Bagon harbors a never-ending dream of one day soaring high among the clouds. As if trying to dispel its frustration over its inability to fly, this Pokémon slams its hard head against huge rocks and shatters them into pebbles.",
  },
  {
    id: "0372",
    name: "Shelgon",
    region: "Hoenn",
    types: ["Dragon"],
    abilities: {
      normal: ["Rock Head"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shelgon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shelgon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shelgon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shelgon.gif",
    },
    stats: {
      hp: "65",
      atk: "95",
      def: "100",
      spa: "60",
      spd: "50",
      speed: "50",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "Inside Shelgon's armor-like shell, cells are in the midst of transformation to create an entirely new body. This Pokémon's shell is extremely heavy, making its movements sluggish.",
  },
  {
    id: "0373",
    name: "Salamence",
    region: "Hoenn",
    types: ["Dragon", "Flying"],
    abilities: {
      normal: ["Intimidate"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/salamence.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/salamence.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/salamence.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/salamence.gif",
    },
    stats: {
      hp: "95",
      atk: "135",
      def: "80",
      spa: "110",
      spd: "80",
      speed: "100",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "Salamence came about as a result of a strong, long-held dream of growing wings. It is said that this powerful desire triggered a sudden mutation in this Pokémon's cells, causing it to sprout its magnificent wings.",
  },
  {
    id: "0374",
    name: "Beldum",
    region: "Hoenn",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Light Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/beldum.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/beldum.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/beldum.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/beldum.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "80",
      spa: "35",
      spd: "60",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Instead of blood, a powerful magnetic force courses throughout Beldum's body. This Pokémon communicates with others by sending controlled pulses of magnetism.",
  },
  {
    id: "0375",
    name: "Metang",
    region: "Hoenn",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Light Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/metang.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/metang.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/metang.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/metang.gif",
    },
    stats: {
      hp: "60",
      atk: "75",
      def: "100",
      spa: "55",
      spd: "80",
      speed: "50",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "When two Beldum fuse together, Metang is formed. The brains of the Beldum are joined by a magnetic nervous system. By linking its brains magnetically, this Pokémon generates strong psychokinetic power.",
  },
  {
    id: "0376",
    name: "Metagross",
    region: "Hoenn",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Light Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/metagross.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/metagross.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/metagross.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/metagross.gif",
    },
    stats: {
      hp: "80",
      atk: "135",
      def: "130",
      spa: "95",
      spd: "90",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Metagross is the result of two Metang achieving fusion. When hunting, this Pokémon pins the prey to the ground under its massive body. It then eats the helpless victim using the large mouth on its stomach.",
  },
  {
    id: "0377",
    name: "Regirock",
    region: "Hoenn",
    types: ["Rock"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/regirock.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/regirock.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/regirock.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/regirock.gif",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "200",
      spa: "50",
      spd: "100",
      speed: "50",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Regirock's body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.",
  },
  {
    id: "0378",
    name: "Regice",
    region: "Hoenn",
    types: ["Ice"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/regice.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/regice.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/regice.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/regice.gif",
    },
    stats: {
      hp: "80",
      atk: "50",
      def: "100",
      spa: "100",
      spd: "200",
      speed: "50",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
  },
  {
    id: "0379",
    name: "Registeel",
    region: "Hoenn",
    types: ["Steel"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Light Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/registeel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/registeel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/registeel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/registeel.gif",
    },
    stats: {
      hp: "80",
      atk: "75",
      def: "150",
      spa: "75",
      spd: "150",
      speed: "50",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
  },
  {
    id: "0380",
    name: "Latias",
    region: "Hoenn",
    types: ["Dragon", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/latias.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/latias.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/latias.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/latias.gif",
    },
    stats: {
      hp: "80",
      atk: "80",
      def: "90",
      spa: "110",
      spd: "130",
      speed: "110",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
  },
  {
    id: "0381",
    name: "Latios",
    region: "Hoenn",
    types: ["Dragon", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/latios.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/latios.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/latios.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/latios.gif",
    },
    stats: {
      hp: "80",
      atk: "90",
      def: "80",
      spa: "130",
      spd: "110",
      speed: "110",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [100, 0],
    description:
      "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
  },
  {
    id: "0382",
    name: "Kyogre",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Drizzle"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kyogre.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kyogre.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kyogre.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kyogre.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "90",
      spa: "150",
      spd: "140",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
  },
  {
    id: "0383",
    name: "Groudon",
    region: "Hoenn",
    types: ["Ground"],
    abilities: {
      normal: ["Drought"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/groudon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/groudon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/groudon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/groudon.gif",
    },
    stats: {
      hp: "100",
      atk: "150",
      def: "140",
      spa: "100",
      spd: "90",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Groudon is said to be the personification of the land itself. Legends tell of its many clashes against Kyogre, as each sought to gain the power of nature.",
  },
  {
    id: "0384",
    name: "Rayquaza",
    region: "Hoenn",
    types: ["Dragon", "Flying"],
    abilities: {
      normal: ["Air Lock"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rayquaza.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rayquaza.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rayquaza.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rayquaza.gif",
    },
    stats: {
      hp: "105",
      atk: "150",
      def: "90",
      spa: "150",
      spd: "90",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.",
  },
  {
    id: "0385",
    name: "Jirachi",
    region: "Hoenn",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Serene Grace"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jirachi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jirachi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jirachi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jirachi.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A legend states that Jirachi will make true any wish that is written on notes attached to its head when it awakens. If this Pokémon senses danger, it will fight without awakening.",
  },
  {
    id: "0386",
    name: "Deoxys",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Pressure"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/deoxys.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/deoxys.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/deoxys.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/deoxys.gif",
    },
    stats: {
      hp: "50",
      atk: "150",
      def: "50",
      spa: "150",
      spd: "50",
      speed: "150",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
  },
  {
    id: "0387",
    name: "Turtwig",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/turtwig.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/turtwig.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/turtwig.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/turtwig.gif",
    },
    stats: {
      hp: "55",
      atk: "68",
      def: "64",
      spa: "45",
      spd: "55",
      speed: "31",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon becomes more energetic the more sunlight there is. The part resembling a shell is similar to silt and is slightly damp and warm to the touch.",
  },
  {
    id: "0388",
    name: "Grotle",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/grotle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/grotle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/grotle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/grotle.gif",
    },
    stats: {
      hp: "75",
      atk: "89",
      def: "85",
      spa: "55",
      spd: "65",
      speed: "36",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "Appears where there is clean spring water. The fruit that grows on the shrubs on its shell is sweet, nutritious, and truly delicious.",
  },
  {
    id: "0389",
    name: "Torterra",
    region: "Sinnoh",
    types: ["Grass", "Ground"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/torterra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/torterra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/torterra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/torterra.gif",
    },
    stats: {
      hp: "95",
      atk: "109",
      def: "105",
      spa: "75",
      spd: "85",
      speed: "56",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "This remarkable, large-bodied Pokémon would serve beautifully as borrowed scenery for a garden, and its strength is peerless. Torterra roams the wilderness in search of clean water.",
  },
  {
    id: "0390",
    name: "Chimchar",
    region: "Sinnoh",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chimchar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chimchar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chimchar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chimchar.gif",
    },
    stats: {
      hp: "44",
      atk: "58",
      def: "44",
      spa: "58",
      spd: "44",
      speed: "61",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "Full of vigor and always in high spirits. It was once known by the name “Lantern-Tail” and feared as some kind of apparition.",
  },
  {
    id: "0391",
    name: "Monferno",
    region: "Sinnoh",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/monferno.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/monferno.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/monferno.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/monferno.gif",
    },
    stats: {
      hp: "64",
      atk: "78",
      def: "52",
      spa: "78",
      spd: "52",
      speed: "81",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "The deeper the blue on its face, the more powerful it will grow to become. It leaps about every which way and lands powerful blows against its opponents with the flame on its tail.",
  },
  {
    id: "0392",
    name: "Infernape",
    region: "Sinnoh",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/infernape.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/infernape.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/infernape.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/infernape.gif",
    },
    stats: {
      hp: "76",
      atk: "104",
      def: "71",
      spa: "104",
      spd: "71",
      speed: "108",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "A tall, hardy Pokémon with a dazzling appearance. It shrouds itself in flame and battles as if engaged in dance—truly a sight to behold.",
  },
  {
    id: "0393",
    name: "Piplup",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Competitive",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/piplup.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/piplup.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/piplup.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/piplup.gif",
    },
    stats: {
      hp: "53",
      atk: "51",
      def: "53",
      spa: "61",
      spd: "56",
      speed: "40",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Prefers cold climes and appears along coasts. It's an adorable little thing—as cute as any child—but it's also prideful, unwilling to accept handouts from people.",
  },
  {
    id: "0394",
    name: "Prinplup",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Competitive",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/prinplup.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/prinplup.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/prinplup.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/prinplup.gif",
    },
    stats: {
      hp: "64",
      atk: "66",
      def: "68",
      spa: "81",
      spd: "76",
      speed: "50",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It swims gracefully through the frigid sea and sings with a voice like the roaring tide. It has powerful, sturdy wings and dignity to match.",
  },
  {
    id: "0395",
    name: "Empoleon",
    region: "Sinnoh",
    types: ["Water", "Steel"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Competitive",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/empoleon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/empoleon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/empoleon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/empoleon.gif",
    },
    stats: {
      hp: "84",
      atk: "86",
      def: "88",
      spa: "111",
      spd: "101",
      speed: "60",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Since ancient times, it has been revered by the people of Hisui, who call it the Master of the Waves. Its wings are a match for even master-crafted blades.",
  },
  {
    id: "0396",
    name: "Starly",
    region: "Sinnoh",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/starly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/starly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/starly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/starly.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "30",
      spa: "30",
      spd: "30",
      speed: "60",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "They live in the fields and mountains, gathering in large flocks. Their cries are quite obnoxious. Though small, their wings are strong—a strike from them leaves pain that persists for a week.",
  },
  {
    id: "0397",
    name: "Staravia",
    region: "Sinnoh",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Intimidate"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/staravia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/staravia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/staravia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/staravia.gif",
    },
    stats: {
      hp: "55",
      atk: "75",
      def: "50",
      spa: "40",
      spd: "40",
      speed: "80",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "They form remarkably large flocks and are constantly fighting amongst themselves. I suspect that those with magnificent plumes on their heads are the strong ones.",
  },
  {
    id: "0398",
    name: "Staraptor",
    region: "Sinnoh",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Intimidate"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/staraptor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/staraptor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/staraptor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/staraptor.gif",
    },
    stats: {
      hp: "85",
      atk: "120",
      def: "70",
      spa: "50",
      spd: "60",
      speed: "100",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "It has left the flock, having gained strength enough to survive on its own. The astounding force with which Staraptor flies through the air allows it to carry away large, burly targets.",
  },
  {
    id: "0399",
    name: "Bidoof",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Simple", "Unaware"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bidoof.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bidoof.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bidoof.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bidoof.gif",
    },
    stats: {
      hp: "59",
      atk: "45",
      def: "40",
      spa: "35",
      spd: "40",
      speed: "31",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Bidoof has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Bidoof sauntering into villages and gnawing on the houses without a single care.",
  },
  {
    id: "0400",
    name: "Bibarel",
    region: "Sinnoh",
    types: ["Normal", "Water"],
    abilities: {
      normal: ["Simple", "Unaware"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bibarel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bibarel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bibarel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bibarel.gif",
    },
    stats: {
      hp: "79",
      atk: "85",
      def: "60",
      spa: "55",
      spd: "60",
      speed: "71",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Bibarel fur repels water and is also a fantastic material for heat retention. These Pokémon create dams on rivers to live in.",
  },
  {
    id: "0401",
    name: "Kricketot",
    region: "Sinnoh",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kricketot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kricketot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kricketot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kricketot.gif",
    },
    stats: {
      hp: "37",
      atk: "25",
      def: "41",
      spa: "25",
      spd: "41",
      speed: "25",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "When the trees take on new hues, more of these Pokémon appear. The tone they create by striking their antennae together resembles that of the marimba, an instrument of foreign lands.",
  },
  {
    id: "0402",
    name: "Kricketune",
    region: "Sinnoh",
    types: ["Bug"],
    abilities: {
      normal: ["Swarm"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kricketune.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kricketune.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kricketune.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kricketune.gif",
    },
    stats: {
      hp: "77",
      atk: "85",
      def: "51",
      spa: "55",
      spd: "51",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It uses its cutlass-like arms to produce sound, the melody of which varies from individual to individual. It is a worthwhile endeavor to seek out one's favorite tunes.",
  },
  {
    id: "0403",
    name: "Shinx",
    region: "Sinnoh",
    types: ["Electric"],
    abilities: {
      normal: ["Rivalry", "Intimidate"],
      hidden: "Guts",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shinx.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shinx.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shinx.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shinx.gif",
    },
    stats: {
      hp: "45",
      atk: "65",
      def: "34",
      spa: "40",
      spd: "34",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Shakes its body to generate electricity. Its stature belies its aggression—one must be patient to tame this Pokémon.",
  },
  {
    id: "0404",
    name: "Luxio",
    region: "Sinnoh",
    types: ["Electric"],
    abilities: {
      normal: ["Rivalry", "Intimidate"],
      hidden: "Guts",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/luxio.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/luxio.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/luxio.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/luxio.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "49",
      spa: "60",
      spd: "49",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Proudly uses its electrified claws as weapons. It seems to be a gracious Pokémon, evenly sharing the spoils of the hunt with others of its kind.",
  },
  {
    id: "0405",
    name: "Luxray",
    region: "Sinnoh",
    types: ["Electric"],
    abilities: {
      normal: ["Rivalry", "Intimidate"],
      hidden: "Guts",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/luxray.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/luxray.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/luxray.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/luxray.gif",
    },
    stats: {
      hp: "80",
      atk: "120",
      def: "79",
      spa: "95",
      spd: "79",
      speed: "70",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "They form packs, each having one male as leader. Legends say that when Luxray's two eyes shimmer with gold, the Pokémon can see through anything.",
  },
  {
    id: "0406",
    name: "Budew",
    region: "Sinnoh",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Natural Cure", "Poison Point"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/budew.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/budew.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/budew.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/budew.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "35",
      spa: "50",
      spd: "70",
      speed: "55",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "When the sun's light strengthens, the bud atop this Pokémon's head opens. This is a sign to the people that the harsh winter is over, and the season of budding has begun.",
  },
  {
    id: "0407",
    name: "Roserade",
    region: "Sinnoh",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Natural Cure", "Poison Point"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/roserade.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/roserade.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/roserade.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/roserade.gif",
    },
    stats: {
      hp: "60",
      atk: "70",
      def: "65",
      spa: "125",
      spd: "105",
      speed: "90",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Hidden within the bouquet on each hand are thorned whips loaded with virulent poison. Roserade moves gracefully as it corners its prey and mercilessly lashes them with its whips.",
  },
  {
    id: "0408",
    name: "Cranidos",
    region: "Sinnoh",
    types: ["Rock"],
    abilities: {
      normal: ["Mold Breaker"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cranidos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cranidos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cranidos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cranidos.gif",
    },
    stats: {
      hp: "67",
      atk: "125",
      def: "40",
      spa: "30",
      spd: "30",
      speed: "58",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "An incredibly rare sight. They duel each other by ramming their heads together, and the resulting sound echoes throughout the area like the pealing of a bell.",
  },
  {
    id: "0409",
    name: "Rampardos",
    region: "Sinnoh",
    types: ["Rock"],
    abilities: {
      normal: ["Mold Breaker"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rampardos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rampardos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rampardos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rampardos.gif",
    },
    stats: {
      hp: "97",
      atk: "165",
      def: "60",
      spa: "65",
      spd: "50",
      speed: "58",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "Very little is known about its biology. Can knock down massive trees by smashing its beautiful, pearl-like crown against them.",
  },
  {
    id: "0410",
    name: "Shieldon",
    region: "Sinnoh",
    types: ["Rock", "Steel"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "Soundproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shieldon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shieldon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shieldon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shieldon.gif",
    },
    stats: {
      hp: "30",
      atk: "42",
      def: "118",
      spa: "42",
      spd: "88",
      speed: "30",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "Much remains unknown about this Pokémon, as few have ever seen it. However, we know that it is calm and dislikes conflict, and it enjoys polishing its face against trees and rocks.",
  },
  {
    id: "0411",
    name: "Bastiodon",
    region: "Sinnoh",
    types: ["Rock", "Steel"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "Soundproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bastiodon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bastiodon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bastiodon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bastiodon.gif",
    },
    stats: {
      hp: "60",
      atk: "52",
      def: "168",
      spa: "47",
      spd: "138",
      speed: "30",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "Its face is sturdy—as strong as diamond—and this hardness offers a very stable defense. Much about this species is still unknown, such as its natural habitat.",
  },
  {
    id: "0412",
    name: "Burmy",
    region: "Sinnoh",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/burmy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/burmy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/burmy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/burmy.gif",
    },
    stats: {
      hp: "40",
      atk: "29",
      def: "45",
      spa: "29",
      spd: "45",
      speed: "36",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "If its cloak is even slightly damaged, Burmy will immediately repair it with whatever is close at hand. The Pokémon within the cloak is scrawny and vulnerable to the cold.",
  },
  {
    id: "0413",
    name: "Wormadam",
    region: "Sinnoh",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Anticipation"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wormadam.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wormadam.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wormadam.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wormadam.gif",
    },
    stats: {
      hp: "60",
      atk: "59",
      def: "85",
      spa: "79",
      spd: "105",
      speed: "36",
    },
    eggGroups: ["Bug"],
    genderRatios: [0, 100],
    description:
      "The cloak—fashioned from plant matter—has merged with the Pokémon and is now part of the body, like fur or skin. I suspect this fusion is an effect of the energy involved in evolution.",
  },
  {
    id: "0414",
    name: "Mothim",
    region: "Sinnoh",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Swarm"],
      hidden: "Tinted Lens",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mothim.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mothim.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mothim.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mothim.gif",
    },
    stats: {
      hp: "70",
      atk: "94",
      def: "50",
      spa: "94",
      spd: "50",
      speed: "66",
    },
    eggGroups: ["Bug"],
    genderRatios: [100, 0],
    description:
      "Scatters steel-colored scales as it flaps its wings. Despite being observed feeding primarily on the nectar of flowers, Mothim is not often seen around flower gardens.",
  },
  {
    id: "0415",
    name: "Combee",
    region: "Sinnoh",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Honey Gather"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/combee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/combee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/combee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/combee.gif",
    },
    stats: {
      hp: "30",
      atk: "30",
      def: "42",
      spa: "30",
      spd: "42",
      speed: "70",
    },
    eggGroups: ["Bug"],
    genderRatios: [87.5, 12.5],
    description:
      "They swear fealty to a queen Pokémon and work diligently to gather nectar. Each swarm produces a different flavor of honey.",
  },
  {
    id: "0416",
    name: "Vespiquen",
    region: "Sinnoh",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vespiquen.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vespiquen.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vespiquen.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vespiquen.gif",
    },
    stats: {
      hp: "70",
      atk: "80",
      def: "102",
      spa: "80",
      spd: "102",
      speed: "40",
    },
    eggGroups: ["Bug"],
    genderRatios: [0, 100],
    description:
      "Commands its subjects to build its hive. It will dispatch any interlopers who dare sneak into its nest and use them as nourishment for itself.",
  },
  {
    id: "0417",
    name: "Pachirisu",
    region: "Sinnoh",
    types: ["Electric"],
    abilities: {
      normal: ["Run Away", "Pickup"],
      hidden: "Volt Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pachirisu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pachirisu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pachirisu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pachirisu.gif",
    },
    stats: {
      hp: "60",
      atk: "45",
      def: "70",
      spa: "45",
      spd: "90",
      speed: "95",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "A species related to the Pikachu line. Though Pachirisu is a calm Pokémon, it still presents a danger should one touch its electrified tail or cheeks.",
  },
  {
    id: "0418",
    name: "Buizel",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/buizel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/buizel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/buizel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/buizel.gif",
    },
    stats: {
      hp: "55",
      atk: "65",
      def: "35",
      spa: "60",
      spd: "30",
      speed: "85",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "It moves freely in the water by spinning its forked tail for propulsion. The resemblance to the screw of a steamboat is coincidental.",
  },
  {
    id: "0419",
    name: "Floatzel",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/floatzel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/floatzel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/floatzel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/floatzel.gif",
    },
    stats: {
      hp: "85",
      atk: "105",
      def: "55",
      spa: "85",
      spd: "50",
      speed: "115",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "Has a long, rather splendid flotation sac, which prevents Floatzel from drowning even in stormy seas. One might glimpse this species around fishing hamlets from time to time.",
  },
  {
    id: "0420",
    name: "Cherubi",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cherubi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cherubi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cherubi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cherubi.gif",
    },
    stats: {
      hp: "45",
      atk: "35",
      def: "45",
      spa: "62",
      spd: "53",
      speed: "35",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Once the fruit growing alongside the main body is large and plump, Cherubi will use the nutrients within to evolve. The fruit then detaches, becoming nourishment for other creatures.",
  },
  {
    id: "0421",
    name: "Cherrim",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Flower Gift"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cherrim.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cherrim.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cherrim.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cherrim.gif",
    },
    stats: {
      hp: "70",
      atk: "60",
      def: "70",
      spa: "87",
      spd: "78",
      speed: "85",
    },
    eggGroups: ["Fairy", "Grass"],
    genderRatios: [50, 50],
    description:
      "Motionless, save for the occasional quiver. A rich array of Pokémon can be found gathered around it, drawn by the scent exuded from Cherrim's folded petals.",
  },
  {
    id: "0422",
    name: "Shellos",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Sticky Hold", "Storm Drain"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shellos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shellos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shellos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shellos.gif",
    },
    stats: {
      hp: "76",
      atk: "48",
      def: "48",
      spa: "57",
      spd: "62",
      speed: "34",
    },
    eggGroups: ["Water 1", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Found in abundance on seashores bordering warm waters. Shellos are unexpectedly friendly and will crawl toward any person they see. Take care not to get coated in mucus!",
  },
  {
    id: "0423",
    name: "Gastrodon",
    region: "Sinnoh",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Sticky Hold", "Storm Drain"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gastrodon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gastrodon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gastrodon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gastrodon.gif",
    },
    stats: {
      hp: "111",
      atk: "83",
      def: "68",
      spa: "92",
      spd: "82",
      speed: "39",
    },
    eggGroups: ["Water 1", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Eats beach sand for nourishment. Should one Gastrodon encounter another of a different color, a fierce battle will inevitably ensue.",
  },
  {
    id: "0424",
    name: "Ambipom",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Technician", "Pickup"],
      hidden: "Skill Link",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ambipom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ambipom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ambipom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ambipom.gif",
    },
    stats: {
      hp: "75",
      atk: "100",
      def: "66",
      spa: "60",
      spd: "66",
      speed: "115",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "To affirm their kinship, members of this species will form a ring by linking their newly doubled tails together. On rare occasions, humans have been accepted into such rings.",
  },
  {
    id: "0425",
    name: "Drifloon",
    region: "Sinnoh",
    types: ["Ghost", "Flying"],
    abilities: {
      normal: ["Aftermath", "Unburden"],
      hidden: "Flare Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drifloon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drifloon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drifloon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drifloon.gif",
    },
    stats: {
      hp: "90",
      atk: "50",
      def: "34",
      spa: "60",
      spd: "44",
      speed: "70",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Said to lure away young children and carry them off to the afterlife. Some whisper that Drifloon are formed of reincarnated human souls, but these rumors are as yet unconfirmed.",
  },
  {
    id: "0426",
    name: "Drifblim",
    region: "Sinnoh",
    types: ["Ghost", "Flying"],
    abilities: {
      normal: ["Aftermath", "Unburden"],
      hidden: "Flare Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drifblim.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drifblim.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drifblim.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drifblim.gif",
    },
    stats: {
      hp: "150",
      atk: "80",
      def: "44",
      spa: "90",
      spd: "54",
      speed: "80",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "It drifts along at dusk, perfectly silent. Its transient, melancholy aspect touches some people deeply—every so often, one will come upon a song or poem devoted to Drifblim.",
  },
  {
    id: "0427",
    name: "Buneary",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Klutz"],
      hidden: "Limber",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/buneary.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/buneary.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/buneary.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/buneary.gif",
    },
    stats: {
      hp: "55",
      atk: "66",
      def: "44",
      spa: "44",
      spd: "56",
      speed: "85",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "My hypothesis as to why Buneary rolls up its ears is that its hearing is far too keen. I surmise that the Pokémon protects its hearing by limiting the sound that may enter its ears.",
  },
  {
    id: "0428",
    name: "Lopunny",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "Klutz"],
      hidden: "Limber",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lopunny.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lopunny.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lopunny.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lopunny.gif",
    },
    stats: {
      hp: "65",
      atk: "76",
      def: "84",
      spa: "54",
      spd: "96",
      speed: "105",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Its fur is warm and yet remarkably light. This Pokémon kicks as though it were a master of karate, driving back its opponents with ease.",
  },
  {
    id: "0429",
    name: "Mismagius",
    region: "Sinnoh",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mismagius.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mismagius.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mismagius.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mismagius.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "60",
      spa: "105",
      spd: "105",
      speed: "105",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "The incantations Mismagius chants can ward against misfortune, so a custom exists of inviting it into one's home. Incur the Pokémon's displeasure, however, and disaster will surely ensue.",
  },
  {
    id: "0430",
    name: "Honchkrow",
    region: "Sinnoh",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Insomnia", "Super Luck"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/honchkrow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/honchkrow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/honchkrow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/honchkrow.gif",
    },
    stats: {
      hp: "100",
      atk: "125",
      def: "52",
      spa: "105",
      spd: "52",
      speed: "71",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "One cry from this Pokémon, and a murder of Murkrow come flying. At such times, one would think the curtain of night had fallen, plunging the world into jet-black darkness.",
  },
  {
    id: "0431",
    name: "Glameow",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Limber", "Own Tempo"],
      hidden: "Keen Eye",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/glameow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/glameow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/glameow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/glameow.gif",
    },
    stats: {
      hp: "49",
      atk: "55",
      def: "42",
      spa: "42",
      spd: "37",
      speed: "85",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "Bewitches humans with its helical tail and piercing gaze. Its hidden claws are quite sharp as well, making this Pokémon an exceedingly tricky opponent if antagonized.",
  },
  {
    id: "0432",
    name: "Purugly",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Thick Fat", "Own Tempo"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/purugly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/purugly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/purugly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/purugly.gif",
    },
    stats: {
      hp: "71",
      atk: "82",
      def: "64",
      spa: "64",
      spd: "59",
      speed: "112",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "Though impudent and difficult to tame, Purugly enjoys great popularity due to its fur, the beauty of which surpasses even velveteen.",
  },
  {
    id: "0433",
    name: "Chingling",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chingling.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chingling.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chingling.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chingling.gif",
    },
    stats: {
      hp: "45",
      atk: "30",
      def: "50",
      spa: "65",
      spd: "50",
      speed: "45",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "This Pokémon gave me an excruciating headache when it seemingly cried out without making a sound. Perhaps there are some sounds that the human ear is simply incapable of hearing.",
  },
  {
    id: "0434",
    name: "Stunky",
    region: "Sinnoh",
    types: ["Poison", "Dark"],
    abilities: {
      normal: ["Stench", "Aftermath"],
      hidden: "Keen Eye",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stunky.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stunky.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stunky.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stunky.gif",
    },
    stats: {
      hp: "63",
      atk: "63",
      def: "47",
      spa: "41",
      spd: "41",
      speed: "74",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The poison that gushes from its aft end is accompanied by an utterly evil-smelling odor with such potency that one whiff can induce memory loss.",
  },
  {
    id: "0435",
    name: "Skuntank",
    region: "Sinnoh",
    types: ["Poison", "Dark"],
    abilities: {
      normal: ["Stench", "Aftermath"],
      hidden: "Keen Eye",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skuntank.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skuntank.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skuntank.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skuntank.gif",
    },
    stats: {
      hp: "103",
      atk: "93",
      def: "67",
      spa: "71",
      spd: "61",
      speed: "84",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Sprays a poisonous fluid to take down prey. Sometimes, unable to stomach the stench of its own fluid, it leaves the bested prey uneaten.",
  },
  {
    id: "0436",
    name: "Bronzor",
    region: "Sinnoh",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Levitate", "Heatproof"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bronzor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bronzor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bronzor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bronzor.gif",
    },
    stats: {
      hp: "57",
      atk: "24",
      def: "86",
      spa: "24",
      spd: "86",
      speed: "23",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places.",
  },
  {
    id: "0437",
    name: "Bronzong",
    region: "Sinnoh",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Levitate", "Heatproof"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bronzong.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bronzong.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bronzong.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bronzong.gif",
    },
    stats: {
      hp: "67",
      atk: "89",
      def: "116",
      spa: "79",
      spd: "116",
      speed: "33",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Some believe that its bell-like cry opens holes to another world. It has been revered as a deity since ancient times.",
  },
  {
    id: "0438",
    name: "Bonsly",
    region: "Sinnoh",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Rock Head"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bonsly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bonsly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bonsly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bonsly.gif",
    },
    stats: {
      hp: "50",
      atk: "80",
      def: "95",
      spa: "10",
      spd: "45",
      speed: "10",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "Its tears elicit sympathy from those who see them, but do not be deceived! This expulsion of body water is merely a physiological mechanism for keeping itself in good health.",
  },
  {
    id: "0439",
    name: "Mime Jr",
    region: "Sinnoh",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Soundproof", "Filter"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mime jr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mime jr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mime jr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mime jr.gif",
    },
    stats: {
      hp: "20",
      atk: "25",
      def: "45",
      spa: "70",
      spd: "90",
      speed: "60",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "Known to turn up in bustling marketplaces now and again. It mimics people much as a child would, then watches how they react, eyes sparkling.",
  },
  {
    id: "0440",
    name: "Happiny",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Natural Cure", "Serene Grace"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/happiny.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/happiny.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/happiny.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/happiny.gif",
    },
    stats: {
      hp: "100",
      atk: "5",
      def: "5",
      spa: "15",
      spd: "65",
      speed: "30",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "In imitation of Chansey, it keeps a round stone tucked into its belly pouch and cherishes it dearly. It gets along well with children and will sometimes play house with them for fun.",
  },
  {
    id: "0441",
    name: "Chatot",
    region: "Sinnoh",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Tangled Feet"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chatot.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chatot.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chatot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chatot.gif",
    },
    stats: {
      hp: "76",
      atk: "65",
      def: "45",
      spa: "92",
      spd: "42",
      speed: "91",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "A versatile performer skilled in the imitation of human speech. It is said that older, more experienced Chatot can even understand the meaning of the words they mimic.",
  },
  {
    id: "0442",
    name: "Spiritomb",
    region: "Sinnoh",
    types: ["Ghost", "Dark"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spiritomb.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spiritomb.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spiritomb.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spiritomb.gif",
    },
    stats: {
      hp: "50",
      atk: "92",
      def: "108",
      spa: "92",
      spd: "108",
      speed: "35",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "It lays curses by thinking wicked thoughts. Writings tell that this Pokémon was born out of the assembly of five score and eight malevolent spirits.",
  },
  {
    id: "0443",
    name: "Gible",
    region: "Sinnoh",
    types: ["Dragon", "Ground"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Rough Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gible.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gible.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gible.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gible.gif",
    },
    stats: {
      hp: "58",
      atk: "70",
      def: "45",
      spa: "40",
      spd: "45",
      speed: "42",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "It nests in caves untouched by sunlight. Its sharp teeth may fall out when worn away or after an impact, but they regrow within a few days.",
  },
  {
    id: "0444",
    name: "Gabite",
    region: "Sinnoh",
    types: ["Dragon", "Ground"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Rough Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gabite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gabite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gabite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gabite.gif",
    },
    stats: {
      hp: "68",
      atk: "90",
      def: "65",
      spa: "50",
      spd: "55",
      speed: "82",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Though Gabite are usually of a violent disposition, when I gave one a glass bead it had been eyeing covetously, it suddenly became quite docile.",
  },
  {
    id: "0445",
    name: "Garchomp",
    region: "Sinnoh",
    types: ["Dragon", "Ground"],
    abilities: {
      normal: ["Sand Veil"],
      hidden: "Rough Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/garchomp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/garchomp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/garchomp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/garchomp.gif",
    },
    stats: {
      hp: "108",
      atk: "130",
      def: "95",
      spa: "80",
      spd: "85",
      speed: "102",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Soars across the heavens at blinding speed—a magnificent sight! It has a feral disposition. Utmost caution is required if one meets a Garchomp out in the wilds.",
  },
  {
    id: "0446",
    name: "Munchlax",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Thick Fat"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/munchlax.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/munchlax.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/munchlax.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/munchlax.gif",
    },
    stats: {
      hp: "135",
      atk: "85",
      def: "40",
      spa: "40",
      spd: "85",
      speed: "5",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [87.5, 12.5],
    description:
      "Its robust stomach allows it to nonchalantly devour even rotted matter. It pays frequent visits to villages, seeking out food scraps intended for compost.",
  },
  {
    id: "0447",
    name: "Riolu",
    region: "Sinnoh",
    types: ["Fighting"],
    abilities: {
      normal: ["Steadfast", "Inner Focus"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/riolu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/riolu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/riolu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/riolu.gif",
    },
    stats: {
      hp: "40",
      atk: "70",
      def: "40",
      spa: "35",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [87.5, 12.5],
    description:
      "Though infantile in appearance, it has the mysterious ability to read the minds of humans. The pure of heart are met with Riolu's approval, while those of ill nature earn only its loathing.",
  },
  {
    id: "0448",
    name: "Lucario",
    region: "Sinnoh",
    types: ["Fighting", "Steel"],
    abilities: {
      normal: ["Steadfast", "Inner Focus"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lucario.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lucario.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lucario.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lucario.gif",
    },
    stats: {
      hp: "70",
      atk: "110",
      def: "70",
      spa: "115",
      spd: "70",
      speed: "90",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "A most gallant-looking creature. It emits energy waves and controls them with precision, using them to sense even faraway beings. I have given the name “aura” to this power.",
  },
  {
    id: "0449",
    name: "Hippopotas",
    region: "Sinnoh",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Stream"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hippopotas.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hippopotas.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hippopotas.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hippopotas.gif",
    },
    stats: {
      hp: "68",
      atk: "72",
      def: "78",
      spa: "38",
      spd: "42",
      speed: "32",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils.",
  },
  {
    id: "0450",
    name: "Hippowdon",
    region: "Sinnoh",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Stream"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hippowdon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hippowdon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hippowdon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hippowdon.gif",
    },
    stats: {
      hp: "108",
      atk: "112",
      def: "118",
      spa: "68",
      spd: "72",
      speed: "47",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Short-tempered and easily moved to violence. It whips up whirlwinds of sand to crush its foes' spirits, then goes in for the attack.",
  },
  {
    id: "0451",
    name: "Skorupi",
    region: "Sinnoh",
    types: ["Poison", "Bug"],
    abilities: {
      normal: ["Battle Armor", "Sniper"],
      hidden: "Keen Eye",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skorupi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skorupi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skorupi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skorupi.gif",
    },
    stats: {
      hp: "40",
      atk: "50",
      def: "90",
      spa: "30",
      spd: "55",
      speed: "65",
    },
    eggGroups: ["Bug", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Its claws are not only razor-sharp but poisonous, making Skorupi a highly dangerous Pokémon. It seems to be weakened by cold temperatures, however.",
  },
  {
    id: "0452",
    name: "Drapion",
    region: "Sinnoh",
    types: ["Poison", "Dark"],
    abilities: {
      normal: ["Battle Armor", "Sniper"],
      hidden: "Keen Eye",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drapion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drapion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drapion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drapion.gif",
    },
    stats: {
      hp: "70",
      atk: "90",
      def: "110",
      spa: "60",
      spd: "75",
      speed: "95",
    },
    eggGroups: ["Bug", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Has a brutish, ferocious temperament. With immense strength and a sturdy shell off which swords will bounce, it rampages about and wreaks havoc.",
  },
  {
    id: "0453",
    name: "Croagunk",
    region: "Sinnoh",
    types: ["Poison", "Fighting"],
    abilities: {
      normal: ["Anticipation", "Dry Skin"],
      hidden: "Poison Touch",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/croagunk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/croagunk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/croagunk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/croagunk.gif",
    },
    stats: {
      hp: "48",
      atk: "61",
      def: "40",
      spa: "61",
      spd: "40",
      speed: "50",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "A poison wielder with a dastardly personality. Despite such qualities, this species is afforded a measure of popularity due to its peculiar cry and comical features.",
  },
  {
    id: "0454",
    name: "Toxicroak",
    region: "Sinnoh",
    types: ["Poison", "Fighting"],
    abilities: {
      normal: ["Anticipation", "Dry Skin"],
      hidden: "Poison Touch",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/toxicroak.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/toxicroak.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/toxicroak.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/toxicroak.gif",
    },
    stats: {
      hp: "83",
      atk: "106",
      def: "65",
      spa: "86",
      spd: "65",
      speed: "85",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Its crimson claws contain a virulent toxin. This toxin can be made into a tonic by diluting it, mixing it with several types of wild grass, and boiling it down over two days.",
  },
  {
    id: "0455",
    name: "Carnivine",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/carnivine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/carnivine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/carnivine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/carnivine.gif",
    },
    stats: {
      hp: "74",
      atk: "100",
      def: "72",
      spa: "90",
      spd: "72",
      speed: "46",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Though this is a plant Pokémon, it has a gluttonous and unruly temperament. Carnivine attacks its prey with its cavernous maw wide open.",
  },
  {
    id: "0456",
    name: "Finneon",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Storm Drain"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/finneon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/finneon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/finneon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/finneon.gif",
    },
    stats: {
      hp: "49",
      atk: "49",
      def: "56",
      spa: "49",
      spd: "61",
      speed: "66",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "What a gorgeous sight this Pokémon is as it swims with its long, pink-painted caudal fins fluttering behind it. Finneon's beautiful appearance has led to its nickname: “finery fish.”",
  },
  {
    id: "0457",
    name: "Lumineon",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Storm Drain"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lumineon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lumineon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lumineon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lumineon.gif",
    },
    stats: {
      hp: "69",
      atk: "69",
      def: "76",
      spa: "69",
      spd: "86",
      speed: "91",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Uses its gleaming fins to hunt its prey. The view of Lumineon schooling near the surface of the sea at night is breathtaking— it's as though there were shining stars right there.",
  },
  {
    id: "0458",
    name: "Mantyke",
    region: "Sinnoh",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Swift Swim", "Water Absorb"],
      hidden: "Water Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mantyke.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mantyke.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mantyke.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mantyke.gif",
    },
    stats: {
      hp: "45",
      atk: "20",
      def: "50",
      spa: "60",
      spd: "120",
      speed: "50",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "Though ball-like in shape, this Pokémon is a proficient swimmer. I have discovered that if a Mantyke spends much time with schools of Remoraid, it will eventually achieve evolution.",
  },
  {
    id: "0459",
    name: "Snover",
    region: "Sinnoh",
    types: ["Grass", "Ice"],
    abilities: {
      normal: ["Snow Warning"],
      hidden: "Soundproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/snover.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/snover.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/snover.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/snover.gif",
    },
    stats: {
      hp: "60",
      atk: "62",
      def: "50",
      spa: "62",
      spd: "60",
      speed: "40",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [50, 50],
    description:
      "One is likely to encounter this Pokémon while out in the snow. There are stories of Snover appearing in human settlements but doing no harm—rather, they bond with the children.",
  },
  {
    id: "0460",
    name: "Abomasnow",
    region: "Sinnoh",
    types: ["Grass", "Ice"],
    abilities: {
      normal: ["Snow Warning"],
      hidden: "Soundproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/abomasnow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/abomasnow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/abomasnow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/abomasnow.gif",
    },
    stats: {
      hp: "90",
      atk: "92",
      def: "75",
      spa: "92",
      spd: "85",
      speed: "60",
    },
    eggGroups: ["Monster", "Grass"],
    genderRatios: [50, 50],
    description:
      "A powerful Pokémon that can split huge boulders with ease. Dislikes associating with others and chooses to live quietly deep within the mountains, playing with the snow.",
  },
  {
    id: "0461",
    name: "Weavile",
    region: "Sinnoh",
    types: ["Dark", "Ice"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/weavile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/weavile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/weavile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/weavile.gif",
    },
    stats: {
      hp: "70",
      atk: "120",
      def: "65",
      spa: "45",
      spd: "85",
      speed: "125",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This species corners prey as a pack, under the guidance of a leader. Weavile displays increased cunning, leading me to speculate that its evolution caused further brain development.",
  },
  {
    id: "0462",
    name: "Magnezone",
    region: "Sinnoh",
    types: ["Electric", "Steel"],
    abilities: {
      normal: ["Magnet Pull", "Sturdy"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magnezone.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magnezone.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magnezone.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magnezone.gif",
    },
    stats: {
      hp: "70",
      atk: "70",
      def: "115",
      spa: "130",
      spd: "90",
      speed: "60",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "I theorize that a special magnetic field influenced this Pokémon, changing its molecular structure and causing it to evolve. It emits strange radio waves toward space from its antenna.",
  },
  {
    id: "0463",
    name: "Lickilicky",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "Oblivious"],
      hidden: "Cloud Nine",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lickilicky.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lickilicky.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lickilicky.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lickilicky.gif",
    },
    stats: {
      hp: "110",
      atk: "85",
      def: "95",
      spa: "80",
      spd: "95",
      speed: "50",
    },
    eggGroups: ["Monster"],
    genderRatios: [50, 50],
    description:
      "Its tongue can extend and contract freely, and it is capable of reaching lengths over 10 times Lickilicky's height. Beware of the saliva, as it contains corrosive elements.",
  },
  {
    id: "0464",
    name: "Rhyperior",
    region: "Sinnoh",
    types: ["Ground", "Rock"],
    abilities: {
      normal: ["Lightning Rod", "Solid Rock"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rhyperior.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rhyperior.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rhyperior.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rhyperior.gif",
    },
    stats: {
      hp: "115",
      atk: "140",
      def: "130",
      spa: "55",
      spd: "55",
      speed: "40",
    },
    eggGroups: ["Monster", "Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon evolved through use of a curious item. Its rocklike hide is composed of a mysterious substance and can withstand a blow from a masterwork sword with nary a scratch.",
  },
  {
    id: "0465",
    name: "Tangrowth",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Leaf Guard"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tangrowth.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tangrowth.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tangrowth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tangrowth.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "125",
      spa: "110",
      spd: "50",
      speed: "50",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Draped with long vines, it resembles a shrub in appearance. It swings bundles of vines as though they were arms, wrapping them around prey to ensnare them.",
  },
  {
    id: "0466",
    name: "Electivire",
    region: "Sinnoh",
    types: ["Electric"],
    abilities: {
      normal: ["Motor Drive"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/electivire.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/electivire.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/electivire.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/electivire.gif",
    },
    stats: {
      hp: "75",
      atk: "123",
      def: "67",
      spa: "95",
      spd: "85",
      speed: "95",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Its evolution was induced by an unusual item, and its electrical output rises along with its heart rate. From its tails, it can unleash an electric current measuring 20,000 volts.",
  },
  {
    id: "0467",
    name: "Magmortar",
    region: "Sinnoh",
    types: ["Fire"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Vital Spirit",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magmortar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magmortar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magmortar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magmortar.gif",
    },
    stats: {
      hp: "75",
      atk: "95",
      def: "67",
      spa: "125",
      spd: "95",
      speed: "83",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Use of a strange item caused this Pokémon to evolve. Fireballs launched from the ends of its tubelike arms are hot enough to melt an iron pot in an instant.",
  },
  {
    id: "0468",
    name: "Togekiss",
    region: "Sinnoh",
    types: ["Fairy", "Flying"],
    abilities: {
      normal: ["Hustle", "Serene Grace"],
      hidden: "Super Luck",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/togekiss.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/togekiss.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/togekiss.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/togekiss.gif",
    },
    stats: {
      hp: "85",
      atk: "50",
      def: "95",
      spa: "120",
      spd: "115",
      speed: "80",
    },
    eggGroups: ["Flying", "Fairy"],
    genderRatios: [87.5, 12.5],
    description:
      "Scant few have ever sighted this Pokémon. After studying what literature remains, I am certain Togekiss will reveal itself when peace reigns in the land.",
  },
  {
    id: "0469",
    name: "Yanmega",
    region: "Sinnoh",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Speed Boost", "Tinted Lens"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/yanmega.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/yanmega.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/yanmega.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/yanmega.gif",
    },
    stats: {
      hp: "86",
      atk: "76",
      def: "86",
      spa: "116",
      spd: "56",
      speed: "95",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Extremely violent. When hunting, it wastes - of its energy, aiming only for prey's most vulnerable spots. Any who manage to tame this Pokémon must be of incredible bravery.",
  },
  {
    id: "0470",
    name: "Leafeon",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/leafeon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/leafeon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/leafeon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/leafeon.gif",
    },
    stats: {
      hp: "65",
      atk: "110",
      def: "130",
      spa: "60",
      spd: "65",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail's sharpness exceeds even that of a sword crafted by a master.",
  },
  {
    id: "0471",
    name: "Glaceon",
    region: "Sinnoh",
    types: ["Ice"],
    abilities: {
      normal: ["Snow Cloak"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/glaceon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/glaceon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/glaceon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/glaceon.gif",
    },
    stats: {
      hp: "65",
      atk: "60",
      def: "110",
      spa: "130",
      spd: "95",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around.",
  },
  {
    id: "0472",
    name: "Gliscor",
    region: "Sinnoh",
    types: ["Ground", "Flying"],
    abilities: {
      normal: ["Hyper Cutter", "Sand Veil"],
      hidden: "Poison Heal",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gliscor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gliscor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gliscor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gliscor.gif",
    },
    stats: {
      hp: "75",
      atk: "95",
      def: "125",
      spa: "45",
      spd: "75",
      speed: "95",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It glides soundlessly on pitch-black wings and sinks sharp fangs into the throat of its prey. It takes on a look of satisfaction once it has entirely drained its prey of blood.",
  },
  {
    id: "0473",
    name: "Mamoswine",
    region: "Sinnoh",
    types: ["Ice", "Ground"],
    abilities: {
      normal: ["Oblivious", "Snow Cloak"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mamoswine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mamoswine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mamoswine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mamoswine.gif",
    },
    stats: {
      hp: "110",
      atk: "130",
      def: "80",
      spa: "70",
      spd: "60",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This species reached its zenith during the period known as the ice age. I suspect that Hisui's frigid climate is in harmony with Mamoswine's constitution, thus awakening hidden potential.",
  },
  {
    id: "0474",
    name: "Porygon-Z",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Adaptability", "Download"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/porygon-z.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/porygon-z.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/porygon-z.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/porygon-z.gif",
    },
    stats: {
      hp: "85",
      atk: "80",
      def: "70",
      spa: "135",
      spd: "75",
      speed: "90",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "A curious item induced this evolution. The Pokémon's offensive capabilities have greatly increased, but the strangeness of its behavior has magnified in equal measure. This worries me.",
  },
  {
    id: "0475",
    name: "Gallade",
    region: "Sinnoh",
    types: ["Psychic", "Fighting"],
    abilities: {
      normal: ["Steadfast", "Sharpness"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gallade.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gallade.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gallade.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gallade.gif",
    },
    stats: {
      hp: "68",
      atk: "125",
      def: "65",
      spa: "65",
      spd: "115",
      speed: "80",
    },
    eggGroups: ["Human-Like", "Amorphous"],
    genderRatios: [100, 0],
    description:
      "The blades extending from its elbows are sharper than the finest swords. Its swordsmanship, albeit self-taught, is astonishingly impressive.",
  },
  {
    id: "0476",
    name: "Probopass",
    region: "Sinnoh",
    types: ["Rock", "Steel"],
    abilities: {
      normal: ["Sturdy", "Magnet Pull"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/probopass.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/probopass.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/probopass.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/probopass.gif",
    },
    stats: {
      hp: "60",
      atk: "55",
      def: "145",
      spa: "75",
      spd: "150",
      speed: "40",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "It is able to emit powerful magnetism, allowing it control over the iron sand that forms its luscious mustache. Using this iron sand, Probopass forms hard stones with which it smites its prey.",
  },
  {
    id: "0477",
    name: "Dusknoir",
    region: "Sinnoh",
    types: ["Ghost"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Frisk",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dusknoir.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dusknoir.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dusknoir.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dusknoir.gif",
    },
    stats: {
      hp: "45",
      atk: "100",
      def: "135",
      spa: "65",
      spd: "135",
      speed: "45",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Comes to those whose lives have come to an end and escorts their souls to the afterlife. Known to mistakenly take the souls of those who yet have life left in them, albeit rarely.",
  },
  {
    id: "0478",
    name: "Froslass",
    region: "Sinnoh",
    types: ["Ice", "Ghost"],
    abilities: {
      normal: ["Snow Cloak"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/froslass.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/froslass.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/froslass.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/froslass.gif",
    },
    stats: {
      hp: "70",
      atk: "80",
      def: "70",
      spa: "80",
      spd: "70",
      speed: "110",
    },
    eggGroups: ["Fairy", "Mineral"],
    genderRatios: [0, 100],
    description:
      "A Pokémon inhabited by the soul of a woman who died bearing a grudge in the snowy mountains. Legends of Froslass placing deathly curses on misbehaving men send shivers down my spine.",
  },
  {
    id: "0479",
    name: "Rotom",
    region: "Sinnoh",
    types: ["Electric", "Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rotom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rotom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rotom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rotom.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "77",
      spa: "95",
      spd: "77",
      speed: "91",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [0, 0],
    description:
      "This bizarre Pokémon appears to be a will-o'-the-wisp powered by electricity. Be wary, as Rotom is both smart and mischievous.",
  },
  {
    id: "0480",
    name: "Uxie",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/uxie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/uxie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/uxie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/uxie.gif",
    },
    stats: {
      hp: "75",
      atk: "75",
      def: "130",
      spa: "75",
      spd: "130",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A Pokémon feared but also respected for stealing away the memories of evildoers. I have found records that suggest Uxie holds dominion over knowledge.",
  },
  {
    id: "0481",
    name: "Mesprit",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mesprit.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mesprit.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mesprit.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mesprit.gif",
    },
    stats: {
      hp: "80",
      atk: "105",
      def: "105",
      spa: "105",
      spd: "105",
      speed: "80",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Known as the Being of Emotion. In legend, this Pokémon was feared, as any who showed disrespect would have their emotions thrown into disarray.",
  },
  {
    id: "0482",
    name: "Azelf",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/azelf.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/azelf.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/azelf.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/azelf.gif",
    },
    stats: {
      hp: "75",
      atk: "125",
      def: "70",
      spa: "125",
      spd: "70",
      speed: "115",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "The dreaded Being of Willpower. Legends tell of this Pokémon manipulating the will of its adversaries and turning them into puppets of its own.",
  },
  {
    id: "0483",
    name: "Dialga",
    region: "Sinnoh",
    types: ["Steel", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dialga.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dialga.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dialga.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dialga.gif",
    },
    stats: {
      hp: "100",
      atk: "120",
      def: "120",
      spa: "150",
      spd: "100",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon is revered as a deity in Hisuian legend. The birth of Dialga was what caused the vast river of time to begin flowing in our world.",
  },
  {
    id: "0484",
    name: "Palkia",
    region: "Sinnoh",
    types: ["Water", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/palkia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/palkia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/palkia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/palkia.gif",
    },
    stats: {
      hp: "90",
      atk: "120",
      def: "100",
      spa: "150",
      spd: "120",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon is feared as a deity in Hisuian legend. The birth of Palkia was what caused the walls of our world to disappear, creating a sky that spans for infinity.",
  },
  {
    id: "0485",
    name: "Heatran",
    region: "Sinnoh",
    types: ["Fire", "Steel"],
    abilities: {
      normal: ["Flash Fire"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/heatran.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/heatran.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/heatran.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/heatran.gif",
    },
    stats: {
      hp: "91",
      atk: "90",
      def: "106",
      spa: "130",
      spd: "106",
      speed: "77",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "Stories tell of this Pokémon being birthed from the boiling magma within Mount Coronet. Its molten-steel body holds many mysteries.",
  },
  {
    id: "0486",
    name: "Regigigas",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Slow Start"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/regigigas.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/regigigas.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/regigigas.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/regigigas.gif",
    },
    stats: {
      hp: "110",
      atk: "160",
      def: "110",
      spa: "80",
      spd: "110",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "According to legend, Regigigas pulled landmasses together and bound them with rope to create the continent of Hisui. Though I have my doubts, the story could well contain a shred of truth.",
  },
  {
    id: "0487",
    name: "Giratina",
    region: "Sinnoh",
    types: ["Ghost", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/giratina.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/giratina.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/giratina.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/giratina.gif",
    },
    stats: {
      hp: "150",
      atk: "100",
      def: "120",
      spa: "100",
      spd: "120",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "There is one Hisuian verse that tells of a powerful light creating a deep shadow. I imagine that this deep shadow is Giratina.",
  },
  {
    id: "0488",
    name: "Cresselia",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cresselia.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cresselia.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cresselia.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cresselia.gif",
    },
    stats: {
      hp: "120",
      atk: "70",
      def: "120",
      spa: "75",
      spd: "130",
      speed: "85",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 100],
    description:
      "Cresselia is reminiscent of the crescent moon. It leaves a brilliant line of light in its wake as it flies across the night sky. I daresay it resembles the heavenly maiden who created the Milky Way.",
  },
  {
    id: "0489",
    name: "Phione",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Hydration"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/phione.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/phione.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/phione.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/phione.gif",
    },
    stats: {
      hp: "80",
      atk: "80",
      def: "80",
      spa: "80",
      spd: "80",
      speed: "80",
    },
    eggGroups: ["Water 1", "Fairy"],
    genderRatios: [0, 0],
    description:
      "Can be seen floating offshore during seasons when the seas are warm. Its azure body blends in with the ocean waters—logic suggests this is a defense mechanism against natural predators.",
  },
  {
    id: "0490",
    name: "Manaphy",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Hydration"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/manaphy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/manaphy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/manaphy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/manaphy.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["Water 1", "Fairy"],
    genderRatios: [0, 0],
    description:
      "Rumored to migrate across the oceans and visit Hisui's coastal waters only rarely. Although Manaphy resembles Phione, it is also quite different. The relation between the two is unclear.",
  },
  {
    id: "0491",
    name: "Darkrai",
    region: "Sinnoh",
    types: ["Dark"],
    abilities: {
      normal: ["Bad Dreams"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/darkrai.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/darkrai.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/darkrai.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/darkrai.gif",
    },
    stats: {
      hp: "70",
      atk: "90",
      def: "90",
      spa: "135",
      spd: "90",
      speed: "125",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "On a moonless night, a strange incident occurred in which every one of a village's inhabitants suffered nightmares. The villagers attested that Darkrai appeared before them in these nightmares.",
  },
  {
    id: "0492",
    name: "Shaymin",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shaymin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shaymin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shaymin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shaymin.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "When the turning of seasons brings the cruel winter to its end and the joyous people give thanks to the heavens, Shaymin appears and covers the withered land with flowers.",
  },
  {
    id: "0493",
    name: "Arceus",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Multitype"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/arceus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/arceus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/arceus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/arceus.gif",
    },
    stats: {
      hp: "120",
      atk: "120",
      def: "120",
      spa: "120",
      spd: "120",
      speed: "120",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It is the heavenly fount from which pours the light that shines across Hisui. Its luminance guides and protects all Pokémon. Hisuian mythology states that Arceus is the creator of all things.",
  },
  {
    id: "0494",
    name: "Victini",
    region: "Unova",
    types: ["Psychic", "Fire"],
    abilities: {
      normal: ["Victory Star"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/victini.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/victini.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/victini.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/victini.gif",
    },
    stats: {
      hp: "100",
      atk: "100",
      def: "100",
      spa: "100",
      spd: "100",
      speed: "100",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
  },
  {
    id: "0495",
    name: "Snivy",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/snivy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/snivy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/snivy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/snivy.gif",
    },
    stats: {
      hp: "45",
      atk: "45",
      def: "55",
      spa: "45",
      spd: "55",
      speed: "63",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
  },
  {
    id: "0496",
    name: "Servine",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/servine.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/servine.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/servine.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/servine.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "75",
      spa: "60",
      spd: "75",
      speed: "83",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
  },
  {
    id: "0497",
    name: "Serperior",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/serperior.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/serperior.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/serperior.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/serperior.gif",
    },
    stats: {
      hp: "75",
      atk: "75",
      def: "95",
      spa: "75",
      spd: "95",
      speed: "113",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
  },
  {
    id: "0498",
    name: "Tepig",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tepig.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tepig.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tepig.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tepig.gif",
    },
    stats: {
      hp: "65",
      atk: "63",
      def: "45",
      spa: "45",
      spd: "45",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
  },
  {
    id: "0499",
    name: "Pignite",
    region: "Unova",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pignite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pignite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pignite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pignite.gif",
    },
    stats: {
      hp: "90",
      atk: "93",
      def: "55",
      spa: "70",
      spd: "55",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "The more it eats, the more fuel it has to make the fire in its stomach stronger. This fills it with even more power.",
  },
  {
    id: "0500",
    name: "Emboar",
    region: "Unova",
    types: ["Fire", "Fighting"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/emboar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/emboar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/emboar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/emboar.gif",
    },
    stats: {
      hp: "110",
      atk: "123",
      def: "65",
      spa: "100",
      spd: "65",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
  },
  {
    id: "0501",
    name: "Oshawott",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/oshawott.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/oshawott.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/oshawott.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/oshawott.gif",
    },
    stats: {
      hp: "55",
      atk: "55",
      def: "45",
      spa: "63",
      spd: "45",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name “scalchop.”",
  },
  {
    id: "0502",
    name: "Dewott",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dewott.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dewott.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dewott.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dewott.gif",
    },
    stats: {
      hp: "75",
      atk: "75",
      def: "60",
      spa: "83",
      spd: "60",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Its exquisite double-scalchop technique is likely the result of daily training, and it can send even masters of the blade fleeing in defeat.",
  },
  {
    id: "0503",
    name: "Samurott",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/samurott.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/samurott.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/samurott.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/samurott.gif",
    },
    stats: {
      hp: "95",
      atk: "100",
      def: "85",
      spa: "108",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
  },
  {
    id: "0504",
    name: "Patrat",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Run Away", "Keen Eye"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/patrat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/patrat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/patrat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/patrat.gif",
    },
    stats: {
      hp: "45",
      atk: "55",
      def: "39",
      spa: "35",
      spd: "39",
      speed: "42",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Extremely cautious, one of them will always be on the lookout, but it won't notice a foe coming from behind.",
  },
  {
    id: "0505",
    name: "Watchog",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Illuminate", "Keen Eye"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/watchog.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/watchog.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/watchog.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/watchog.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "69",
      spa: "60",
      spd: "69",
      speed: "77",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
  },
  {
    id: "0506",
    name: "Lillipup",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Vital Spirit", "Pickup"],
      hidden: "Run Away",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lillipup.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lillipup.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lillipup.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lillipup.gif",
    },
    stats: {
      hp: "45",
      atk: "60",
      def: "45",
      spa: "25",
      spd: "45",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is far brighter than the average child, and Lillipup won't forget the love it receives or any abuse it suffers.",
  },
  {
    id: "0507",
    name: "Herdier",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Intimidate", "Sand Rush"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/herdier.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/herdier.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/herdier.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/herdier.gif",
    },
    stats: {
      hp: "65",
      atk: "80",
      def: "65",
      spa: "35",
      spd: "65",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Herdier is a very smart and friendly Pokémon. So much so that there's a theory that Herdier was the first Pokémon to partner with people.",
  },
  {
    id: "0508",
    name: "Stoutland",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Intimidate", "Sand Rush"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stoutland.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stoutland.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stoutland.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stoutland.gif",
    },
    stats: {
      hp: "85",
      atk: "110",
      def: "90",
      spa: "45",
      spd: "90",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Stoutland is immensely proud of its impressive moustache. It's said that moustache length is what determines social standing among this species.",
  },
  {
    id: "0509",
    name: "Purrloin",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Limber", "Unburden"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/purrloin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/purrloin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/purrloin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/purrloin.gif",
    },
    stats: {
      hp: "41",
      atk: "50",
      def: "37",
      spa: "50",
      spd: "37",
      speed: "66",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Opponents that get drawn in by its adorable behavior come away with stinging scratches from its claws and stinging pride from its laughter.",
  },
  {
    id: "0510",
    name: "Liepard",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Limber", "Unburden"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/liepard.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/liepard.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/liepard.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/liepard.gif",
    },
    stats: {
      hp: "64",
      atk: "88",
      def: "50",
      spa: "88",
      spd: "50",
      speed: "106",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This stealthy Pokémon sneaks up behind prey without making any sound at all. It competes with Thievul for territory.",
  },
  {
    id: "0511",
    name: "Pansage",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Overgrow",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pansage.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pansage.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pansage.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pansage.gif",
    },
    stats: {
      hp: "50",
      atk: "53",
      def: "48",
      spa: "53",
      spd: "48",
      speed: "64",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It's good at finding berries and gathers them from all over. It's kind enough to share them with friends.",
  },
  {
    id: "0512",
    name: "Simisage",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Overgrow",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/simisage.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/simisage.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/simisage.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/simisage.gif",
    },
    stats: {
      hp: "75",
      atk: "98",
      def: "63",
      spa: "98",
      spd: "63",
      speed: "101",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
  },
  {
    id: "0513",
    name: "Pansear",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Blaze",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pansear.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pansear.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pansear.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pansear.gif",
    },
    stats: {
      hp: "50",
      atk: "53",
      def: "48",
      spa: "53",
      spd: "48",
      speed: "64",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
  },
  {
    id: "0514",
    name: "Simisear",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Blaze",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/simisear.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/simisear.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/simisear.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/simisear.gif",
    },
    stats: {
      hp: "75",
      atk: "98",
      def: "63",
      spa: "98",
      spd: "63",
      speed: "101",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
  },
  {
    id: "0515",
    name: "Panpour",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Torrent",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/panpour.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/panpour.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/panpour.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/panpour.gif",
    },
    stats: {
      hp: "50",
      atk: "53",
      def: "48",
      spa: "53",
      spd: "48",
      speed: "64",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
  },
  {
    id: "0516",
    name: "Simipour",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Gluttony"],
      hidden: "Torrent",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/simipour.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/simipour.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/simipour.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/simipour.gif",
    },
    stats: {
      hp: "75",
      atk: "98",
      def: "63",
      spa: "98",
      spd: "63",
      speed: "101",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
  },
  {
    id: "0517",
    name: "Munna",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Forewarn", "Synchronize"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/munna.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/munna.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/munna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/munna.gif",
    },
    stats: {
      hp: "76",
      atk: "25",
      def: "45",
      spa: "67",
      spd: "55",
      speed: "24",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It eats dreams and releases mist. The mist is pink when it's eating a good dream, and black when it's eating a nightmare.",
  },
  {
    id: "0518",
    name: "Musharna",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Forewarn", "Synchronize"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/musharna.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/musharna.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/musharna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/musharna.gif",
    },
    stats: {
      hp: "116",
      atk: "55",
      def: "85",
      spa: "107",
      spd: "95",
      speed: "29",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It drowses and dreams all the time. It's best to leave it be if it's just woken up, as it's a terrible grump when freshly roused from sleep.",
  },
  {
    id: "0519",
    name: "Pidove",
    region: "Unova",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Big Pecks", "Super Luck"],
      hidden: "Rivalry",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pidove.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pidove.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pidove.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pidove.gif",
    },
    stats: {
      hp: "50",
      atk: "55",
      def: "50",
      spa: "36",
      spd: "30",
      speed: "43",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Where people go, these Pokémon follow. If you're scattering food for them, be careful— several hundred of them can gather at once.",
  },
  {
    id: "0520",
    name: "Tranquill",
    region: "Unova",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Big Pecks", "Super Luck"],
      hidden: "Rivalry",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tranquill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tranquill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tranquill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tranquill.gif",
    },
    stats: {
      hp: "62",
      atk: "77",
      def: "62",
      spa: "50",
      spd: "42",
      speed: "65",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "It can fly moderately quickly. No matter how far it travels, it can always find its way back to its master and its nest.",
  },
  {
    id: "0521",
    name: "Unfezant",
    region: "Unova",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Big Pecks", "Super Luck"],
      hidden: "Rivalry",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/unfezant.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/unfezant.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/unfezant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/unfezant.gif",
    },
    stats: {
      hp: "80",
      atk: "115",
      def: "80",
      spa: "65",
      spd: "55",
      speed: "93",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.",
  },
  {
    id: "0522",
    name: "Blitzle",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Lightning Rod", "Motor Drive"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/blitzle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/blitzle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/blitzle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/blitzle.gif",
    },
    stats: {
      hp: "45",
      atk: "60",
      def: "32",
      spa: "50",
      spd: "32",
      speed: "76",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
  },
  {
    id: "0523",
    name: "Zebstrika",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Lightning Rod", "Motor Drive"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zebstrika.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zebstrika.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zebstrika.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zebstrika.gif",
    },
    stats: {
      hp: "75",
      atk: "100",
      def: "63",
      spa: "80",
      spd: "63",
      speed: "116",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
  },
  {
    id: "0524",
    name: "Roggenrola",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Weak Armor"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/roggenrola.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/roggenrola.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/roggenrola.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/roggenrola.gif",
    },
    stats: {
      hp: "55",
      atk: "75",
      def: "85",
      spa: "25",
      spd: "25",
      speed: "15",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "The hexagonal hole is its ear. Deep in that ear is an energy core, so if you stick your hand in there, Roggenrola will be very angry!",
  },
  {
    id: "0525",
    name: "Boldore",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Weak Armor"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/boldore.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/boldore.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/boldore.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/boldore.gif",
    },
    stats: {
      hp: "70",
      atk: "105",
      def: "105",
      spa: "50",
      spd: "40",
      speed: "20",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "It explores caves in search of underground water. It's not comfortable around water, so this Pokémon takes great care in lapping it up.",
  },
  {
    id: "0526",
    name: "Gigalith",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Sand Stream"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gigalith.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gigalith.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gigalith.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gigalith.gif",
    },
    stats: {
      hp: "85",
      atk: "135",
      def: "130",
      spa: "60",
      spd: "80",
      speed: "25",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Although its energy blasts can blow away a dump truck, they have a limitation— they can only be fired when the sun is out.",
  },
  {
    id: "0527",
    name: "Woobat",
    region: "Unova",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Unaware", "Klutz"],
      hidden: "Simple",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/woobat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/woobat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/woobat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/woobat.gif",
    },
    stats: {
      hp: "65",
      atk: "45",
      def: "43",
      spa: "55",
      spd: "43",
      speed: "72",
    },
    eggGroups: ["Field", "Flying"],
    genderRatios: [50, 50],
    description:
      "While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it's evidence that Woobat live there.",
  },
  {
    id: "0528",
    name: "Swoobat",
    region: "Unova",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Unaware", "Klutz"],
      hidden: "Simple",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swoobat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swoobat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swoobat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swoobat.gif",
    },
    stats: {
      hp: "67",
      atk: "57",
      def: "55",
      spa: "77",
      spd: "55",
      speed: "114",
    },
    eggGroups: ["Field", "Flying"],
    genderRatios: [50, 50],
    description:
      "The auspicious shape of this Pokémon's nose apparently led some regions to consider Swoobat a symbol of good luck.",
  },
  {
    id: "0529",
    name: "Drilbur",
    region: "Unova",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Rush", "Sand Force"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drilbur.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drilbur.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drilbur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drilbur.gif",
    },
    stats: {
      hp: "60",
      atk: "85",
      def: "40",
      spa: "30",
      spd: "45",
      speed: "68",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It's a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it.",
  },
  {
    id: "0530",
    name: "Excadrill",
    region: "Unova",
    types: ["Ground", "Steel"],
    abilities: {
      normal: ["Sand Rush", "Sand Force"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/excadrill.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/excadrill.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/excadrill.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/excadrill.gif",
    },
    stats: {
      hp: "110",
      atk: "135",
      def: "60",
      spa: "50",
      spd: "65",
      speed: "88",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It's not uncommon for tunnels that appear to have formed naturally to actually be a result of Excadrill's rampant digging.",
  },
  {
    id: "0531",
    name: "Audino",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Healer", "Regenerator"],
      hidden: "Klutz",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/audino.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/audino.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/audino.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/audino.gif",
    },
    stats: {
      hp: "103",
      atk: "60",
      def: "86",
      spa: "60",
      spd: "86",
      speed: "50",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures' feelings and physical conditions.",
  },
  {
    id: "0532",
    name: "Timburr",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "Sheer Force"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/timburr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/timburr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/timburr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/timburr.gif",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "55",
      spa: "25",
      spd: "35",
      speed: "35",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "It loves helping out with construction projects. It loves it so much that if rain causes work to halt, it swings its log around and throws a tantrum.",
  },
  {
    id: "0533",
    name: "Gurdurr",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "Sheer Force"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gurdurr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gurdurr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gurdurr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gurdurr.gif",
    },
    stats: {
      hp: "85",
      atk: "105",
      def: "85",
      spa: "40",
      spd: "50",
      speed: "40",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Gurdurr excels at demolition—construction is not its forte. In any case, there's skill in the way this Pokémon wields its metal beam.",
  },
  {
    id: "0534",
    name: "Conkeldurr",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "Sheer Force"],
      hidden: "Iron Fist",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/conkeldurr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/conkeldurr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/conkeldurr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/conkeldurr.gif",
    },
    stats: {
      hp: "105",
      atk: "140",
      def: "95",
      spa: "55",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [75, 25],
    description:
      "Concrete mixed by Conkeldurr is much more durable than normal concrete, even when the compositions of the two materials are the same.",
  },
  {
    id: "0535",
    name: "Tympole",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "Hydration"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tympole.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tympole.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tympole.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tympole.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "40",
      spa: "50",
      spd: "40",
      speed: "64",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "It uses sound waves to communicate with others of its kind. People and other Pokémon species can't hear its cries of warning.",
  },
  {
    id: "0536",
    name: "Palpitoad",
    region: "Unova",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Swift Swim", "Hydration"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/palpitoad.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/palpitoad.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/palpitoad.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/palpitoad.gif",
    },
    stats: {
      hp: "75",
      atk: "65",
      def: "55",
      spa: "65",
      spd: "55",
      speed: "69",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds.",
  },
  {
    id: "0537",
    name: "Seismitoad",
    region: "Unova",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Swift Swim", "Poison Touch"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/seismitoad.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/seismitoad.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/seismitoad.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/seismitoad.gif",
    },
    stats: {
      hp: "105",
      atk: "95",
      def: "75",
      spa: "85",
      spd: "75",
      speed: "74",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species.",
  },
  {
    id: "0538",
    name: "Throh",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Guts", "Inner Focus"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/throh.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/throh.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/throh.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/throh.gif",
    },
    stats: {
      hp: "120",
      atk: "100",
      def: "85",
      spa: "30",
      spd: "85",
      speed: "45",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [100, 0],
    description:
      "It performs throwing moves with first-rate skill. Over the course of many battles, Throh's belt grows darker as it absorbs its wearer's sweat.",
  },
  {
    id: "0539",
    name: "Sawk",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Sturdy", "Inner Focus"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sawk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sawk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sawk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sawk.gif",
    },
    stats: {
      hp: "75",
      atk: "125",
      def: "75",
      spa: "30",
      spd: "75",
      speed: "85",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [100, 0],
    description:
      "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
  },
  {
    id: "0540",
    name: "Sewaddle",
    region: "Unova",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Swarm", "Chlorophyll"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sewaddle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sewaddle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sewaddle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sewaddle.gif",
    },
    stats: {
      hp: "45",
      atk: "53",
      def: "70",
      spa: "40",
      spd: "60",
      speed: "42",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
  },
  {
    id: "0541",
    name: "Swadloon",
    region: "Unova",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Leaf Guard", "Chlorophyll"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swadloon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swadloon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swadloon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swadloon.gif",
    },
    stats: {
      hp: "55",
      atk: "63",
      def: "90",
      spa: "50",
      spd: "80",
      speed: "42",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
  },
  {
    id: "0542",
    name: "Leavanny",
    region: "Unova",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Swarm", "Chlorophyll"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/leavanny.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/leavanny.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/leavanny.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/leavanny.gif",
    },
    stats: {
      hp: "75",
      atk: "103",
      def: "80",
      spa: "70",
      spd: "80",
      speed: "92",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
  },
  {
    id: "0543",
    name: "Venipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/venipede.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/venipede.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/venipede.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/venipede.gif",
    },
    stats: {
      hp: "30",
      atk: "45",
      def: "59",
      spa: "30",
      spd: "39",
      speed: "57",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Its fangs are highly venomous. If this Pokémon finds prey it thinks it can eat, it leaps for them without any thought of how things might turn out.",
  },
  {
    id: "0544",
    name: "Whirlipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/whirlipede.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/whirlipede.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/whirlipede.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/whirlipede.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "99",
      spa: "40",
      spd: "79",
      speed: "47",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Whirlipede protects itself with a sturdy shell and poisonous spikes while it stores up the energy it'll need for evolution.",
  },
  {
    id: "0545",
    name: "Scolipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed Boost",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scolipede.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scolipede.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scolipede.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scolipede.gif",
    },
    stats: {
      hp: "60",
      atk: "100",
      def: "89",
      spa: "55",
      spd: "69",
      speed: "112",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Scolipede engage in fierce territorial battles with Centiskorch. At the end of one of these battles, the victor makes a meal of the loser.",
  },
  {
    id: "0546",
    name: "Cottonee",
    region: "Unova",
    types: ["Grass", "Fairy"],
    abilities: {
      normal: ["Prankster", "Infiltrator"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cottonee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cottonee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cottonee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cottonee.gif",
    },
    stats: {
      hp: "40",
      atk: "27",
      def: "60",
      spa: "37",
      spd: "50",
      speed: "66",
    },
    eggGroups: ["Grass", "Fairy"],
    genderRatios: [50, 50],
    description:
      "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
  },
  {
    id: "0547",
    name: "Whimsicott",
    region: "Unova",
    types: ["Grass", "Fairy"],
    abilities: {
      normal: ["Prankster", "Infiltrator"],
      hidden: "Chlorophyll",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/whimsicott.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/whimsicott.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/whimsicott.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/whimsicott.gif",
    },
    stats: {
      hp: "60",
      atk: "67",
      def: "85",
      spa: "77",
      spd: "75",
      speed: "116",
    },
    eggGroups: ["Grass", "Fairy"],
    genderRatios: [50, 50],
    description:
      "As long as this Pokémon bathes in sunlight, its cotton keeps growing. If too much cotton fluff builds up, Whimsicott tears it off and scatters it.",
  },
  {
    id: "0548",
    name: "Petilil",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Own Tempo"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/petilil.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/petilil.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/petilil.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/petilil.gif",
    },
    stats: {
      hp: "45",
      atk: "35",
      def: "50",
      spa: "70",
      spd: "50",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [0, 100],
    description:
      "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue.",
  },
  {
    id: "0549",
    name: "Lilligant",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Own Tempo"],
      hidden: "Leaf Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lilligant.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lilligant.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lilligant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lilligant.gif",
    },
    stats: {
      hp: "70",
      atk: "60",
      def: "75",
      spa: "110",
      spd: "75",
      speed: "90",
    },
    eggGroups: ["Grass"],
    genderRatios: [0, 100],
    description:
      "No matter how much time and money is spent raising it, its flowers are the most beautiful when they bloom in the wild.",
  },
  {
    id: "0550",
    name: "Basculin",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Reckless", "Adaptability"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/basculin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/basculin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/basculin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/basculin.gif",
    },
    stats: {
      hp: "70",
      atk: "92",
      def: "65",
      spa: "80",
      spd: "55",
      speed: "98",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "It's so vicious that it's called the Thug of the River. Yet Basculin is still targeted by predators, such as Dondozo and Bombirdier.",
  },
  {
    id: "0551",
    name: "Sandile",
    region: "Unova",
    types: ["Ground", "Dark"],
    abilities: {
      normal: ["Intimidate", "Moxie"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sandile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sandile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sandile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sandile.gif",
    },
    stats: {
      hp: "50",
      atk: "72",
      def: "35",
      spa: "35",
      spd: "35",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It submerges itself in sand and moves as if swimming. This wise behavior keeps its enemies from finding it and maintains its temperature.",
  },
  {
    id: "0552",
    name: "Krokorok",
    region: "Unova",
    types: ["Ground", "Dark"],
    abilities: {
      normal: ["Intimidate", "Moxie"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/krokorok.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/krokorok.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/krokorok.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/krokorok.gif",
    },
    stats: {
      hp: "60",
      atk: "82",
      def: "45",
      spa: "45",
      spd: "45",
      speed: "74",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Thanks to the special membrane covering its eyes, it can see its surroundings clearly, even in the middle of the night.",
  },
  {
    id: "0553",
    name: "Krookodile",
    region: "Unova",
    types: ["Ground", "Dark"],
    abilities: {
      normal: ["Intimidate", "Moxie"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/krookodile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/krookodile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/krookodile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/krookodile.gif",
    },
    stats: {
      hp: "95",
      atk: "117",
      def: "80",
      spa: "65",
      spd: "70",
      speed: "92",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is known as the Bully of the Sands. Krookodile's mighty jaws can bite through heavy plates of iron with almost no effort at all.",
  },
  {
    id: "0554",
    name: "Darumaka",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Hustle"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/darumaka.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/darumaka.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/darumaka.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/darumaka.gif",
    },
    stats: {
      hp: "70",
      atk: "90",
      def: "45",
      spa: "15",
      spd: "45",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It derives its power from fire burning inside its body. If the fire dwindles, this Pokémon will immediately fall asleep.",
  },
  {
    id: "0555",
    name: "Darmanitan",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Sheer Force"],
      hidden: "Zen Mode",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/darmanitan.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/darmanitan.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/darmanitan.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/darmanitan.gif",
    },
    stats: {
      hp: "105",
      atk: "140",
      def: "55",
      spa: "30",
      spd: "55",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch.",
  },
  {
    id: "0556",
    name: "Maractus",
    region: "Unova",
    types: ["Grass"],
    abilities: {
      normal: ["Water Absorb", "Chlorophyll"],
      hidden: "Storm Drain",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/maractus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/maractus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/maractus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/maractus.gif",
    },
    stats: {
      hp: "75",
      atk: "86",
      def: "67",
      spa: "106",
      spd: "67",
      speed: "60",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "With noises that could be mistaken for the rattles of maracas, it creates an upbeat rhythm, startling bird Pokémon and making them fly off in a hurry.",
  },
  {
    id: "0557",
    name: "Dwebble",
    region: "Unova",
    types: ["Bug", "Rock"],
    abilities: {
      normal: ["Sturdy", "Shell Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dwebble.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dwebble.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dwebble.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dwebble.gif",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "85",
      spa: "35",
      spd: "35",
      speed: "55",
    },
    eggGroups: ["Bug", "Mineral"],
    genderRatios: [50, 50],
    description:
      "When it finds a stone appealing, it creates a hole inside it and uses it as its home. This Pokémon is the natural enemy of Roggenrola and Rolycoly.",
  },
  {
    id: "0558",
    name: "Crustle",
    region: "Unova",
    types: ["Bug", "Rock"],
    abilities: {
      normal: ["Sturdy", "Shell Armor"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/crustle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/crustle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/crustle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/crustle.gif",
    },
    stats: {
      hp: "70",
      atk: "105",
      def: "125",
      spa: "65",
      spd: "75",
      speed: "45",
    },
    eggGroups: ["Bug", "Mineral"],
    genderRatios: [50, 50],
    description:
      "This highly territorial Pokémon prefers dry climates. It won't come out of its boulder on rainy days",
  },
  {
    id: "0559",
    name: "Scraggy",
    region: "Unova",
    types: ["Dark", "Fighting"],
    abilities: {
      normal: ["Shed Skin", "Moxie"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scraggy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scraggy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scraggy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scraggy.gif",
    },
    stats: {
      hp: "50",
      atk: "75",
      def: "70",
      spa: "35",
      spd: "70",
      speed: "48",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "It protects itself with its durable skin. It's thought that this Pokémon will evolve once its skin has completely stretched out.",
  },
  {
    id: "0560",
    name: "Scrafty",
    region: "Unova",
    types: ["Dark", "Fighting"],
    abilities: {
      normal: ["Shed Skin", "Moxie"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scrafty.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scrafty.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scrafty.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scrafty.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "115",
      spa: "45",
      spd: "115",
      speed: "58",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory.",
  },
  {
    id: "0561",
    name: "Sigilyph",
    region: "Unova",
    types: ["Psychic", "Flying"],
    abilities: {
      normal: ["Wonder Skin", "Magic Guard"],
      hidden: "Tinted Lens",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sigilyph.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sigilyph.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sigilyph.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sigilyph.gif",
    },
    stats: {
      hp: "72",
      atk: "58",
      def: "80",
      spa: "103",
      spd: "80",
      speed: "97",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians' emissaries.",
  },
  {
    id: "0562",
    name: "Yamask",
    region: "Unova",
    types: ["Ghost"],
    abilities: {
      normal: ["Mummy"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/yamask.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/yamask.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/yamask.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/yamask.gif",
    },
    stats: {
      hp: "38",
      atk: "30",
      def: "85",
      spa: "55",
      spd: "65",
      speed: "30",
    },
    eggGroups: ["Mineral", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "The spirit of a person from a bygone age became this Pokémon. It rambles through ruins, searching for someone who knows its face.",
  },
  {
    id: "0563",
    name: "Cofagrigus",
    region: "Unova",
    types: ["Ghost"],
    abilities: {
      normal: ["Mummy"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cofagrigus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cofagrigus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cofagrigus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cofagrigus.gif",
    },
    stats: {
      hp: "58",
      atk: "50",
      def: "145",
      spa: "95",
      spd: "105",
      speed: "30",
    },
    eggGroups: ["Mineral", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "There are many depictions of Cofagrigus decorating ancient tombs. They're symbols of the wealth that kings of bygone eras had.",
  },
  {
    id: "0564",
    name: "Tirtouga",
    region: "Unova",
    types: ["Water", "Rock"],
    abilities: {
      normal: ["Solid Rock", "Sturdy"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tirtouga.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tirtouga.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tirtouga.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tirtouga.gif",
    },
    stats: {
      hp: "54",
      atk: "78",
      def: "103",
      spa: "53",
      spd: "45",
      speed: "22",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon inhabited ancient seas. Although it can only crawl, it still comes up onto land in search of prey.",
  },
  {
    id: "0565",
    name: "Carracosta",
    region: "Unova",
    types: ["Water", "Rock"],
    abilities: {
      normal: ["Solid Rock", "Sturdy"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/carracosta.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/carracosta.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/carracosta.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/carracosta.gif",
    },
    stats: {
      hp: "74",
      atk: "108",
      def: "133",
      spa: "83",
      spd: "65",
      speed: "32",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "Carracosta completely devours its prey—bones, shells, and all. Because of this, Carracosta's own shell grows thick and sturdy.",
  },
  {
    id: "0566",
    name: "Archen",
    region: "Unova",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Defeatist"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/archen.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/archen.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/archen.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/archen.gif",
    },
    stats: {
      hp: "55",
      atk: "112",
      def: "45",
      spa: "74",
      spd: "45",
      speed: "70",
    },
    eggGroups: ["Flying", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon was successfully restored from a fossil. As research suggested, Archen is unable to fly. But it's very good at jumping.",
  },
  {
    id: "0567",
    name: "Archeops",
    region: "Unova",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Defeatist"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/archeops.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/archeops.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/archeops.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/archeops.gif",
    },
    stats: {
      hp: "75",
      atk: "140",
      def: "65",
      spa: "112",
      spd: "65",
      speed: "110",
    },
    eggGroups: ["Flying", "Water 3"],
    genderRatios: [87.5, 12.5],
    description:
      "It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles.",
  },
  {
    id: "0568",
    name: "Trubbish",
    region: "Unova",
    types: ["Poison"],
    abilities: {
      normal: ["Stench", "Sticky Hold"],
      hidden: "Aftermath",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/trubbish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/trubbish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/trubbish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/trubbish.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "62",
      spa: "40",
      spd: "62",
      speed: "65",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room.",
  },
  {
    id: "0569",
    name: "Garbodor",
    region: "Unova",
    types: ["Poison"],
    abilities: {
      normal: ["Stench", "Weak Armor"],
      hidden: "Aftermath",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/garbodor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/garbodor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/garbodor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/garbodor.gif",
    },
    stats: {
      hp: "80",
      atk: "95",
      def: "82",
      spa: "60",
      spd: "82",
      speed: "75",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.",
  },
  {
    id: "0570",
    name: "Zorua",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Illusion"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zorua.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zorua.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zorua.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zorua.gif",
    },
    stats: {
      hp: "40",
      atk: "65",
      def: "40",
      spa: "80",
      spd: "40",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Zorua sometimes transforms into a person and goes into cities to search for food. When Zorua does this, it usually takes on the form of a child.",
  },
  {
    id: "0571",
    name: "Zoroark",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Illusion"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zoroark.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zoroark.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zoroark.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zoroark.gif",
    },
    stats: {
      hp: "60",
      atk: "105",
      def: "60",
      spa: "120",
      spd: "60",
      speed: "105",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
  },
  {
    id: "0572",
    name: "Minccino",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "Technician"],
      hidden: "Skill Link",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/minccino.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/minccino.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/minccino.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/minccino.gif",
    },
    stats: {
      hp: "55",
      atk: "50",
      def: "40",
      spa: "40",
      spd: "40",
      speed: "75",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.",
  },
  {
    id: "0573",
    name: "Cinccino",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "Technician"],
      hidden: "Skill Link",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cinccino.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cinccino.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cinccino.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cinccino.gif",
    },
    stats: {
      hp: "75",
      atk: "95",
      def: "60",
      spa: "65",
      spd: "60",
      speed: "115",
    },
    eggGroups: ["Field"],
    genderRatios: [25, 75],
    description:
      "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
  },
  {
    id: "0574",
    name: "Gothita",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "Competitive"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gothita.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gothita.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gothita.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gothita.gif",
    },
    stats: {
      hp: "45",
      atk: "30",
      def: "50",
      spa: "55",
      spd: "65",
      speed: "45",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [25, 75],
    description:
      "This Pokémon is normally very innocent. When it is staring at something invisible, it is unblinking and utterly silent.",
  },
  {
    id: "0575",
    name: "Gothorita",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "Competitive"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gothorita.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gothorita.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gothorita.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gothorita.gif",
    },
    stats: {
      hp: "60",
      atk: "45",
      def: "70",
      spa: "75",
      spd: "85",
      speed: "55",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [25, 75],
    description:
      "Using its psychic power, it arranges pebbles to form the shapes of constellations. Some people believe this Pokémon came from outer space.",
  },
  {
    id: "0576",
    name: "Gothitelle",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "Competitive"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gothitelle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gothitelle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gothitelle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gothitelle.gif",
    },
    stats: {
      hp: "70",
      atk: "55",
      def: "95",
      spa: "95",
      spd: "110",
      speed: "65",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [25, 75],
    description:
      "Gothitelle unleashes psychic energy and shows opponents dreams of the universe's end. These dreams are apparently ethereal and beautiful.",
  },
  {
    id: "0577",
    name: "Solosis",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Overcoat", "Magic Guard"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/solosis.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/solosis.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/solosis.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/solosis.gif",
    },
    stats: {
      hp: "45",
      atk: "30",
      def: "40",
      spa: "105",
      spd: "50",
      speed: "20",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "It communicates with others telepathically. Its body is encapsulated in liquid, but if it takes a heavy blow, the liquid will leak out.",
  },
  {
    id: "0578",
    name: "Duosion",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Overcoat", "Magic Guard"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/duosion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/duosion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/duosion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/duosion.gif",
    },
    stats: {
      hp: "65",
      atk: "40",
      def: "50",
      spa: "125",
      spd: "60",
      speed: "30",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Its psychic power can supposedly cover a range of more than half a mile—but only if its two brains can agree with each other.",
  },
  {
    id: "0579",
    name: "Reuniclus",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Overcoat", "Magic Guard"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/reuniclus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/reuniclus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/reuniclus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/reuniclus.gif",
    },
    stats: {
      hp: "110",
      atk: "65",
      def: "75",
      spa: "125",
      spd: "85",
      speed: "30",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "While it could use its psychic abilities in battle, this Pokémon prefers to swing its powerful arms around to beat opponents into submission.",
  },
  {
    id: "0580",
    name: "Ducklett",
    region: "Unova",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Big Pecks"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ducklett.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ducklett.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ducklett.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ducklett.gif",
    },
    stats: {
      hp: "62",
      atk: "44",
      def: "50",
      spa: "44",
      spd: "50",
      speed: "55",
    },
    eggGroups: ["Water 1", "Flying"],
    genderRatios: [50, 50],
    description:
      "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.",
  },
  {
    id: "0581",
    name: "Swanna",
    region: "Unova",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Big Pecks"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swanna.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swanna.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swanna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swanna.gif",
    },
    stats: {
      hp: "75",
      atk: "87",
      def: "63",
      spa: "87",
      spd: "63",
      speed: "98",
    },
    eggGroups: ["Water 1", "Flying"],
    genderRatios: [50, 50],
    description:
      "Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
  },
  {
    id: "0582",
    name: "Vanillite",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow Cloak"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vanillite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vanillite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vanillite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vanillite.gif",
    },
    stats: {
      hp: "36",
      atk: "50",
      def: "50",
      spa: "65",
      spd: "60",
      speed: "44",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Unable to survive in hot areas, it makes itself comfortable by breathing out air cold enough to cause snow. It burrows into the snow to sleep.",
  },
  {
    id: "0583",
    name: "Vanillish",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow Cloak"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vanillish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vanillish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vanillish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vanillish.gif",
    },
    stats: {
      hp: "51",
      atk: "65",
      def: "65",
      spa: "80",
      spd: "75",
      speed: "59",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "It blasts enemies with cold air reaching −148 degrees Fahrenheit, freezing them solid. But it spares their lives afterward—it's a kind Pokémon.",
  },
  {
    id: "0584",
    name: "Vanilluxe",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow Warning"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vanilluxe.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vanilluxe.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vanilluxe.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vanilluxe.gif",
    },
    stats: {
      hp: "71",
      atk: "95",
      def: "85",
      spa: "110",
      spd: "95",
      speed: "79",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "When its anger reaches a breaking point, this Pokémon unleashes a fierce blizzard that freezes every creature around it, be they friend or foe.",
  },
  {
    id: "0585",
    name: "Deerling",
    region: "Unova",
    types: ["Normal", "Grass"],
    abilities: {
      normal: ["Chlorophyll", "Sap Sipper"],
      hidden: "Serene Grace",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/deerling.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/deerling.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/deerling.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/deerling.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "75",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Their coloring changes according to the seasons and can be slightly affected by the temperature and humidity as well.",
  },
  {
    id: "0586",
    name: "Sawsbuck",
    region: "Unova",
    types: ["Normal", "Grass"],
    abilities: {
      normal: ["Chlorophyll", "Sap Sipper"],
      hidden: "Serene Grace",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sawsbuck.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sawsbuck.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sawsbuck.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sawsbuck.gif",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "70",
      spa: "60",
      spd: "70",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It seems that a Sawsbuck with many flowers on its antlers will grow at a slightly slower pace because the flowers absorb the Pokémon's nutrients.",
  },
  {
    id: "0587",
    name: "Emolga",
    region: "Unova",
    types: ["Electric", "Flying"],
    abilities: {
      normal: ["Static"],
      hidden: "Motor Drive",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/emolga.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/emolga.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/emolga.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/emolga.gif",
    },
    stats: {
      hp: "55",
      atk: "75",
      def: "60",
      spa: "75",
      spd: "60",
      speed: "103",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon absolutely loves sweet berries. Sometimes it stuffs its cheeks full of so much food that it can't fly properly.",
  },
  {
    id: "0588",
    name: "Karrablast",
    region: "Unova",
    types: ["Bug"],
    abilities: {
      normal: ["Swarm", "Shed Skin"],
      hidden: "No Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/karrablast.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/karrablast.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/karrablast.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/karrablast.gif",
    },
    stats: {
      hp: "50",
      atk: "75",
      def: "45",
      spa: "40",
      spd: "45",
      speed: "60",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve.",
  },
  {
    id: "0589",
    name: "Escavalier",
    region: "Unova",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Swarm", "Shell Armor"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/escavalier.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/escavalier.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/escavalier.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/escavalier.gif",
    },
    stats: {
      hp: "70",
      atk: "135",
      def: "105",
      spa: "60",
      spd: "105",
      speed: "20",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It charges its enemies, lances at the ready. An image of one of its duels is captured in a famous painting of Escavalier clashing with Sirfetch'd.",
  },
  {
    id: "0590",
    name: "Foongus",
    region: "Unova",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Effect Spore"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/foongus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/foongus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/foongus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/foongus.gif",
    },
    stats: {
      hp: "69",
      atk: "55",
      def: "45",
      spa: "55",
      spd: "55",
      speed: "15",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed.",
  },
  {
    id: "0591",
    name: "Amoonguss",
    region: "Unova",
    types: ["Grass", "Poison"],
    abilities: {
      normal: ["Effect Spore"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/amoonguss.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/amoonguss.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/amoonguss.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/amoonguss.gif",
    },
    stats: {
      hp: "114",
      atk: "85",
      def: "70",
      spa: "85",
      spd: "80",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Be wary of the poisonous spores it releases. Mushrooms resembling Amoonguss's caps will grow out of anywhere the spores touch.",
  },
  {
    id: "0592",
    name: "Frillish",
    region: "Unova",
    types: ["Water", "Ghost"],
    abilities: {
      normal: ["Water Absorb", "Cursed Body"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/frillish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/frillish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/frillish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/frillish.gif",
    },
    stats: {
      hp: "55",
      atk: "40",
      def: "50",
      spa: "65",
      spd: "85",
      speed: "40",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Using the invisible poison spikes on its veillike arms and legs, it paralyzes its enemies and causes them to drown.",
  },
  {
    id: "0593",
    name: "Jellicent",
    region: "Unova",
    types: ["Water", "Ghost"],
    abilities: {
      normal: ["Water Absorb", "Cursed Body"],
      hidden: "Damp",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jellicent.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jellicent.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jellicent.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jellicent.gif",
    },
    stats: {
      hp: "100",
      atk: "60",
      def: "70",
      spa: "85",
      spd: "105",
      speed: "60",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Fishermen are terrified of Jellicent. It's rumored to drag them into the sea and steal their lives away.",
  },
  {
    id: "0594",
    name: "Alomomola",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Healer", "Hydration"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/alomomola.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/alomomola.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/alomomola.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/alomomola.gif",
    },
    stats: {
      hp: "165",
      atk: "75",
      def: "80",
      spa: "40",
      spd: "45",
      speed: "65",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [50, 50],
    description:
      "Fishermen take them along on long voyages, because if you have an Alomomola with you, there'll be no need for a doctor or medicine.",
  },
  {
    id: "0595",
    name: "Joltik",
    region: "Unova",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Compound Eyes", "Unnerve"],
      hidden: "Swarm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/joltik.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/joltik.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/joltik.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/joltik.gif",
    },
    stats: {
      hp: "50",
      atk: "47",
      def: "50",
      spa: "57",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Joltik can be found clinging to other Pokémon. It's soaking up static electricity because it can't produce a charge on its own.",
  },
  {
    id: "0596",
    name: "Galvantula",
    region: "Unova",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Compound Eyes", "Unnerve"],
      hidden: "Swarm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/galvantula.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/galvantula.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/galvantula.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/galvantula.gif",
    },
    stats: {
      hp: "70",
      atk: "77",
      def: "60",
      spa: "97",
      spd: "60",
      speed: "108",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.",
  },
  {
    id: "0597",
    name: "Ferroseed",
    region: "Unova",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Iron Barbs"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ferroseed.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ferroseed.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ferroseed.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ferroseed.gif",
    },
    stats: {
      hp: "44",
      atk: "50",
      def: "91",
      spa: "24",
      spd: "86",
      speed: "10",
    },
    eggGroups: ["Grass", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Mossy caves are their preferred dwellings. Enzymes contained in mosses help Ferroseed's spikes grow big and strong.",
  },
  {
    id: "0598",
    name: "Ferrothorn",
    region: "Unova",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Iron Barbs"],
      hidden: "Anticipation",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ferrothorn.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ferrothorn.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ferrothorn.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ferrothorn.gif",
    },
    stats: {
      hp: "74",
      atk: "94",
      def: "131",
      spa: "54",
      spd: "116",
      speed: "20",
    },
    eggGroups: ["Grass", "Mineral"],
    genderRatios: [50, 50],
    description:
      "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone.",
  },
  {
    id: "0599",
    name: "Klink",
    region: "Unova",
    types: ["Steel"],
    abilities: {
      normal: ["Plus", "Minus"],
      hidden: "Clear Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/klink.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/klink.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/klink.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/klink.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "70",
      spa: "45",
      spd: "60",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.",
  },
  {
    id: "0600",
    name: "Klang",
    region: "Unova",
    types: ["Steel"],
    abilities: {
      normal: ["Plus", "Minus"],
      hidden: "Clear Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/klang.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/klang.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/klang.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/klang.gif",
    },
    stats: {
      hp: "60",
      atk: "80",
      def: "95",
      spa: "70",
      spd: "85",
      speed: "50",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "When Klang goes all out, the minigear links up perfectly with the outer part of the big gear, and this Pokémon's rotation speed increases sharply.",
  },
  {
    id: "0601",
    name: "Klinklang",
    region: "Unova",
    types: ["Steel"],
    abilities: {
      normal: ["Plus", "Minus"],
      hidden: "Clear Body",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/klinklang.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/klinklang.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/klinklang.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/klinklang.gif",
    },
    stats: {
      hp: "60",
      atk: "100",
      def: "115",
      spa: "70",
      spd: "85",
      speed: "90",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "From its spikes, it launches powerful blasts of electricity. Its red core contains an enormous amount of energy.",
  },
  {
    id: "0602",
    name: "Tynamo",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tynamo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tynamo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tynamo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tynamo.gif",
    },
    stats: {
      hp: "35",
      atk: "55",
      def: "40",
      spa: "45",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "These Pokémon move in schools. They have an electricity-generating organ, so they discharge electricity if in danger.",
  },
  {
    id: "0603",
    name: "Eelektrik",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/eelektrik.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/eelektrik.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/eelektrik.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/eelektrik.gif",
    },
    stats: {
      hp: "65",
      atk: "85",
      def: "70",
      spa: "75",
      spd: "70",
      speed: "40",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
  },
  {
    id: "0604",
    name: "Eelektross",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/eelektross.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/eelektross.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/eelektross.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/eelektross.gif",
    },
    stats: {
      hp: "85",
      atk: "115",
      def: "80",
      spa: "105",
      spd: "80",
      speed: "50",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
  },
  {
    id: "0605",
    name: "Elgyem",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Telepathy", "Synchronize"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/elgyem.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/elgyem.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/elgyem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/elgyem.gif",
    },
    stats: {
      hp: "55",
      atk: "55",
      def: "55",
      spa: "85",
      spd: "55",
      speed: "30",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "This Pokémon was discovered about 50 years ago. Its highly developed brain enables it to exert its psychic powers.",
  },
  {
    id: "0606",
    name: "Beheeyem",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Telepathy", "Synchronize"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/beheeyem.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/beheeyem.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/beheeyem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/beheeyem.gif",
    },
    stats: {
      hp: "75",
      atk: "75",
      def: "75",
      spa: "125",
      spd: "95",
      speed: "40",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "It has strong psychic powers. Using its fingers that flash three different colors, it controls its opponents and rewrites their memories.",
  },
  {
    id: "0607",
    name: "Litwick",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/litwick.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/litwick.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/litwick.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/litwick.gif",
    },
    stats: {
      hp: "50",
      atk: "30",
      def: "55",
      spa: "65",
      spd: "55",
      speed: "20",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "The flame on its head keeps its body slightly warm. This Pokémon takes lost children by the hand to guide them to the spirit world.",
  },
  {
    id: "0608",
    name: "Lampent",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lampent.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lampent.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lampent.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lampent.gif",
    },
    stats: {
      hp: "60",
      atk: "40",
      def: "60",
      spa: "95",
      spd: "60",
      speed: "55",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them.",
  },
  {
    id: "0609",
    name: "Chandelure",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chandelure.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chandelure.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chandelure.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chandelure.gif",
    },
    stats: {
      hp: "60",
      atk: "55",
      def: "90",
      spa: "145",
      spd: "90",
      speed: "80",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "This Pokémon haunts dilapidated mansions. It sways its arms to hypnotize opponents with the ominous dancing of its flames.",
  },
  {
    id: "0610",
    name: "Axew",
    region: "Unova",
    types: ["Dragon"],
    abilities: {
      normal: ["Rivalry", "Mold Breaker"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/axew.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/axew.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/axew.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/axew.gif",
    },
    stats: {
      hp: "46",
      atk: "87",
      def: "60",
      spa: "30",
      spd: "40",
      speed: "57",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "They play with each other by knocking their large tusks together. Their tusks break sometimes, but they grow back so quickly that it isn't a concern.",
  },
  {
    id: "0611",
    name: "Fraxure",
    region: "Unova",
    types: ["Dragon"],
    abilities: {
      normal: ["Rivalry", "Mold Breaker"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fraxure.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fraxure.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fraxure.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fraxure.gif",
    },
    stats: {
      hp: "66",
      atk: "117",
      def: "70",
      spa: "40",
      spd: "50",
      speed: "67",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Its skin is as hard as a suit of armor. Fraxure's favorite strategy is to tackle its opponents, stabbing them with its tusks at the same time.",
  },
  {
    id: "0612",
    name: "Haxorus",
    region: "Unova",
    types: ["Dragon"],
    abilities: {
      normal: ["Rivalry", "Mold Breaker"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/haxorus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/haxorus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/haxorus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/haxorus.gif",
    },
    stats: {
      hp: "76",
      atk: "147",
      def: "90",
      spa: "60",
      spd: "70",
      speed: "97",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "This Pokémon nests in caves and abandoned mines. It is docile, but it will become incredibly angry if its tusks are touched, so beware.",
  },
  {
    id: "0613",
    name: "Cubchoo",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Snow Cloak", "Slush Rush"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cubchoo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cubchoo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cubchoo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cubchoo.gif",
    },
    stats: {
      hp: "55",
      atk: "70",
      def: "40",
      spa: "60",
      spd: "40",
      speed: "40",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Many of this species can be found along the shorelines of cold regions. If a Cubchoo lacks dangling snot, there's a chance it is sick.",
  },
  {
    id: "0614",
    name: "Beartic",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Snow Cloak", "Slush Rush"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/beartic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/beartic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/beartic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/beartic.gif",
    },
    stats: {
      hp: "95",
      atk: "130",
      def: "80",
      spa: "70",
      spd: "80",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It is a ferocious, carnivorous Pokémon. Once it captures its prey, it will breathe cold air onto the prey to freeze and preserve it.",
  },
  {
    id: "0615",
    name: "Cryogonal",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cryogonal.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cryogonal.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cryogonal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cryogonal.gif",
    },
    stats: {
      hp: "80",
      atk: "50",
      def: "50",
      spa: "95",
      spd: "135",
      speed: "105",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Cryogonal appear during cold seasons. It is said that people and Pokémon who die on snowy mountains are reborn into these Pokémon.",
  },
  {
    id: "0616",
    name: "Shelmet",
    region: "Unova",
    types: ["Bug"],
    abilities: {
      normal: ["Hydration", "Shell Armor"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shelmet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shelmet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shelmet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shelmet.gif",
    },
    stats: {
      hp: "50",
      atk: "40",
      def: "85",
      spa: "40",
      spd: "65",
      speed: "25",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "When attacked, it tightly shuts the lid of its shell. This reaction fails to protect it from Karrablast, however, because they can still get into the shell.",
  },
  {
    id: "0617",
    name: "Accelgor",
    region: "Unova",
    types: ["Bug"],
    abilities: {
      normal: ["Hydration", "Sticky Hold"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/accelgor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/accelgor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/accelgor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/accelgor.gif",
    },
    stats: {
      hp: "80",
      atk: "70",
      def: "40",
      spa: "100",
      spd: "60",
      speed: "145",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It moves with blinding speed and lobs poison at foes. Featuring Accelgor as a main character is a surefire way to make a movie or comic popular.",
  },
  {
    id: "0618",
    name: "Stunfisk",
    region: "Unova",
    types: ["Ground", "Electric"],
    abilities: {
      normal: ["Static", "Limber"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stunfisk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stunfisk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stunfisk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stunfisk.gif",
    },
    stats: {
      hp: "109",
      atk: "66",
      def: "84",
      spa: "81",
      spd: "99",
      speed: "32",
    },
    eggGroups: ["Water 1", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "Thanks to bacteria that lived in the mud flats with it, this Pokémon developed the organs it uses to generate electricity.",
  },
  {
    id: "0619",
    name: "Mienfoo",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Inner Focus", "Regenerator"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mienfoo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mienfoo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mienfoo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mienfoo.gif",
    },
    stats: {
      hp: "45",
      atk: "85",
      def: "50",
      spa: "55",
      spd: "50",
      speed: "65",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Though small, Mienfoo's temperament is fierce. Any creature that approaches Mienfoo carelessly will be greeted with a flurry of graceful attacks.",
  },
  {
    id: "0620",
    name: "Mienshao",
    region: "Unova",
    types: ["Fighting"],
    abilities: {
      normal: ["Inner Focus", "Regenerator"],
      hidden: "Reckless",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mienshao.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mienshao.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mienshao.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mienshao.gif",
    },
    stats: {
      hp: "65",
      atk: "125",
      def: "60",
      spa: "95",
      spd: "60",
      speed: "105",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.",
  },
  {
    id: "0621",
    name: "Druddigon",
    region: "Unova",
    types: ["Dragon"],
    abilities: {
      normal: ["Rough Skin", "Sheer Force"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/druddigon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/druddigon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/druddigon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/druddigon.gif",
    },
    stats: {
      hp: "77",
      atk: "120",
      def: "90",
      spa: "60",
      spd: "90",
      speed: "48",
    },
    eggGroups: ["Dragon", "Monster"],
    genderRatios: [50, 50],
    description:
      "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs.",
  },
  {
    id: "0622",
    name: "Golett",
    region: "Unova",
    types: ["Ground", "Ghost"],
    abilities: {
      normal: ["Iron Fist", "Klutz"],
      hidden: "No Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golett.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golett.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golett.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golett.gif",
    },
    stats: {
      hp: "59",
      atk: "74",
      def: "50",
      spa: "35",
      spd: "50",
      speed: "35",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "This Pokémon was created from clay. It received orders from its master many thousands of years ago, and it still follows those orders to this day.",
  },
  {
    id: "0623",
    name: "Golurk",
    region: "Unova",
    types: ["Ground", "Ghost"],
    abilities: {
      normal: ["Iron Fist", "Klutz"],
      hidden: "No Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golurk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golurk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golurk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golurk.gif",
    },
    stats: {
      hp: "89",
      atk: "124",
      def: "80",
      spa: "55",
      spd: "80",
      speed: "55",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "There's a theory that inside Golurk is a perpetual motion machine that produces limitless energy, but this belief hasn't been proven.",
  },
  {
    id: "0624",
    name: "Pawniard",
    region: "Unova",
    types: ["Dark", "Steel"],
    abilities: {
      normal: ["Defiant", "Inner Focus"],
      hidden: "Pressure",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pawniard.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pawniard.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pawniard.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pawniard.gif",
    },
    stats: {
      hp: "45",
      atk: "85",
      def: "70",
      spa: "40",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.",
  },
  {
    id: "0625",
    name: "Bisharp",
    region: "Unova",
    types: ["Dark", "Steel"],
    abilities: {
      normal: ["Defiant", "Inner Focus"],
      hidden: "Pressure",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bisharp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bisharp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bisharp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bisharp.gif",
    },
    stats: {
      hp: "65",
      atk: "125",
      def: "100",
      spa: "60",
      spd: "70",
      speed: "70",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
  },
  {
    id: "0626",
    name: "Bouffalant",
    region: "Unova",
    types: ["Normal"],
    abilities: {
      normal: ["Reckless", "Sap Sipper"],
      hidden: "Soundproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bouffalant.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bouffalant.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bouffalant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bouffalant.gif",
    },
    stats: {
      hp: "95",
      atk: "110",
      def: "95",
      spa: "40",
      spd: "95",
      speed: "55",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "These Pokémon can crush a car with no more than a headbutt. Bouffalant with more hair on their heads hold higher positions within the herd.",
  },
  {
    id: "0627",
    name: "Rufflet",
    region: "Unova",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Sheer Force"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rufflet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rufflet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rufflet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rufflet.gif",
    },
    stats: {
      hp: "70",
      atk: "83",
      def: "50",
      spa: "37",
      spd: "50",
      speed: "60",
    },
    eggGroups: ["Flying"],
    genderRatios: [100, 0],
    description:
      "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength.",
  },
  {
    id: "0628",
    name: "Braviary",
    region: "Unova",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Sheer Force"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/braviary.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/braviary.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/braviary.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/braviary.gif",
    },
    stats: {
      hp: "100",
      atk: "123",
      def: "75",
      spa: "57",
      spd: "75",
      speed: "80",
    },
    eggGroups: ["Flying"],
    genderRatios: [100, 0],
    description:
      "Known as “the hero of the skies,” this Pokémon is so proud and so brave that it will never retreat, even when it's injured.",
  },
  {
    id: "0629",
    name: "Vullaby",
    region: "Unova",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Big Pecks", "Overcoat"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vullaby.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vullaby.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vullaby.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vullaby.gif",
    },
    stats: {
      hp: "70",
      atk: "55",
      def: "75",
      spa: "45",
      spd: "65",
      speed: "60",
    },
    eggGroups: ["Flying"],
    genderRatios: [0, 100],
    description:
      "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest.",
  },
  {
    id: "0630",
    name: "Mandibuzz",
    region: "Unova",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Big Pecks", "Overcoat"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mandibuzz.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mandibuzz.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mandibuzz.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mandibuzz.gif",
    },
    stats: {
      hp: "110",
      atk: "65",
      def: "105",
      spa: "55",
      spd: "95",
      speed: "80",
    },
    eggGroups: ["Flying"],
    genderRatios: [0, 100],
    description:
      "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity.",
  },
  {
    id: "0631",
    name: "Heatmor",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Gluttony", "Flash Fire"],
      hidden: "White Smoke",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/heatmor.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/heatmor.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/heatmor.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/heatmor.gif",
    },
    stats: {
      hp: "85",
      atk: "97",
      def: "66",
      spa: "105",
      spd: "66",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "There's a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.",
  },
  {
    id: "0632",
    name: "Durant",
    region: "Unova",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Swarm", "Hustle"],
      hidden: "Truant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/durant.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/durant.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/durant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/durant.gif",
    },
    stats: {
      hp: "58",
      atk: "109",
      def: "112",
      spa: "48",
      spd: "48",
      speed: "109",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
  },
  {
    id: "0633",
    name: "Deino",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Hustle"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/deino.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/deino.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/deino.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/deino.gif",
    },
    stats: {
      hp: "52",
      atk: "65",
      def: "50",
      spa: "45",
      spd: "50",
      speed: "38",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "It nests deep inside a cave. Food there is scarce, so Deino will sink its teeth into anything that moves and attempt to eat it.",
  },
  {
    id: "0634",
    name: "Zweilous",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Hustle"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zweilous.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zweilous.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zweilous.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zweilous.gif",
    },
    stats: {
      hp: "72",
      atk: "85",
      def: "70",
      spa: "65",
      spd: "70",
      speed: "58",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "The two heads have different likes and dislikes. Because the heads fight with each other, Zweilous gets stronger without needing to rely on others.",
  },
  {
    id: "0635",
    name: "Hydreigon",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hydreigon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hydreigon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hydreigon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hydreigon.gif",
    },
    stats: {
      hp: "92",
      atk: "105",
      def: "90",
      spa: "125",
      spd: "90",
      speed: "98",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "It's said that Hydreigon grew ferocious because people in times long past loathed it, considering it to be evil incarnate and attacking it relentlessly.",
  },
  {
    id: "0636",
    name: "Larvesta",
    region: "Unova",
    types: ["Bug", "Fire"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Swarm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/larvesta.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/larvesta.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/larvesta.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/larvesta.gif",
    },
    stats: {
      hp: "55",
      atk: "85",
      def: "55",
      spa: "50",
      spd: "55",
      speed: "60",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "This Pokémon was called the Larva That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.",
  },
  {
    id: "0637",
    name: "Volcarona",
    region: "Unova",
    types: ["Bug", "Fire"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Swarm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/volcarona.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/volcarona.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/volcarona.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/volcarona.gif",
    },
    stats: {
      hp: "85",
      atk: "60",
      def: "65",
      spa: "135",
      spd: "105",
      speed: "100",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
  },
  {
    id: "0638",
    name: "Cobalion",
    region: "Unova",
    types: ["Steel", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cobalion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cobalion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cobalion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cobalion.gif",
    },
    stats: {
      hp: "91",
      atk: "90",
      def: "129",
      spa: "90",
      spd: "72",
      speed: "108",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon appears in a legend alongside Terrakion and Virizion, fighting against humans in defense of the Unova region's Pokémon.",
  },
  {
    id: "0639",
    name: "Terrakion",
    region: "Unova",
    types: ["Rock", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/terrakion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/terrakion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/terrakion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/terrakion.gif",
    },
    stats: {
      hp: "91",
      atk: "129",
      def: "90",
      spa: "72",
      spd: "90",
      speed: "108",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It has phenomenal power. It will mercilessly crush anyone or anything that bullies small Pokémon.",
  },
  {
    id: "0640",
    name: "Virizion",
    region: "Unova",
    types: ["Grass", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/virizion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/virizion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/virizion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/virizion.gif",
    },
    stats: {
      hp: "91",
      atk: "90",
      def: "72",
      spa: "90",
      spd: "129",
      speed: "108",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A legend tells of this Pokémon working together with Cobalion and Terrakion to protect the Pokémon of the Unova region.",
  },
  {
    id: "0641",
    name: "Tornadus",
    region: "Unova",
    types: ["Flying"],
    abilities: {
      normal: ["Prankster"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tornadus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tornadus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tornadus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tornadus.gif",
    },
    stats: {
      hp: "79",
      atk: "115",
      def: "70",
      spa: "125",
      spd: "80",
      speed: "111",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [100, 0],
    description:
      "This storm-stirring Pokémon is said to cause the seasons to turn by whipping up the air. I suspect its humanlike form to be a false one.",
  },
  {
    id: "0642",
    name: "Thundurus",
    region: "Unova",
    types: ["Electric", "Flying"],
    abilities: {
      normal: ["Prankster"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/thundurus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/thundurus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/thundurus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/thundurus.gif",
    },
    stats: {
      hp: "79",
      atk: "115",
      def: "70",
      spa: "125",
      spd: "80",
      speed: "111",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [100, 0],
    description:
      "They say this wielder of electricity has waged war with its nemesis, Tornadus, since time immemorial. The lightning bolts it hurls pierce the very earth and enrich the soil.",
  },
  {
    id: "0643",
    name: "Reshiram",
    region: "Unova",
    types: ["Dragon", "Fire"],
    abilities: {
      normal: ["Turboblaze"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/reshiram.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/reshiram.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/reshiram.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/reshiram.gif",
    },
    stats: {
      hp: "100",
      atk: "120",
      def: "100",
      spa: "150",
      spd: "120",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "According to myth, if people ignore truth and let themselves become consumed by greed, Reshiram will arrive to burn their kingdoms down.",
  },
  {
    id: "0644",
    name: "Zekrom",
    region: "Unova",
    types: ["Dragon", "Electric"],
    abilities: {
      normal: ["Teravolt"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zekrom.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zekrom.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zekrom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zekrom.gif",
    },
    stats: {
      hp: "100",
      atk: "150",
      def: "120",
      spa: "120",
      spd: "100",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Mythology tells us that if people lose the righteousness in their hearts, their kingdoms will be razed by Zekrom's lightning.",
  },
  {
    id: "0645",
    name: "Landorus",
    region: "Unova",
    types: ["Ground", "Flying"],
    abilities: {
      normal: ["Sand Force"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/landorus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/landorus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/landorus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/landorus.gif",
    },
    stats: {
      hp: "89",
      atk: "125",
      def: "90",
      spa: "115",
      spd: "80",
      speed: "101",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [100, 0],
    description:
      "When the incarnations of wind and of lightning clash, Landorus arrives to quell the conflict. After the tempests and thunderbolts abate, the land is sure to be blessed with bountiful harvests.",
  },
  {
    id: "0646",
    name: "Kyurem",
    region: "Unova",
    types: ["Dragon", "Ice"],
    abilities: {
      normal: ["Pressure"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kyurem.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kyurem.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kyurem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kyurem.gif",
    },
    stats: {
      hp: "125",
      atk: "130",
      def: "90",
      spa: "130",
      spd: "90",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Dwelling within it is a power even greater than that of Reshiram or Zekrom, but the extreme cold keeps that power bound.",
  },
  {
    id: "0647",
    name: "Keldeo",
    region: "Unova",
    types: ["Water", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/keldeo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/keldeo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/keldeo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/keldeo.gif",
    },
    stats: {
      hp: "91",
      atk: "72",
      def: "90",
      spa: "129",
      spd: "90",
      speed: "108",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Cobalion, Terrakion, and Virizion taught this Pokémon how to fight. It dashes across the world, seeking more opportunities to further its training.",
  },
  {
    id: "0648",
    name: "Meloetta",
    region: "Unova",
    types: ["Normal", "Psychic"],
    abilities: {
      normal: ["Serene Grace"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meloetta.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meloetta.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meloetta.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meloetta.gif",
    },
    stats: {
      hp: "100",
      atk: "77",
      def: "77",
      spa: "128",
      spd: "128",
      speed: "90",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
  },
  {
    id: "0649",
    name: "Genesect",
    region: "Unova",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Download"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/genesect.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/genesect.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/genesect.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/genesect.gif",
    },
    stats: {
      hp: "71",
      atk: "120",
      def: "95",
      spa: "120",
      spd: "95",
      speed: "99",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
  },
  {
    id: "0650",
    name: "Chespin",
    region: "Kalos",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chespin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chespin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chespin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chespin.gif",
    },
    stats: {
      hp: "56",
      atk: "61",
      def: "65",
      spa: "48",
      spd: "45",
      speed: "38",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
  },
  {
    id: "0651",
    name: "Quilladin",
    region: "Kalos",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/quilladin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/quilladin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/quilladin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/quilladin.gif",
    },
    stats: {
      hp: "61",
      atk: "78",
      def: "95",
      spa: "56",
      spd: "58",
      speed: "57",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "They strengthen their lower bodies by running into one another. They are very kind and won't start fights.",
  },
  {
    id: "0652",
    name: "Chesnaught",
    region: "Kalos",
    types: ["Grass", "Fighting"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/chesnaught.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/chesnaught.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/chesnaught.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/chesnaught.gif",
    },
    stats: {
      hp: "88",
      atk: "107",
      def: "122",
      spa: "74",
      spd: "75",
      speed: "64",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Its Tackle is forceful enough to flip a 50-ton tank. It shields its allies from danger with its own body.",
  },
  {
    id: "0653",
    name: "Fennekin",
    region: "Kalos",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Magician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fennekin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fennekin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fennekin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fennekin.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "40",
      spa: "62",
      spd: "60",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.",
  },
  {
    id: "0654",
    name: "Braixen",
    region: "Kalos",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Magician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/braixen.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/braixen.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/braixen.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/braixen.gif",
    },
    stats: {
      hp: "59",
      atk: "59",
      def: "58",
      spa: "90",
      spd: "70",
      speed: "73",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
  },
  {
    id: "0655",
    name: "Delphox",
    region: "Kalos",
    types: ["Fire", "Psychic"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Magician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/delphox.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/delphox.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/delphox.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/delphox.gif",
    },
    stats: {
      hp: "75",
      atk: "69",
      def: "72",
      spa: "114",
      spd: "100",
      speed: "104",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.",
  },
  {
    id: "0656",
    name: "Froakie",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Protean",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/froakie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/froakie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/froakie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/froakie.gif",
    },
    stats: {
      hp: "41",
      atk: "56",
      def: "40",
      spa: "62",
      spd: "44",
      speed: "71",
    },
    eggGroups: ["Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
  },
  {
    id: "0657",
    name: "Frogadier",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Protean",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/frogadier.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/frogadier.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/frogadier.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/frogadier.gif",
    },
    stats: {
      hp: "54",
      atk: "63",
      def: "52",
      spa: "83",
      spd: "56",
      speed: "97",
    },
    eggGroups: ["Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
  },
  {
    id: "0658",
    name: "Greninja",
    region: "Kalos",
    types: ["Water", "Dark"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Protean",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/greninja.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/greninja.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/greninja.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/greninja.gif",
    },
    stats: {
      hp: "72",
      atk: "95",
      def: "67",
      spa: "103",
      spd: "71",
      speed: "122",
    },
    eggGroups: ["Water 1"],
    genderRatios: [87.5, 12.5],
    description:
      "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.",
  },
  {
    id: "0659",
    name: "Bunnelby",
    region: "Kalos",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Cheek Pouch"],
      hidden: "Huge Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bunnelby.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bunnelby.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bunnelby.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bunnelby.gif",
    },
    stats: {
      hp: "38",
      atk: "36",
      def: "38",
      spa: "32",
      spd: "36",
      speed: "57",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It's very sensitive to danger. The sound of Corviknight's flapping will have Bunnelby digging a hole to hide underground in moments.",
  },
  {
    id: "0660",
    name: "Diggersby",
    region: "Kalos",
    types: ["Normal", "Ground"],
    abilities: {
      normal: ["Pickup", "Cheek Pouch"],
      hidden: "Huge Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/diggersby.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/diggersby.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/diggersby.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/diggersby.gif",
    },
    stats: {
      hp: "85",
      atk: "56",
      def: "77",
      spa: "50",
      spd: "77",
      speed: "78",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "With power equal to an excavator, it can dig through dense bedrock. It's a huge help during tunnel construction.",
  },
  {
    id: "0661",
    name: "Fletchling",
    region: "Kalos",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Big Pecks"],
      hidden: "Gale Wings",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fletchling.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fletchling.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fletchling.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fletchling.gif",
    },
    stats: {
      hp: "45",
      atk: "50",
      def: "43",
      spa: "40",
      spd: "38",
      speed: "62",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Fletchling can be found in both rural and urban areas. They once had a huge territorial dispute with Squawkabilly. Fights broke out all over town.",
  },
  {
    id: "0662",
    name: "Fletchinder",
    region: "Kalos",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Gale Wings",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fletchinder.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fletchinder.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fletchinder.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fletchinder.gif",
    },
    stats: {
      hp: "62",
      atk: "73",
      def: "55",
      spa: "56",
      spd: "52",
      speed: "84",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Fletchinder scatters embers in tall grass where bug Pokémon might be hiding and then catches them as they come leaping out.",
  },
  {
    id: "0663",
    name: "Talonflame",
    region: "Kalos",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Flame Body"],
      hidden: "Gale Wings",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/talonflame.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/talonflame.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/talonflame.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/talonflame.gif",
    },
    stats: {
      hp: "78",
      atk: "81",
      def: "71",
      spa: "74",
      spd: "69",
      speed: "126",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "When it gets excited, it vents sparks from the gaps between its feathers. These unburnable feathers are used as a fireproof material.",
  },
  {
    id: "0664",
    name: "Scatterbug",
    region: "Kalos",
    types: ["Bug"],
    abilities: {
      normal: ["Shield Dust", "Compound Eyes"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/scatterbug.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/scatterbug.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/scatterbug.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/scatterbug.gif",
    },
    stats: {
      hp: "38",
      atk: "35",
      def: "40",
      spa: "27",
      spd: "25",
      speed: "35",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Any poison this Pokémon takes in is converted into a black powder and secreted. That's why Scatterbug can eat poisonous leaves and roots.",
  },
  {
    id: "0665",
    name: "Spewpa",
    region: "Kalos",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spewpa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spewpa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spewpa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spewpa.gif",
    },
    stats: {
      hp: "45",
      atk: "22",
      def: "60",
      spa: "27",
      spd: "30",
      speed: "29",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Spewpa doesn't live in a fixed location. It roams where it pleases across the fields and mountains, building up the energy it needs to evolve.",
  },
  {
    id: "0666",
    name: "Vivillon",
    region: "Kalos",
    types: ["Bug", "Flying"],
    abilities: {
      normal: ["Shield Dust", "Compound Eyes"],
      hidden: "Friend Guard",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vivillon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vivillon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vivillon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vivillon.gif",
    },
    stats: {
      hp: "80",
      atk: "52",
      def: "50",
      spa: "90",
      spd: "50",
      speed: "89",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
  },
  {
    id: "0667",
    name: "Litleo",
    region: "Kalos",
    types: ["Fire", "Normal"],
    abilities: {
      normal: ["Rivalry", "Unnerve"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/litleo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/litleo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/litleo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/litleo.gif",
    },
    stats: {
      hp: "62",
      atk: "50",
      def: "58",
      spa: "73",
      spd: "54",
      speed: "72",
    },
    eggGroups: ["Field"],
    genderRatios: [12.5, 87.5],
    description:
      "When Litleo are young, female Pyroar will teach them how to hunt. Once the Litleo mature, they will leave the pride and set out on their own.",
  },
  {
    id: "0668",
    name: "Pyroar",
    region: "Kalos",
    types: ["Fire", "Normal"],
    abilities: {
      normal: ["Rivalry", "Unnerve"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pyroar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pyroar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pyroar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pyroar.gif",
    },
    stats: {
      hp: "86",
      atk: "68",
      def: "72",
      spa: "109",
      spd: "66",
      speed: "106",
    },
    eggGroups: ["Field"],
    genderRatios: [12.5, 87.5],
    description:
      "The mane of a male Pyroar heats up to over 3,600 degrees Fahrenheit during battle. Merely approaching it will cause severe burns.",
  },
  {
    id: "0669",
    name: "Flabebe",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Flower Veil"],
      hidden: "Symbiosis",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/flabebe.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/flabebe.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/flabebe.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/flabebe.gif",
    },
    stats: {
      hp: "44",
      atk: "38",
      def: "39",
      spa: "61",
      spd: "79",
      speed: "42",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "It's not safe without the power of a flower, but it will keep traveling around until it finds one with the color and shape it wants.",
  },
  {
    id: "0670",
    name: "Floette",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Flower Veil"],
      hidden: "Symbiosis",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/floette.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/floette.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/floette.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/floette.gif",
    },
    stats: {
      hp: "54",
      atk: "45",
      def: "47",
      spa: "75",
      spd: "98",
      speed: "52",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed.",
  },
  {
    id: "0671",
    name: "Florges",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Flower Veil"],
      hidden: "Symbiosis",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/florges.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/florges.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/florges.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/florges.gif",
    },
    stats: {
      hp: "78",
      atk: "65",
      def: "68",
      spa: "112",
      spd: "154",
      speed: "75",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "It controls the flowers it grows. The petal blizzards that Florges triggers are overwhelming in their beauty and power.",
  },
  {
    id: "0672",
    name: "Skiddo",
    region: "Kalos",
    types: ["Grass"],
    abilities: {
      normal: ["Sap Sipper"],
      hidden: "Grass Pelt",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skiddo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skiddo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skiddo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skiddo.gif",
    },
    stats: {
      hp: "66",
      atk: "65",
      def: "48",
      spa: "62",
      spd: "57",
      speed: "52",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "As long as it has sunlight and water, Skiddo can make energy with the leaves on its body, allowing it to live on rocky mountains barren of food.",
  },
  {
    id: "0673",
    name: "Gogoat",
    region: "Kalos",
    types: ["Grass"],
    abilities: {
      normal: ["Sap Sipper"],
      hidden: "Grass Pelt",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gogoat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gogoat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gogoat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gogoat.gif",
    },
    stats: {
      hp: "123",
      atk: "100",
      def: "62",
      spa: "97",
      spd: "81",
      speed: "68",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.",
  },
  {
    id: "0674",
    name: "Pancham",
    region: "Kalos",
    types: ["Fighting"],
    abilities: {
      normal: ["Iron Fist", "Mold Breaker"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pancham.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pancham.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pancham.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pancham.gif",
    },
    stats: {
      hp: "67",
      atk: "82",
      def: "62",
      spa: "46",
      spd: "48",
      speed: "43",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Wanting to make sure it's taken seriously, Pancham's always giving others a glare. But if it's not focusing, it ends up smiling.",
  },
  {
    id: "0675",
    name: "Pangoro",
    region: "Kalos",
    types: ["Fighting", "Dark"],
    abilities: {
      normal: ["Iron Fist", "Mold Breaker"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pangoro.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pangoro.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pangoro.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pangoro.gif",
    },
    stats: {
      hp: "95",
      atk: "124",
      def: "78",
      spa: "69",
      spd: "71",
      speed: "58",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Using its leaf, Pangoro can predict the moves of its opponents. It strikes with punches that can turn a dump truck into scrap with just one hit.",
  },
  {
    id: "0676",
    name: "Furfrou",
    region: "Kalos",
    types: ["Normal"],
    abilities: {
      normal: ["Fur Coat"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/furfrou.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/furfrou.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/furfrou.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/furfrou.gif",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "60",
      spa: "65",
      spd: "90",
      speed: "102",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "There was an era when aristocrats would compete to see who could trim their Furfrou's fur into the most exquisite style.",
  },
  {
    id: "0677",
    name: "Espurr",
    region: "Kalos",
    types: ["Psychic"],
    abilities: {
      normal: ["Keen Eye", "Infiltrator"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/espurr.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/espurr.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/espurr.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/espurr.gif",
    },
    stats: {
      hp: "62",
      atk: "48",
      def: "54",
      spa: "63",
      spd: "60",
      speed: "68",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "There's enough psychic power in Espurr to send a wrestler flying, but because this power can't be controlled, Espurr finds it troublesome.",
  },
  {
    id: "0678",
    name: "Meowstic",
    region: "Kalos",
    types: ["Psychic"],
    abilities: {
      normal: ["Keen Eye", "Infiltrator"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meowstic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meowstic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meowstic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meowstic.gif",
    },
    stats: {
      hp: "74",
      atk: "48",
      def: "76",
      spa: "83",
      spd: "81",
      speed: "104",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
  },
  {
    id: "0679",
    name: "Honedge",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["No Guard"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/honedge.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/honedge.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/honedge.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/honedge.gif",
    },
    stats: {
      hp: "45",
      atk: "80",
      def: "100",
      spa: "35",
      spd: "37",
      speed: "28",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Honedge's soul once belonged to a person who was killed a long time ago by the sword that makes up Honedge's body.",
  },
  {
    id: "0680",
    name: "Doublade",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["No Guard"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/doublade.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/doublade.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/doublade.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/doublade.gif",
    },
    stats: {
      hp: "59",
      atk: "110",
      def: "150",
      spa: "45",
      spd: "49",
      speed: "35",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "The two swords employ a strategy of rapidly alternating between offense and defense to bring down their prey.",
  },
  {
    id: "0681",
    name: "Aegislash",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["Stance Change"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aegislash.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aegislash.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aegislash.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aegislash.gif",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "140",
      spa: "50",
      spd: "140",
      speed: "60",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.",
  },
  {
    id: "0682",
    name: "Spritzee",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Healer"],
      hidden: "Aroma Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/spritzee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/spritzee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/spritzee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/spritzee.gif",
    },
    stats: {
      hp: "78",
      atk: "52",
      def: "60",
      spa: "63",
      spd: "65",
      speed: "23",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "A scent pouch within this Pokémon's body allows it to create various scents. A change in its diet will alter the fragrance it produces.",
  },
  {
    id: "0683",
    name: "Aromatisse",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Healer"],
      hidden: "Aroma Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aromatisse.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aromatisse.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aromatisse.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aromatisse.gif",
    },
    stats: {
      hp: "101",
      atk: "72",
      def: "72",
      spa: "99",
      spd: "89",
      speed: "29",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "The scent that constantly emits from its fur is so powerful that this Pokémon's companions will eventually lose their sense of smell.",
  },
  {
    id: "0684",
    name: "Swirlix",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Sweet Veil"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/swirlix.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/swirlix.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/swirlix.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/swirlix.gif",
    },
    stats: {
      hp: "62",
      atk: "48",
      def: "66",
      spa: "59",
      spd: "57",
      speed: "49",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "The sweet smell of cotton candy perfumes Swirlix's fluffy fur. This Pokémon spits out sticky string to tangle up its enemies.",
  },
  {
    id: "0685",
    name: "Slurpuff",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Sweet Veil"],
      hidden: "Unburden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/slurpuff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/slurpuff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/slurpuff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/slurpuff.gif",
    },
    stats: {
      hp: "82",
      atk: "80",
      def: "86",
      spa: "85",
      spd: "75",
      speed: "72",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "By taking in a person's scent, it can sniff out their mental and physical condition. It's hoped that this skill will have many medical applications.",
  },
  {
    id: "0686",
    name: "Inkay",
    region: "Kalos",
    types: ["Dark", "Psychic"],
    abilities: {
      normal: ["Contrary", "Suction Cups"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/inkay.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/inkay.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/inkay.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/inkay.gif",
    },
    stats: {
      hp: "53",
      atk: "54",
      def: "53",
      spa: "37",
      spd: "46",
      speed: "45",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [50, 50],
    description:
      "It spins while making its luminescent spots flash. These spots allow it to communicate with others by using different patterns of light.",
  },
  {
    id: "0687",
    name: "Malamar",
    region: "Kalos",
    types: ["Dark", "Psychic"],
    abilities: {
      normal: ["Contrary", "Suction Cups"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/malamar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/malamar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/malamar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/malamar.gif",
    },
    stats: {
      hp: "86",
      atk: "92",
      def: "88",
      spa: "68",
      spd: "75",
      speed: "73",
    },
    eggGroups: ["Water 1", "Water 2"],
    genderRatios: [50, 50],
    description:
      "Gazing at its luminescent spots will quickly induce a hypnotic state, putting the observer under Malamar's control.",
  },
  {
    id: "0688",
    name: "Binacle",
    region: "Kalos",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Tough Claws", "Sniper"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/binacle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/binacle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/binacle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/binacle.gif",
    },
    stats: {
      hp: "42",
      atk: "52",
      def: "67",
      spa: "39",
      spd: "56",
      speed: "50",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "After two Binacle find a suitably sized rock, they adhere themselves to it and live together. They cooperate to gather food during high tide.",
  },
  {
    id: "0689",
    name: "Barbaracle",
    region: "Kalos",
    types: ["Rock", "Water"],
    abilities: {
      normal: ["Tough Claws", "Sniper"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/barbaracle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/barbaracle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/barbaracle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/barbaracle.gif",
    },
    stats: {
      hp: "72",
      atk: "105",
      def: "115",
      spa: "54",
      spd: "86",
      speed: "68",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Having an eye on each palm allows it to keep watch in all directions. In a pinch, its limbs start to act on their own to ensure the enemy's defeat.",
  },
  {
    id: "0690",
    name: "Skrelp",
    region: "Kalos",
    types: ["Poison", "Water"],
    abilities: {
      normal: ["Poison Point", "Poison Touch"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/skrelp.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/skrelp.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/skrelp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/skrelp.gif",
    },
    stats: {
      hp: "50",
      atk: "60",
      def: "60",
      spa: "60",
      spd: "60",
      speed: "30",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is a poor swimmer. If it's caught in a fierce storm, it will sometimes get washed far away and become unable to return to its home.",
  },
  {
    id: "0691",
    name: "Dragalge",
    region: "Kalos",
    types: ["Poison", "Dragon"],
    abilities: {
      normal: ["Poison Point", "Poison Touch"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dragalge.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dragalge.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dragalge.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dragalge.gif",
    },
    stats: {
      hp: "65",
      atk: "75",
      def: "90",
      spa: "97",
      spd: "123",
      speed: "44",
    },
    eggGroups: ["Water 1", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Using a liquid poison, Dragalge indiscriminately attacks anything that wanders into its territory. This poison can corrode the undersides of boats.",
  },
  {
    id: "0692",
    name: "Clauncher",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Mega Launcher"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/clauncher.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/clauncher.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/clauncher.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/clauncher.gif",
    },
    stats: {
      hp: "50",
      atk: "53",
      def: "62",
      spa: "58",
      spd: "63",
      speed: "44",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Clauncher's claws will regrow if they fall off. The meat inside the claws is edible, but it has a distinct flavor that doesn't appeal to all tastes.",
  },
  {
    id: "0693",
    name: "Clawitzer",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Mega Launcher"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/clawitzer.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/clawitzer.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/clawitzer.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/clawitzer.gif",
    },
    stats: {
      hp: "71",
      atk: "73",
      def: "88",
      spa: "120",
      spd: "89",
      speed: "59",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [50, 50],
    description:
      "Clawitzer can move through the water at a speed of 60 knots by using gas inside its body to expel water from the back of its claw.",
  },
  {
    id: "0694",
    name: "Helioptile",
    region: "Kalos",
    types: ["Electric", "Normal"],
    abilities: {
      normal: ["Dry Skin", "Sand Veil"],
      hidden: "Solar Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/helioptile.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/helioptile.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/helioptile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/helioptile.gif",
    },
    stats: {
      hp: "44",
      atk: "38",
      def: "33",
      spa: "61",
      spd: "43",
      speed: "70",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "The sun powers this Pokémon's electricity generation. Interruption of that process stresses Helioptile to the point of weakness.",
  },
  {
    id: "0695",
    name: "Heliolisk",
    region: "Kalos",
    types: ["Electric", "Normal"],
    abilities: {
      normal: ["Dry Skin", "Sand Veil"],
      hidden: "Solar Power",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/heliolisk.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/heliolisk.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/heliolisk.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/heliolisk.gif",
    },
    stats: {
      hp: "62",
      atk: "55",
      def: "52",
      spa: "109",
      spd: "94",
      speed: "109",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "A now-vanished desert culture treasured these Pokémon. Appropriately, when Heliolisk came to the Galar region, treasure came with them.",
  },
  {
    id: "0696",
    name: "Tyrunt",
    region: "Kalos",
    types: ["Rock", "Dragon"],
    abilities: {
      normal: ["Strong Jaw"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tyrunt.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tyrunt.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tyrunt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tyrunt.gif",
    },
    stats: {
      hp: "58",
      atk: "89",
      def: "77",
      spa: "45",
      spd: "45",
      speed: "48",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "This is an ancient Pokémon, revived in modern times. It has a violent disposition, and it'll tear apart anything it gets between its hefty jaws.",
  },
  {
    id: "0697",
    name: "Tyrantrum",
    region: "Kalos",
    types: ["Rock", "Dragon"],
    abilities: {
      normal: ["Strong Jaw"],
      hidden: "Rock Head",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tyrantrum.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tyrantrum.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tyrantrum.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tyrantrum.gif",
    },
    stats: {
      hp: "82",
      atk: "121",
      def: "119",
      spa: "69",
      spd: "59",
      speed: "71",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "Complete restoration is impossible, allowing room for theories that its entire body was once covered in a feather-like coat.",
  },
  {
    id: "0698",
    name: "Amaura",
    region: "Kalos",
    types: ["Rock", "Ice"],
    abilities: {
      normal: ["Refrigerate"],
      hidden: "Snow Warning",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/amaura.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/amaura.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/amaura.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/amaura.gif",
    },
    stats: {
      hp: "77",
      atk: "59",
      def: "50",
      spa: "67",
      spd: "63",
      speed: "46",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "This Pokémon was successfully restored from a fossil. In the past, it lived with others of its kind in cold lands where there were fewer predators.",
  },
  {
    id: "0699",
    name: "Aurorus",
    region: "Kalos",
    types: ["Rock", "Ice"],
    abilities: {
      normal: ["Refrigerate"],
      hidden: "Snow Warning",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/aurorus.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/aurorus.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/aurorus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/aurorus.gif",
    },
    stats: {
      hp: "123",
      atk: "77",
      def: "72",
      spa: "99",
      spd: "92",
      speed: "58",
    },
    eggGroups: ["Monster"],
    genderRatios: [87.5, 12.5],
    description:
      "An Aurorus was found frozen solid within a glacier, just as it appeared long ago, which became quite a big event in the news.",
  },
  {
    id: "0700",
    name: "Sylveon",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Cute Charm"],
      hidden: "Pixilate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sylveon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sylveon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sylveon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sylveon.gif",
    },
    stats: {
      hp: "95",
      atk: "65",
      def: "65",
      spa: "110",
      spd: "130",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It emits a soothing aura from its ribbon-shaped organs. It wraps these appendages around quarrelers to instantly restore calm to the situation.",
  },
  {
    id: "0701",
    name: "Hawlucha",
    region: "Kalos",
    types: ["Fighting", "Flying"],
    abilities: {
      normal: ["Limber", "Unburden"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hawlucha.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hawlucha.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hawlucha.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hawlucha.gif",
    },
    stats: {
      hp: "78",
      atk: "92",
      def: "75",
      spa: "74",
      spd: "63",
      speed: "118",
    },
    eggGroups: ["Flying", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "Its elegant finishing moves—performed by nimbly leaping around using its wings—are polished in the forest where it was born and raised.",
  },
  {
    id: "0702",
    name: "Dedenne",
    region: "Kalos",
    types: ["Electric", "Fairy"],
    abilities: {
      normal: ["Cheek Pouch", "Pickup"],
      hidden: "Plus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dedenne.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dedenne.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dedenne.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dedenne.gif",
    },
    stats: {
      hp: "67",
      atk: "58",
      def: "57",
      spa: "81",
      spd: "67",
      speed: "101",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "Dedenne emit electrical waves from the whiskers on their cheeks to communicate with each other. When low on electricity, they curl up and sleep.",
  },
  {
    id: "0703",
    name: "Carbink",
    region: "Kalos",
    types: ["Rock", "Fairy"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/carbink.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/carbink.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/carbink.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/carbink.gif",
    },
    stats: {
      hp: "50",
      atk: "50",
      def: "150",
      spa: "50",
      spd: "150",
      speed: "50",
    },
    eggGroups: ["Fairy", "Mineral"],
    genderRatios: [0, 0],
    description:
      "It's said that somewhere in the world, there's a mineral vein housing a large pack of slumbering Carbink. It's also said that this pack has a queen.",
  },
  {
    id: "0704",
    name: "Goomy",
    region: "Kalos",
    types: ["Dragon"],
    abilities: {
      normal: ["Sap Sipper", "Hydration"],
      hidden: "Gooey",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/goomy.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/goomy.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/goomy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/goomy.gif",
    },
    stats: {
      hp: "45",
      atk: "50",
      def: "35",
      spa: "55",
      spd: "75",
      speed: "40",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "Goomy hides away in the shade of trees, where it's nice and humid. If the slime coating its body dries out, the Pokémon instantly becomes lethargic.",
  },
  {
    id: "0705",
    name: "Sliggoo",
    region: "Kalos",
    types: ["Dragon"],
    abilities: {
      normal: ["Sap Sipper", "Hydration"],
      hidden: "Gooey",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sliggoo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sliggoo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sliggoo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sliggoo.gif",
    },
    stats: {
      hp: "68",
      atk: "75",
      def: "53",
      spa: "83",
      spd: "113",
      speed: "60",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "When Sliggoo senses danger, the mucus coating its entire body becomes more concentrated—it'll dissolve anything.",
  },
  {
    id: "0706",
    name: "Goodra",
    region: "Kalos",
    types: ["Dragon"],
    abilities: {
      normal: ["Sap Sipper", "Hydration"],
      hidden: "Gooey",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/goodra.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/goodra.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/goodra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/goodra.gif",
    },
    stats: {
      hp: "90",
      atk: "100",
      def: "70",
      spa: "110",
      spd: "150",
      speed: "80",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is uncontrollable when enraged. It rampages on and on, lashing its tail with enough power to send a dump truck flying.",
  },
  {
    id: "0707",
    name: "Klefki",
    region: "Kalos",
    types: ["Steel", "Fairy"],
    abilities: {
      normal: ["Prankster"],
      hidden: "Magician",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/klefki.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/klefki.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/klefki.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/klefki.gif",
    },
    stats: {
      hp: "57",
      atk: "80",
      def: "91",
      spa: "80",
      spd: "87",
      speed: "75",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "In the past, noble families entrusted their vault keys to a Klefki. They passed the Klefki down through the generations, taking good care of it.",
  },
  {
    id: "0708",
    name: "Phantump",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Natural Cure", "Frisk"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/phantump.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/phantump.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/phantump.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/phantump.gif",
    },
    stats: {
      hp: "43",
      atk: "70",
      def: "48",
      spa: "50",
      spd: "60",
      speed: "38",
    },
    eggGroups: ["Grass", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "After a lost child perished in the forest, their spirit possessed a tree stump, causing the spirit's rebirth as this Pokémon.",
  },
  {
    id: "0709",
    name: "Trevenant",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Natural Cure", "Frisk"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/trevenant.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/trevenant.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/trevenant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/trevenant.gif",
    },
    stats: {
      hp: "85",
      atk: "110",
      def: "76",
      spa: "65",
      spd: "82",
      speed: "56",
    },
    eggGroups: ["Grass", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "People fear it due to a belief that it devours any who try to cut down trees in its forest, but to the Pokémon it shares its woods with, it's kind.",
  },
  {
    id: "0710",
    name: "Pumpkaboo",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Pickup", "Frisk"],
      hidden: "Insomnia",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pumpkaboo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pumpkaboo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pumpkaboo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pumpkaboo.gif",
    },
    stats: {
      hp: "49",
      atk: "66",
      def: "70",
      spa: "44",
      spd: "55",
      speed: "51",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "The pumpkin body is inhabited by a spirit trapped in this world. As the sun sets, it becomes restless and active.",
  },
  {
    id: "0711",
    name: "Gourgeist",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Pickup", "Frisk"],
      hidden: "Insomnia",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gourgeist.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gourgeist.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gourgeist.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gourgeist.gif",
    },
    stats: {
      hp: "65",
      atk: "90",
      def: "122",
      spa: "58",
      spd: "75",
      speed: "84",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Singing in eerie voices, they wander town streets on the night of the new moon. Anyone who hears their song is cursed.",
  },
  {
    id: "0712",
    name: "Bergmite",
    region: "Kalos",
    types: ["Ice"],
    abilities: {
      normal: ["Own Tempo", "Ice Body"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bergmite.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bergmite.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bergmite.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bergmite.gif",
    },
    stats: {
      hp: "55",
      atk: "69",
      def: "85",
      spa: "32",
      spd: "35",
      speed: "28",
    },
    eggGroups: ["Monster", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Bergmite protects itself by coating its body in ice formed by frigid air of −148 degrees Fahrenheit. It fights with Frigibax whenever they meet.",
  },
  {
    id: "0713",
    name: "Avalugg",
    region: "Kalos",
    types: ["Ice"],
    abilities: {
      normal: ["Own Tempo", "Ice Body"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/avalugg.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/avalugg.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/avalugg.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/avalugg.gif",
    },
    stats: {
      hp: "95",
      atk: "117",
      def: "184",
      spa: "44",
      spd: "46",
      speed: "28",
    },
    eggGroups: ["Monster", "Mineral"],
    genderRatios: [50, 50],
    description:
      "This Pokémon uses its massive icy body to flatten anything that gets in its way. When it's floating out on the ocean, it looks exactly like drift ice.",
  },
  {
    id: "0714",
    name: "Noibat",
    region: "Kalos",
    types: ["Flying", "Dragon"],
    abilities: {
      normal: ["Frisk", "Infiltrator"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/noibat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/noibat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/noibat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/noibat.gif",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "35",
      spa: "45",
      spd: "40",
      speed: "55",
    },
    eggGroups: ["Flying", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Noibat can change the frequency of its sound waves at will, and it generates ultrasonic waves of up to 200,000 hertz.",
  },
  {
    id: "0715",
    name: "Noivern",
    region: "Kalos",
    types: ["Flying", "Dragon"],
    abilities: {
      normal: ["Frisk", "Infiltrator"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/noivern.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/noivern.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/noivern.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/noivern.gif",
    },
    stats: {
      hp: "85",
      atk: "70",
      def: "80",
      spa: "97",
      spd: "80",
      speed: "123",
    },
    eggGroups: ["Flying", "Dragon"],
    genderRatios: [50, 50],
    description:
      "In the dark, even Hydreigon are terrified of this Pokémon. But in the light, Noivern is the one that avoids battle.",
  },
  {
    id: "0716",
    name: "Xerneas",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Fairy Aura"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/xerneas.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/xerneas.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/xerneas.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/xerneas.gif",
    },
    stats: {
      hp: "126",
      atk: "131",
      def: "95",
      spa: "131",
      spd: "98",
      speed: "99",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
  },
  {
    id: "0717",
    name: "Yveltal",
    region: "Kalos",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Dark Aura"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/yveltal.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/yveltal.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/yveltal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/yveltal.gif",
    },
    stats: {
      hp: "126",
      atk: "131",
      def: "95",
      spa: "131",
      spd: "98",
      speed: "99",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
  },
  {
    id: "0718",
    name: "Zygarde",
    region: "Kalos",
    types: ["Dragon", "Ground"],
    abilities: {
      normal: ["Aura Break", "Power Construct"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zygarde.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zygarde.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zygarde.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zygarde.gif",
    },
    stats: {
      hp: "108",
      atk: "100",
      def: "121",
      spa: "81",
      spd: "95",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This is Zygarde's form when about half of its pieces have been assembled. It plays the role of monitoring the ecosystem.",
  },
  {
    id: "0719",
    name: "Diancie",
    region: "Kalos",
    types: ["Rock", "Fairy"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/diancie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/diancie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/diancie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/diancie.gif",
    },
    stats: {
      hp: "50",
      atk: "100",
      def: "150",
      spa: "100",
      spd: "150",
      speed: "50",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
  },
  {
    id: "0720",
    name: "Hoopa",
    region: "Kalos",
    types: ["Psychic", "Ghost"],
    abilities: {
      normal: ["Magician"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hoopa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hoopa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hoopa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hoopa.gif",
    },
    stats: {
      hp: "80",
      atk: "110",
      def: "60",
      spa: "150",
      spd: "130",
      speed: "70",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "In its true form, it possess a huge amount of power. Legends of its avarice tell how it once carried off an entire castle to gain the treasure hidden within.",
  },
  {
    id: "0721",
    name: "Volcanion",
    region: "Kalos",
    types: ["Fire", "Water"],
    abilities: {
      normal: ["Water Absorb"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/volcanion.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/volcanion.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/volcanion.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/volcanion.gif",
    },
    stats: {
      hp: "80",
      atk: "110",
      def: "120",
      spa: "130",
      spd: "90",
      speed: "70",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It lets out billows of steam and disappears into the dense fog. It's said to live in mountains where humans do not tread.",
  },
  {
    id: "0722",
    name: "Rowlet",
    region: "Alola",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Long Reach",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rowlet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rowlet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rowlet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rowlet.gif",
    },
    stats: {
      hp: "68",
      atk: "55",
      def: "55",
      spa: "50",
      spd: "50",
      speed: "42",
    },
    eggGroups: ["Flying"],
    genderRatios: [87.5, 12.5],
    description:
      "At a distance, it launches its sharp feathers while flying about. If the enemy gets too close, Rowlet switches tactics and delivers vicious kicks.",
  },
  {
    id: "0723",
    name: "Dartrix",
    region: "Alola",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Long Reach",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dartrix.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dartrix.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dartrix.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dartrix.gif",
    },
    stats: {
      hp: "78",
      atk: "75",
      def: "75",
      spa: "70",
      spd: "70",
      speed: "52",
    },
    eggGroups: ["Flying"],
    genderRatios: [87.5, 12.5],
    description:
      "Regularly basks in sunlight to gather power—presumably due to the frigid climate. -theless, the edges of the blade quills set into its wings are keen as ever.",
  },
  {
    id: "0724",
    name: "Decidueye",
    region: "Alola",
    types: ["Grass", "Ghost"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Long Reach",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/decidueye.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/decidueye.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/decidueye.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/decidueye.gif",
    },
    stats: {
      hp: "78",
      atk: "107",
      def: "75",
      spa: "100",
      spd: "100",
      speed: "70",
    },
    eggGroups: ["Flying"],
    genderRatios: [87.5, 12.5],
    description:
      "In a tenth of a second, it can nock and fire an arrow quill, piercing an opponent's weak point before they notice what's happening.",
  },
  {
    id: "0725",
    name: "Litten",
    region: "Alola",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/litten.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/litten.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/litten.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/litten.gif",
    },
    stats: {
      hp: "45",
      atk: "65",
      def: "40",
      spa: "60",
      spd: "40",
      speed: "70",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "It spends even the smallest amount of downtime grooming its fur with its tongue. Loose fur gathers in its stomach and serves as fuel for fiery moves.",
  },
  {
    id: "0726",
    name: "Torracat",
    region: "Alola",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/torracat.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/torracat.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/torracat.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/torracat.gif",
    },
    stats: {
      hp: "65",
      atk: "85",
      def: "50",
      spa: "80",
      spd: "50",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "In the midst of battle, the fire pouch on Torracat's neck rings like a bell and produces stronger flames than usual.",
  },
  {
    id: "0727",
    name: "Incineroar",
    region: "Alola",
    types: ["Fire", "Dark"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Intimidate",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/incineroar.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/incineroar.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/incineroar.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/incineroar.gif",
    },
    stats: {
      hp: "95",
      atk: "115",
      def: "90",
      spa: "80",
      spd: "90",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Incineroar's rough and aggressive behavior is its most notable trait, but the way it helps out small Pokémon shows that it has a kind side as well.",
  },
  {
    id: "0728",
    name: "Popplio",
    region: "Alola",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Liquid Voice",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/popplio.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/popplio.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/popplio.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/popplio.gif",
    },
    stats: {
      hp: "50",
      atk: "54",
      def: "54",
      spa: "66",
      spd: "56",
      speed: "40",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "If Popplio want to create big, powerful balloons, they must be persistent. It takes daily practice for these Pokémon to develop their skills.",
  },
  {
    id: "0729",
    name: "Brionne",
    region: "Alola",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Liquid Voice",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/brionne.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/brionne.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/brionne.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/brionne.gif",
    },
    stats: {
      hp: "60",
      atk: "69",
      def: "69",
      spa: "91",
      spd: "81",
      speed: "50",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "As if dancing, it artfully dodges the attacks of its enemies. All the while, it's busy forming a bunch of balloons to overwhelm its foes.",
  },
  {
    id: "0730",
    name: "Primarina",
    region: "Alola",
    types: ["Water", "Fairy"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Liquid Voice",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/primarina.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/primarina.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/primarina.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/primarina.gif",
    },
    stats: {
      hp: "80",
      atk: "74",
      def: "74",
      spa: "126",
      spd: "116",
      speed: "60",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "With its mouth, it makes sonic waves that sound like beautiful singing. It uses the sonic waves to control its water balloons.",
  },
  {
    id: "0731",
    name: "Pikipek",
    region: "Alola",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Skill Link"],
      hidden: "Pickup",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pikipek.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pikipek.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pikipek.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pikipek.gif",
    },
    stats: {
      hp: "35",
      atk: "75",
      def: "30",
      spa: "30",
      spd: "30",
      speed: "65",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "This Pokémon feeds on berries, whose leftover seeds become the ammunition for the attacks it fires off from its mouth.",
  },
  {
    id: "0732",
    name: "Trumbeak",
    region: "Alola",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Skill Link"],
      hidden: "Pickup",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/trumbeak.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/trumbeak.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/trumbeak.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/trumbeak.gif",
    },
    stats: {
      hp: "55",
      atk: "85",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "75",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "It eats berries and stores their seeds in its beak. When it encounters enemies or prey, it fires off all the seeds in a burst.",
  },
  {
    id: "0733",
    name: "Toucannon",
    region: "Alola",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye", "Skill Link"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/toucannon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/toucannon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/toucannon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/toucannon.gif",
    },
    stats: {
      hp: "80",
      atk: "120",
      def: "75",
      spa: "75",
      spd: "75",
      speed: "60",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "When it battles, its beak heats up. The temperature can easily exceed 212 degrees Fahrenheit, causing severe burns when it hits.",
  },
  {
    id: "0734",
    name: "Yungoos",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Stakeout", "Strong Jaw"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/yungoos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/yungoos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/yungoos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/yungoos.gif",
    },
    stats: {
      hp: "48",
      atk: "70",
      def: "30",
      spa: "30",
      spd: "30",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It spends its waking hours searching endlessly for food. When Yungoos is hungry, its ferocity gains a certain edge.",
  },
  {
    id: "0735",
    name: "Gumshoos",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Stakeout", "Strong Jaw"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/gumshoos.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/gumshoos.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/gumshoos.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/gumshoos.gif",
    },
    stats: {
      hp: "88",
      atk: "110",
      def: "60",
      spa: "55",
      spd: "60",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Gumshoos specializes in relentlessly tracking down prey. The simple-minded Skwovet doesn't seem to provide Gumshoos enough challenge.",
  },
  {
    id: "0736",
    name: "Grubbin",
    region: "Alola",
    types: ["Bug"],
    abilities: {
      normal: ["Swarm"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/grubbin.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/grubbin.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/grubbin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/grubbin.gif",
    },
    stats: {
      hp: "47",
      atk: "62",
      def: "45",
      spa: "55",
      spd: "45",
      speed: "46",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches.",
  },
  {
    id: "0737",
    name: "Charjabug",
    region: "Alola",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Battery"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/charjabug.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/charjabug.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/charjabug.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/charjabug.gif",
    },
    stats: {
      hp: "57",
      atk: "82",
      def: "95",
      spa: "55",
      spd: "75",
      speed: "36",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
  },
  {
    id: "0738",
    name: "Vikavolt",
    region: "Alola",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/vikavolt.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/vikavolt.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/vikavolt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/vikavolt.gif",
    },
    stats: {
      hp: "77",
      atk: "70",
      def: "90",
      spa: "145",
      spd: "75",
      speed: "43",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams.",
  },
  {
    id: "0739",
    name: "Crabrawler",
    region: "Alola",
    types: ["Fighting"],
    abilities: {
      normal: ["Hyper Cutter", "Iron Fist"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/crabrawler.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/crabrawler.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/crabrawler.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/crabrawler.gif",
    },
    stats: {
      hp: "47",
      atk: "82",
      def: "57",
      spa: "42",
      spd: "47",
      speed: "63",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "If it loses its pincers, they'll quickly regrow. The pincers are popular ingredients in paella since their shells produce a tasty soup stock.",
  },
  {
    id: "0740",
    name: "Crabominable",
    region: "Alola",
    types: ["Fighting", "Ice"],
    abilities: {
      normal: ["Hyper Cutter", "Iron Fist"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/normal-sprite/crabominable.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/crabominable.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/crabominable.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/crabominable.gif",
    },
    stats: {
      hp: "97",
      atk: "132",
      def: "77",
      spa: "62",
      spd: "67",
      speed: "43",
    },
    eggGroups: ["Water 3"],
    genderRatios: [50, 50],
    description:
      "Though its punches are powerful, this Pokémon's movements are sluggish. It blows icy bubbles from its mouth to immobilize its opponents.",
  },
  {
    id: "0741",
    name: "Oricorio",
    region: "Alola",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Dancer"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/oricorio.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/oricorio.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/oricorio.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/oricorio.gif",
    },
    stats: {
      hp: "75",
      atk: "70",
      def: "70",
      spa: "98",
      spd: "70",
      speed: "93",
    },
    eggGroups: ["Flying"],
    genderRatios: [25, 75],
    description:
      "This Pokémon is incredibly popular, possibly because its passionate dancing is a great match with the temperament of Paldean people.",
  },
  {
    id: "0742",
    name: "Cutiefly",
    region: "Alola",
    types: ["Bug", "Fairy"],
    abilities: {
      normal: ["Honey Gather", "Shield Dust"],
      hidden: "Sweet Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cutiefly.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cutiefly.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cutiefly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cutiefly.gif",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "40",
      spa: "55",
      spd: "40",
      speed: "84",
    },
    eggGroups: ["Bug", "Fairy"],
    genderRatios: [50, 50],
    description:
      "An opponent's aura can tell Cutiefly what that opponent's next move will be. Then Cutiefly can glide around the attack and strike back.",
  },
  {
    id: "0743",
    name: "Ribombee",
    region: "Alola",
    types: ["Bug", "Fairy"],
    abilities: {
      normal: ["Honey Gather", "Shield Dust"],
      hidden: "Sweet Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/ribombee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/ribombee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/ribombee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/ribombee.gif",
    },
    stats: {
      hp: "60",
      atk: "55",
      def: "60",
      spa: "95",
      spd: "70",
      speed: "124",
    },
    eggGroups: ["Bug", "Fairy"],
    genderRatios: [50, 50],
    description:
      "It makes pollen puffs from pollen and nectar. The puffs' effects depend on the type of ingredients and how much of each one is used.",
  },
  {
    id: "0744",
    name: "Rockruff",
    region: "Alola",
    types: ["Rock"],
    abilities: {
      normal: ["Keen Eye", "Vital Spirit"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/rockruff.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/rockruff.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/rockruff.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/rockruff.gif",
    },
    stats: {
      hp: "45",
      atk: "65",
      def: "40",
      spa: "30",
      spd: "40",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
  },
  {
    id: "0745",
    name: "Lycanroc",
    region: "Alola",
    types: ["Rock"],
    abilities: {
      normal: ["Keen Eye", "Sand Rush"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lycanroc.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lycanroc.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lycanroc.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lycanroc.gif",
    },
    stats: {
      hp: "75",
      atk: "115",
      def: "65",
      spa: "55",
      spd: "65",
      speed: "112",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "With swift movements, this Pokémon gradually backs its prey into a corner. Lycanroc's fangs are always aimed toward opponents' weak spots.",
  },
  {
    id: "0746",
    name: "Wishiwashi",
    region: "Alola",
    types: ["Water"],
    abilities: {
      normal: ["Schooling"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wishiwashi.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wishiwashi.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wishiwashi.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wishiwashi.gif",
    },
    stats: {
      hp: "45",
      atk: "20",
      def: "20",
      spa: "25",
      spd: "25",
      speed: "40",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "When it's in trouble, its eyes moisten and begin to shine. The shining light attracts its comrades, and they stand together against their enemies.",
  },
  {
    id: "0747",
    name: "Mareanie",
    region: "Alola",
    types: ["Poison", "Water"],
    abilities: {
      normal: ["Merciless", "Limber"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mareanie.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mareanie.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mareanie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mareanie.gif",
    },
    stats: {
      hp: "50",
      atk: "53",
      def: "62",
      spa: "43",
      spd: "52",
      speed: "45",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "It has excellent regenerative capabilities. Legs that a Mareanie has lost have a very bitter, astringent flavor—they're not suitable as food.",
  },
  {
    id: "0748",
    name: "Toxapex",
    region: "Alola",
    types: ["Poison", "Water"],
    abilities: {
      normal: ["Merciless", "Limber"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/toxapex.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/toxapex.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/toxapex.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/toxapex.gif",
    },
    stats: {
      hp: "50",
      atk: "63",
      def: "152",
      spa: "53",
      spd: "142",
      speed: "35",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "This Pokémon lives within a dome made by its own legs. Toxapex monitors its surroundings by sensing the flow of the tide through its spikes.",
  },
  {
    id: "0749",
    name: "Mudbray",
    region: "Alola",
    types: ["Ground"],
    abilities: {
      normal: ["Own Tempo", "Stamina"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mudbray.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mudbray.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mudbray.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mudbray.gif",
    },
    stats: {
      hp: "70",
      atk: "100",
      def: "70",
      spa: "45",
      spd: "55",
      speed: "45",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon covers itself in mud that it has regurgitated. The mud won't dry out even if it's exposed to the sun for a long time.",
  },
  {
    id: "0750",
    name: "Mudsdale",
    region: "Alola",
    types: ["Ground"],
    abilities: {
      normal: ["Own Tempo", "Stamina"],
      hidden: "Inner Focus",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mudsdale.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mudsdale.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mudsdale.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mudsdale.gif",
    },
    stats: {
      hp: "100",
      atk: "125",
      def: "100",
      spa: "55",
      spd: "85",
      speed: "35",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery.",
  },
  {
    id: "0751",
    name: "Dewpider",
    region: "Alola",
    types: ["Water", "Bug"],
    abilities: {
      normal: ["Water Bubble"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dewpider.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dewpider.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dewpider.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dewpider.gif",
    },
    stats: {
      hp: "38",
      atk: "40",
      def: "52",
      spa: "40",
      spd: "72",
      speed: "27",
    },
    eggGroups: ["Water 1", "Bug"],
    genderRatios: [50, 50],
    description:
      "It forms a water bubble at the rear of its body and then covers its head with it. Meeting another Dewpider means comparing water-bubble sizes.",
  },
  {
    id: "0752",
    name: "Araquanid",
    region: "Alola",
    types: ["Water", "Bug"],
    abilities: {
      normal: ["Water Bubble"],
      hidden: "Water Absorb",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/araquanid.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/araquanid.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/araquanid.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/araquanid.gif",
    },
    stats: {
      hp: "68",
      atk: "70",
      def: "92",
      spa: "50",
      spd: "132",
      speed: "42",
    },
    eggGroups: ["Water 1", "Bug"],
    genderRatios: [50, 50],
    description:
      "It launches water bubbles with its legs, drowning prey within the bubbles. This Pokémon can then take its time to savor its meal.",
  },
  {
    id: "0753",
    name: "Fomantis",
    region: "Alola",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/fomantis.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/fomantis.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/fomantis.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/fomantis.gif",
    },
    stats: {
      hp: "40",
      atk: "55",
      def: "35",
      spa: "50",
      spd: "35",
      speed: "35",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Many Trainers give their Fomantis their own flowerpots so they can sunbathe in peace and quiet.",
  },
  {
    id: "0754",
    name: "Lurantis",
    region: "Alola",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lurantis.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lurantis.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lurantis.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lurantis.gif",
    },
    stats: {
      hp: "70",
      atk: "105",
      def: "90",
      spa: "80",
      spd: "90",
      speed: "45",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "A lot of time and effort is required to maintain the vivid colors of its petals. This Pokémon puts its Trainer's attentiveness to the test.",
  },
  {
    id: "0755",
    name: "Morelull",
    region: "Alola",
    types: ["Grass", "Fairy"],
    abilities: {
      normal: ["Illuminate", "Effect Spore"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/morelull.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/morelull.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/morelull.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/morelull.gif",
    },
    stats: {
      hp: "40",
      atk: "35",
      def: "55",
      spa: "65",
      spd: "75",
      speed: "15",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Pokémon living in the forest eat the delicious caps on Morelull's head. The caps regrow overnight.",
  },
  {
    id: "0756",
    name: "Shiinotic",
    region: "Alola",
    types: ["Grass", "Fairy"],
    abilities: {
      normal: ["Illuminate", "Effect Spore"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/shiinotic.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/shiinotic.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/shiinotic.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/shiinotic.gif",
    },
    stats: {
      hp: "60",
      atk: "45",
      def: "80",
      spa: "90",
      spd: "100",
      speed: "30",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.",
  },
  {
    id: "0757",
    name: "Salandit",
    region: "Alola",
    types: ["Poison", "Fire"],
    abilities: {
      normal: ["Corrosion"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/salandit.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/salandit.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/salandit.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/salandit.gif",
    },
    stats: {
      hp: "48",
      atk: "44",
      def: "40",
      spa: "71",
      spd: "40",
      speed: "77",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [87.5, 12.5],
    description:
      "Only female Salandit can produce gas laden with pheromones. Males entranced by this gas will do whatever the females tell them.",
  },
  {
    id: "0758",
    name: "Salazzle",
    region: "Alola",
    types: ["Poison", "Fire"],
    abilities: {
      normal: ["Corrosion"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/salazzle.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/salazzle.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/salazzle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/salazzle.gif",
    },
    stats: {
      hp: "68",
      atk: "64",
      def: "60",
      spa: "111",
      spd: "60",
      speed: "117",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [0, 100],
    description:
      "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
  },
  {
    id: "0759",
    name: "Stufful",
    region: "Alola",
    types: ["Normal", "Fighting"],
    abilities: {
      normal: ["Fluffy", "Klutz"],
      hidden: "Cute Charm",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stufful.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stufful.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stufful.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stufful.gif",
    },
    stats: {
      hp: "70",
      atk: "75",
      def: "50",
      spa: "45",
      spd: "50",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks.",
  },
  {
    id: "0760",
    name: "Bewear",
    region: "Alola",
    types: ["Normal", "Fighting"],
    abilities: {
      normal: ["Fluffy", "Klutz"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bewear.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bewear.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bewear.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bewear.gif",
    },
    stats: {
      hp: "120",
      atk: "125",
      def: "80",
      spa: "55",
      spd: "60",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The moves it uses to take down its prey would make a martial artist jealous. It tucks subdued prey under its arms to carry them to its nest.",
  },
  {
    id: "0761",
    name: "Bounsweet",
    region: "Alola",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard", "Oblivious"],
      hidden: "Sweet Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bounsweet.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bounsweet.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bounsweet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bounsweet.gif",
    },
    stats: {
      hp: "42",
      atk: "30",
      def: "38",
      spa: "30",
      spd: "38",
      speed: "32",
    },
    eggGroups: ["Grass"],
    genderRatios: [0, 100],
    description:
      "Its sweat is sweet, like syrup made from boiled-down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
  },
  {
    id: "0762",
    name: "Steenee",
    region: "Alola",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard", "Oblivious"],
      hidden: "Sweet Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/steenee.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/steenee.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/steenee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/steenee.gif",
    },
    stats: {
      hp: "52",
      atk: "40",
      def: "48",
      spa: "40",
      spd: "48",
      speed: "62",
    },
    eggGroups: ["Grass"],
    genderRatios: [0, 100],
    description:
      "Steenee bounces energetically through forests. If the rind that peels off its body is pulverized, it can be used to treat stomach pains.",
  },
  {
    id: "0763",
    name: "Tsareena",
    region: "Alola",
    types: ["Grass"],
    abilities: {
      normal: ["Leaf Guard", "Queenly Majesty"],
      hidden: "Sweet Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tsareena.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tsareena.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tsareena.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tsareena.gif",
    },
    stats: {
      hp: "72",
      atk: "120",
      def: "98",
      spa: "50",
      spd: "98",
      speed: "72",
    },
    eggGroups: ["Grass"],
    genderRatios: [0, 100],
    description:
      "This Pokémon is proud and aggressive. However, it is said that a Tsareena will instantly become calm if someone touches the crown on its calyx.",
  },
  {
    id: "0764",
    name: "Comfey",
    region: "Alola",
    types: ["Fairy"],
    abilities: {
      normal: ["Flower Veil", "Triage"],
      hidden: "Natural Cure",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/comfey.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/comfey.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/comfey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/comfey.gif",
    },
    stats: {
      hp: "51",
      atk: "52",
      def: "90",
      spa: "82",
      spd: "110",
      speed: "100",
    },
    eggGroups: ["Grass"],
    genderRatios: [25, 75],
    description:
      "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey.",
  },
  {
    id: "0765",
    name: "Oranguru",
    region: "Alola",
    types: ["Normal", "Psychic"],
    abilities: {
      normal: ["Inner Focus", "Telepathy"],
      hidden: "Symbiosis",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/oranguru.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/oranguru.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/oranguru.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/oranguru.gif",
    },
    stats: {
      hp: "90",
      atk: "60",
      def: "80",
      spa: "90",
      spd: "110",
      speed: "60",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "People used to mistake Oranguru for a human when they saw it issue command after command to the other Pokémon of the forest.",
  },
  {
    id: "0766",
    name: "Passimian",
    region: "Alola",
    types: ["Fighting"],
    abilities: {
      normal: ["Receiver"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/passimian.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/passimian.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/passimian.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/passimian.gif",
    },
    stats: {
      hp: "100",
      atk: "120",
      def: "90",
      spa: "40",
      spd: "60",
      speed: "80",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "The boss chooses 10 members of the group to go out hunting. The hunting party will evenly split the food they find with the rest of the group.",
  },
  {
    id: "0767",
    name: "Wimpod",
    region: "Alola",
    types: ["Bug", "Water"],
    abilities: {
      normal: ["Wimp Out"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/wimpod.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/wimpod.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/wimpod.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/wimpod.gif",
    },
    stats: {
      hp: "25",
      atk: "35",
      def: "40",
      spa: "20",
      spd: "30",
      speed: "80",
    },
    eggGroups: ["Bug", "Water 3"],
    genderRatios: [50, 50],
    description:
      "It's nature's cleaner—it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
  },
  {
    id: "0768",
    name: "Golisopod",
    region: "Alola",
    types: ["Bug", "Water"],
    abilities: {
      normal: ["Emergency Exit"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/golisopod.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/golisopod.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/golisopod.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/golisopod.gif",
    },
    stats: {
      hp: "75",
      atk: "125",
      def: "140",
      spa: "60",
      spd: "90",
      speed: "40",
    },
    eggGroups: ["Bug", "Water 3"],
    genderRatios: [50, 50],
    description:
      "They live in sunken ships or in holes in the seabed. When Golisopod and Grapploct battle, the loser becomes the winner's meal.",
  },
  {
    id: "0769",
    name: "Sandygast",
    region: "Alola",
    types: ["Ghost", "Ground"],
    abilities: {
      normal: ["Water Compaction"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/sandygast.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/sandygast.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/sandygast.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/sandygast.gif",
    },
    stats: {
      hp: "55",
      atk: "55",
      def: "80",
      spa: "70",
      spd: "45",
      speed: "15",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "It flings sand into the eyes of its prey and tries to close in on them while they're blinded, but since Sandygast is so slow, the prey tends to escape.",
  },
  {
    id: "0770",
    name: "Palossand",
    region: "Alola",
    types: ["Ghost", "Ground"],
    abilities: {
      normal: ["Water Compaction"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/palossand.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/palossand.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/palossand.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/palossand.gif",
    },
    stats: {
      hp: "85",
      atk: "75",
      def: "110",
      spa: "100",
      spd: "75",
      speed: "35",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "The terrifying Palossand drags smaller Pokémon into its sandy body. Once its victims are trapped, it drains them of their vitality whenever it pleases.",
  },
  {
    id: "0771",
    name: "Pyukumuku",
    region: "Alola",
    types: ["Water"],
    abilities: {
      normal: ["Innards Out"],
      hidden: "Unaware",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pyukumuku.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pyukumuku.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pyukumuku.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pyukumuku.gif",
    },
    stats: {
      hp: "55",
      atk: "60",
      def: "130",
      spa: "30",
      spd: "130",
      speed: "5",
    },
    eggGroups: ["Water 1"],
    genderRatios: [50, 50],
    description:
      "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
  },
  {
    id: "0772",
    name: "Type Null",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Battle Armor"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/type null.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/type null.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/type null.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/type null.gif",
    },
    stats: {
      hp: "95",
      atk: "95",
      def: "95",
      spa: "95",
      spd: "95",
      speed: "59",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Rumor has it that the theft of top-secret research notes led to a new instance of this Pokémon being created in the Galar region.",
  },
  {
    id: "0773",
    name: "Silvally",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["RKS System"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/silvally.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/silvally.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/silvally.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/silvally.gif",
    },
    stats: {
      hp: "95",
      atk: "95",
      def: "95",
      spa: "95",
      spd: "95",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A solid bond of trust between this Pokémon and its Trainer awakened the strength hidden within Silvally. It can change its type at will.",
  },
  {
    id: "0774",
    name: "Minior",
    region: "Alola",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Shields Down"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/minior.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/minior.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/minior.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/minior.gif",
    },
    stats: {
      hp: "60",
      atk: "60",
      def: "100",
      spa: "60",
      spd: "100",
      speed: "60",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "It lives in the ozone layer, where it becomes food for stronger Pokémon. When it tries to run away, it falls to the ground.",
  },
  {
    id: "0775",
    name: "Komala",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Comatose"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/komala.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/komala.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/komala.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/komala.gif",
    },
    stats: {
      hp: "65",
      atk: "115",
      def: "65",
      spa: "75",
      spd: "95",
      speed: "65",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Komala spends its entire life sleeping. It feeds on leaves that contain a potent poison only Komala can break down.",
  },
  {
    id: "0776",
    name: "Turtonator",
    region: "Alola",
    types: ["Fire", "Dragon"],
    abilities: {
      normal: ["Shell Armor"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/turtonator.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/turtonator.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/turtonator.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/turtonator.gif",
    },
    stats: {
      hp: "60",
      atk: "78",
      def: "135",
      spa: "91",
      spd: "85",
      speed: "36",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Eating sulfur in its volcanic habitat is what causes explosive compounds to develop in its shell. Its droppings are also dangerously explosive.",
  },
  {
    id: "0777",
    name: "Togedemaru",
    region: "Alola",
    types: ["Electric", "Steel"],
    abilities: {
      normal: ["Iron Barbs", "Lightning Rod"],
      hidden: "Sturdy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/togedemaru.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/togedemaru.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/togedemaru.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/togedemaru.gif",
    },
    stats: {
      hp: "65",
      atk: "98",
      def: "63",
      spa: "40",
      spd: "73",
      speed: "96",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac.",
  },
  {
    id: "0778",
    name: "Mimikyu",
    region: "Alola",
    types: ["Ghost", "Fairy"],
    abilities: {
      normal: ["Disguise"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/mimikyu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/mimikyu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/mimikyu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/mimikyu.gif",
    },
    stats: {
      hp: "55",
      atk: "90",
      def: "80",
      spa: "50",
      spd: "105",
      speed: "96",
    },
    eggGroups: ["Amorphous"],
    genderRatios: [50, 50],
    description:
      "Even as it struggles beneath the cloth to repair the broken neck of its disguise, Mimikyu keeps up its impersonation of Pikachu.",
  },
  {
    id: "0779",
    name: "Bruxish",
    region: "Alola",
    types: ["Water", "Psychic"],
    abilities: {
      normal: ["Dazzling", "Strong Jaw"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/bruxish.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/bruxish.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/bruxish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/bruxish.gif",
    },
    stats: {
      hp: "68",
      atk: "105",
      def: "70",
      spa: "70",
      spd: "70",
      speed: "92",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
  },
  {
    id: "0780",
    name: "Drampa",
    region: "Alola",
    types: ["Normal", "Dragon"],
    abilities: {
      normal: ["Berserk", "Sap Sipper"],
      hidden: "Cloud Nine",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/drampa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/drampa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/drampa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/drampa.gif",
    },
    stats: {
      hp: "78",
      atk: "60",
      def: "85",
      spa: "135",
      spd: "91",
      speed: "36",
    },
    eggGroups: ["Monster", "Dragon"],
    genderRatios: [50, 50],
    description:
      "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below.",
  },
  {
    id: "0781",
    name: "Dhelmise",
    region: "Alola",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Steelworker"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/dhelmise.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/dhelmise.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/dhelmise.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/dhelmise.gif",
    },
    stats: {
      hp: "70",
      atk: "131",
      def: "100",
      spa: "86",
      spd: "90",
      speed: "40",
    },
    eggGroups: ["Mineral"],
    genderRatios: [0, 0],
    description:
      "Its chain-like green seaweed can stretch outward for hundreds of yards. For some reason, it gets along well with Skrelp.",
  },
  {
    id: "0782",
    name: "Jangmo-O",
    region: "Alola",
    types: ["Dragon"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/jangmo-o.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/jangmo-o.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/jangmo-o.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/jangmo-o.gif",
    },
    stats: {
      hp: "45",
      atk: "55",
      def: "65",
      spa: "45",
      spd: "45",
      speed: "45",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "Jangmo-o strikes its scales to communicate with others of its kind. Its scales are actually fur that's become as hard as metal.",
  },
  {
    id: "0783",
    name: "Hakamo-O",
    region: "Alola",
    types: ["Dragon", "Fighting"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/hakamo-o.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/hakamo-o.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/hakamo-o.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/hakamo-o.gif",
    },
    stats: {
      hp: "55",
      atk: "75",
      def: "90",
      spa: "65",
      spd: "70",
      speed: "65",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "The scales it sheds can be molded and processed to make pots and pans. They conduct heat well, so they're a popular item.",
  },
  {
    id: "0784",
    name: "Kommo-O",
    region: "Alola",
    types: ["Dragon", "Fighting"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kommo-o.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kommo-o.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kommo-o.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kommo-o.gif",
    },
    stats: {
      hp: "75",
      atk: "110",
      def: "125",
      spa: "100",
      spd: "105",
      speed: "85",
    },
    eggGroups: ["Dragon"],
    genderRatios: [50, 50],
    description:
      "It clatters its tail scales to unnerve opponents. This Pokémon will battle only those who stand steadfast in the face of this display.",
  },
  {
    id: "0785",
    name: "Tapu Koko",
    region: "Alola",
    types: ["Electric", "Fairy"],
    abilities: {
      normal: ["Electric Surge"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tapu koko.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tapu koko.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tapu koko.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tapu koko.gif",
    },
    stats: {
      hp: "70",
      atk: "115",
      def: "85",
      spa: "95",
      spd: "75",
      speed: "130",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time.",
  },
  {
    id: "0786",
    name: "Tapu Lele",
    region: "Alola",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Psychic Surge"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tapu lele.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tapu lele.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tapu lele.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tapu lele.gif",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "75",
      spa: "130",
      spd: "115",
      speed: "95",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It heals the wounds of people and Pokémon by sprinkling them with its sparkling scales. This guardian deity is worshiped on Akala.",
  },
  {
    id: "0787",
    name: "Tapu Bulu",
    region: "Alola",
    types: ["Grass", "Fairy"],
    abilities: {
      normal: ["Grassy Surge"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tapu bulu.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tapu bulu.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tapu bulu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tapu bulu.gif",
    },
    stats: {
      hp: "70",
      atk: "130",
      def: "115",
      spa: "85",
      spd: "95",
      speed: "75",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It makes ringing sounds with its tail to let others know where it is, avoiding unneeded conflicts. This guardian deity of Ula'ula controls plants.",
  },
  {
    id: "0788",
    name: "Tapu Fini",
    region: "Alola",
    types: ["Water", "Fairy"],
    abilities: {
      normal: ["Misty Surge"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/tapu fini.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/tapu fini.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/tapu fini.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/tapu fini.gif",
    },
    stats: {
      hp: "70",
      atk: "75",
      def: "115",
      spa: "95",
      spd: "130",
      speed: "85",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered.",
  },
  {
    id: "0789",
    name: "Cosmog",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Unaware"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cosmog.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cosmog.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cosmog.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cosmog.gif",
    },
    stats: {
      hp: "43",
      atk: "29",
      def: "31",
      spa: "29",
      spd: "31",
      speed: "37",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Cosmog is very curious but not very cautious, often placing itself in danger. If things start to look dicey, it teleports away.",
  },
  {
    id: "0790",
    name: "Cosmoem",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/cosmoem.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/cosmoem.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/cosmoem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/cosmoem.gif",
    },
    stats: {
      hp: "43",
      atk: "29",
      def: "131",
      spa: "29",
      spd: "131",
      speed: "37",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It sucks in dust from the air at an astounding rate, frantically building up energy within its core as preparation for evolution.",
  },
  {
    id: "0791",
    name: "Solgaleo",
    region: "Alola",
    types: ["Psychic", "Steel"],
    abilities: {
      normal: ["Full Metal Body"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/solgaleo.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/solgaleo.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/solgaleo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/solgaleo.gif",
    },
    stats: {
      hp: "137",
      atk: "137",
      def: "107",
      spa: "113",
      spd: "89",
      speed: "97",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "When light radiates from its body, this Pokémon could almost appear to be the sun. It will dispel any darkness and light up the world.",
  },
  {
    id: "0792",
    name: "Lunala",
    region: "Alola",
    types: ["Psychic", "Ghost"],
    abilities: {
      normal: ["Shadow Shield"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/lunala.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/lunala.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/lunala.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/lunala.gif",
    },
    stats: {
      hp: "137",
      atk: "113",
      def: "89",
      spa: "137",
      spd: "107",
      speed: "97",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Known as the Beast That Calls the Moon, this Pokémon lives by taking in any and all light and converting it into its own energy.",
  },
  {
    id: "0793",
    name: "Nihilego",
    region: "Alola",
    types: ["Rock", "Poison"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/nihilego.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/nihilego.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/nihilego.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/nihilego.gif",
    },
    stats: {
      hp: "109",
      atk: "53",
      def: "47",
      spa: "127",
      spd: "131",
      speed: "103",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It appeared in this world from an Ultra Wormhole. Nihilego appears to be a parasite that lives by feeding on people and Pokémon.",
  },
  {
    id: "0794",
    name: "Buzzwole",
    region: "Alola",
    types: ["Bug", "Fighting"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/buzzwole.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/buzzwole.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/buzzwole.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/buzzwole.gif",
    },
    stats: {
      hp: "107",
      atk: "139",
      def: "139",
      spa: "53",
      spd: "53",
      speed: "79",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
  },
  {
    id: "0795",
    name: "Pheromosa",
    region: "Alola",
    types: ["Bug", "Fighting"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/pheromosa.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/pheromosa.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/pheromosa.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/pheromosa.gif",
    },
    stats: {
      hp: "71",
      atk: "137",
      def: "37",
      spa: "137",
      spd: "37",
      speed: "151",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
  },
  {
    id: "0796",
    name: "Xurkitree",
    region: "Alola",
    types: ["Electric"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/xurkitree.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/xurkitree.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/xurkitree.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/xurkitree.gif",
    },
    stats: {
      hp: "83",
      atk: "89",
      def: "71",
      spa: "173",
      spd: "71",
      speed: "83",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "They've been dubbed Ultra Beasts. Some of them stand unmoving, like trees, with their arms and legs stuck into the ground.",
  },
  {
    id: "0797",
    name: "Celesteela",
    region: "Alola",
    types: ["Steel", "Flying"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/celesteela.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/celesteela.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/celesteela.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/celesteela.gif",
    },
    stats: {
      hp: "97",
      atk: "101",
      def: "103",
      spa: "107",
      spd: "101",
      speed: "61",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
  },
  {
    id: "0798",
    name: "Kartana",
    region: "Alola",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/kartana.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/kartana.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/kartana.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/kartana.gif",
    },
    stats: {
      hp: "59",
      atk: "181",
      def: "131",
      spa: "59",
      spd: "31",
      speed: "109",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
  },
  {
    id: "0799",
    name: "Guzzlord",
    region: "Alola",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/guzzlord.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/guzzlord.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/guzzlord.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/guzzlord.gif",
    },
    stats: {
      hp: "223",
      atk: "101",
      def: "53",
      spa: "97",
      spd: "53",
      speed: "43",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
  },
  {
    id: "0800",
    name: "Necrozma",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Prism Armor"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/necrozma.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/necrozma.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/necrozma.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/necrozma.gif",
    },
    stats: {
      hp: "97",
      atk: "107",
      def: "101",
      spa: "127",
      spd: "89",
      speed: "79",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It survives by absorbing light. After a long time spent slumbering underground, impurities accumulated within it, causing its body to darken.",
  },
  {
    id: "0801",
    name: "Magearna",
    region: "Alola",
    types: ["Steel", "Fairy"],
    abilities: {
      normal: ["Soul-Heart"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/magearna.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/magearna.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/magearna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/magearna.gif",
    },
    stats: {
      hp: "80",
      atk: "95",
      def: "115",
      spa: "130",
      spd: "115",
      speed: "65",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It synchronizes its consciousness with others to understand their feelings. This faculty makes it useful for taking care of people.",
  },
  {
    id: "0802",
    name: "Marshadow",
    region: "Alola",
    types: ["Fighting", "Ghost"],
    abilities: {
      normal: ["Technician"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/marshadow.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/marshadow.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/marshadow.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/marshadow.gif",
    },
    stats: {
      hp: "90",
      atk: "125",
      def: "80",
      spa: "90",
      spd: "90",
      speed: "125",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "By slipping into the shadow of a martial arts master and copying their movements, this Pokémon learned the ultimate techniques.",
  },
  {
    id: "0803",
    name: "Poipole",
    region: "Alola",
    types: ["Poison"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/poipole.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/poipole.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/poipole.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/poipole.gif",
    },
    stats: {
      hp: "67",
      atk: "73",
      def: "67",
      spa: "73",
      spd: "67",
      speed: "73",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "An Ultra Beast that lives in a different world, it cackles wildly as it sprays its opponents with poison from the needles on its head.",
  },
  {
    id: "0804",
    name: "Naganadel",
    region: "Alola",
    types: ["Poison", "Dragon"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/naganadel.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/naganadel.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/naganadel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/naganadel.gif",
    },
    stats: {
      hp: "73",
      atk: "73",
      def: "73",
      spa: "127",
      spd: "73",
      speed: "121",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "One kind of Ultra Beast, it fires a glowing, venomous liquid from its needles. This liquid is also immensely adhesive.",
  },
  {
    id: "0805",
    name: "Stakataka",
    region: "Alola",
    types: ["Rock", "Steel"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/stakataka.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/stakataka.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/stakataka.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/stakataka.gif",
    },
    stats: {
      hp: "61",
      atk: "131",
      def: "211",
      spa: "53",
      spd: "101",
      speed: "13",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "When stone walls started moving and attacking, the brute's true identity was this mysterious life-form, which brings to mind an Ultra Beast.",
  },
  {
    id: "0806",
    name: "Blacephalon",
    region: "Alola",
    types: ["Fire", "Ghost"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/blacephalon.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/blacephalon.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/blacephalon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/blacephalon.gif",
    },
    stats: {
      hp: "53",
      atk: "127",
      def: "53",
      spa: "151",
      spd: "79",
      speed: "107",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "A UB that appeared from an Ultra Wormhole, it causes explosions, then takes advantage of opponents' surprise to rob them of their vitality.",
  },
  {
    id: "0807",
    name: "Zeraora",
    region: "Alola",
    types: ["Electric"],
    abilities: {
      normal: ["Volt Absorb"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/zeraora.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/zeraora.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/zeraora.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/zeraora.gif",
    },
    stats: {
      hp: "88",
      atk: "112",
      def: "75",
      spa: "102",
      spd: "80",
      speed: "143",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they'll be electrocuted by the flying sparks.",
  },
  {
    id: "0808",
    name: "Meltan",
    region: "Alola",
    types: ["Steel"],
    abilities: {
      normal: ["Magnet Pull"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/meltan.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/meltan.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/meltan.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/meltan.gif",
    },
    stats: {
      hp: "46",
      atk: "65",
      def: "65",
      spa: "55",
      spd: "35",
      speed: "34",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel.",
  },
  {
    id: "0809",
    name: "Melmetal",
    region: "Alola",
    types: ["Steel"],
    abilities: {
      normal: ["Iron Fist"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal: "https://projectpokemon.org/images/normal-sprite/melmetal.gif",
      shiny: "https://projectpokemon.org/images/shiny-sprite/melmetal.gif",
    },
    backSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/normal-back/melmetal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/shiny-back/melmetal.gif",
    },
    stats: {
      hp: "135",
      atk: "143",
      def: "143",
      spa: "80",
      spd: "65",
      speed: "34",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Centrifugal force is behind the punches of Melmetal's heavy hex-nut arms. Melmetal is said to deliver the strongest punches of all Pokémon.",
  },
  {
    id: "0810",
    name: "Grookey",
    region: "Galar",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Grassy Surge",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/grookey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/grookey.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "50",
      spa: "40",
      spd: "40",
      speed: "65",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
  },
  {
    id: "0811",
    name: "Thwackey",
    region: "Galar",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Grassy Surge",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/thwackey.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/thwackey.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "70",
      spa: "55",
      spd: "60",
      speed: "80",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "When it's drumming out rapid beats in battle, it gets so caught up in the rhythm that it won't even notice that it's already knocked out its opponent.",
  },
  {
    id: "0812",
    name: "Rillaboom",
    region: "Galar",
    types: ["Grass"],
    abilities: {
      normal: ["Overgrow"],
      hidden: "Grassy Surge",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/rillaboom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/rillaboom.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "125",
      def: "90",
      spa: "60",
      spd: "70",
      speed: "85",
    },
    eggGroups: ["Field", "Grass"],
    genderRatios: [87.5, 12.5],
    description:
      "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group.",
  },
  {
    id: "0813",
    name: "Scorbunny",
    region: "Galar",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Libero",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/scorbunny.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/scorbunny.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "71",
      def: "40",
      spa: "40",
      spd: "40",
      speed: "69",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power.",
  },
  {
    id: "0814",
    name: "Raboot",
    region: "Galar",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Libero",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/raboot.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/raboot.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "65",
      atk: "86",
      def: "60",
      spa: "55",
      spd: "60",
      speed: "94",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork.",
  },
  {
    id: "0815",
    name: "Cinderace",
    region: "Galar",
    types: ["Fire"],
    abilities: {
      normal: ["Blaze"],
      hidden: "Libero",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/cinderace.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/cinderace.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "116",
      def: "75",
      spa: "65",
      spd: "75",
      speed: "119",
    },
    eggGroups: ["Field", "Human-Like"],
    genderRatios: [87.5, 12.5],
    description:
      "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot.",
  },
  {
    id: "0816",
    name: "Sobble",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/sobble.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/sobble.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "40",
      def: "40",
      spa: "70",
      spd: "40",
      speed: "70",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping.",
  },
  {
    id: "0817",
    name: "Drizzile",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/drizzile.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/drizzile.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "65",
      atk: "60",
      def: "55",
      spa: "95",
      spd: "55",
      speed: "90",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "A clever combatant, this Pokémon battles using water balloons created with moisture secreted from its palms.",
  },
  {
    id: "0818",
    name: "Inteleon",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "Sniper",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/inteleon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/inteleon.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "65",
      spa: "125",
      spd: "65",
      speed: "120",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [87.5, 12.5],
    description:
      "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
  },
  {
    id: "0819",
    name: "Skwovet",
    region: "Galar",
    types: ["Normal"],
    abilities: {
      normal: ["Cheek Pouch"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/skwovet.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/skwovet.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "55",
      def: "55",
      spa: "35",
      spd: "35",
      speed: "25",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "No matter how much it stuffs its belly with food, it is always anxious about getting hungry again. So, it stashes berries in its cheeks and tail.",
  },
  {
    id: "0820",
    name: "Greedent",
    region: "Galar",
    types: ["Normal"],
    abilities: {
      normal: ["Cheek Pouch"],
      hidden: "Gluttony",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/greedent.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/greedent.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "120",
      atk: "95",
      def: "95",
      spa: "55",
      spd: "75",
      speed: "20",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon makes off with heaps of fallen berries by wrapping them in its tail, which is roughly twice the length of its body.",
  },
  {
    id: "0821",
    name: "Rookidee",
    region: "Galar",
    types: ["Flying"],
    abilities: {
      normal: ["Keen Eye", "Unnerve"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/rookidee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/rookidee.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "38",
      atk: "47",
      def: "35",
      spa: "33",
      spd: "35",
      speed: "57",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "The females are fussier than the males. If another creature dirties a female Rookidee's wings, it'll peck the offender relentlessly in a burning rage.",
  },
  {
    id: "0822",
    name: "Corvisquire",
    region: "Galar",
    types: ["Flying"],
    abilities: {
      normal: ["Keen Eye", "Unnerve"],
      hidden: "Big Pecks",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/corvisquire.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/corvisquire.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "68",
      atk: "67",
      def: "55",
      spa: "43",
      spd: "55",
      speed: "77",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "It's said that the reason behind Corvisquire's high level of intelligence is the large size of its brain relative to those of other bird Pokémon.",
  },
  {
    id: "0823",
    name: "Corviknight",
    region: "Galar",
    types: ["Flying", "Steel"],
    abilities: {
      normal: ["Pressure", "Unnerve"],
      hidden: "Mirror Armor",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/corviknight.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/corviknight.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "98",
      atk: "87",
      def: "105",
      spa: "53",
      spd: "85",
      speed: "67",
    },
    eggGroups: ["Flying"],
    genderRatios: [50, 50],
    description:
      "Corviknight can't serve as a taxi service in Paldea because the Pokémon's natural predators will attack it while it flies, endangering the customer.",
  },
  {
    id: "0824",
    name: "Blipbug",
    region: "Galar",
    types: ["Bug"],
    abilities: {
      normal: ["Swarm", "Compound Eyes"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/blipbug.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/blipbug.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "25",
      atk: "20",
      def: "20",
      spa: "25",
      spd: "45",
      speed: "45",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings.",
  },
  {
    id: "0825",
    name: "Dottler",
    region: "Galar",
    types: ["Bug", "Psychic"],
    abilities: {
      normal: ["Swarm", "Compound Eyes"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dottler.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dottler.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "35",
      def: "80",
      spa: "50",
      spd: "90",
      speed: "30",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It barely moves, but it's still alive. Hiding in its shell without food or water seems to have awakened its psychic powers.",
  },
  {
    id: "0826",
    name: "Orbeetle",
    region: "Galar",
    types: ["Bug", "Psychic"],
    abilities: {
      normal: ["Swarm", "Frisk"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/orbeetle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/orbeetle.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "45",
      def: "110",
      spa: "80",
      spd: "120",
      speed: "90",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It's famous for its high level of intelligence, and the large size of its brain is proof that it also possesses immense psychic power.",
  },
  {
    id: "0827",
    name: "Nickit",
    region: "Galar",
    types: ["Dark"],
    abilities: {
      normal: ["Run Away", "Unburden"],
      hidden: "Stakeout",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/nickit.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/nickit.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "28",
      def: "28",
      spa: "47",
      spd: "52",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder.",
  },
  {
    id: "0828",
    name: "Thievul",
    region: "Galar",
    types: ["Dark"],
    abilities: {
      normal: ["Run Away", "Unburden"],
      hidden: "Stakeout",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/thievul.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/thievul.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "58",
      def: "58",
      spa: "87",
      spd: "92",
      speed: "90",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
  },
  {
    id: "0829",
    name: "Gossifleur",
    region: "Galar",
    types: ["Grass"],
    abilities: {
      normal: ["Cotton Down", "Regenerator"],
      hidden: "Effect Spore",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/gossifleur.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/gossifleur.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "60",
      spa: "40",
      spd: "60",
      speed: "10",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "It anchors itself in the ground with its single leg, then basks in the sun. After absorbing enough sunlight, its petals spread as it blooms brilliantly.",
  },
  {
    id: "0830",
    name: "Eldegoss",
    region: "Galar",
    types: ["Grass"],
    abilities: {
      normal: ["Cotton Down", "Regenerator"],
      hidden: "Effect Spore",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/eldegoss.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/eldegoss.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "50",
      def: "90",
      spa: "80",
      spd: "120",
      speed: "60",
    },
    eggGroups: ["Grass"],
    genderRatios: [50, 50],
    description:
      "The seeds attached to its cotton fluff are full of nutrients. It spreads them on the wind so that plants and other Pokémon can benefit from them.",
  },
  {
    id: "0831",
    name: "Wooloo",
    region: "Galar",
    types: ["Normal"],
    abilities: {
      normal: ["Fluffy", "Run Away"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/wooloo.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/wooloo.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "42",
      atk: "40",
      def: "55",
      spa: "40",
      spd: "45",
      speed: "48",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
  },
  {
    id: "0832",
    name: "Dubwool",
    region: "Galar",
    types: ["Normal"],
    abilities: {
      normal: ["Fluffy", "Steadfast"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dubwool.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dubwool.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "72",
      atk: "80",
      def: "100",
      spa: "60",
      spd: "90",
      speed: "88",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
  },
  {
    id: "0833",
    name: "Chewtle",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Strong Jaw", "Shell Armor"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/chewtle.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/chewtle.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "64",
      def: "50",
      spa: "38",
      spd: "38",
      speed: "44",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle's horn, and the two Pokémon will tussle.",
  },
  {
    id: "0834",
    name: "Drednaw",
    region: "Galar",
    types: ["Water", "Rock"],
    abilities: {
      normal: ["Strong Jaw", "Shell Armor"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/drednaw.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/drednaw.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "90",
      atk: "115",
      def: "90",
      spa: "48",
      spd: "68",
      speed: "74",
    },
    eggGroups: ["Monster", "Water 1"],
    genderRatios: [50, 50],
    description:
      "Drednaw lurks along the shoreline. When prey come to drink water, Drednaw stretches its neck out and chomps down on them.",
  },
  {
    id: "0835",
    name: "Yamper",
    region: "Galar",
    types: ["Electric"],
    abilities: {
      normal: ["Ball Fetch"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/yamper.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/yamper.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "59",
      atk: "45",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "26",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail.",
  },
  {
    id: "0836",
    name: "Boltund",
    region: "Galar",
    types: ["Electric"],
    abilities: {
      normal: ["Strong Jaw"],
      hidden: "Competitive",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/boltund.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/boltund.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "69",
      atk: "90",
      def: "60",
      spa: "90",
      spd: "60",
      speed: "121",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days.",
  },
  {
    id: "0837",
    name: "Rolycoly",
    region: "Galar",
    types: ["Rock"],
    abilities: {
      normal: ["Steam Engine", "Heatproof"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/rolycoly.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/rolycoly.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "30",
      atk: "40",
      def: "50",
      spa: "40",
      spd: "50",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Chunks of the surface of this Pokémon's body that have grown old and flaked off have long been used for fuel as an alternative to coal.",
  },
  {
    id: "0838",
    name: "Carkol",
    region: "Galar",
    types: ["Rock", "Fire"],
    abilities: {
      normal: ["Steam Engine", "Flame Body"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/carkol.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/carkol.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "60",
      def: "90",
      spa: "60",
      spd: "70",
      speed: "50",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "Due to the coal tar created inside it, the heap of coal on Carkol's back never falls apart, even when the Pokémon rolls around at high speeds.",
  },
  {
    id: "0839",
    name: "Coalossal",
    region: "Galar",
    types: ["Rock", "Fire"],
    abilities: {
      normal: ["Steam Engine", "Flame Body"],
      hidden: "Flash Fire",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/coalossal.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/coalossal.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "110",
      atk: "80",
      def: "120",
      spa: "80",
      spd: "90",
      speed: "30",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "It's gentle usually but fearsome when angered. With a body that burns at over 2,700 degrees Fahrenheit, it crushes foes and turns them to ash.",
  },
  {
    id: "0840",
    name: "Applin",
    region: "Galar",
    types: ["Grass", "Dragon"],
    abilities: {
      normal: ["Ripen", "Gluttony"],
      hidden: "Bulletproof",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/applin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/applin.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "40",
      def: "80",
      spa: "40",
      spd: "40",
      speed: "20",
    },
    eggGroups: ["Grass", "Dragon"],
    genderRatios: [50, 50],
    description:
      "As soon as it's born, it burrows into an apple. Not only does the apple serve as its food source, but the flavor of the fruit determines its evolution.",
  },
  {
    id: "0841",
    name: "Flapple",
    region: "Galar",
    types: ["Grass", "Dragon"],
    abilities: {
      normal: ["Ripen", "Gluttony"],
      hidden: "Hustle",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/flapple.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/flapple.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "110",
      def: "80",
      spa: "95",
      spd: "60",
      speed: "70",
    },
    eggGroups: ["Grass", "Dragon"],
    genderRatios: [50, 50],
    description:
      "It flutters around while seeking an opening in the opponent's guard, then attacks by spitting acidic liquid strong enough to melt metal.",
  },
  {
    id: "0842",
    name: "Appletun",
    region: "Galar",
    types: ["Grass", "Dragon"],
    abilities: {
      normal: ["Ripen", "Gluttony"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/appletun.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/appletun.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "110",
      atk: "85",
      def: "80",
      spa: "100",
      spd: "80",
      speed: "30",
    },
    eggGroups: ["Grass", "Dragon"],
    genderRatios: [50, 50],
    description:
      "When some Lechonk come along to lick the sweet nectar on Appletun's back, Appletun will spew sticky nectar at them to drive them away.",
  },
  {
    id: "0843",
    name: "Silicobra",
    region: "Galar",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Spit", "Shed Skin"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/silicobra.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/silicobra.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "52",
      atk: "57",
      def: "75",
      spa: "35",
      spd: "50",
      speed: "46",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Silicobra's large nostrils are specialized for spraying sand, so this Pokémon is not very good at telling apart different smells.",
  },
  {
    id: "0844",
    name: "Sandaconda",
    region: "Galar",
    types: ["Ground"],
    abilities: {
      normal: ["Sand Spit", "Shed Skin"],
      hidden: "Sand Veil",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/sandaconda.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/sandaconda.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "72",
      atk: "107",
      def: "125",
      spa: "65",
      spd: "70",
      speed: "71",
    },
    eggGroups: ["Field", "Dragon"],
    genderRatios: [50, 50],
    description:
      "The sand it spews contains sharp, pointy gravel, which is actually just sand that Sandaconda's saliva has hardened into irregular shapes.",
  },
  {
    id: "0845",
    name: "Cramorant",
    region: "Galar",
    types: ["Flying", "Water"],
    abilities: {
      normal: ["Gulp Missile"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/cramorant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/cramorant.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "85",
      def: "55",
      spa: "85",
      spd: "95",
      speed: "85",
    },
    eggGroups: ["Water 1", "Flying"],
    genderRatios: [50, 50],
    description:
      "This hungry Pokémon swallows Arrokuda whole. Occasionally, it makes a mistake and tries to swallow a Pokémon other than its preferred prey.",
  },
  {
    id: "0846",
    name: "Arrokuda",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Propeller Tail",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/arrokuda.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/arrokuda.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "41",
      atk: "63",
      def: "40",
      spa: "40",
      spd: "30",
      speed: "66",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "Arrokuda can swim quickly only in a straight line. The ones that become sluggish from overeating are the first to be targeted by flocks of Wattrel.",
  },
  {
    id: "0847",
    name: "Barraskewda",
    region: "Galar",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim"],
      hidden: "Propeller Tail",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/barraskewda.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/barraskewda.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "61",
      atk: "123",
      def: "60",
      spa: "60",
      spd: "50",
      speed: "136",
    },
    eggGroups: ["Water 2"],
    genderRatios: [50, 50],
    description:
      "It spins its tail fins to leap from the water, then viciously bites down on Wingull flying close to the water's surface.",
  },
  {
    id: "0848",
    name: "Toxel",
    region: "Galar",
    types: ["Electric", "Poison"],
    abilities: {
      normal: ["Rattled", "Static"],
      hidden: "Klutz",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/toxel.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/toxel.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "38",
      def: "35",
      spa: "54",
      spd: "35",
      speed: "40",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [50, 50],
    description:
      "It has no problem drinking dirty water. An organ inside Toxel's body filters such water into a poisonous liquid that is harmless to Toxel.",
  },
  {
    id: "0849",
    name: "Toxtricity Amped",
    region: "Galar",
    types: ["Electric", "Poison"],
    abilities: {
      normal: ["Punk Rock", "Plus"],
      hidden: "Technician",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/toxtricity amped.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/toxtricity amped.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "75",
      atk: "98",
      def: "70",
      spa: "114",
      spd: "70",
      speed: "75",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "As it scatters toxic sweat and emits electricity, a melody that sounds like it came from a guitar reverberates through the surrounding area.",
  },
  {
    id: "0850",
    name: "Sizzlipede",
    region: "Galar",
    types: ["Fire", "Bug"],
    abilities: {
      normal: ["Flash Fire", "White Smoke"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/sizzlipede.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/sizzlipede.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "65",
      def: "45",
      spa: "50",
      spd: "50",
      speed: "45",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel.",
  },
  {
    id: "0851",
    name: "Centiskorch",
    region: "Galar",
    types: ["Fire", "Bug"],
    abilities: {
      normal: ["Flash Fire", "White Smoke"],
      hidden: "Flame Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/centiskorch.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/centiskorch.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "115",
      def: "65",
      spa: "90",
      spd: "90",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
  },
  {
    id: "0852",
    name: "Clobbopus",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Limber"],
      hidden: "Technician",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/clobbopus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/clobbopus.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "68",
      def: "60",
      spa: "50",
      spd: "50",
      speed: "32",
    },
    eggGroups: ["Water 1", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.",
  },
  {
    id: "0853",
    name: "Grapploct",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Limber"],
      hidden: "Technician",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/grapploct.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/grapploct.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "118",
      def: "90",
      spa: "70",
      spd: "80",
      speed: "42",
    },
    eggGroups: ["Water 1", "Human-Like"],
    genderRatios: [50, 50],
    description:
      "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.",
  },
  {
    id: "0854",
    name: "Sinistea",
    region: "Galar",
    types: ["Ghost"],
    abilities: {
      normal: ["Weak Armor"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/sinistea.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/sinistea.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "45",
      def: "45",
      spa: "74",
      spd: "54",
      speed: "50",
    },
    eggGroups: ["Mineral", "Amorphous"],
    genderRatios: [0, 0],
    description:
      "Some fanatics will go to great pains to prepare the perfect tea and teacup, eagerly waiting for a Sinistea to come and possess their selections.",
  },
  {
    id: "0855",
    name: "Polteageist",
    region: "Galar",
    types: ["Ghost"],
    abilities: {
      normal: ["Weak Armor"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/polteageist.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/polteageist.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "65",
      def: "65",
      spa: "134",
      spd: "114",
      speed: "70",
    },
    eggGroups: ["Mineral", "Amorphous"],
    genderRatios: [0, 0],
    description:
      "Apparently a Polteageist's disposition is affected by the type of tea the Pokémon came from. What teapot it inhabits makes no difference.",
  },
  {
    id: "0856",
    name: "Hatenna",
    region: "Galar",
    types: ["Psychic"],
    abilities: {
      normal: ["Healer", "Anticipation"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/hatenna.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/hatenna.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "42",
      atk: "30",
      def: "45",
      spa: "56",
      spd: "53",
      speed: "39",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "It senses the feelings of other living creatures. Be careful not to expose it to strong emotions for too long, or it will end up exhausted.",
  },
  {
    id: "0857",
    name: "Hattrem",
    region: "Galar",
    types: ["Psychic"],
    abilities: {
      normal: ["Healer", "Anticipation"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/hattrem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/hattrem.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "57",
      atk: "40",
      def: "65",
      spa: "86",
      spd: "73",
      speed: "49",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "The moment this Pokémon finds someone who's emitting strong emotions, it will pummel them senseless with its braids to silence them.",
  },
  {
    id: "0858",
    name: "Hatterene",
    region: "Galar",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Healer", "Anticipation"],
      hidden: "Magic Bounce",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/hatterene.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/hatterene.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "57",
      atk: "90",
      def: "95",
      spa: "136",
      spd: "103",
      speed: "29",
    },
    eggGroups: ["Fairy"],
    genderRatios: [0, 100],
    description:
      "Hatterene knocks out those that intrude in its home forest by blasting them with a beam, then slashing with claws enhanced by psychic power.",
  },
  {
    id: "0859",
    name: "Impidimp",
    region: "Galar",
    types: ["Dark", "Fairy"],
    abilities: {
      normal: ["Prankster", "Frisk"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/impidimp.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/impidimp.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "45",
      atk: "45",
      def: "30",
      spa: "55",
      spd: "40",
      speed: "50",
    },
    eggGroups: ["Fairy", "Human-Like"],
    genderRatios: [100, 0],
    description:
      "The reason this Pokémon causes trouble for those it feels close to is because Impidimp itself gets irritable if it can't absorb negative emotions.",
  },
  {
    id: "0860",
    name: "Morgrem",
    region: "Galar",
    types: ["Dark", "Fairy"],
    abilities: {
      normal: ["Prankster", "Frisk"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/morgrem.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/morgrem.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "65",
      atk: "60",
      def: "45",
      spa: "75",
      spd: "55",
      speed: "70",
    },
    eggGroups: ["Fairy", "Human-Like"],
    genderRatios: [100, 0],
    description:
      "This Pokémon absorbs negative emotions and turns them into energy. It's popular with people who tend to think gloomy thoughts.",
  },
  {
    id: "0861",
    name: "Grimmsnarl",
    region: "Galar",
    types: ["Dark", "Fairy"],
    abilities: {
      normal: ["Prankster", "Frisk"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/grimmsnarl.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/grimmsnarl.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "95",
      atk: "120",
      def: "65",
      spa: "95",
      spd: "75",
      speed: "60",
    },
    eggGroups: ["Fairy", "Human-Like"],
    genderRatios: [100, 0],
    description:
      "This Pokémon has complete control over its hair. Grimmsnarl normally keeps its hair wrapped around its body to support its muscles.",
  },
  {
    id: "0862",
    name: "Obstagoon",
    region: "Galar",
    types: ["Dark", "Normal"],
    abilities: {
      normal: ["Reckless", "Guts"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/obstagoon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/obstagoon.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "93",
      atk: "90",
      def: "101",
      spa: "60",
      spd: "81",
      speed: "95",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "Its voice is staggering in volume. Obstagoon has a tendency to take on a threatening posture and shout—this move is known as Obstruct.",
  },
  {
    id: "0863",
    name: "Perrserker",
    region: "Galar",
    types: ["Steel"],
    abilities: {
      normal: ["Battle Armor", "Tough Claws"],
      hidden: "Steely Spirit",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/perrserker.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/perrserker.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "110",
      def: "100",
      spa: "50",
      spd: "60",
      speed: "50",
    },
    eggGroups: ["Field"],
    genderRatios: [50, 50],
    description:
      "After many battles, it evolved dangerous claws that come together to form daggers when extended.",
  },
  {
    id: "0864",
    name: "Cursola",
    region: "Galar",
    types: ["Ghost"],
    abilities: {
      normal: ["Weak Armor"],
      hidden: "Perish Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/cursola.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/cursola.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "95",
      def: "50",
      spa: "145",
      spd: "130",
      speed: "30",
    },
    eggGroups: ["Water 1", "Water 3"],
    genderRatios: [25, 75],
    description:
      "Its shell is overflowing with its heightened otherworldly energy. The ectoplasm serves as protection for this Pokémon's core spirit.",
  },
  {
    id: "0865",
    name: "Sirfetchd",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Steadfast"],
      hidden: "Scrappy",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/sirfetchd.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/sirfetchd.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "62",
      atk: "135",
      def: "95",
      spa: "68",
      spd: "82",
      speed: "65",
    },
    eggGroups: ["Flying", "Field"],
    genderRatios: [50, 50],
    description:
      "Only Farfetch'd that have survived many battles can attain this evolution. When this Pokémon's leek withers, it will retire from combat.",
  },
  {
    id: "0866",
    name: "Mr.Rime",
    region: "Galar",
    types: ["Ice", "Psychic"],
    abilities: {
      normal: ["Tangled Feet", "Screen Cleaner"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/mr.rime.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/mr.rime.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "85",
      def: "75",
      spa: "110",
      spd: "100",
      speed: "70",
    },
    eggGroups: ["Human-Like"],
    genderRatios: [50, 50],
    description:
      "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly.",
  },
  {
    id: "0867",
    name: "Runerigus",
    region: "Galar",
    types: ["Ground", "Ghost"],
    abilities: {
      normal: ["Wandering Spirit"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/runerigus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/runerigus.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "58",
      atk: "95",
      def: "145",
      spa: "50",
      spd: "105",
      speed: "30",
    },
    eggGroups: ["Mineral", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "A powerful curse was woven into an ancient painting. After absorbing the spirit of a Yamask, the painting began to move.",
  },
  {
    id: "0868",
    name: "Milcery",
    region: "Galar",
    types: ["Fairy"],
    abilities: {
      normal: ["Sweet Veil"],
      hidden: "Aroma Veil",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/milcery.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/milcery.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "45",
      atk: "40",
      def: "40",
      spa: "50",
      spd: "61",
      speed: "34",
    },
    eggGroups: ["Fairy", "Amorphous"],
    genderRatios: [0, 100],
    description:
      "They say that any patisserie visited by Milcery is guaranteed success and good fortune.",
  },
  {
    id: "0869",
    name: "Alcremie",
    region: "Galar",
    types: ["Fairy"],
    abilities: {
      normal: ["Sweet Veil"],
      hidden: "Aroma Veil",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/alcremie.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/alcremie.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "65",
      atk: "60",
      def: "75",
      spa: "110",
      spd: "121",
      speed: "64",
    },
    eggGroups: ["Fairy", "Amorphous"],
    genderRatios: [0, 100],
    description:
      "The moment it evolved, it took on a bitter flavor. This is because of the way its cells spontaneously shifted during evolution.",
  },
  {
    id: "0870",
    name: "Falinks",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Battle Armor"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/falinks.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/falinks.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "65",
      atk: "100",
      def: "100",
      spa: "70",
      spd: "60",
      speed: "75",
    },
    eggGroups: ["Fairy", "Mineral"],
    genderRatios: [0, 0],
    description:
      "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight.",
  },
  {
    id: "0871",
    name: "Pincurchin",
    region: "Galar",
    types: ["Electric"],
    abilities: {
      normal: ["Lightning Rod"],
      hidden: "Electric Surge",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/pincurchin.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/pincurchin.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "48",
      atk: "101",
      def: "95",
      spa: "91",
      spd: "85",
      speed: "15",
    },
    eggGroups: ["Water 1", "Amorphous"],
    genderRatios: [50, 50],
    description:
      "This Pokémon is so timid that even brushing against seaweed will make it discharge electricity in surprise. Its lips do not conduct electricity.",
  },
  {
    id: "0872",
    name: "Snom",
    region: "Galar",
    types: ["Ice", "Bug"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Ice Scales",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/snom.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/snom.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "30",
      atk: "25",
      def: "35",
      spa: "45",
      spd: "30",
      speed: "20",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "Within its internal organs, Snom amplifies the frigid air it gets from eating snow and then uses this amplified air to create icicle-like spikes.",
  },
  {
    id: "0873",
    name: "Frosmoth",
    region: "Galar",
    types: ["Ice", "Bug"],
    abilities: {
      normal: ["Shield Dust"],
      hidden: "Ice Scales",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/frosmoth.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/frosmoth.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "65",
      def: "60",
      spa: "125",
      spd: "90",
      speed: "65",
    },
    eggGroups: ["Bug"],
    genderRatios: [50, 50],
    description:
      "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away.",
  },
  {
    id: "0874",
    name: "Stonjourner",
    region: "Galar",
    types: ["Rock"],
    abilities: {
      normal: ["Power Spot"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/stonjourner.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/stonjourner.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "125",
      def: "135",
      spa: "20",
      spd: "20",
      speed: "70",
    },
    eggGroups: ["Mineral"],
    genderRatios: [50, 50],
    description:
      "The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon's habitat.",
  },
  {
    id: "0875",
    name: "Eiscue",
    region: "Galar",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Face"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/eiscue.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/eiscue.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "75",
      atk: "80",
      def: "110",
      spa: "65",
      spd: "90",
      speed: "50",
    },
    eggGroups: ["Water 1", "Field"],
    genderRatios: [50, 50],
    description:
      "If you lick the ice covering its face, you'll find it has a faintly salty taste. This species rode here on ocean currents from a cold, faraway land.",
  },
  {
    id: "0876",
    name: "Indeedee",
    region: "Galar",
    types: ["Psychic", "Normal"],
    abilities: {
      normal: ["Inner Focus", "Synchronize"],
      hidden: "Psychic Surge",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/indeedee.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/indeedee.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "65",
      def: "55",
      spa: "105",
      spd: "95",
      speed: "95",
    },
    eggGroups: ["Fairy"],
    genderRatios: [50, 50],
    description:
      "This Pokémon never leaves its Trainer's side. It predicts their actions with its psychic power and takes care of their day-to-day needs.",
  },
  {
    id: "0877",
    name: "Morpeko",
    region: "Galar",
    types: ["Electric", "Dark"],
    abilities: {
      normal: ["Hunger Switch"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/morpeko.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/morpeko.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "58",
      atk: "95",
      def: "58",
      spa: "70",
      spd: "58",
      speed: "97",
    },
    eggGroups: ["Field", "Fairy"],
    genderRatios: [50, 50],
    description:
      "It carries electrically roasted seeds with it as if they're precious treasures. No matter how much it eats, it always gets hungry again in short order.",
  },
  {
    id: "0878",
    name: "Cufant",
    region: "Galar",
    types: ["Steel"],
    abilities: {
      normal: ["Sheer Force"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/cufant.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/cufant.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "72",
      atk: "80",
      def: "49",
      spa: "40",
      spd: "49",
      speed: "40",
    },
    eggGroups: ["Field", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Cufant can lift loads weighing five tons. In the mornings, it heads into caves with its herd, in search of the ore on which these Pokémon feed.",
  },
  {
    id: "0879",
    name: "Copperajah",
    region: "Galar",
    types: ["Steel"],
    abilities: {
      normal: ["Sheer Force"],
      hidden: "Heavy Metal",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/copperajah.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/copperajah.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "122",
      atk: "130",
      def: "69",
      spa: "80",
      spd: "69",
      speed: "30",
    },
    eggGroups: ["Field", "Mineral"],
    genderRatios: [50, 50],
    description:
      "Copperajah are prideful, cantankerous Pokémon. Specimens with vibrant green skin command the respect of others of their kind.",
  },
  {
    id: "0880",
    name: "Dracozolt",
    region: "Galar",
    types: ["Electric", "Dragon"],
    abilities: {
      normal: ["Volt Absorb", "Hustle"],
      hidden: "Sand Rush",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dracozolt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dracozolt.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "90",
      atk: "100",
      def: "90",
      spa: "80",
      spd: "70",
      speed: "75",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "In ancient times, it was unbeatable thanks to its powerful lower body, but it went extinct anyway after it depleted all its plant-based food sources.",
  },
  {
    id: "0881",
    name: "Arctozolt",
    region: "Galar",
    types: ["Electric", "Ice"],
    abilities: {
      normal: ["Volt Absorb", "Static"],
      hidden: "Slush Rush",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/arctozolt.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/arctozolt.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "90",
      atk: "100",
      def: "90",
      spa: "90",
      spd: "80",
      speed: "55",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon lived on prehistoric seashores and was able to preserve food with the ice on its body. It went extinct because it moved so slowly.",
  },
  {
    id: "0882",
    name: "Dracovish",
    region: "Galar",
    types: ["Water", "Dragon"],
    abilities: {
      normal: ["Water Absorb", "Strong Jaw"],
      hidden: "Sand Rush",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dracovish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dracovish.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "90",
      atk: "90",
      def: "100",
      spa: "70",
      spd: "80",
      speed: "75",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokémon can't breathe unless it's underwater.",
  },
  {
    id: "0883",
    name: "Arctovish",
    region: "Galar",
    types: ["Water", "Ice"],
    abilities: {
      normal: ["Water Absorb", "Ice Body"],
      hidden: "Slush Rush",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/arctovish.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/arctovish.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "90",
      atk: "90",
      def: "100",
      spa: "80",
      spd: "90",
      speed: "55",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Though it's able to capture prey by freezing its surroundings, it has trouble eating the prey afterward because its mouth is on top of its head.",
  },
  {
    id: "0884",
    name: "Duraludon",
    region: "Galar",
    types: ["Steel", "Dragon"],
    abilities: {
      normal: ["Light Metal", "Heavy Metal"],
      hidden: "Stalwart",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/duraludon.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/duraludon.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "70",
      atk: "95",
      def: "115",
      spa: "120",
      spd: "50",
      speed: "85",
    },
    eggGroups: ["Mineral", "Dragon"],
    genderRatios: [50, 50],
    description:
      "The special metal that composes its body is very light, so this Pokémon has considerable agility. It lives in caves because it dislikes the rain.",
  },
  {
    id: "0885",
    name: "Dreepy",
    region: "Galar",
    types: ["Dragon", "Ghost"],
    abilities: {
      normal: ["Clear Body", "Infiltrator"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dreepy.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dreepy.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "28",
      atk: "60",
      def: "30",
      spa: "40",
      spd: "30",
      speed: "82",
    },
    eggGroups: ["Amorphous", "Dragon"],
    genderRatios: [50, 50],
    description:
      "It has a habit of biting at Clauncher even though it doesn't feed on them. This is said to be vestigial behavior from when Dreepy was alive.",
  },
  {
    id: "0886",
    name: "Drakloak",
    region: "Galar",
    types: ["Dragon", "Ghost"],
    abilities: {
      normal: ["Clear Body", "Infiltrator"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/drakloak.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/drakloak.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "68",
      atk: "80",
      def: "50",
      spa: "60",
      spd: "50",
      speed: "102",
    },
    eggGroups: ["Amorphous", "Dragon"],
    genderRatios: [50, 50],
    description:
      "This Pokémon flies around at over 120 miles per hour. If a Drakloak is defeated in a battle, its Dreepy will wander off without a second thought.",
  },
  {
    id: "0887",
    name: "Dragapult",
    region: "Galar",
    types: ["Dragon", "Ghost"],
    abilities: {
      normal: ["Clear Body", "Infiltrator"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/dragapult.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/dragapult.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "88",
      atk: "120",
      def: "75",
      spa: "100",
      spd: "75",
      speed: "142",
    },
    eggGroups: ["Amorphous", "Dragon"],
    genderRatios: [50, 50],
    description:
      "Dragapult can make its whole body transparent by clearing its mind and focusing. Even the Dreepy in Dragapult's horns become invisible.",
  },
  {
    id: "0888",
    name: "Zacian",
    region: "Galar",
    types: ["Fairy"],
    abilities: {
      normal: ["Intrepid Sword"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/zacian.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/zacian.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "92",
      atk: "130",
      def: "115",
      spa: "80",
      spd: "115",
      speed: "138",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon has slumbered for many years. Some say it's Zamazenta's elder sister—others say the two Pokémon are rivals.",
  },
  {
    id: "0889",
    name: "Zamazenta",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Dauntless Shield"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/zamazenta.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/zamazenta.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "92",
      atk: "130",
      def: "115",
      spa: "80",
      spd: "115",
      speed: "138",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon slept for aeons while in the form of a statue. It was asleep for so long, people forgot that it ever existed.",
  },
  {
    id: "0890",
    name: "Eternatus",
    region: "Galar",
    types: ["Poison", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/eternatus.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/eternatus.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "140",
      atk: "85",
      def: "95",
      spa: "145",
      spd: "95",
      speed: "130",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It was inside a meteorite that fell 20,000 years ago. There seems to be a connection between this Pokémon and the Dynamax phenomenon.",
  },
  {
    id: "0891",
    name: "Kubfu",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/kubfu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/kubfu.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "60",
      atk: "90",
      def: "60",
      spa: "53",
      spd: "50",
      speed: "72",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [87.5, 12.5],
    description:
      "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly.",
  },
  {
    id: "0892",
    name: "Urshifu",
    region: "Galar",
    types: ["Fighting", "Dark"],
    abilities: {
      normal: ["Unseen Fist"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/urshifu.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/urshifu.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "130",
      def: "100",
      spa: "63",
      spd: "60",
      speed: "97",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [87.5, 12.5],
    description:
      "This form of Urshifu is a strong believer in the one-hit KO. Its strategy is to leap in close to foes and land a devastating blow with a hardened fist.",
  },
  {
    id: "0893",
    name: "Zarude",
    region: "Galar",
    types: ["Dark", "Grass"],
    abilities: {
      normal: ["Leaf Guard"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/zarude.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/zarude.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "105",
      atk: "120",
      def: "105",
      spa: "70",
      spd: "95",
      speed: "105",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Within dense forests, this Pokémon lives in a pack with others of its kind. It's incredibly aggressive, and the other Pokémon of the forest fear it.",
  },
  {
    id: "0894",
    name: "Regieleki",
    region: "Galar",
    types: ["Electric"],
    abilities: {
      normal: ["Transistor"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/regieleki.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/regieleki.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "50",
      spa: "100",
      spd: "50",
      speed: "200",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "This Pokémon is a cluster of electrical energy. It's said that removing the rings on Regieleki's body will unleash the Pokémon's latent power.",
  },
  {
    id: "0895",
    name: "Regidrago",
    region: "Galar",
    types: ["Dragon"],
    abilities: {
      normal: ["Dragon's Maw"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/regidrago.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/regidrago.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "200",
      atk: "100",
      def: "50",
      spa: "100",
      spd: "50",
      speed: "80",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "An academic theory proposes that Regidrago's arms were once the head of an ancient dragon Pokémon. The theory remains unproven.",
  },
  {
    id: "0896",
    name: "Glastrier",
    region: "Galar",
    types: ["Ice"],
    abilities: {
      normal: ["Chilling Neigh"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/glastrier.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/glastrier.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "145",
      def: "130",
      spa: "65",
      spd: "110",
      speed: "30",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Glastrier emits intense cold from its hooves. It's also a belligerent Pokémon—anything it wants, it takes by force.",
  },
  {
    id: "0897",
    name: "Spectrier",
    region: "Galar",
    types: ["Ghost"],
    abilities: {
      normal: ["Grim Neigh"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/spectrier.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/spectrier.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "65",
      def: "60",
      spa: "145",
      spd: "80",
      speed: "130",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "It probes its surroundings with all its senses save one—it doesn't use its sense of sight. Spectrier's kicks are said to separate soul from body.",
  },
  {
    id: "0898",
    name: "Calyrex",
    region: "Galar",
    types: ["Psychic", "Grass"],
    abilities: {
      normal: ["Unnerve"],
      hidden: "No Hidden",
    },
    frontSprite: {
      normal:
        "https://projectpokemon.org/images/sprites-models/swsh-normal-sprites/calyrex.gif",
      shiny:
        "https://projectpokemon.org/images/sprites-models/swsh-shiny-sprites/calyrex.gif",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "100",
      atk: "80",
      def: "80",
      spa: "80",
      spd: "80",
      speed: "80",
    },
    eggGroups: ["No Eggs Discovered"],
    genderRatios: [0, 0],
    description:
      "Calyrex is known in legend as a king that ruled over Galar in ancient times. It has the power to cause hearts to mend and plants to spring forth.",
  },
];

export default Pokedex;
