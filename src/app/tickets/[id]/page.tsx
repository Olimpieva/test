import React from "react";
import { notFound } from "next/navigation";
import { Ticket } from "entities/ticket";

async function fetchTicket(id: string) {
  const res = await fetch(`http://127.0.0.1:3000/api/tickets/${id}`);
  if (!res.ok) {
    if (res.status === 404) {
      notFound(); // Если тикет не найден, возвращаем 404
    }

    throw new Error("Failed to fetch ticket");
  }
  return res.json();
}

const TicketDetailPage = async ({ params }: { params: { id: string } }) => {
  const ticket: Ticket = await fetchTicket(params.id);

  console.log({ ticket });

  return (
    <div>
      <h1>{ticket.subject}</h1>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetailPage;
