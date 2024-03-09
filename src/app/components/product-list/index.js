"use client";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 ",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 ",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 ",
  },
];

export default function ProductList() {
  return (
    <ul>
      {products.map((ProductItem) => (
        <li key={ProductItem.id}>{ProductItem.name}</li>
      ))}
    </ul>
  );
}
