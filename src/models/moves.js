import { readFileSync } from 'fs';

const path = '../../res/json/moves.json';
const jsonString = readFileSync(path, 'utf-8');
const Moves = JSON.parse(jsonString);

// usage Example

export default Moves;