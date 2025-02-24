import { useMarketplaceStore } from "./stores/useMarketplaceStore";
import "./App.css";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
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

type SearchBarProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

function SearchBar({ setSearchQuery, searchQuery }: SearchBarProps) {
  const handleChange = debounce((value: string) => {
    setSearchQuery(value);
  }, 300);

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

type ItemListProps = {
  items: Item[];
  searchQuery: string;
};

function ItemList({ items, searchQuery }: ItemListProps) {
  const filteredItems = items.filter((item: Item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="items-container">
      {searchQuery}
      {searchQuery !== ""
        ? filteredItems.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })
        : items.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
    </div>
  );
}

type ItemCardProps = {
  item: Item;
};

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="marketplace-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
      </div>
      <button className="buy-button">Buy</button>
    </div>
  );
}
