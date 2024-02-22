import { NutrientDB } from '../../types';
import { ISchemaFAQ } from './SchemaFAQ';

function dbToSchemaFAQObj(data:NutrientDB):ISchemaFAQ[] {
  let prosDescription = data.topics[0].description;
  const veganFoodQuestion = `Quais as principais fontes veganas de ${data.title.slice(0, data.title.indexOf(':'))}?`;
  const veganFoodDescription = `As principais fontes veganas de ${data.title.slice(0, data.title.indexOf(':'))} são:`;
  let answerConsDescription = `O excesso de ${data.title.slice(0, data.title.indexOf(':'))} podem ocasionar alguns sintomas, incluindo:`;
  const recommendedQuestion = `Qual a ingestão diária recomendada de ${data.title.slice(0, data.title.indexOf(':'))}?`;

  if (!Array.isArray(data.topics[0].pros) || !data.topics[0].pros.length) {
    prosDescription = `Não existem benefícios significativos na ingestão de ${data.title.slice(0, data.title.indexOf(':'))}`;
  }
  if (!Array.isArray(data.topics[0].cons) || !data.topics[0].cons.length) {
    answerConsDescription = `Não existem malefícios significativos na ingestão de ${data.title.slice(0, data.title.indexOf(':'))}`;
  }
  const result = [{
    question: data.topics[0].subtitle,
    answerDescription: prosDescription,
    answer: data.topics[0].pros,
  }];
  result.push({
    question: `Quais os sintomas quando se tem excesso de ${data.title.slice(0, data.title.indexOf(':'))}?`,
    answerDescription: answerConsDescription,
    answer: data.topics[0].cons,
  });
  result.push({
    question: data.topics[1].subtitle,
    answerDescription: data.topics[1].description,
    answer: data.topics[1].foods.novegan.concat([...data.topics[1].foods.vegan]),
  });
  if (data.topics[1].foods.vegan.length > 0) {
    result.push({
      question: veganFoodQuestion,
      answerDescription: veganFoodDescription,
      answer: data.topics[1].foods.vegan,
    });
  }
  result.push({
    question: recommendedQuestion,
    answerDescription: '',
    answer: [data.topics[0].recommended_amout],
  });
  return result;
}
export default dbToSchemaFAQObj;
