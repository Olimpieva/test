import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { tickets } from "utils/fixtures";

export async function GET() {
  console.log({ tickets });
  return NextResponse.json(tickets);
}
