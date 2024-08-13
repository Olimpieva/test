import React from "react";
import { Ticket } from "entities/ticket";
import { TicketDetails } from "widgets";
import { ticketsService } from "services";

const TicketDetailPage = async ({ params }: { params: { id: string } }) => {
  const ticket: Ticket = await ticketsService.getTicketById(params.id);

  return (
    <div>
      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default TicketDetailPage;
