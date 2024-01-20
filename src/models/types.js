import { readFileSync } from 'fs';

const path = '../../res/json/types.json';
const jsonString = readFileSync(path, 'utf-8');
const Types = JSON.parse(jsonString);

export default Types;