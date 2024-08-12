import {
  SupportType,
  Ticket,
  TicketPreview,
  TicketStatus,
} from "entities/ticket";

export const users = {
  garvrilov: {
    id: "garvrilov",
    name: "Иван",
    surname: "Иванов",
    email: "gavrilov@mail.com",
  },
  fedorov: {
    id: "fedorov",
    name: "Петр",
    surname: "Федоров",
    email: "fedorov@mail.com",
  },
};

export const tickets: TicketPreview[] = [
  {
    id: 95708,
    user: users.garvrilov.id,
    subject: "Электронная почта",
    createdAt: "2024-05-20T15:22:00",
    updatedAt: "2024-05-20T17:22:00",
    dueDate: "2024-05-21T17:22:00",
    status: TicketStatus.OPEN,
  },
  {
    id: 95802,
    user: users.garvrilov.id,
    subject: "Установка платформы",
    createdAt: "2024-05-20T13:11:00",
    updatedAt: "2024-05-20T13:11:00",
    dueDate: "2024-05-23T13:11:00",
    status: TicketStatus.IN_PROGRESS,
  },
  {
    id: 95803,
    user: users.garvrilov.id,
    subject: "Подключение к сети",
    createdAt: "2024-05-20T13:11:00",
    updatedAt: "2024-05-20T13:11:00",
    dueDate: "2024-05-23T13:11:00",
    status: TicketStatus.PENDING_APPROVAL,
  },
  {
    id: 95804,
    user: users.fedorov.id,
    subject: "Установка ПО на ПК",
    createdAt: "2024-05-20T13:11:00",
    updatedAt: "2024-05-20T13:11:00",
    dueDate: "2024-05-23T13:11:00",
    status: TicketStatus.AWAITING_CONFIRMATION,
  },
];

export const fullTickets: Record<number, Ticket> = {
  95708: {
    ...tickets[0],
    description: "Прошу сделать переадресацию на время отпуска",
    awaitingResponse: false,
    support: SupportType.INTERNET,
    included: ["Почта"],
  },
  95802: {
    ...tickets[1],
    description: "Прошу установить платформу 8.3.24",
    awaitingResponse: false,
    support: SupportType.WORKPLACE,
    included: ["Настройка ПО"],
  },
  95803: {
    ...tickets[2],
    description: "Нужен доступ к serversoft",
    awaitingResponse: false,
    support: SupportType.INTERNET,
    included: ["Доступ"],
  },
  95804: {
    ...tickets[3],
    description: "Нужна IDE для нового сотрудника",
    awaitingResponse: true,
    support: SupportType.WORKPLACE,
    included: ["Настройка ПО"],
    resolution: "Софт установлен",
  },
};
