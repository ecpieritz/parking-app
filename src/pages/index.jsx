import { Inter } from "next/font/google";
import Header from "@/components/header";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main
        className={`flex flex-col items-center justify-between py-12`}
      >
        <Menu />

        <h1>Entrada</h1>
      </main>
    </>
  );
}
