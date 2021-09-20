export interface ListItem {
  date: string;
  name: string;
  amount: number;
  type: number;
  id: any;
}

export enum ItemType {
  Protein = 1,
  Fat = 2,
  Carbohydrate = 3 
}