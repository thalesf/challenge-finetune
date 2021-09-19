export interface ListItem {
  date: string;
  name: string;
  amount: number;
  type: number;
  id: any;
}

export interface ListItemResponse {
  date: string;
  name: string;
  amount: number;
  type: number;
  id: number;
}

export enum ItemType {
  Protein = 1,
  Fat = 2,
  Carbohydrate = 3 
}