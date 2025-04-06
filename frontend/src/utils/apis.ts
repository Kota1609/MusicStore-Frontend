export interface Guitar {
  id: number;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  price: number;
}

export interface InventoryItem {
  guitarId: number;
  quantity: number;
}

export interface Order {
  id: number;
  customerName: string;
  items: Array<{
    guitarId: number;
    quantity: number;
  }>;
  totalAmount: number;
  orderDate: string;
}
const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL || "http://localhost:8082";

export const fetchGuitars = async () => {
  const response = await fetch(`${PRODUCTS_API_URL}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as unknown as Guitar[];
};

export const fetchGuitar = async (id: string) => {
  const response = await fetch(`${PRODUCTS_API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as unknown as Guitar;
};
