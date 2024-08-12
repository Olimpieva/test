"use client";

import React from "react";
import { Card, Typography } from "antd";
import { Ticket } from "entities/ticket";
import { TicketStatus } from "components";
import css from "./TicketDetails.module.scss";

const { Title, Text } = Typography;

type Props = {
  ticket: Ticket;
};

const TicketDetails = ({ ticket }: Props) => {
  const {
    subject,
    status,
    description,
    user,
    id,
    createdAt,
    updatedAt,
    dueDate,
    awaitingResponse,
    resolution,
  } = ticket;
  console.log({ ticket });
  return (
    <Card
      title={`Обращение № ${id} от ${new Date(createdAt).toLocaleDateString(
        "ru",
      )}`}
      extra={<TicketStatus status={status} />}
      className={css.card}
    >
      <div className={css.content}>
        <div className={css.container}>
          <div>
            <Title level={3}>{subject}</Title>
            <Text>{description}</Text>
          </div>

          <div>
            <Title level={5}>Пользователь:</Title>
            <Text>{user}</Text>

            <Title level={5}>Изменено:</Title>
            <Text>
              {new Date(updatedAt).toLocaleDateString("ru", {
                hour: "numeric",
                minute: "numeric",
              })}
            </Text>

            <Title level={5}>Крайний срок:</Title>
            <Text>
              {new Date(dueDate).toLocaleDateString("ru", {
                hour: "numeric",
                minute: "numeric",
              })}
            </Text>
          </div>
        </div>
        <div className={css.footer}>
          {resolution && (
            <Title level={5} style={{ margin: 0 }}>
              Решено: {resolution}
            </Title>
          )}
          {awaitingResponse && <Text type="warning">Ожидает ответа</Text>}
        </div>
      </div>
    </Card>
  );
};

export default TicketDetails;
