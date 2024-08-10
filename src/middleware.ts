import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = new URL(url.toString()).pathname;
  request.headers.set('x-url', url.toString());

  if (pathname === '/') {
    return NextResponse.redirect(url.toString() + 'en');
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(ar|en)/:path*'],
};
