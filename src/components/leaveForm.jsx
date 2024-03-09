import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LeaveForm() {
  const [plateNumber, setPlateNumber] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [loadingConfirmed, setLoadingConfirmed] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [leaveCarActive, setLeaveCarActive] = useState(false);
  const [loadingLeaveCar, setLoadingLeaveCar] = useState(false);
  const [leaveCarConfirmed, setLeaveCarConfirmed] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário de saída
  };

  const handleConfirmPayment = () => {
    setFormVisible(false); // Oculta o formulário
    setShowConfirmation(true); // Exibe a div de confirmação
  };

  const handleConfirm = () => {
    setShowConfirmation(false); // Oculta a div de confirmação
    setLoadingConfirmed(true); // Exibe a div de carregamento de confirmação
    setTimeout(() => {
      setLoadingConfirmed(false); // Esconde a div de carregamento após 3 segundos
      setPaymentConfirmed(true); // Exibe a mensagem de confirmação após o carregamento
      setTimeout(() => {
        setPaymentConfirmed(false); // Esconde a mensagem de confirmação após mais 3 segundos
        setFormVisible(true); // Mostra o formulário novamente
      }, 3000);
    }, 3000);
  };

  const handleLeaveCar = () => {
    setLeaveCarActive(true); // Ativa a div de saída de carro
    setFormVisible(false); // Oculta o formulário
    setTimeout(() => {
      setLoadingLeaveCar(false); // Esconde a div de carregamento após 3 segundos
      setLeaveCarConfirmed(true); // Ativa a mensagem de saída liberada após o carregamento
      setTimeout(() => {
        setLeaveCarConfirmed(false); // Esconde a mensagem de saída liberada após mais 3 segundos
        router.push("/");
      }, 3000);
    }, 3000);
  };

  return (
    <div className="pp-leave-form">
      {formVisible && !showConfirmation && !leaveCarActive && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="leave-plate"
              className="block text-gray-700 font-bold"
            >
              Número da Placa:
            </label>
            <input
              type="text"
              id="leave-plate"
              name="leave-plate"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className="border border-gray-400 rounded-md p-2 w-full"
              maxLength={8}
              placeholder="AAA-0000"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`pay-btn py-6 ${
                plateNumber.length === 8 ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={plateNumber.length !== 8}
              onClick={() => handleConfirmPayment()}
            >
              Pagamento
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className={`leave-btn py-6 ${
                plateNumber.length === 8 ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={plateNumber.length !== 8}
              onClick={() => handleLeaveCar()}
            >
              Saída
            </button>
          </div>
        </form>
      )}

      {showConfirmation && (
        <div className="pp-confirm">
          <h3>Confirma o pagamento da placa abaixo?</h3>
          <h3>{plateNumber}</h3>
          <button onClick={() => handleConfirm()}>Confirmar</button>
          <button onClick={() => setShowConfirmation(false)}>Voltar</button>
        </div>
      )}

      {loadingConfirmed && (
        <div className="pp-loading-confirm">
          <p>Confirmando...</p>
        </div>
      )}

      {paymentConfirmed && (
        <div className="pp-ok-confirm">
          <p>Pago!</p>
        </div>
      )}

      {!leaveCarConfirmed && leaveCarActive && !loadingLeaveCar && (
        <div className="pp-leave-car">
          <p>Confirma a saída do veículo da placa abaixo?</p>
          <h3>{plateNumber}</h3>
          <button className="leave-car-btn" onClick={() => setLoadingLeaveCar(true)}>Liberar Saída</button>
          <button onClick={() => setLeaveCarActive(false)}>Voltar</button>
        </div>
      )}

      {loadingLeaveCar && (
        <div className="pp-loading-leave-car">
          <p>Confirmando...</p>
        </div>
      )}

      {leaveCarConfirmed && (
        <div className="pp-ok-leave-car">
          <p>Saída Liberada</p>
        </div>
      )}
    </div>
  );
}
