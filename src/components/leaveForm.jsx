import React, { useState, useEffect } from 'react';

export default function LeaveForm() {
  const [plateNumber, setPlateNumber] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [loadingConfirmed, setLoadingConfirmed] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

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

  useEffect(() => {
    if (paymentConfirmed) {
    }
  }, [paymentConfirmed]);

  return (
    <div className="pp-leave-form">
      {formVisible && !showConfirmation && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="leave-plate" className="block text-gray-700 font-bold">
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
              placeholder='AAA-0000'
            />
          </div>
          <div>
            <button
              type="submit"
              className={`pay-btn py-6 ${plateNumber.length === 8 ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={plateNumber.length !== 8}
              onClick={() => handleConfirmPayment()}
            >
              Pagamento
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className={`leave-btn py-6 ${plateNumber.length === 8 ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={plateNumber.length !== 8}
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
    </div>
  );
}
