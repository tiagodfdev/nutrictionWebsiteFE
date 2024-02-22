import Schema from './Schema';

export interface ISchemaFAQ {
    question:string
    answerDescription: string
    answer:string | string[]
}

class SchemaFAQ extends Schema {
    baseFAQ: string

    schemaFAQ: ISchemaFAQ | ISchemaFAQ[]

    templateFAQObj: ISchemaFAQ

    comma: string

    constructor() {
      super();
      const IschemaFAQinit:ISchemaFAQ = { question: '', answerDescription: '', answer: '' };
      this.baseFAQ = this.base.concat(
        `"@type": "FAQPage",
            "mainEntity": [`,
      );
      this.comma = ',';
      this.schemaFAQ = IschemaFAQinit;
      this.templateFAQObj = IschemaFAQinit;
    }

    private templateFAQ(templateFAQObj:ISchemaFAQ):string {
      this.templateFAQObj.question = templateFAQObj.question;
      this.templateFAQObj.answerDescription = `<p>${templateFAQObj.answerDescription}</p>`;
      if (Array.isArray(templateFAQObj.answer)) {
        for (let i = 0; i < templateFAQObj.answer.length; i += 1) {
          if (i === 0) {
            this.templateFAQObj.answer = '<ul>';
          }
          this.templateFAQObj.answer.concat(`<li>${templateFAQObj.answer[i]}</li>`);
          if (!(i === templateFAQObj.answer.length - 1)) {
            this.templateFAQObj.answer.concat('</ul>');
          }
        }
      } else { this.templateFAQObj.answer = templateFAQObj.answer; }

      return (`
          {
            "@type": "Question",
            "name": "${this.templateFAQObj.question}",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "${this.templateFAQObj.answer}"
            }
          }`
      );
    }

    public insertFAQ(schemaFAQObj:ISchemaFAQ | ISchemaFAQ[]):string {
      let result!:string;
      if (typeof schemaFAQObj === 'object'
        && schemaFAQObj !== null
        && !Array.isArray(schemaFAQObj)) {
        this.schemaFAQ = [schemaFAQObj] as Array<ISchemaFAQ>;
      }
      if (Array.isArray(this.schemaFAQ)) {
        for (let i = 0; i < this.schemaFAQ.length; i += 1) {
          if (i === 0) {
            result = this.baseFAQ;
          }
          result = result.concat(this.templateFAQ(this.schemaFAQ[i]));
          if (!(i === this.schemaFAQ.length - 1)) {
            result = result.concat(this.comma);
          } else {
            result = result.concat(`
                }]
            }`);
          }
        }
      }
      return (result);
    }
}

export default SchemaFAQ;
