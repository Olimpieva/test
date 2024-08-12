import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { TicketTable } from "components";
import { FetchTicketsResponse, TicketPreview } from "entities/ticket";
import { get } from "http";
import React, { useMemo } from "react";
import { tickets } from "utils/fixtures";
import TicketList from "widgets/TicketList";

async function fetchTickets(page: number = 1) {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    console.log(process.env);
    console.log("Mi prishli v zamokannyi rezhim");
    return tickets;
  }

  console.log("123qwe", "going to real api", { page });

  const res = await fetch(`http://127.0.0.1:3000/api/tickets?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return res.json();
}

// eslint-disable-next-line arrow-body-style
const TicketsPage = async (props: any) => {
  console.log({ props });

  // eslint-disable-next-line react/destructuring-assignment
  const data: FetchTicketsResponse = await fetchTickets(
    props?.searchParams?.page ? Number(props?.searchParams?.page) : 1,
  );

  return (
    <div>
      <h1>Tickets</h1>

      <ul>
        <TicketList data={data} />
        {/* <TicketTable list={tickets} /> */}
        {/* {tickets.map(ticket => (
          <li key={ticket.id}>
            <a href={`/tickets/${ticket.id}`}>go to details</a>
            <h2>{ticket.subject}</h2>
            <p>{ticket.user}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default TicketsPage;
