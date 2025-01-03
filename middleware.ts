import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000', 'https://google.com', 'https://www.google.com'];

export async function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    console.log(origin)

    if(origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad request',
            headers: {
                'Content-Type': 'text/plain',
                // 'Access-Control-Allow-Origin': origin
            }
        })
    }

    console.log(request.method);
    console.log(request.url);

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
}