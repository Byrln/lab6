import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

// Бүтээгдэхүүний өгөгдлийн төрөл
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: { rate: number };
  image: string;
}

// Бүтээгдэхүүний жагсаалт харуулах үндсэн компонент
export function ProductList() {
  // Бүтээгдэхүүний жагсаалтыг хадгалах төлөв
  const [products, setProducts] = useState<Product[]>([]);

  // Бүтээгдэхүүний мэдээллийг API-аас татах
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Барааны датаг татхад алдаа гарлаа:', error));
  }, []);

  // Бүтээгдэхүүний жагсаалтыг хүснэгт хэлбэрээр харуулах
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
                </TableCell>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell className="max-w-md truncate">{product.description}</TableCell>
                <TableCell>{product.rating.rate}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}