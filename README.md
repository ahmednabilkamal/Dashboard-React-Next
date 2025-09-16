Dashboard App
This project is a small dashboard application built with Next.js, TypeScript, and Tailwind CSS.

Features:

Item List: Displays a paginated list of items.

Search & Filter: Search items by title and filter by status.

Item Details: Clicking an item opens a side panel with more details.

Add Item: A form to create new items.

Tech Stack
Frontend: Next.js, React, TypeScript

Styling: Tailwind CSS

State Management: Zustand (for UI state like selected item), React Query (for server state and data fetching/caching)

API: In-memory mock API endpoint (/api/items)

Setup and Run
Clone the repository.

Navigate to the project directory.

Install dependencies: npm install

Run the development server: npm run dev

Open your browser and visit http://localhost:3000.

Assumptions
The API is a simple in-memory mock. All data is lost on server restart.

No persistent database is used.

For pagination, filtering, and searching, we are handling the logic on the client side since the dataset is small.

No authentication or authorization is implemented.

What I'd Improve with More Time
Backend Integration: Replace the mock API with a real database and a proper API layer. This would allow for server-side pagination, searching, and filtering, which is more scalable for larger datasets.

Robust State Management: Add more sophisticated state management for forms (e.g., using React Hook Form or Zod for validation).

Accessibility: Conduct a thorough accessibility audit and ensure all components meet WCAG standards.

Testing: Add unit tests (e.g., with Jest/React Testing Library) for key components and integration tests for the main application flow.

UI/UX Polish: Refine the design, add more animations (beyond the details panel), and ensure all components are fully responsive across all screen sizes.

Performance Optimization: Use memoization (e.g., React.memo) for components that don't need to re-render, and lazy-load components to improve initial page load times.