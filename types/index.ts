/* eslint-disable camelcase */
import React from 'react';

export interface Iingredient {
    'id': string,
    'acidoLinoleico-g': string,
    'acidoLinolenico-g': string,
    'acucarAdicao-g': string,
    'acucarTotal-g': string,
    'calcio-mg': string,
    'carboidrato-g': string,
    'cobalamina-mcg': string,
    'cobre-mg': string,
    'codAlimento': string,
    'codPreparacao': string,
    'codTipoAlimento': string,
    'colesterol-mg': string,
    'descricaoAlimento': string,
    'alimentoEPreparacao': string,
    'energia-kcal': string,
    'ferro-mg': string,
    'fibraTotal-g': string,
    'folato-DFE-mcg': string,
    'fosforo-mg': string,
    'gorduraMonossaturada-g': string,
    'gorduraPolissaturada-g': string,
    'gorduraSaturados-g': string,
    'gorduraTransTotal-g': string,
    'lipidiosTotais-g': string,
    'magnesio-mg': string,
    'manganes-mg': string,
    'niacina-NE-mg': string,
    'niacina-mg': string,
    'piridoxina-mg': string,
    'potassio-mg': string,
    'preparacao': string,
    'proteina-g': string,
    'retinol-mcg': string,
    'riboflavina-mg': string,
    'selenio-mcg': string,
    'sodioAdicao-mg': string,
    'sodio-mg': string,
    'tiamina-mg': string,
    'tipoAlimento': string,
    'vitaminaA-mcg': string,
    'vitaminaC-mg': string,
    'vitaminaD-mcg': string,
    'vitaminaE-mg': string,
    'zinco-mg': string,
}
export interface IarrayIngredients {
    [id:number]:Iingredient
}
export type IkeyOfIngredients =
'acidoLinoleico-g' |
'acidoLinolenico-g' |
'acucarAdicao-g' |
'acucarTotal-g' |
'calcio-mg' |
'carboidrato-g' |
'cobalamina-mcg' |
'cobre-mg' |
'colesterol-mg' |
'energia-kcal' |
'ferro-mg' |
'fibraTotal-g' |
'folato-DFE-mcg' |
'fosforo-mg' |
'gorduraMonossaturada-g' |
'gorduraPolissaturada-g' |
'gorduraSaturados-g' |
'gorduraTransTotal-g' |
'lipidiosTotais-g' |
'magnesio-mg' |
'manganes-mg' |
'niacina-NE-mg' |
'niacina-mg' |
'piridoxina-mg' |
'potassio-mg' |
'proteina-g' |
'retinol-mcg' |
'riboflavina-mg' |
'selenio-mcg' |
'sodioAdicao-mg' |
'sodio-mg' |
'tiamina-mg' |
'vitaminaA-mcg' |
'vitaminaC-mg' |
'vitaminaD-mcg' |
'vitaminaE-mg' |
'zinco-mg'

export type IIngredients =
'Ácido Linoleico'|
  'Ácido Linolênico'|
  'Açúcar Total'|
  'Cálcio'|
  'Carboidrato'|
  'Cobalamina'|
  'Cobre'|
  'Colesterol'|
  'Calorias'|
  'Ferro'|
  'Fibra Total'|
  'Folato DFE'|
  'Fósforo'|
  'Gordura Monossaturada'|
  'Gordura Polissaturada'|
  'Gordura Saturados'|
  'Gordura Trans Total'|
  'Lipídios Totais'|
  'Magnésio'|
  'Manganês'|
  'Niacina NE'|
  'Niacina'|
  'Piridoxina'|
  'Potássio'|
  'Proteína'|
  'Retinol'|
  'Riboflavina'|
  'Selênio'|
  'Sódio'|
  'Tiamina'|
  'Vitamina A'|
  'Vitamina C'|
  'Vitamina D'|
  'Vitamina E'|
  'Zinco'

export type IorderDirection =
'ascending' |
'descending'

export interface IobjectState {
    element: IkeyOfIngredients,
    orderDirection?: IorderDirection,
    elementToLimit?:IkeyOfIngredients,
    limitNumber?:number,
}
export type IfoodToEat =
'Açúcares e produtos de confeitaria' |
'Aves e ovos' |
'Carnes e vísceras' |
'Carnes industrializadas' |
'Cereais e leguminosas' |
'Cocos, castanhas e nozes' |
'Enlatados e conservas' |
'Farinhas, féculas e massas' |
'Frutas' |
'Hortaliças folhosas, frutosas e outras' |
'Hortaliças tuberosas' |
'Panificados' |
'Pescados e frutos do mar'

export type IfoodToDrink =
'Bebidas alcoólicas' |
'Bebidas não alcoólicas e infusões'

export type IfoodToEatOrDrink =
'Miscelâneas' |
'Laticínios'

export type IfoodToSeason =
'Sais e condimentos' |
'Óleos e gorduras'

export type ItypeOfFood =
IfoodToEat | IfoodToDrink | IfoodToEatOrDrink | IfoodToSeason

export interface PageProps {
    children:React.ReactNode
}

/** *************
 *
 * Redux Types
 *
 ************* */

export interface IactionInput
{
    type: string | 'INPUT_CONTENT',
    payload: IinputContent
}

export interface IinputContent {
    name: IIngredients | string,
    value: IIngredients | number | string | undefined,
    isActive?: boolean
}
