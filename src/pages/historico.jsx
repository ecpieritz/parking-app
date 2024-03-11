import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

export default function History() {
  const plateNumber = 'ABC-1234'
  return (
    <>
      <Header />

      <main className={`flex flex-col justify-between py-12`}>
        <div className="pp-history-title flex flex-row items-center">
          <Link href='/saida'>
          <Image
              src="\imgs\pp-icon--arrow-back.svg"
              alt="Descrição da imagem"
              width={33}
              height={23}
            />
          </Link>
          <h2>Placa {plateNumber}</h2>
        </div>
      </main>
    </>
  );
}
