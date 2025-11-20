import { DATA_URL } from "./helper";
import { IProduct } from "./models/product.model";
import { IQuery } from "./models/query.model";

export const getData = async (query: IQuery) => {
  
  const response = await fetch(DATA_URL);
  const data: IProduct[] = await response.json();

  return data.filter((product: IProduct) => {
    let st = true;
    if(st && query.category) {
      st = product.category === query.category;
    }
    if(st && query.search) {
      st = product.title.toLowerCase().includes(query.search.toLowerCase());
    }
    return st;
  });
} 