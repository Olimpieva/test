import { TicketPreview } from "entities/ticket";
import React from "react";

async function fetchTickets() {
  const res = await fetch("http://127.0.0.1:3000/api/tickets");

  console.log({ res });

  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return res.json();
}

const TicketsPage = async () => {
  const tickets: TicketPreview[] = await fetchTickets();

  console.log({ tickets });

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {/* <a href={`/tickets/${ticket.id}`}>go to details</a> */}
            <h2>{ticket.subject}</h2>
            <p>{ticket.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
