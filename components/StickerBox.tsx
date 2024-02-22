/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Box } from '@mui/material';
import { Iingredient } from '../types';
import Sticker from './Sticker';
import vd from '../utils/consts/vd';
import { getByValue } from '../utils/functions/ingredientKeyConverter';

const minerals = [
  'calcio-mg', 'magnesio-mg', 'manganes-mg',
  'fosforo-mg', 'ferro-mg', 'potassio-mg',
  'cobre-mg', 'zinco-mg', 'selenio-mcg',
];

const vitamin = [
  'retinol-mcg', 'vitaminaA-mcg', 'tiamina-mg',
  'riboflavina-mg', 'niacina-mg', 'niacina-NE-mg',
  'piridoxina-mg', 'cobalamina-mcg', 'folato-DFE-mcg',
  'vitaminaD-mcg', 'vitaminaE-mg', 'vitaminaC-mg',
];

interface ICons {
    label: string,
    healty: 'bad'
}

interface IPros {
    label: string | boolean,
    healty: 'good'
}

interface IVitMin {
  label: string | boolean,
  healty: 'good',
  rate?: number
}

interface IProps {
  data:Iingredient
}

let cons:ICons[] = [];
let pros:IPros[] = [];
let vits:IVitMin[] = [];
let mins:IVitMin[] = [];

function isHighSodium(kcal:string, sodium:string) {
  if (((kcal === '-') || (sodium === '-')) || (sodium === '0.00')) {
    return;
  }
  if ((parseInt(kcal, 10)) < (parseInt(sodium, 10))) { cons.push({ label: 'Sódio', healty: 'bad' }); }
}
function isHighSugar(sugarAmount:string) {
  if (parseInt(sugarAmount, 10) >= 15) { cons.push({ label: 'Açúcar', healty: 'bad' }); }
}

function isHighFat(fatAmount:string) {
  if (parseInt(fatAmount, 10) >= 11) { cons.push({ label: 'Gordura', healty: 'bad' }); }
}

function isHighProtein(proteinAmount:string) {
  if (parseInt(proteinAmount, 10) >= (parseInt(vd['proteina-g'], 10) * 0.1)) { pros.push({ label: 'Proteína', healty: 'good' }); }
}

function isHighFiber(fiberAmount:string) {
  if (parseInt(fiberAmount, 10) >= 3) { pros.push({ label: 'Fibras', healty: 'good' }); }
}

function compareSort(a:IVitMin, b:IVitMin) {
  return a.rate! - b.rate!;
}

function isHighVitamin(label:string, vitAmount:string, idr:string, sort: boolean = false) {
  if (parseInt(vitAmount, 10) > parseInt(idr, 10) * 0.15) {
    vits.push({ label: getByValue(label), healty: 'good', rate: parseInt(vitAmount, 10) / parseInt(idr, 10) });
  }
  if (sort) { vits = vits.sort(compareSort); }
}

function isHighMineral(label:string, mineralAmount:string, idr:string, sort: boolean = false) {
  if (parseInt(mineralAmount, 10) > parseInt(idr, 10) * 0.15) {
    mins.push({ label: getByValue(label), healty: 'good', rate: parseInt(mineralAmount, 10) / parseInt(idr, 10) });
  }
  if (sort) { mins = mins.sort(compareSort); }
}

const StickerBox = (props:IProps) => {
  cons = [];
  pros = [];
  vits = [];
  mins = [];
  isHighSodium(props.data['energia-kcal'], props.data['sodio-mg']);
  isHighSugar(props.data['acucarTotal-g']);
  isHighFat(props.data['lipidiosTotais-g']);
  isHighProtein(props.data['proteina-g']);
  isHighFiber(props.data['fibraTotal-g']);
  for (let i = 0; i < vitamin.length; i += 1) {
    i === vitamin.length - 1
      // @ts-ignore
      ? isHighVitamin(vitamin[i], props.data[vitamin[i]], vd[vitamin[i]], true)
      // @ts-ignore
      : isHighVitamin(vitamin[i], props.data[vitamin[i]], vd[vitamin[i]]);
  }
  for (let i = 0; i < vitamin.length; i += 1) {
    i === minerals.length - 1
      // @ts-ignore
      ? isHighMineral(minerals[i], props.data[minerals[i]], vd[minerals[i]], true)
      // @ts-ignore
      : isHighMineral(minerals[i], props.data[minerals[i]], vd[minerals[i]]);
  }
  if (vits.length > 2) { vits = vits.slice(-2); }
  if (mins.length > 2) { mins = mins.slice(-2); }

  vits.forEach((object) => {
    delete object.rate;
  });

  mins.forEach((object) => {
    delete object.rate;
  });

  pros.push(...vits, ...mins);

  return (
    <Box
      display='flex'
      mx='1vw'
      mb='1.5rem'
    >
      {
        cons.map((item) => {
          if (item) {
            return <Sticker key={item.label} label={item.label} healty={item.healty} />;
          }
          return <></>;
        })
      }
      {
        pros.map((itemPros) => {
          if (itemPros) {
            return <Sticker key={itemPros.label as string}
            label={itemPros.label as string} healty={itemPros.healty} />;
          }
          return <></>;
        })
      }
    </Box>
  );
};

export default StickerBox;
