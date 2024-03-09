"use client";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3",
  },
];

export default function ProductList() {
  const router = useRouter();
  console.log(router);

  return (
    <ul>
      {products.map((productItem) => ( // Changed ProductItem to productItem
        <li
          onClick={() => router.push(`/products/${productItem.id}`)}
          key={productItem.id}
        >
          {productItem.name}
        </li>
      ))}
    </ul>
  );
}

