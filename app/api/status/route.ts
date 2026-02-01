import { NextResponse } from "next/server";

export async function GET() {
  // Example: Check server status (here we just hardcode online)
  const status = {
    online: true,
    message: "OblivionX server is online!"
  };

  return NextResponse.json(status);
}
