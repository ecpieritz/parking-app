import React, { useState } from 'react';

export default function EntranceForm() {
  const [plateNumber, setPlateNumber] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do formulário, se necessário
  };

  return (
    <div className="pp-entrance-form">
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="entrance-plate" className="block text-gray-700 font-bold">
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
            placeholder='AAA-0000'
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${plateNumber.length === 8 ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={plateNumber.length !== 8}
        >
          Confirmar Entrada
        </button>
      </form>
    </div>
  );
}
