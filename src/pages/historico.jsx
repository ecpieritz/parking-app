import { useState, useEffect } from 'react';
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

export default function History() {
  const [parkingData, setParkingData] = useState(null);
  const plateNumber = "aaa-1234";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/parking');
      const data = await response.json();
      setParkingData(data);
    };

    fetchData();
  }, []);

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
