import React from "react";
import { Item } from "../lib/types";
import { useDashboardStore } from "../lib/zustandStore";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const setSelectedItem = useDashboardStore((state) => state.setSelectedItem);
  const statusColor = (status: Item["status"]) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Sold":
        return "bg-red-100 text-red-800";
      case "Reserved":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      onClick={() => setSelectedItem(item)}
      className="p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${statusColor(
          item.status
        )}`}
      >
        {item.status}
      </span>
    </div>
  );
};

export default ItemCard;
