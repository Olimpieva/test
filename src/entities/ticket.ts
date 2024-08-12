export enum TicketStatus {
  OPEN = "open",
  IN_PROGRESS = "in-progress",
  PENDING_APPROVAL = "pending-approval",
  AWAITING_CONFIRMATION = "awaiting-confirmation",
  CLOSED = "closed",
}

export enum SupportType {
  OTHER = "other",
  INTERNET = "internet",
  WORKPLACE = "workplace",
}

export type Ticket = {
  id: number;
  user: string; // Имя пользователя или идентификатор
  subject: string; // Тема тикета
  description: string; // Описание тикета
  createdAt: string; // Дата создания в формате ISO строки
  updatedAt: string; // Дата изменения в формате ISO строки
  dueDate: string; // Крайний срок в формате ISO строки
  status: TicketStatus; // Состояние тикета (можно расширить список)
  awaitingResponse: boolean; // Ожидает ли ответа (true/false)
  resolution?: string; // Решение тикета (опционально, если тикет закрыт)
  support: SupportType; // Услуга, к которой относится тикет
  included: string[]; // Состав тикета (массив строк, например, компоненты, связанные с тикетом)
};

export type TicketPreview = {
  id: number;
  user: string;
  subject: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  status: TicketStatus;
};
