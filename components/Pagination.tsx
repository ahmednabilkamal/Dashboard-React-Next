import React from "react";
import Button from "./ui/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
      >
        Previous
      </Button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-green-500 hover:bg-green-600 text-white disabled:opacity-50"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
