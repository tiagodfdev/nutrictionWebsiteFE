/* eslint-disable camelcase */
import React from 'react';

export interface Iingredient {
    id: string,
    acidoLinoleico_g: string,
    acidoLinolenico_g: string,
    acucarAdicao_g: string,
    acucarTotal_g: string,
    calcio_mg: string,
    carboidrato_g: string,
    cobalamina_mcg: string,
    cobre_mg: string,
    codAlimento: string,
    codPreparacao: string,
    codTipoAlimento: string,
    colesterol_mg: string,
    descricaoAlimento: string,
    alimentoEPreparacao: string,
    energia_kcal: string,
    ferro_mg: string,
    fibraTotal_g: string,
    folato_DFE_mcg: string,
    fosforo_mg: string,
    gorduraMonossaturada_g: string,
    gorduraPolissaturada_g: string,
    gorduraSaturados_g: string,
    gorduraTransTotal_g: string,
    lipidiosTotais_g: string,
    magnesio_mg: string,
    manganes_mg: string,
    niacina_NE_mg: string,
    niacina_mg: string,
    piridoxina_mg: string,
    potassio_mg: string,
    preparacao: string,
    proteina_g: string,
    retinol_mcg: string,
    riboflavina_mg: string,
    selenio_mcg: string,
    sodioAdicao_mg: string,
    sodio_mg: string,
    tiamina_mg: string,
    tipoAlimento: string,
    vitaminaA_mcg: string,
    vitaminaC_mg: string,
    vitaminaD_mcg: string,
    vitaminaE_mg: string,
    zinco_mg: string,
}
export interface IarrayIngredients {
    [id:number]:Iingredient
}
export type IkeyOfIngredients =
'acidoLinoleico_g' |
'acidoLinolenico_g' |
'acucarAdicao_g' |
'acucarTotal_g' |
'calcio_mg' |
'carboidrato_g' |
'cobalamina_mcg' |
'cobre_mg' |
'colesterol_mg' |
'energia_kcal' |
'ferro_mg' |
'fibraTotal_g' |
'folato_DFE_mcg' |
'fosforo_mg' |
'gorduraMonossaturada_g' |
'gorduraPolissaturada_g' |
'gorduraSaturados_g' |
'gorduraTransTotal_g' |
'lipidiosTotais_g' |
'magnesio_mg' |
'manganes_mg' |
'niacina_NE_mg' |
'niacina_mg' |
'piridoxina_mg' |
'potassio_mg' |
'proteina_g' |
'retinol_mcg' |
'riboflavina_mg' |
'selenio_mcg' |
'sodioAdicao_mg' |
'sodio_mg' |
'tiamina_mg' |
'vitaminaA_mcg' |
'vitaminaC_mg' |
'vitaminaD_mcg' |
'vitaminaE_mg' |
'zinco_mg'

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
