import React from "react";
import { useDashboardStore } from "../lib/zustandStore";
import { motion, AnimatePresence } from "framer-motion";

const ItemDetailsPanel: React.FC = () => {
  const { selectedItem, setSelectedItem } = useDashboardStore();

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white border-l shadow-xl p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Item Details</h2>
            <button
              onClick={() => setSelectedItem(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">
              ID:{" "}
              <span className="font-mono text-gray-700">{selectedItem.id}</span>
            </p>
            <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <p className="text-sm font-semibold">
              Status: <span className="font-normal">{selectedItem.status}</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItemDetailsPanel;
