import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link
        className="bg-gray-600 text-white rounded-md py-1 px-2"
        href={"/products/new"}
      >
        Nuevo Producto
      </Link>
      <table className="basic">
        <thead>
          <tr>
            <td>Productos</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>
                <Link href={"/products/edit/" + product._id}>editar</Link>
                <Link
                  className="bg-red-500 ml-2"
                  href={"/products/delete/" + product._id}
                >
                  eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
