// import { readFileSync } from 'fs';

import Learnsets from "./utils/learnset.js";

// const path = '../../res/json/pokedex.json';
// const jsonString = readFileSync(path, 'utf-8');
// const Pokedex = JSON.parse(jsonString);

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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0001",
    genderRatios: [],
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0002",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0003",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0004",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0005",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0006",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0007",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0008",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0009",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0010",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0011",
    name: "Metapod",
    region: "Kanto",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0011",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0012",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0013",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0014",
    name: "Kakuna",
    region: "Kanto",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0014",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0015",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0016",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0017",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0018",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0019",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0020",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0021",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0022",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0023",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0024",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0025",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0026",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0027",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0028",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0029",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0030",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0031",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0032",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0033",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0034",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0035",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0036",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0037",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0038",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0039",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0040",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0041",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0042",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0043",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0044",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0045",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0046",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0047",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0048",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0049",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0050",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0051",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0052",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0053",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0054",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0055",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0056",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0057",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0058",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0059",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0060",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0061",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0062",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0063",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0064",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0065",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0066",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0067",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0068",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0069",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0070",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0071",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0072",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0073",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0074",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0075",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0076",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0077",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0078",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0079",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0080",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0081",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0082",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0083",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0084",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0085",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0086",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0087",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0088",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0089",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0090",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0091",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0092",
    name: "Gastly",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0092",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0093",
    name: "Haunter",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0093",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0094",
    name: "Gengar",
    region: "Kanto",
    types: ["Ghost", "Poison"],
    abilities: {
      normal: ["Cursed BodyGen VII+"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0094",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0095",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0096",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0097",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0098",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0099",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0100",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0101",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0102",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0103",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0104",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0105",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0106",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0107",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0108",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0109",
    name: "Koffing",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Levitate", "Neutralizing GasGen VIII+"],
      hidden: "StenchGen VIII+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0109",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0110",
    name: "Weezing",
    region: "Kanto",
    types: ["Poison"],
    abilities: {
      normal: ["Levitate", "Neutralizing GasGen VIII+"],
      hidden: "StenchGen VIII+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0110",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0111",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0112",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0113",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0114",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0115",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0116",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0117",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0118",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0119",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0120",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0121",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0122",
    name: "Mr Mime",
    region: "Kanto",
    types: ["Psychic", "Fairy"],
    abilities: {
      normal: ["Soundproof", "Filter"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0122",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0123",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0124",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0125",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0126",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0127",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0128",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0129",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0130",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0131",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0132",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0133",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0134",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0135",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0136",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0137",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0138",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0139",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0140",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0141",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0142",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0143",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0144",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0145",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0146",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0147",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0148",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0149",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0150",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0151",
    name: "Mew",
    region: "Kanto",
    types: ["Psychic"],
    abilities: {
      normal: ["Synchronize"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0151",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0152",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0153",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0154",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0155",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0156",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0157",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0158",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0159",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0160",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0161",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0162",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0163",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0164",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0165",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0166",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0167",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0168",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0169",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0170",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0171",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0172",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0173",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0174",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0175",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0176",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0177",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0178",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0179",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0180",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0181",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0182",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0183",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0184",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0185",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0186",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0187",
    name: "Hoppip",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf GuardGen IV+"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0187",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0188",
    name: "Skiploom",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf GuardGen IV+"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0188",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0189",
    name: "Jumpluff",
    region: "Johto",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Leaf GuardGen IV+"],
      hidden: "Infiltrator",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0189",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0190",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0191",
    name: "Sunkern",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Solar PowerGen IV+"],
      hidden: "Early Bird",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0191",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0192",
    name: "Sunflora",
    region: "Johto",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll", "Solar PowerGen IV+"],
      hidden: "Early Bird",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0192",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0193",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0194",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0195",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0196",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0197",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0198",
    name: "Murkrow",
    region: "Johto",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Insomnia", "Super LuckGen IV+"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0198",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0199",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0200",
    name: "Misdreavus",
    region: "Johto",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0200",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0201",
    name: "Unown",
    region: "Johto",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0201",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0202",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0203",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0204",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0205",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0206",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0207",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0208",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0209",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0210",
    name: "Granbull",
    region: "Johto",
    types: ["Fairy"],
    abilities: {
      normal: ["Intimidate", "Quick FeetGen IV+"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0210",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0211",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0212",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0213",
    name: "Shuckle",
    region: "Johto",
    types: ["Bug", "Rock"],
    abilities: {
      normal: ["Sturdy", "GluttonyGen IV+"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0213",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0214",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0215",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0216",
    name: "Teddiursa",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "Quick FeetGen IV+"],
      hidden: "Honey Gather",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0216",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0217",
    name: "Ursaring",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Guts", "Quick FeetGen IV+"],
      hidden: "Unnerve",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0217",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0218",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0219",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0220",
    name: "Swinub",
    region: "Johto",
    types: ["Ice", "Ground"],
    abilities: {
      normal: ["Oblivious", "Snow CloakGen IV+"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0220",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0221",
    name: "Piloswine",
    region: "Johto",
    types: ["Ice", "Ground"],
    abilities: {
      normal: ["Oblivious", "Snow CloakGen IV+"],
      hidden: "Thick Fat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0221",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0222",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0223",
    name: "Remoraid",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Hustle", "SniperGen IV+"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0223",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0224",
    name: "Octillery",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Suction Cups", "SniperGen IV+"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0224",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0225",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0226",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0227",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0228",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0229",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0230",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0231",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0232",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0233",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0234",
    name: "Stantler",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Intimidate", "FriskGen IV+"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0234",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0235",
    name: "Smeargle",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "TechnicianGen IV+"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0235",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0236",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0237",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0238",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0239",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0240",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0241",
    name: "Miltank",
    region: "Johto",
    types: ["Normal"],
    abilities: {
      normal: ["Thick Fat", "ScrappyGen IV+"],
      hidden: "Sap Sipper",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0241",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0242",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0243",
    name: "Raikou",
    region: "Johto",
    types: ["Electric"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner FocusGen VII+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0243",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0244",
    name: "Entei",
    region: "Johto",
    types: ["Fire"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner FocusGen VII+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0244",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0245",
    name: "Suicune",
    region: "Johto",
    types: ["Water"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Inner FocusGen VII+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0245",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0246",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0247",
    name: "Pupitar",
    region: "Johto",
    types: ["Rock", "Ground"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0247",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0248",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0249",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0250",
    name: "Ho Oh",
    region: "Johto",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Regenerator",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0250",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0251",
    name: "Celebi",
    region: "Johto",
    types: ["Psychic", "Grass"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0251",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0252",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0253",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0254",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0255",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0256",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0257",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0258",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0259",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0260",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0261",
    name: "Poochyena",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Run Away", "Quick FeetGen IV+"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0261",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0262",
    name: "Mightyena",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Intimidate", "Quick FeetGen IV+"],
      hidden: "Moxie",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0262",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0263",
    name: "Zigzagoon",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "GluttonyGen IV+"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0263",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0264",
    name: "Linoone",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Pickup", "GluttonyGen IV+"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0264",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0265",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0266",
    name: "Silcoon",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0266",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0267",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0268",
    name: "Cascoon",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Shed Skin"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0268",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0269",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0270",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0271",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0272",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0273",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0274",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0275",
    name: "Shiftry",
    region: "Hoenn",
    types: ["Grass", "Dark"],
    abilities: {
      normal: ["Chlorophyll", "Wind RiderGen IX+"],
      hidden: "Pickpocket",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0275",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0276",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0277",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0278",
    name: "Wingull",
    region: "Hoenn",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "HydrationGen VII+"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0278",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0279",
    name: "Pelipper",
    region: "Hoenn",
    types: ["Water", "Flying"],
    abilities: {
      normal: ["Keen Eye", "DrizzleGen VII+"],
      hidden: "Rain Dish",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0279",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "28",
      atk: "25",
      def: "25",
      spa: "45",
      spd: "35",
      speed: "40",
    },
    eggGroups: ["Human-Like*", "Amorphous"],
    learnsets: "0280",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "38",
      atk: "35",
      def: "35",
      spa: "65",
      spd: "55",
      speed: "50",
    },
    eggGroups: ["Human-Like*", "Amorphous"],
    learnsets: "0281",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "68",
      atk: "65",
      def: "65",
      spa: "125",
      spd: "115",
      speed: "80",
    },
    eggGroups: ["Human-Like*", "Amorphous"],
    learnsets: "0282",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0283",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0284",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0285",
    name: "Shroomish",
    region: "Hoenn",
    types: ["Grass"],
    abilities: {
      normal: ["Effect Spore", "Poison HealGen IV+"],
      hidden: "Quick Feet",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0285",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0286",
    name: "Breloom",
    region: "Hoenn",
    types: ["Grass", "Fighting"],
    abilities: {
      normal: ["Effect Spore", "Poison HealGen IV+"],
      hidden: "Technician",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0286",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0287",
    name: "Slakoth",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Truant"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0287",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0288",
    name: "Vigoroth",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Vital Spirit"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0288",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0289",
    name: "Slaking",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Truant"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0289",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0290",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0291",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0292",
    name: "Shedinja",
    region: "Hoenn",
    types: ["Bug", "Ghost"],
    abilities: {
      normal: ["Wonder Guard"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0292",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0293",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0294",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0295",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0296",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0297",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0298",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0299",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0300",
    name: "Skitty",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "NormalizeGen IV+"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0300",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0301",
    name: "Delcatty",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Cute Charm", "NormalizeGen IV+"],
      hidden: "Wonder Skin",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0301",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0302",
    name: "Sableye",
    region: "Hoenn",
    types: ["Dark", "Ghost"],
    abilities: {
      normal: ["Keen Eye", "StallGen IV+"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0302",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0303",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0304",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0305",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0306",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0307",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0308",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0309",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0310",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0311",
    name: "Plusle",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Plus"],
      hidden: "Lightning RodGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0311",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0312",
    name: "Minun",
    region: "Hoenn",
    types: ["Electric"],
    abilities: {
      normal: ["Minus"],
      hidden: "Volt AbsorbGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0312",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0313",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0314",
    name: "Illumise",
    region: "Hoenn",
    types: ["Bug"],
    abilities: {
      normal: ["Oblivious", "Tinted LensGen IV+"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0314",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0315",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0316",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0317",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0318",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0319",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0320",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0321",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0322",
    name: "Numel",
    region: "Hoenn",
    types: ["Fire", "Ground"],
    abilities: {
      normal: ["Oblivious", "SimpleGen IV+"],
      hidden: "Own Tempo",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0322",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0323",
    name: "Camerupt",
    region: "Hoenn",
    types: ["Fire", "Ground"],
    abilities: {
      normal: ["Magma Armor", "Solid RockGen IV+"],
      hidden: "Anger Point",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0323",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0324",
    name: "Torkoal",
    region: "Hoenn",
    types: ["Fire"],
    abilities: {
      normal: ["White Smoke", "DroughtGen VII+"],
      hidden: "Shell Armor",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0324",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0325",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0326",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0327",
    name: "Spinda",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Own Tempo", "Tangled FeetGen IV+"],
      hidden: "Contrary",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0327",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "45",
      atk: "100",
      def: "45",
      spa: "45",
      spd: "45",
      speed: "10",
    },
    eggGroups: ["Bug", "Dragon*"],
    learnsets: "0328",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0329",
    name: "Vibrava",
    region: "Hoenn",
    types: ["Ground", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "50",
      atk: "70",
      def: "50",
      spa: "50",
      spd: "50",
      speed: "70",
    },
    eggGroups: ["Bug", "Dragon*"],
    learnsets: "0329",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0330",
    name: "Flygon",
    region: "Hoenn",
    types: ["Ground", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "80",
      atk: "100",
      def: "80",
      spa: "80",
      spd: "80",
      speed: "100",
    },
    eggGroups: ["Bug", "Dragon*"],
    learnsets: "0330",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0331",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0332",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0333",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0334",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0335",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0336",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0337",
    name: "Lunatone",
    region: "Hoenn",
    types: ["Rock", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0337",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0338",
    name: "Solrock",
    region: "Hoenn",
    types: ["Rock", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0338",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0339",
    name: "Barboach",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Oblivious", "AnticipationGen IV+"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0339",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0340",
    name: "Whiscash",
    region: "Hoenn",
    types: ["Water", "Ground"],
    abilities: {
      normal: ["Oblivious", "AnticipationGen IV+"],
      hidden: "Hydration",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0340",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0341",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0342",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0343",
    name: "Baltoy",
    region: "Hoenn",
    types: ["Ground", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0343",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0344",
    name: "Claydol",
    region: "Hoenn",
    types: ["Ground", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0344",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0345",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0346",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0347",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0348",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0349",
    name: "Feebas",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Swift Swim", "ObliviousGen VI+"],
      hidden: "Adaptability",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0349",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0350",
    name: "Milotic",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Marvel Scale", "CompetitiveGen VI+"],
      hidden: "Cute Charm",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0350",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0351",
    name: "Castform",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Forecast"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0351",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0352",
    name: "Kecleon",
    region: "Hoenn",
    types: ["Normal"],
    abilities: {
      normal: ["Color Change"],
      hidden: "ProteanGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0352",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0353",
    name: "Shuppet",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Insomnia", "FriskGen IV+"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0353",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0354",
    name: "Banette",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Insomnia", "FriskGen IV+"],
      hidden: "Cursed Body",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0354",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0355",
    name: "Duskull",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "FriskGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0355",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0356",
    name: "Dusclops",
    region: "Hoenn",
    types: ["Ghost"],
    abilities: {
      normal: ["Pressure"],
      hidden: "FriskGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0356",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0357",
    name: "Tropius",
    region: "Hoenn",
    types: ["Grass", "Flying"],
    abilities: {
      normal: ["Chlorophyll", "Solar PowerGen IV+"],
      hidden: "Harvest",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0357",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0358",
    name: "Chimecho",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0358",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0359",
    name: "Absol",
    region: "Hoenn",
    types: ["Dark"],
    abilities: {
      normal: ["Pressure", "Super LuckGen IV+"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0359",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0360",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0361",
    name: "Snorunt",
    region: "Hoenn",
    types: ["Ice"],
    abilities: {
      normal: ["Inner Focus", "Ice BodyGen IV+"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0361",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0362",
    name: "Glalie",
    region: "Hoenn",
    types: ["Ice"],
    abilities: {
      normal: ["Inner Focus", "Ice BodyGen IV+"],
      hidden: "Moody",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0362",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0363",
    name: "Spheal",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice BodyGen IV+"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0363",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0364",
    name: "Sealeo",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice BodyGen IV+"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0364",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0365",
    name: "Walrein",
    region: "Hoenn",
    types: ["Ice", "Water"],
    abilities: {
      normal: ["Thick Fat", "Ice BodyGen IV+"],
      hidden: "Oblivious",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0365",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0366",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0367",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0368",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0369",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0370",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0371",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0372",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0373",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0374",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0375",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0376",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0377",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0378",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0379",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0380",
    name: "Latias",
    region: "Hoenn",
    types: ["Dragon", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0380",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0381",
    name: "Latios",
    region: "Hoenn",
    types: ["Dragon", "Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0381",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0382",
    name: "Kyogre",
    region: "Hoenn",
    types: ["Water"],
    abilities: {
      normal: ["Drizzle"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0382",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0383",
    name: "Groudon",
    region: "Hoenn",
    types: ["Ground"],
    abilities: {
      normal: ["Drought"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0383",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0384",
    name: "Rayquaza",
    region: "Hoenn",
    types: ["Dragon", "Flying"],
    abilities: {
      normal: ["Air Lock"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0384",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0385",
    name: "Jirachi",
    region: "Hoenn",
    types: ["Steel", "Psychic"],
    abilities: {
      normal: ["Serene Grace"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0385",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0386",
    name: "Deoxys Normal",
    region: "Hoenn",
    types: ["Psychic"],
    abilities: {
      normal: ["Pressure"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0386",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0387",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0388",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0389",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0390",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0391",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0392",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0393",
    name: "Piplup",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "CompetitiveGen IX+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0393",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0394",
    name: "Prinplup",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Torrent"],
      hidden: "CompetitiveGen IX+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0394",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0395",
    name: "Empoleon",
    region: "Sinnoh",
    types: ["Water", "Steel"],
    abilities: {
      normal: ["Torrent"],
      hidden: "CompetitiveGen IX+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0395",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0396",
    name: "Starly",
    region: "Sinnoh",
    types: ["Normal", "Flying"],
    abilities: {
      normal: ["Keen Eye"],
      hidden: "RecklessGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0396",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0397",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0398",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0399",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0400",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0401",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0402",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0403",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0404",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0405",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0406",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0407",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0408",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0409",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0410",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0411",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0412",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0413",
    name: "Wormadam Plant",
    region: "Sinnoh",
    types: ["Bug", "Grass"],
    abilities: {
      normal: ["Anticipation"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0413",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0414",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0415",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0416",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0417",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0418",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0419",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0420",
    name: "Cherubi",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Chlorophyll"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0420",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0421",
    name: "Cherrim",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Flower Gift"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0421",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0422",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0423",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0424",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0425",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0426",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0427",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0428",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0429",
    name: "Mismagius",
    region: "Sinnoh",
    types: ["Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0429",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0430",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0431",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0432",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0433",
    name: "Chingling",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0433",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0434",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0435",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0436",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0437",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0438",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0439",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0440",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0441",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0442",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0443",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0444",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0445",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0446",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0447",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0448",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0449",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0450",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0451",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0452",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0453",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0454",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0455",
    name: "Carnivine",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0455",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0456",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0457",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0458",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0459",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0460",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0461",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0462",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0463",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0464",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0465",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0466",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0467",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0468",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0469",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0470",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0471",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0472",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0473",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0474",
    name: "Porygon Z",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Adaptability", "Download"],
      hidden: "Analytic",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0474",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0475",
    name: "Gallade",
    region: "Sinnoh",
    types: ["Psychic", "Fighting"],
    abilities: {
      normal: ["Steadfast", "SharpnessGen IX+"],
      hidden: "Justified",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "68",
      atk: "125",
      def: "65",
      spa: "65",
      spd: "115",
      speed: "80",
    },
    eggGroups: ["Human-Like*", "Amorphous"],
    learnsets: "0475",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0476",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0477",
    name: "Dusknoir",
    region: "Sinnoh",
    types: ["Ghost"],
    abilities: {
      normal: ["Pressure"],
      hidden: "FriskGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0477",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0478",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0479",
    name: "Rotom",
    region: "Sinnoh",
    types: ["Electric", "Ghost"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0479",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0480",
    name: "Uxie",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0480",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0481",
    name: "Mesprit",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0481",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0482",
    name: "Azelf",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0482",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0483",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0484",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0485",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0486",
    name: "Regigigas",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Slow Start"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0486",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0487",
    name: "Giratina Altered",
    region: "Sinnoh",
    types: ["Ghost", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "Telepathy",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0487",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0488",
    name: "Cresselia",
    region: "Sinnoh",
    types: ["Psychic"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0488",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0489",
    name: "Phione",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Hydration"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0489",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0490",
    name: "Manaphy",
    region: "Sinnoh",
    types: ["Water"],
    abilities: {
      normal: ["Hydration"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0490",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0491",
    name: "Darkrai",
    region: "Sinnoh",
    types: ["Dark"],
    abilities: {
      normal: ["Bad Dreams"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0491",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0492",
    name: "Shaymin Land",
    region: "Sinnoh",
    types: ["Grass"],
    abilities: {
      normal: ["Natural Cure"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0492",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0493",
    name: "Arceus",
    region: "Sinnoh",
    types: ["Normal"],
    abilities: {
      normal: ["Multitype"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0493",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0494",
    name: "Victini",
    region: "Unova",
    types: ["Psychic", "Fire"],
    abilities: {
      normal: ["Victory Star"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0494",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0495",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0496",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0497",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0498",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0499",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0500",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0501",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0502",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0503",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0504",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0505",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0506",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0507",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0508",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0509",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0510",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0511",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0512",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0513",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0514",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0515",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0516",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0517",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0518",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0519",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0520",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0521",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0522",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0523",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0524",
    name: "Roggenrola",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Weak ArmorGen VII+"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0524",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0525",
    name: "Boldore",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Weak ArmorGen VII+"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0525",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0526",
    name: "Gigalith",
    region: "Unova",
    types: ["Rock"],
    abilities: {
      normal: ["Sturdy", "Sand StreamGen VII+"],
      hidden: "Sand Force",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0526",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0527",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0528",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0529",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0530",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0531",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0532",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0533",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0534",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0535",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0536",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0537",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0538",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0539",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0540",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0541",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0542",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0543",
    name: "Venipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed BoostGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0543",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0544",
    name: "Whirlipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed BoostGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0544",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0545",
    name: "Scolipede",
    region: "Unova",
    types: ["Bug", "Poison"],
    abilities: {
      normal: ["Poison Point", "Swarm"],
      hidden: "Speed BoostGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0545",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0546",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0547",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0548",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0549",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0550",
    name: "Basculin Red Striped",
    region: "Unova",
    types: ["Water"],
    abilities: {
      normal: ["Reckless", "Adaptability"],
      hidden: "Mold Breaker",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0550",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0551",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0552",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0553",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0554",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0555",
    name: "Darmanitan Standard",
    region: "Unova",
    types: ["Fire"],
    abilities: {
      normal: ["Sheer Force"],
      hidden: "Zen Mode",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0555",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0556",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0557",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0558",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0559",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0560",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0561",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0562",
    name: "Yamask",
    region: "Unova",
    types: ["Ghost"],
    abilities: {
      normal: ["Mummy"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0562",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0563",
    name: "Cofagrigus",
    region: "Unova",
    types: ["Ghost"],
    abilities: {
      normal: ["Mummy"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0563",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0564",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0565",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0566",
    name: "Archen",
    region: "Unova",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Defeatist"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0566",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0567",
    name: "Archeops",
    region: "Unova",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Defeatist"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0567",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0568",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0569",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0570",
    name: "Zorua",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Illusion"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0570",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0571",
    name: "Zoroark",
    region: "Unova",
    types: ["Dark"],
    abilities: {
      normal: ["Illusion"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0571",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0572",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0573",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0574",
    name: "Gothita",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "CompetitiveGen VI+"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0574",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0575",
    name: "Gothorita",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "CompetitiveGen VI+"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0575",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0576",
    name: "Gothitelle",
    region: "Unova",
    types: ["Psychic"],
    abilities: {
      normal: ["Frisk", "CompetitiveGen VI+"],
      hidden: "Shadow Tag",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0576",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0577",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0578",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0579",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0580",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0581",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0582",
    name: "Vanillite",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow CloakGen VII+"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0582",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0583",
    name: "Vanillish",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow CloakGen VII+"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0583",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0584",
    name: "Vanilluxe",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Body", "Snow WarningGen VII+"],
      hidden: "Weak Armor",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0584",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0585",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0586",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0587",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0588",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0589",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0590",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0591",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0592",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0593",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0594",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0595",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0596",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0597",
    name: "Ferroseed",
    region: "Unova",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Iron Barbs"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0597",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0598",
    name: "Ferrothorn",
    region: "Unova",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Iron Barbs"],
      hidden: "AnticipationGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0598",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0599",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0600",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0601",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0602",
    name: "Tynamo",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0602",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0603",
    name: "Eelektrik",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0603",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0604",
    name: "Eelektross",
    region: "Unova",
    types: ["Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0604",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0605",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0606",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0607",
    name: "Litwick",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "InfiltratorGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0607",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0608",
    name: "Lampent",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "InfiltratorGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0608",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0609",
    name: "Chandelure",
    region: "Unova",
    types: ["Ghost", "Fire"],
    abilities: {
      normal: ["Flash Fire", "Flame Body"],
      hidden: "InfiltratorGen VI+",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0609",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0610",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0611",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0612",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0613",
    name: "Cubchoo",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Snow Cloak", "Slush RushGen VII+"],
      hidden: "Rattled",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0613",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0614",
    name: "Beartic",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Snow Cloak", "Slush RushGen VII+"],
      hidden: "Swift Swim",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0614",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0615",
    name: "Cryogonal",
    region: "Unova",
    types: ["Ice"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0615",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0616",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0617",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0618",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0619",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0620",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0621",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0622",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0623",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0624",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0625",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0626",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0627",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0628",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0629",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0630",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0631",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0632",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0633",
    name: "Deino",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Hustle"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0633",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0634",
    name: "Zweilous",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Hustle"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0634",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0635",
    name: "Hydreigon",
    region: "Unova",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0635",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0636",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0637",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0638",
    name: "Cobalion",
    region: "Unova",
    types: ["Steel", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0638",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0639",
    name: "Terrakion",
    region: "Unova",
    types: ["Rock", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0639",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0640",
    name: "Virizion",
    region: "Unova",
    types: ["Grass", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0640",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0641",
    name: "Tornadus Incarnate",
    region: "Unova",
    types: ["Flying"],
    abilities: {
      normal: ["Prankster"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0641",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0642",
    name: "Thundurus Incarnate",
    region: "Unova",
    types: ["Electric", "Flying"],
    abilities: {
      normal: ["Prankster"],
      hidden: "Defiant",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0642",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0643",
    name: "Reshiram",
    region: "Unova",
    types: ["Dragon", "Fire"],
    abilities: {
      normal: ["Turboblaze"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0643",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0644",
    name: "Zekrom",
    region: "Unova",
    types: ["Dragon", "Electric"],
    abilities: {
      normal: ["Teravolt"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0644",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0645",
    name: "Landorus Incarnate",
    region: "Unova",
    types: ["Ground", "Flying"],
    abilities: {
      normal: ["Sand Force"],
      hidden: "Sheer Force",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0645",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0646",
    name: "Kyurem",
    region: "Unova",
    types: ["Dragon", "Ice"],
    abilities: {
      normal: ["Pressure"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0646",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0647",
    name: "Keldeo Ordinary",
    region: "Unova",
    types: ["Water", "Fighting"],
    abilities: {
      normal: ["Justified"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0647",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0648",
    name: "Meloetta Aria",
    region: "Unova",
    types: ["Normal", "Psychic"],
    abilities: {
      normal: ["Serene Grace"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0648",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0649",
    name: "Genesect",
    region: "Unova",
    types: ["Bug", "Steel"],
    abilities: {
      normal: ["Download"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0649",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0650",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0651",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0652",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0653",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0654",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0655",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0656",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0657",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0658",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0659",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0660",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0661",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0662",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0663",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0664",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0665",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0666",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0667",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0668",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0669",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0670",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0671",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0672",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0673",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0674",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0675",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0676",
    name: "Furfrou",
    region: "Kalos",
    types: ["Normal"],
    abilities: {
      normal: ["Fur Coat"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0676",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0677",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0678",
    name: "Meowstic Male",
    region: "Kalos",
    types: ["Psychic"],
    abilities: {
      normal: ["Keen Eye", "Infiltrator"],
      hidden: "Prankster",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0678",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0679",
    name: "Honedge",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["No Guard"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0679",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0680",
    name: "Doublade",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["No Guard"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0680",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0681",
    name: "Aegislash Shield",
    region: "Kalos",
    types: ["Steel", "Ghost"],
    abilities: {
      normal: ["Stance Change"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0681",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0682",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0683",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0684",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0685",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0686",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0687",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0688",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0689",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0690",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0691",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0692",
    name: "Clauncher",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Mega Launcher"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0692",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0693",
    name: "Clawitzer",
    region: "Kalos",
    types: ["Water"],
    abilities: {
      normal: ["Mega Launcher"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0693",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0694",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0695",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0696",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0697",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0698",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0699",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0700",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "78",
      atk: "92",
      def: "75",
      spa: "74",
      spd: "63",
      speed: "118",
    },
    eggGroups: ["Flying*", "Human-Like"],
    learnsets: "0701",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0702",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0703",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0704",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0705",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0706",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0707",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0708",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0709",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0710",
    name: "Pumpkaboo Average",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Pickup", "Frisk"],
      hidden: "Insomnia",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0710",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0711",
    name: "Gourgeist Average",
    region: "Kalos",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Pickup", "Frisk"],
      hidden: "Insomnia",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0711",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "55",
      atk: "69",
      def: "85",
      spa: "32",
      spd: "35",
      speed: "28",
    },
    eggGroups: ["Monster", "Mineral*"],
    learnsets: "0712",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "95",
      atk: "117",
      def: "184",
      spa: "44",
      spd: "46",
      speed: "28",
    },
    eggGroups: ["Monster", "Mineral*"],
    learnsets: "0713",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "40",
      atk: "30",
      def: "35",
      spa: "45",
      spd: "40",
      speed: "55",
    },
    eggGroups: ["Flying", "Dragon*"],
    learnsets: "0714",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
    },
    stats: {
      hp: "85",
      atk: "70",
      def: "80",
      spa: "97",
      spd: "80",
      speed: "123",
    },
    eggGroups: ["Flying", "Dragon*"],
    learnsets: "0715",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0716",
    name: "Xerneas",
    region: "Kalos",
    types: ["Fairy"],
    abilities: {
      normal: ["Fairy Aura"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0716",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0717",
    name: "Yveltal",
    region: "Kalos",
    types: ["Dark", "Flying"],
    abilities: {
      normal: ["Dark Aura"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0717",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0718",
    name: "Zygarde 50",
    region: "Kalos",
    types: ["Dragon", "Ground"],
    abilities: {
      normal: ["Aura Break", "Power ConstructGen VII+"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0718",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0719",
    name: "Diancie",
    region: "Kalos",
    types: ["Rock", "Fairy"],
    abilities: {
      normal: ["Clear Body"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0719",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0720",
    name: "Hoopa",
    region: "Kalos",
    types: ["Psychic", "Ghost"],
    abilities: {
      normal: ["Magician"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0720",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0721",
    name: "Volcanion",
    region: "Kalos",
    types: ["Fire", "Water"],
    abilities: {
      normal: ["Water Absorb"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0721",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0722",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0723",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0724",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0725",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0726",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0727",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0728",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0729",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0730",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0731",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0732",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0733",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0734",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0735",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0736",
    name: "Grubbin",
    region: "Alola",
    types: ["Bug"],
    abilities: {
      normal: ["Swarm"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0736",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0737",
    name: "Charjabug",
    region: "Alola",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Battery"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0737",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0738",
    name: "Vikavolt",
    region: "Alola",
    types: ["Bug", "Electric"],
    abilities: {
      normal: ["Levitate"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0738",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0739",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0740",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0741",
    name: "Oricorio Baile",
    region: "Alola",
    types: ["Fire", "Flying"],
    abilities: {
      normal: ["Dancer"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0741",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0742",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0743",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0744",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0745",
    name: "Lycanroc Midday",
    region: "Alola",
    types: ["Rock"],
    abilities: {
      normal: ["Keen Eye", "Sand Rush"],
      hidden: "Steadfast",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0745",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0746",
    name: "Wishiwashi Solo",
    region: "Alola",
    types: ["Water"],
    abilities: {
      normal: ["Schooling"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0746",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0747",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0748",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0749",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0750",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0751",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0752",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0753",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0754",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0755",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0756",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0757",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0758",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0759",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0760",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0761",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0762",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0763",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0764",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0765",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0766",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0767",
    name: "Wimpod",
    region: "Alola",
    types: ["Bug", "Water"],
    abilities: {
      normal: ["Wimp Out"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0767",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0768",
    name: "Golisopod",
    region: "Alola",
    types: ["Bug", "Water"],
    abilities: {
      normal: ["Emergency Exit"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0768",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0769",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0770",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0771",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0772",
    name: "Type Null",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Battle Armor"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0772",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0773",
    name: "Silvally",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["RKS System"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0773",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0774",
    name: "Minior Red Meteor",
    region: "Alola",
    types: ["Rock", "Flying"],
    abilities: {
      normal: ["Shields Down"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0774",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0775",
    name: "Komala",
    region: "Alola",
    types: ["Normal"],
    abilities: {
      normal: ["Comatose"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0775",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0776",
    name: "Turtonator",
    region: "Alola",
    types: ["Fire", "Dragon"],
    abilities: {
      normal: ["Shell Armor"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0776",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0777",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0778",
    name: "Mimikyu Disguised",
    region: "Alola",
    types: ["Ghost", "Fairy"],
    abilities: {
      normal: ["Disguise"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0778",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0779",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0780",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0781",
    name: "Dhelmise",
    region: "Alola",
    types: ["Ghost", "Grass"],
    abilities: {
      normal: ["Steelworker"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0781",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0782",
    name: "Jangmo O",
    region: "Alola",
    types: ["Dragon"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0782",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0783",
    name: "Hakamo O",
    region: "Alola",
    types: ["Dragon", "Fighting"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0783",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0784",
    name: "Kommo O",
    region: "Alola",
    types: ["Dragon", "Fighting"],
    abilities: {
      normal: ["Bulletproof", "Soundproof"],
      hidden: "Overcoat",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0784",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0785",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0786",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0787",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0788",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0789",
    name: "Cosmog",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Unaware"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0789",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0790",
    name: "Cosmoem",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Sturdy"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0790",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0791",
    name: "Solgaleo",
    region: "Alola",
    types: ["Psychic", "Steel"],
    abilities: {
      normal: ["Full Metal Body"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0791",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0792",
    name: "Lunala",
    region: "Alola",
    types: ["Psychic", "Ghost"],
    abilities: {
      normal: ["Shadow Shield"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0792",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0793",
    name: "Nihilego",
    region: "Alola",
    types: ["Rock", "Poison"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0793",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0794",
    name: "Buzzwole",
    region: "Alola",
    types: ["Bug", "Fighting"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0794",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0795",
    name: "Pheromosa",
    region: "Alola",
    types: ["Bug", "Fighting"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0795",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0796",
    name: "Xurkitree",
    region: "Alola",
    types: ["Electric"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0796",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0797",
    name: "Celesteela",
    region: "Alola",
    types: ["Steel", "Flying"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0797",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0798",
    name: "Kartana",
    region: "Alola",
    types: ["Grass", "Steel"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0798",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0799",
    name: "Guzzlord",
    region: "Alola",
    types: ["Dark", "Dragon"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0799",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0800",
    name: "Necrozma",
    region: "Alola",
    types: ["Psychic"],
    abilities: {
      normal: ["Prism Armor"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0800",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0801",
    name: "Magearna",
    region: "Alola",
    types: ["Steel", "Fairy"],
    abilities: {
      normal: ["Soul-Heart"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0801",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0802",
    name: "Marshadow",
    region: "Alola",
    types: ["Fighting", "Ghost"],
    abilities: {
      normal: ["Technician"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0802",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0803",
    name: "Poipole",
    region: "Alola",
    types: ["Poison"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0803",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0804",
    name: "Naganadel",
    region: "Alola",
    types: ["Poison", "Dragon"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0804",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0805",
    name: "Stakataka",
    region: "Alola",
    types: ["Rock", "Steel"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0805",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0806",
    name: "Blacephalon",
    region: "Alola",
    types: ["Fire", "Ghost"],
    abilities: {
      normal: ["Beast Boost"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0806",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0807",
    name: "Zeraora",
    region: "Alola",
    types: ["Electric"],
    abilities: {
      normal: ["Volt Absorb"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0807",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0808",
    name: "Meltan",
    region: "Alola",
    types: ["Steel"],
    abilities: {
      normal: ["Magnet Pull"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0808",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0809",
    name: "Melmetal",
    region: "Alola",
    types: ["Steel"],
    abilities: {
      normal: ["Iron Fist"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
    },
    backSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0809",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0810",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0811",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0812",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0813",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0814",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0815",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0816",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0817",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0818",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0819",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0820",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0821",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0822",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0823",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0824",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0825",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0826",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0827",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0828",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0829",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0830",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0831",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0832",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0833",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0834",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0835",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0836",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0837",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0838",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0839",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0840",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0841",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0842",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0843",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0844",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0845",
    name: "Cramorant",
    region: "Galar",
    types: ["Flying", "Water"],
    abilities: {
      normal: ["Gulp Missile"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0845",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0846",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0847",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0848",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0849",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0850",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0851",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0852",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0853",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0854",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0855",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0856",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0857",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0858",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0859",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0860",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0861",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0862",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0863",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0864",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0865",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0866",
    name: "Mr Rime",
    region: "Galar",
    types: ["Ice", "Psychic"],
    abilities: {
      normal: ["Tangled Feet", "Screen Cleaner"],
      hidden: "Ice Body",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0866",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0867",
    name: "Runerigus",
    region: "Galar",
    types: ["Ground", "Ghost"],
    abilities: {
      normal: ["Wandering Spirit"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0867",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0868",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0869",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0870",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0871",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0872",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0873",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0874",
    name: "Stonjourner",
    region: "Galar",
    types: ["Rock"],
    abilities: {
      normal: ["Power Spot"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0874",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0875",
    name: "Eiscue Ice",
    region: "Galar",
    types: ["Ice"],
    abilities: {
      normal: ["Ice Face"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0875",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0876",
    name: "Indeedee Male",
    region: "Galar",
    types: ["Psychic", "Normal"],
    abilities: {
      normal: ["Inner Focus", "Synchronize"],
      hidden: "Psychic Surge",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0876",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0877",
    name: "Morpeko Full Belly",
    region: "Galar",
    types: ["Electric", "Dark"],
    abilities: {
      normal: ["Hunger Switch"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0877",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0878",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0879",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0880",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0881",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0882",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0883",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0884",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0885",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0886",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
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
      normal: "",
      shiny: "",
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
    learnsets: "0887",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0888",
    name: "Zacian",
    region: "Galar",
    types: ["Fairy"],
    abilities: {
      normal: ["Intrepid Sword"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0888",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0889",
    name: "Zamazenta",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Dauntless Shield"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0889",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0890",
    name: "Eternatus",
    region: "Galar",
    types: ["Poison", "Dragon"],
    abilities: {
      normal: ["Pressure"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0890",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0891",
    name: "Kubfu",
    region: "Galar",
    types: ["Fighting"],
    abilities: {
      normal: ["Inner Focus"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0891",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0892",
    name: "Urshifu Single Strike",
    region: "Galar",
    types: ["Fighting", "Dark"],
    abilities: {
      normal: ["Unseen Fist"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0892",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0893",
    name: "Zarude",
    region: "Galar",
    types: ["Dark", "Grass"],
    abilities: {
      normal: ["Leaf Guard"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0893",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0894",
    name: "Regieleki",
    region: "Galar",
    types: ["Electric"],
    abilities: {
      normal: ["Transistor"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0894",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0895",
    name: "Regidrago",
    region: "Galar",
    types: ["Dragon"],
    abilities: {
      normal: ["Dragon's Maw"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0895",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0896",
    name: "Glastrier",
    region: "Galar",
    types: ["Ice"],
    abilities: {
      normal: ["Chilling Neigh"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0896",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0897",
    name: "Spectrier",
    region: "Galar",
    types: ["Ghost"],
    abilities: {
      normal: ["Grim Neigh"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0897",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
  {
    id: "0898",
    name: "Calyrex",
    region: "Galar",
    types: ["Psychic", "Grass"],
    abilities: {
      normal: ["Unnerve"],
      hidden: "none",
    },
    frontSprite: {
      normal: "",
      shiny: "",
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
    learnsets: "0898",
    genderRatios: [],
    description: "",
    evolution: [
      {
        method: "",
        conditions: {
          level: "",
        },
        into: "",
      },
    ],
  },
];

export default Pokedex;
