import { DATA_URL } from "./helper";
import { IProduct } from "./models/product.model";
import { IQuery } from "./models/query.model";

export const getData = async (params: IQuery) => {
  const response = await fetch(DATA_URL);
  const data: IProduct[] = await response.json();

  return data;
} 