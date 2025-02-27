import { useMarketplaceStore } from "./stores/useMarketplaceStore";
import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
// import axios from "axios";

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function App() {
  const { fetchItems } = useMarketplaceStore();
  const { items, loading } = useMarketplaceStore();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // useEffect(() => {
  //   async function getItems() {
  //     const items = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     console.log(items.data);
  //     return items.data;
  //   }

  //   getItems();
  // }, []);

  // useEffect(() => {
  //   async function getItems() {
  //     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await resp.json();
  //     console.log(data);
  //     return data;
  //   }

  //   getItems();
  // }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <main className="app-container">
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <ItemList items={items} searchQuery={searchQuery} />
    </main>
  );
}
