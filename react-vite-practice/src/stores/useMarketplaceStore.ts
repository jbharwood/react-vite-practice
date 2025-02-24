import { create } from "zustand";

interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface MarketplaceState {
  items: Item[];
  loading: boolean;
  fetchItems: () => Promise<void>;
}

export const useMarketplaceStore = create<MarketplaceState>((set) => ({
  items: [],
  loading: true,
  fetchItems: async () => {
    set({ loading: true });

    setTimeout(() => {
      set({
        items: [
          {
            id: 1,
            name: "Cool Avatar",
            price: "$5",
            image: "https://via.placeholder.com/100",
          },
          {
            id: 2,
            name: "Legendary Outfit",
            price: "$15",
            image: "https://via.placeholder.com/100",
          },
          {
            id: 3,
            name: "Epic Sword",
            price: "$10",
            image: "https://via.placeholder.com/100",
          },
          {
            id: 4,
            name: "Magic Hat",
            price: "$8",
            image: "https://via.placeholder.com/100",
          },
        ],
        loading: false,
      });
    }, 2000);
  },
}));
