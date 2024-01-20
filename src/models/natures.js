import { readFileSync } from 'fs';

const path = '../../res/json/natures.json';
const jsonString = readFileSync(path, 'utf-8');
const Natures = JSON.parse(jsonString);

// usage Example

export default Natures;