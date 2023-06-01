import { type SchemaTypeDefinition } from 'sanity'
import  product  from "./product";
import car from "./car";
import { category } from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, car, category],
}
