import { NextResponse } from "next/server";
import { fullTickets } from "utils/fixtures";

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  const { id } = params;
  const currentTicket = fullTickets[id];

  if (!currentTicket) {
    return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
  }

  return NextResponse.json(currentTicket);
}
