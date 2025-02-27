import { useMarketplaceStore } from "../../stores/useMarketplaceStore";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import NavBar from "../NavBar";
// import axios from "axios";

export default function Home() {
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
    <div>
      <NavBar />
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <ItemList items={items} searchQuery={searchQuery} />
    </div>
  );
}
