import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      casheTime: Infinity,
    },
  },
});

// Create React component
//This function returns the results of whatever React.CreateElememt dose
/*const App = () => {
  return React.createElement(
    "div",
    // We put html attribute here
    {},
    [
      React.createElement("h1", {}, "Adopt Me-1!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    ],
  );
};
*/
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt ME!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(React.createElement(App));
root.render(<App />);
