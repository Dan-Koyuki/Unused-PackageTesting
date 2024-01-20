import { readFileSync } from 'fs';

const path = '../../res/json/ability.json';
const jsonString = readFileSync(path, 'utf-8');
const Abilities = JSON.parse(jsonString);

// usage Example

export default Abilities;