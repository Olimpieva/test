import React from "react";
import { FetchTicketsResponse } from "entities/ticket";
import { ticketsService } from "services";
import { TicketList } from "widgets";

const TicketsPage = async (props: any) => {
  console.log({ props });

  // eslint-disable-next-line react/destructuring-assignment
  const data: FetchTicketsResponse = await ticketsService.getTickets(
    props?.searchParams?.page ? Number(props?.searchParams?.page) : 1,
  );

  return (
    <div>
      <TicketList data={data} />
    </div>
  );
};

export default TicketsPage;
