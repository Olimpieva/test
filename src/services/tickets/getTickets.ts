import { tickets } from "utils/fixtures";

const getTickets = async (page: number = 1) => {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return tickets;
  }

  const response = await fetch(
    `http://127.0.0.1:3000/api/tickets?page=${page}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch tickets: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default getTickets;
