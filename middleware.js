// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const supportedLocales = ['en', 'ua', 'ru'];
  const defaultLocale = 'ua';

  // Check if the URL has a locale
  const pathSegments = pathname.split('/');
  const locale = pathSegments[1];

  if (!supportedLocales.includes(locale)) {
    // If the locale is not supported, redirect to the default locale
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}
