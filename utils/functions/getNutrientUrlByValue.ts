import { IkeyOfIngredients } from '../../types';

const keys:IkeyOfIngredients[] = [
    'acidoLinoleico-g',
    'acidoLinolenico-g',
    'calcio-mg',
    'carboidrato-g',
    'cobalamina-mcg',
    'cobre-mg',
    'colesterol-mg',
    'ferro-mg',
    'fibraTotal-g',
    'folato-DFE-mcg',
    'fosforo-mg',
    'gorduraMonossaturada-g',
    'gorduraPolissaturada-g',
    'gorduraSaturados-g',
    'gorduraTransTotal-g',
    'magnesio-mg',
    'manganes-mg',
    'niacina-mg',
    'piridoxina-mg',
    'potassio-mg',
    'proteina-g',
    'retinol-mcg',
    'riboflavina-mg',
    'selenio-mcg',
    'sodio-mg',
    'tiamina-mg',
    'vitaminaA-mcg',
    'vitaminaC-mg',
    'vitaminaD-mcg',
    'vitaminaE-mg',
    'zinco-mg',
];
const values:string[] = [
  'acido-linoleico',
  'acido-linolenico',
  'calcio',
  'carboidrato',
  'vitamina-b12',
  'cobre',
  'colesterol',
  'ferro',
  'fibras',
  'vitamina-b9',
  'fosforo',
  'gordura-monoinsaturada',
  'gordura-poli-insaturada',
  'gordura-saturada',
  'gordura-trans',
  'magnesio',
  'manganes',
  'vitamina-b3',
  'vitamina-b6',
  'potassio',
  'proteina',
  'retinol',
  'vitamina-b2',
  'selenio',
  'sodio',
  'vitamina-b1',
  'vitamina-a',
  'vitamina-c',
  'vitamina-d',
  'vitamina-e',
  'zinco',
];

const nutrientMap = new Map<IkeyOfIngredients, string>();

for (let i = 0; i < keys.length; i += 1) {
  nutrientMap.set(keys[i], values[i]);
}

const nutrientKeyConverter = (ingredient:IkeyOfIngredients) => nutrientMap.get(ingredient);

export default nutrientKeyConverter;
