import { type SchemaTypeDefinition } from 'sanity'
import  product  from "./product";
import car from "./car";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, car],
}
