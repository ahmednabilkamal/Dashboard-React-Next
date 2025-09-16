import React, { useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";
import { ItemStatus } from "../lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItem } from "../lib/api";
import { useDashboardStore } from "../lib/zustandStore";

const AddItemForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Available");
  const toggleForm = useDashboardStore((state) => state.toggleForm);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      setTitle("");
      setDescription("");
      setStatus("Available");
      toggleForm();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, description, status });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-6 shadow-inner">
      <h2 className="text-xl font-bold text-black mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-black">
            Title
          </label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g., Laptop, Smartphone"
            className="border-blue-500 text-black placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            placeholder="A brief description of the item"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-blue-500 text-black placeholder-gray-400"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <Select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as ItemStatus)}
            className="border-blue-500 text-black"
          >
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Reserved">Reserved</option>
          </Select>
        </div>
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adding..." : "Add Item"}
        </Button>
      </form>
    </div>
  );
};

export default AddItemForm;
