import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  request.headers.set('x-url', url.toString());
  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*'],
};
