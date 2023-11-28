import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

export default function NewProduct() {
  return (
    <Layout>
      <h1 className="text-gray-900 mb-2 text-xl">Nuevo Producto</h1>
      <ProductForm />
    </Layout>
  );
}
