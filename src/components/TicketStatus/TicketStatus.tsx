import React from "react";
import {
  CheckCircleTwoTone,
  ClockCircleTwoTone,
  ExclamationCircleTwoTone,
  MessageTwoTone,
} from "@ant-design/icons";
import {
  TicketStatusRU,
  TicketStatus as TicketStatusType,
} from "entities/ticket";
import css from "./TicketStatus.module.scss";

const statusIcons: Record<TicketStatusType, React.JSX.Element> = {
  opened: <ExclamationCircleTwoTone twoToneColor="orange" />,
  closed: <CheckCircleTwoTone twoToneColor="lightgreen" />,
  "in-progress": <ClockCircleTwoTone />,
  "pending-approval": <MessageTwoTone twoToneColor="orange" />,
  "awaiting-confirmation": <MessageTwoTone twoToneColor="lightgreen" />,
};

type Props = {
  status: TicketStatusType;
};

const TicketStatus = ({ status }: Props) => (
  <div className={css.container}>
    {statusIcons[status]}
    <span>{TicketStatusRU[status]}</span>
  </div>
);

export default TicketStatus;
