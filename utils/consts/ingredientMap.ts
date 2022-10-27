import { IIngredients, IkeyOfIngredients } from '../../types';

export const keys:IIngredients[] = [
  'Ácido Linoleico',
  'Ácido Linolênico',
  'Açúcar Total',
  'Cálcio',
  'Carboidrato',
  'Vitamina B12',
  'Cobre',
  'Colesterol',
  'Calorias',
  'Ferro',
  'Fibra Total',
  'Vitamina B9 DFE',
  'Fósforo',
  'Gordura Monossaturada',
  'Gordura Polissaturada',
  'Gordura Saturados',
  'Gordura Trans Total',
  'Lipídios Totais',
  'Magnésio',
  'Manganês',
  'Vitamina B3 NE',
  'Vitamina B3',
  'Vitamina B6',
  'Potássio',
  'Proteína',
  'Retinol',
  'Vitamina B2',
  'Selênio',
  'Sódio',
  'Vitamina B1',
  'Vitamina A',
  'Vitamina C',
  'Vitamina D',
  'Vitamina E',
  'Zinco',
];
const values:IkeyOfIngredients[] = [
  'acidoLinoleico-g',
  'acidoLinolenico-g',
  'acucarTotal-g',
  'calcio-mg',
  'carboidrato-g',
  'cobalamina-mcg',
  'cobre-mg',
  'colesterol-mg',
  'energia-kcal',
  'ferro-mg',
  'fibraTotal-g',
  'folato-DFE-mcg',
  'fosforo-mg',
  'gorduraMonossaturada-g',
  'gorduraPolissaturada-g',
  'gorduraSaturados-g',
  'gorduraTransTotal-g',
  'lipidiosTotais-g',
  'magnesio-mg',
  'manganes-mg',
  'niacina-NE-mg',
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

const map = new Map<IIngredients | string, IkeyOfIngredients>();

for (let i = 0; i < keys.length; i += 1) {
  map.set(keys[i], values[i]);
}
export default map;
