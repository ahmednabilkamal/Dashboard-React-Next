import { useState } from "react";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../lib/api";
import { Item, ItemStatus } from "../lib/types";
import ItemCard from "../components/ItemCard";
import ItemDetailsPanel from "../components/ItemDetailsPanel";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";
import AddItemForm from "../components/AddItemForm";
import { useDashboardStore } from "../lib/zustandStore";
import Button from "../components/ui/Button";

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<ItemStatus | "">("");
  const [currentPage, setCurrentPage] = useState(1);
  const { isFormOpen, toggleForm } = useDashboardStore();

  const {
    data: items,
    isLoading,
    isError,
    error,
  } = useQuery<Item[], Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
  });

  const filteredItems = items
    ?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (filterStatus ? item.status === filterStatus : true));

  const totalPages = filteredItems
    ? Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
    : 0;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading items...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center p-4">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="mt-2 text-gray-600">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Head>
        <title>Dashboard App</title>
      </Head>

      <div className="flex-1 p-8 container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <Button onClick={toggleForm}>
            {isFormOpen ? "Hide Form" : "Add New Item"}
          </Button>
        </header>

        {isFormOpen && <AddItemForm />}

        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        {paginatedItems && paginatedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center p-10 bg-gray-100 rounded-lg">
            <p className="text-xl font-semibold text-gray-700">
              No items found.
            </p>
          </div>
        )}
      </div>

      <ItemDetailsPanel />
    </div>
  );
}
