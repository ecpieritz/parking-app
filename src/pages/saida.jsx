import Header from "@/components/header";
import LeaveForm from "@/components/leaveForm";
import Menu from "@/components/menu";
import Link from "next/link";
import { useState } from "react";

export default function Saida() {
  const [plateNumber, setPlateNumber] = useState(""); // Estado para armazenar o número da placa

  return (
    <>
      <Header />

      <main className={`flex flex-col items-center justify-between py-12`}>
        <Menu />

        {/* Passando o estado e a função de atualização para o componente LeaveForm */}
        <LeaveForm plateNumber={plateNumber} onPlateNumberChange={setPlateNumber} />

        <div className="pp-view-history">
          {/* Usando o valor de plateNumber no link */}
          <Link href={`/historico/${encodeURIComponent(plateNumber)}`}>
            <button className="blue-text-btn">Ver histórico</button>
          </Link>
        </div>

      </main>
    </>
  );
}
