import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

export default function History() {
  const plateNumber = "ABC-1234";
  return (
    <>
      <Header />

      <main className={`flex flex-col justify-between py-12`}>
        <div className="pp-history-title flex flex-row items-center">
          <Link href="/saida">
            <Image
              src="\imgs\pp-icon--arrow-back.svg"
              alt="Descrição da imagem"
              width={33}
              height={23}
            />
          </Link>
          <h2>Placa {plateNumber}</h2>
        </div>

        <div className="pp-history-details">
          <div class=" card flex justify-center mb-4">
            <div class="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="grid grid-cols-2">
                <div class="content p-4">
                  <p class="">Tempo Atual</p>
                  <h3 class="mt-2">1h20min</h3>
                </div>
                <div class="content p-4">
                  <p class="">Pagamento</p>
                  <h3 class="mt-2">-</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div class=" card flex justify-center mb-4">
            <div class="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="grid grid-cols-2">
                <div class="content p-4">
                  <p class="">Tempo Atual</p>
                  <h3 class="mt-2">1h20min</h3>
                </div>
                <div class="content p-4">
                  <p class="">Pagamento</p>
                  <h3 class="mt-2">-</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
