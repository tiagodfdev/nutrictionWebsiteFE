import {
  Iingredient, IinputContent, IkeyOfIngredients,
} from '../../types';
import ingredientKeyConverter from './ingredientKeyConverter';

interface ILimiters extends IinputContent
{}

export type IorderDirection =
'ascending' |
'descending'

interface ISEProps {
    data:Iingredient[],
    ingredient:IkeyOfIngredients,
    limiters:ILimiters | ILimiters[],
    order:IorderDirection
}

interface IALProps {
    data:Iingredient[],
    limiters:ILimiters | ILimiters[],
}

function applyLimiters(props:IALProps) {
  const { limiters, data } = props;

  if (Array.isArray(limiters)) {
    if (!limiters[0].isActive && !limiters[1].isActive) {
      return data;
    }
    let ret = data;
    for (let i = 0; i < limiters.length; i += 1) {
      const finalArray = ret.filter((tofilter) => {
        const key = ingredientKeyConverter(limiters[i].name);
        if (!limiters[i].value) {
          return true;
        }
        return (parseInt(tofilter[key!], 10) < parseInt(limiters[i].value! as string, 10));
      });
      ret = finalArray;
    }
    return ret;
  }
  const finalArray = data.filter((item) => {
    const key = ingredientKeyConverter(limiters.name);
    return (parseInt(item[key!], 10) < parseInt(limiters.value! as string, 10));
  });
  return finalArray;
}

function excludeSameFood(arrayOfIgredients:Iingredient[]) {
  const result = arrayOfIgredients.filter((item, index) => {
    if (index !== 0) { return (item.codAlimento !== arrayOfIgredients[index - 1].codAlimento); }
    return item;
  });
  return result;
}

function excludeNullValues(arrayOfIgredients:Iingredient[], ingredient:IkeyOfIngredients) {
  return (arrayOfIgredients.filter((item) => (
    item[ingredient] !== '-'
  )));
}

export default function sortElements(props:ISEProps) {
  const {
    ingredient, limiters, order,
  } = props;
  let { data } = props;
  function compare(a:Iingredient, b:Iingredient) {
    if (order === 'descending') {
      if (a[ingredient] === '-') {
        return parseFloat(b[ingredient]) - 0;
      }
      if (b[ingredient] === '-') {
        return 0 - parseFloat(a[ingredient]);
      }
      return parseFloat(b[ingredient]) - parseFloat(a[ingredient]);
    }
    if (order === 'ascending') {
      if (a[ingredient] === '-') {
        return 0 - parseFloat(b[ingredient]);
      }
      if (b[ingredient] === '-') {
        return parseFloat(a[ingredient]) - 0;
      }
      return parseFloat(a[ingredient]) - parseFloat(b[ingredient]);
    }
    return 0;
  }
  data = excludeNullValues(data, ingredient);
  const filteredData = applyLimiters({ limiters, data });
  const sortData = filteredData.sort(compare);
  return excludeSameFood(sortData);
}
