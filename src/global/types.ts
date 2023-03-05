import { ReactNode } from 'react';

export type ChildrenType = {
  children: ReactNode;
};

export type NewProductType = {
  name: string;
  description: string;
  categoryId: number;
};

export type NewProductCategoryType = {
  name: string;
  description: string;
};

export type StylesType = {
  styles?: Record<string, string>;
  hover?: Record<string, string>;
};

export interface ProductType extends NewProductType {
  id: number;
}

export interface ProductCategoryType extends NewProductCategoryType {
  id: number;
}
