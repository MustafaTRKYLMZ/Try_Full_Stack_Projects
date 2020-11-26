import { NewDiaryEntry,Visibility,Weather } from './types';



//comment line
const isString =(text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment :any):string => {
if(!comment || !isString(comment)){
    throw new Error('Incorrect or missing comment: ' + comment)
}
return comment;
}

//date line
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
  const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };

//weather line

const isWeather = (param: any): param is Weather => {
    return Object.values(Weather).includes(param);
  };

  const parseWeather = (weather: any): Weather => {
    if (!weather || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    return weather;
  };

//Visibility

const isVisibility = (param: any):boolean => {
    return Object.values(Visibility).includes(param);
  };


  //weather and visibility IDE sorunu çözülecek. 
const parseStringField = (object: any, fieldName: string): string => {
  if (!object[fieldName]) {
    throw new Error(`Missing field '${fieldName}'`);
  }
  if (!isString(object[fieldName])) {
    throw new Error(`Incorrect field '${fieldName}' : ` + object[fieldName]);
  }
  return object[fieldName] as string;
};


  const parseVisibility = (object: any, fieldName:string): Visibility => {
    if (!isVisibility(parseStringField(object,fieldName))) {
        throw new Error(`Incorrect or missing visibility:'${fieldName}'` + object[fieldName]);
    }
    return object[fieldName] as Visibility;
  };

  
 //main line
  const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    return {
      date: parseDate(object.date),
      comment: parseComment(object.comment),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object, 'visibility')
    };
  };



export default toNewDiaryEntry;