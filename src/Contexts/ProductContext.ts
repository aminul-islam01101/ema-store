import { createContext } from 'react';
import { IProducts } from '~/Models/models';
export const ProductContext = createContext([] as IProducts);
