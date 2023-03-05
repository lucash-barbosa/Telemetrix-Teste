import { ReactNode } from 'react';

export type ChildrenType = {
  children?: ReactNode;
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
  hover?: Record<string, string>;
  styles?: Record<string, string>;
  mq?: Record<string, string>;
  mqWidth?: number;
};

export interface ProductType extends NewProductType {
  id: number;
}

export interface ProductCategoryType extends NewProductCategoryType {
  id: number;
}
