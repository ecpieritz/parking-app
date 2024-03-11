import React, { useState } from "react";
import Image from "next/image";

export default function EntranceForm() {
  const [plateNumber, setPlateNumber] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsRegistering(true);

    // Gerando um valor de tempo randomico entre 1 segundo e 7 dias em milissegundos
    const randomTime =
      Math.floor(Math.random() * (7 * 24 * 60 * 60 * 1000 - 1000)) + 1000;

    // Gerando um ID aleatório de 6 dígitos para a reserva
    const reservationId = Math.floor(100000 + Math.random() * 900000);

    const data = {
      plate: plateNumber,
      time: convertTime(randomTime), // Convertendo o valor de tempo para um formato legível
      paid: false,
      left: false,
      reservation: reservationId.toString(), // Convertendo o ID da reserva para string
    };

    try {
      const response = await fetch("/api/parking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setTimeout(() => {
          setIsRegistering(false);
          setIsRegistered(true);
          setTimeout(() => {
            setIsRegistered(false);
            setPlateNumber("");
          }, 3000); // Mostrar "Registrado!" por 3 segundos
        }, 3000); // Tempo entre o envio e o retorno do registro
      } else {
        throw new Error("Erro ao enviar dados para a API");
      }
    } catch (error) {
      console.error("Erro:", error);
      // Lidar com erros de requisição
    }
  };

  // Função para converter milissegundos em formato legível
  const convertTime = (milliseconds) => {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor(
      (milliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);

    let timeString = "";
    if (days > 0) {
      timeString += `${days} days `;
    }
    if (hours > 0) {
      timeString += `${hours} hours `;
    }
    if (minutes > 0) {
      timeString += `${minutes} minutes `;
    }
    if (seconds > 0) {
      timeString += `${seconds} seconds `;
    }

    return timeString;
  };

  // Função para validar a entrada do usuário
  const handleInputChange = (event) => {
    const { value } = event.target;
    const regex = /^[A-Z0-9-]*$/; // Expressão regular para aceitar apenas números, '-' e letras maiúsculas
    if (regex.test(value) || value === "") {
      setPlateNumber(value);
    }
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
              marginTop: "40px",
            }}
          >
            <Image
              src="\imgs\pp-icon--loading.svg"
              alt="Descrição da imagem"
              width={70}
              height={70}
            />
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Registrando...
          </p>
        </div>
      )}
      {isRegistered && (
        <div className="pp-registered">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Image
              src="\imgs\pp-icon--check.svg"
              alt="Descrição da imagem"
              width={70}
              height={70}
            />
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Registrado!
          </p>
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
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-2 w-full"
              maxLength={8}
              placeholder="AAA-0000"
            />
          </div>
          <button
            type="submit"
            className={`py-6 ${
              plateNumber.length === 8
                ? ""
                : "opacity-50 cursor-not-allowed"
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
