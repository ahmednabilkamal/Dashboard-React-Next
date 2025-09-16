export type ItemStatus = "Available" | "Sold" | "Reserved";

export interface Item {
  id: string;
  title: string;
  description: string;
  status: ItemStatus;
}
