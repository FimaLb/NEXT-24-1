import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pathToRegexp } from "path-to-regexp";

const langs = ["de", "en"];
const langDefault = "en";
const protectedPages = ["/protected"];

function auth() {
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLanding = pathToRegexp("/landing/:locale");
  console.log("pathname", pathname);
  if (isLanding.test(pathname)) {
    const landPage = isLanding.exec(pathname);
    if (landPage) {
      const lng = landPage[1];
      if (!langs.includes(lng)) {
        return NextResponse.redirect(
          new URL(`/landing/${langDefault}`, request.url)
        );
      }
      console.log(landPage[1]);
    }
  }
  const sesson = auth();
  if (protectedPages.includes(pathname) && !sesson) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const response = NextResponse.next();

  response.headers.set("x-hello-from-middleware", "hello");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
