export const Types = [
  { 
    "id": "Normal",
    "effect": {
      "double": [],
      "noDamage": ["Ghost"],
      "half": ["Rock", "Steel"],
      "neutral": ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Ground", "Flying", "Fighting", "Fairy", "Dragon", "Bug", "Dark", "Psychic", "Poison"]
    }
  },
  {
    "id": "Fire",
    "effect": {
      "double": ["Grass", "Ice", "Bug", "Steel"],
      "noDamage": [],
      "half": ["Fire", "Water", "Dragon", "Rock"],
      "neutral": ["Normal", "Electric", "Ground", "Flying", "figthing", "Fairy", "Ghost", "Dark", "Psychic", "Poison"]
    }
  },
  {
    "id": "Water",
    "effect": {
      "double": ["Fire", "Ground", "Rock"],
      "noDamage": [],
      "half": ["Water", "Grass", "Dragon"],
      "neutral": ["Normal", "Electric", "Ice", "Flying", "Fighting", "Steel", "Fairy", "Bug", "Ghost", "Dark", "Psychic", "Poison"]
    }
  },
  {
    "id": "Grass",
    "effect": {
      "double": ["Water", "Ground", "Rock"],
      "noDamage": [],
      "half": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
      "neutral": ["Normal", "Electric", "Ice", "Fighting", "Fairy", "Ghost", "Dark", "Psychic"]
    }
  },
  {
    "id": "Electric",
    "effect": {
      "double": ["Water", "Flying"],
      "noDamage": ["Ground"],
      "half": ["Grass", "Electric", "Dragon"],
      "neutral": ["Normal", "Fire", "Ice", "Rock", "Fighting", "Steel", "Fairy", "Bug", "Ghost", "Dark", "Psychic", "Poison"]
    }
  },
  {
    "id": "Ice",
    "effect": {
      "double": ["Grass", "Ground", "Flying", "Dragon"],
      "noDamage": [],
      "half": ["Fire", "Water", "Ice", "Steel"],
      "neutral": ["Normal", "Electric", "Rock", "Fighting", "Fairy", "Bug", "Ghost", "Dark", "Psychic","Poison"]
    }
  },
  {
    "id": "Fighting",
    "effect": {
      "double": ["Normal", "Ice", "Rock", "Dark", "Steel"],
      "noDamage": ["Ghost"],
      "half": ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
      "neutral": ["Fire", "Water", "Grass", "Electric", "Ground", "Fighting", "Dragon"]
    }
  },
  {
    "id": "Poison",
    "effect": {
      "double": ["Grass", "Fairy"],
      "noDamage": ["Steel"],
      "half": ["Poison", "Ground", "Rock", "Ghost"],
      "neutral": ["Normal", "Fire", "Water", "Electric", "Ice", "Flying", "figthing", "Dragon", "Dark", "Psychic", "Bug"]
    }
  },
  {
    "id": "Ground",
    "effect": {
      "double": ["Fire", "Electric", "Poison", "Rock", "Steel"],
      "noDamage": ["Flying"],
      "half": ["Grass", "Bug"],
      "neutral": ["Normal", "Water", "Ice", "Ground", "Fighting", "Fairy", "Dragon", "Ghost", "Dark", "Psychic"]
    }
  },
  {
    "id": "Flying",
    "effect": {
      "double": ["Grass", "Fighting", "Bug"],
      "noDamage": [],
      "half": ["Electric", "Rock", "Steel"],
      "neutral": ["Normal", "Fire", "Water", "Ice", "Ground", "Flying", "Fairy", "Dragon", "Ghost", "Dark", "Psychic", "Poison"]
    }
  },
  {
    "id": "Psychic",
    "effect": {
      "double": ["Fighting", "Poison"],
      "noDamage": ["Dark"],
      "half": ["Psychic", "Steel"],
      "neutral": ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Rock", "Ground", "Flying", "Fairy", "Dragon", "Bug", "Ghost"]
    }
  },
  {
    "id": "Bug",
    "effect": {
      "double": ["Grass", "Psychic", "Dark"],
      "noDamage": [],
      "half": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
      "neutral": ["Normal", "Bug", "Water", "Electric", "Dragon", "Rock", "Ground", "Ice"]
    }
  },
  {
    "id": "Rock",
    "effect": {
      "double": ["Fire", "Ice", "Flying", "Bug"],
      "noDamage": [],
      "half": ["Fighting", "Ground", "Steel"],
      "neutral": ["Normal", "Water", "Grass", "Electric", "Psychic", "Dark", "Dragon", "Fairy", "Poison", "Ghost", "Rock"]
    }
  },
  {
    "id": "Ghost",
    "effect": {
      "double": ["Psychic", "Ghost"],
      "noDamage": ["Normal"],
      "half": ["Dark"],
      "neutral": ["Fire", "Water", "Grass", "Electric", "Ice", "Rock", "Ground", "Steel", "Fighting", "Dragon", "Fairy", "Bug", "Flying", "Poison"]
    }
  },
  {
    "id": "Dragon",
    "effect": {
      "double": ["Dragon"],
      "noDamage": ["Fairy"],
      "half": ["Steel"],
      "neutral": ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Flying", "Rock", "Ground", "Poison", "Bug", "Psychic", "Fighting", "Dark", "Ghost"]
    }
  },
  {
    "id": "Dark",
    "effect": {
      "double": ["Psychic", "Ghost"],
      "noDamage": [],
      "half": ["Fighting", "Dark", "Fairy"],
      "neutral": ["Normal", "Fire", "Water", "Grass", "Ice", "Electric", "Rock", "Ground", "Flying", "Bug", "Dragon", "Steel", "Poison"]
    }
  },
  {
    "id": "Steel",
    "effect": {
      "double": ["Ice", "Rock", "Fairy"],
      "noDamage": [],
      "half": ["Fire", "Water", "Electric", "Steel"],
      "neutral": ["Normal", "Grass", "Fighting", "Flying", "Psychic", "Dark", "Ghost", "Ground", "Dragon", "Bug", "Poison"]
    }
  },
  {
    "id": "Fairy",
    "effect": {
      "double": ["Fighting", "Dragon", "Dark"],
      "noDamage": [],
      "half": ["Fire", "Poison", "Steel"],
      "neutral": ["Fairy", "Normal", "Water", "Grass", "Psychic", "Bug", "Electric", "Ice", "Flying", "Ghost", "Rock", "Ground"]
    }
  }
]