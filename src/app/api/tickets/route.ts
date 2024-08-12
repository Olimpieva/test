import { NextRequest, NextResponse } from "next/server";
import { tickets } from "utils/fixtures";

const limit = 6;

export async function GET(req: NextRequest, res: NextResponse) {
  const page = Number(new URL(req.url!).searchParams.get("page")) || 1;

  const nextTickets = tickets.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    tickets: nextTickets,
    total: tickets.length,
    page,
    limit,
  });
}
