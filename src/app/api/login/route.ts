import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    (username === "gavrilov" && password === "111aaa") ||
    (username === "fedorov" && password === "222bbb")
  ) {
    const response = NextResponse.json({ message: "Login successful" });
    response.headers.set("Access-Control-Allow-Origin", "*");

    return response;
  }

  const response = NextResponse.json(
    { message: "Invalid email or password" },
    { status: 401 },
  );
  response.headers.set("Access-Control-Allow-Origin", "*");

  return response;
}

export async function OPTIONS() {
  const response = NextResponse.json({});

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  return response;
}
