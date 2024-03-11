// arquivo: pages/api/parking.js

// Simulando os dados da API
const parkingData = [
  {
    time: "2 hours 4 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "607b5e",
  },
  {
    time: "1 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "60703d",
  },
  {
    time: "2 days 17 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "607144",
  },
  {
    time: "9 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "60771b",
  },
  {
    time: "23 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "607b56",
  },
  {
    time: "15 seconds",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "61434d",
  },
  {
    time: "9 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "616b3e",
  },
  {
    time: "1 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6070ed",
  },
  {
    time: "7 seconds",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "5ffe06",
  },
  {
    time: "1 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "607b5e",
  },
  {
    time: "3 days 13 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "607d02",
  },
  {
    time: "8 days 3 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "61607c",
  },
  {
    time: "29 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "616b4e",
  },
  {
    time: "147 days 23 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "616b62",
  },
  {
    time: "18 hours 21 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "606f3a",
  },
  {
    time: "62 days 22 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6004b2",
  },
  {
    time: "2 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "616045",
  },
  {
    time: "11 days 2 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6234dc",
  },
  {
    time: "2 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627f04",
  },
  {
    time: "71 days 7 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6283bf",
  },
  {
    time: "25 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62e7e2",
  },
  {
    time: "8 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62e7e9",
  },
  {
    time: "25 seconds",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6269ed",
  },
  {
    time: "4 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6269ed",
  },
  {
    time: "17 hours 44 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627c28",
  },
  {
    time: "1 hours 2 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627f0d",
  },
  {
    time: "1 days 11 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627f1d",
  },
  {
    time: "1 days 2 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62eaaf",
  },
  {
    time: "92 days 2 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62ec46",
  },
  {
    time: "489 days 14 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "6365bd",
  },
  {
    time: "19 days 6 hours",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62507f",
  },
  {
    time: "51 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627c19",
  },
  {
    time: "8 seconds",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "627d22",
  },
  {
    time: "39 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62e319",
  },
  {
    time: "17 minutes",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "62e7eb",
  },
  {
    time: "6 seconds",
    paid: true,
    left: true,
    plate: "AAA-4444",
    reservation: "65eb36",
  },
  {
    time: "6 seconds",
    paid: true,
    left: true,
    plate: "AAA-2905",
    reservation: "65eb36",
  },
  {
    time: "4 days 30 minutes",
    paid: true,
    left: true,
    plate: "AAA-2905",
    reservation: "65eb36",
  },
];

// Função para lidar com as requisições à API
export default function handler(req, res) {
  // Verifica o método da requisição
  if (req.method === "GET") {
    // Retorna os dados da API
    res.status(200).json(parkingData);
  } else if (req.method === "POST") {
    try {
      const newData = req.body; // Aqui você espera um novo objeto no corpo da requisição
      parkingData.push(newData);
      res.status(201).json({ message: "New data added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Se o método não for GET ou POST, retorna um erro de método não permitido
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
