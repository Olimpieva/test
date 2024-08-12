"use client";

import { Pagination } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import TicketStatus from "components/TicketStatus";
import { TicketPreview } from "entities/ticket";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useMemo } from "react";

type Props = {
  list: TicketPreview[];
  total: number;
  currentPage: number;
};

const TicketTable = ({ list, total, currentPage }: Props) => {
  const columns: ColumnsType<TicketPreview> = useMemo(
    () => [
      {
        title: "Тема",
        dataIndex: "subject",
        key: "subject",
      },
      {
        title: "Номер",
        key: "id",
        dataIndex: "id",
      },
      {
        title: "Дата создания",
        key: "createdAt",
        dataIndex: "createdAt",
        render: (_, record) =>
          `${new Date(record.createdAt).toLocaleDateString("ru", {
            hour: "numeric",
            minute: "numeric",
          })}`,
      },
      {
        title: "Дата изменения",
        key: "updatedAt",
        dataIndex: "updatedAt",
        render: (_, record) =>
          `${new Date(record.updatedAt).toLocaleDateString("ru", {
            hour: "numeric",
            minute: "numeric",
          })}`,
      },
      {
        title: "Крайний срок",
        key: "dueDate",
        dataIndex: "dueDate",
        render: (_, record) =>
          `${new Date(record.dueDate).toLocaleDateString("ru", {
            hour: "numeric",
            minute: "numeric",
          })}`,
      },
      {
        title: "Статус",
        key: "status",
        dataIndex: "status",
        render: (_, record) => <TicketStatus status={record.status} />,
      },
    ],
    [],
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onPaginationChanged = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Table
        dataSource={list}
        columns={columns}
        pagination={false}
        rowKey={record => record.id}
        onRow={record => ({
          onClick: () => replace(`${pathname}/${record.id}`),
        })}
      />
      <Pagination
        onChange={onPaginationChanged}
        total={total}
        defaultCurrent={currentPage}
      />
    </div>
  );
};

export default TicketTable;
