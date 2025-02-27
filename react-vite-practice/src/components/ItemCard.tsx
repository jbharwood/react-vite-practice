type ItemCardProps = {
  item: Item;
};

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ItemCard({ item }: ItemCardProps) {
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
