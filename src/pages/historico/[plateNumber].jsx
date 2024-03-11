import { useState, useEffect } from 'react';
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function History() {
  const router = useRouter();
  const { plateNumber } = router.query; // Captura o parâmetro da placa da URL

  const [parkingData, setParkingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/parking");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API");
        }
        const data = await response.json();
        // Filtrando os dados da API para exibir apenas os dados relevantes para a placa especificada
        const filteredData = data.filter(item => item.plate === plateNumber);
        setParkingData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    if (plateNumber) {
      fetchData(); // Chama a função fetchData apenas quando plateNumber estiver definido
    }
  }, [plateNumber]); // Atualiza os dados sempre que a placa mudar

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
          {/* Exibe a placa conforme fornecido pela URL */}
          <h2>Placa {plateNumber}</h2>
        </div>

        <div className="pp-history-details">
          {/* Mapeia os dados filtrados e exibe-os */}
          {parkingData && parkingData.map((api, index) => (
            <div key={index} className="card flex justify-center mb-4">
              <div className="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="content p-4">
                    <p className="">Tempo Atual</p>
                    <h3 className="mt-2">{api.time}</h3>
                  </div>
                  <div className="content p-4">
                    <p className="">Pagamento</p>
                    <h3 className="mt-2">{api.paid ? 'Pago' : '-'}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
