import { NextResponse } from "next/server";

interface HealthResponse {
  status: "ok";
  timestamp: string;
  uptime: number;
}

const startTime = Date.now();

export async function GET() {
  const healthCheck: HealthResponse = {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: Date.now() - startTime
  };

  return NextResponse.json(healthCheck, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}

// Simple HEAD request for load balancers
export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}