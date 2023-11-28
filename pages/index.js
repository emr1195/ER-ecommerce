import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex justify-between">
        <h2>Bienvenido, {session?.user?.name}</h2>
        <div>
          <img
            className="rounded-lg w-8 h-8"
            src={session?.user?.image}
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
