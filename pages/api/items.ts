import { NextApiRequest, NextApiResponse } from "next";
import { Item } from "../../lib/types";
import { v4 as uuidv4 } from "uuid";

let items: Item[] = [
  {
    id: uuidv4(),
    title: "Laptop",
    description: "A sleek new laptop.",
    status: "Available",
  },
  {
    id: uuidv4(),
    title: "Smartphone",
    description: "Latest model.",
    status: "Sold",
  },
  {
    id: uuidv4(),
    title: "Headphones",
    description: "Noise-cancelling.",
    status: "Reserved",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // GET request: Return all items
    res.status(200).json(items);
  } else if (req.method === "POST") {
    // POST request: Add a new item
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newItem: Item = {
      id: uuidv4(),
      title,
      description,
      status,
    };
    items.push(newItem);
    res.status(201).json(newItem);
  } else {
    // Handle other methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
