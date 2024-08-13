"use client";

import { Button } from "antd";
import { TicketTable } from "components";
import {
  FetchTicketsResponse,
  TicketStatus,
  TicketStatusRU,
} from "entities/ticket";
import React, { useMemo, useState } from "react";

type Props = {
  data: FetchTicketsResponse;
};

const TicketList = ({ data }: Props) => {
  const [currentTab, setCurrentTab] = useState<TicketStatus | null>(null);
  const { tickets: list, total, page } = data;

  const filteredTickets = useMemo(() => {
    if (!currentTab) {
      return list;
    }

    return list.filter(ticket => ticket.status === currentTab);
  }, [currentTab, list]);

  return (
    <div>
      <h1>Ticket List</h1>

      <Button
        key="all"
        onClick={() => setCurrentTab(null)}
        type={currentTab ? "default" : "primary"}
        disabled={!currentTab}
      >
        Все
      </Button>

      {Object.keys(TicketStatusRU).map(status => (
        <Button
          key={status}
          onClick={() => setCurrentTab(status as TicketStatus)}
          type={status === currentTab ? "primary" : "default"}
          disabled={status === currentTab}
        >
          {TicketStatusRU[status as TicketStatus]}
        </Button>
      ))}

      <TicketTable list={filteredTickets} total={total} currentPage={page} />
    </div>
  );
};

export default TicketList;
