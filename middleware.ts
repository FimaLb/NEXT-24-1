import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pathToRegexp } from "path-to-regexp";
import { auth } from "auth";
const langs = ["de", "en"];

const protectedPages = ["/protected"];
const guiestOnlyPages = ["/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const islandingPageRegx = pathToRegexp("/landing/:lang");
  if (islandingPageRegx.test(pathname)) {
    const landPage = islandingPageRegx.exec(pathname);
    if (landPage) {
      const lng = landPage[1];
      if (!langs.includes(lng)) {
        return NextResponse.redirect(new URL("/landing/en", request.url));
      }
    }
  }
  const session = await auth();

  if (guiestOnlyPages.includes(pathname) && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (protectedPages.includes(pathname) && session === null) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${pathname}`, request.url)
    );
  }

  // console.log(request.cookies.get("NEXT_LOCALE"));

  const resp = NextResponse.next();

  resp.headers.set("x-hello-from-middleware", "hello");

  return resp;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
