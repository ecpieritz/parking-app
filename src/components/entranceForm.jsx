import React, { useState } from "react";
import Image from "next/image";

export default function EntranceForm() {
  const [plateNumber, setPlateNumber] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        setPlateNumber("");
      }, 3000); // Mostrar "Registrado!" por 3 segundos
    }, 3000); // Mostrar "Registrando..." por 3 segundos
  };

  return (
    <div className="pp-entrance-form">
      {isRegistering && (
        <div className="pp-registering">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '40px'
            }}
          >
            <Image
              src="\imgs\pp-icon--loading.svg"
              alt="Descrição da imagem"
              width={70}
              height={70}
            />
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '20px'
          }}>Registrando...</p>
        </div>
      )}
      {isRegistered && (
        <div className="pp-registered">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '40px'
            }}
          >
            <Image
              src="\imgs\pp-icon--check.svg"
              alt="Descrição da imagem"
              width={70}
              height={70}
            />
          </div>
          <p style={{
            textAlign: 'center',
            marginTop: '20px'
          }}>Registrado!</p>
        </div>
      )}
      {!isRegistering && !isRegistered && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="entrance-plate"
              className="block text-gray-700 font-bold"
            >
              Número da Placa
            </label>
            <input
              type="text"
              id="entrance-plate"
              name="entrance-plate"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className="border border-gray-400 rounded-md p-2 w-full"
              maxLength={8}
              placeholder="AAA-0000"
            />
          </div>
          <button
            type="submit"
            className={`py-6 ${
              plateNumber.length === 8 ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={plateNumber.length !== 8}
          >
            Confirmar Entrada
          </button>
        </form>
      )}
    </div>
  );
}
