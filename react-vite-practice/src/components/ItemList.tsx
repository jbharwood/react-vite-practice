import ItemCard from "./ItemCard";

type ItemListProps = {
  items: Item[];
  searchQuery: string;
};

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ItemList({ items, searchQuery }: ItemListProps) {
  const filteredItems = items.filter((item: Item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="items-container">
      {filteredItems.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}
