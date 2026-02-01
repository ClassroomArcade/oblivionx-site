import { NextResponse } from "next/server";

// Example latest version info
const latestVersion = {
  version: "1.0.3",
  downloadUrl: "https://yourcdn.com/OblivionX.exe",
  releaseNotes: "Fixed bugs and improved loader performance."
};

export async function GET() {
  return NextResponse.json(latestVersion);
}
