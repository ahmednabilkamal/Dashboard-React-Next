import React from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { ItemStatus } from "../lib/types";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: ItemStatus | "";
  setFilterStatus: (status: ItemStatus | "") => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
}) => {
  const statuses: ItemStatus[] = ["Available", "Sold", "Reserved"];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 border-blue-500 text-black placeholder-gray-400"
      />
      <Select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value as ItemStatus | "")}
        className="md:w-48 border-blue-500"
      >
        <option value="" className="text-gray-700">
          All
        </option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SearchAndFilter;
