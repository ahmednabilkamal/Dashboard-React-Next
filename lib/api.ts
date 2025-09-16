import { Item } from "./types";

export const fetchItems = async (): Promise<Item[]> => {
  const res = await fetch("/api/items");
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
};

export const createItem = async (newItem: Omit<Item, "id">): Promise<Item> => {
  const res = await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });
  if (!res.ok) {
    throw new Error("Failed to create item");
  }
  return res.json();
};
