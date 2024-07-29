import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "./app/actions/verifey";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const resp = await verify();

  if (resp.data == true) {
  } else {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin-dash/:path*",
};
