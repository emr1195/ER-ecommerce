import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex justify-between">
        <h2>Bienvenido, {session?.user?.name}</h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-8 h-8" />
        </div>
      </div>
    </Layout>
  );
}
