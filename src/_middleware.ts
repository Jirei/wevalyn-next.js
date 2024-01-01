// import { NextRequest, NextResponse } from 'next/server';
// import { Ratelimit } from '@upstash/ratelimit';
// import { kv } from '@vercel/kv';

// const ratelimit = {
//   read: new Ratelimit({
//     redis: kv,
//     // 20 requests from the same IP in 10 seconds
//     limiter: Ratelimit.slidingWindow(1000, '300s'),
//     prefix: "ratelimit:read",
//     timeout: 5000
//   }),
//   contact: new Ratelimit({
//     redis: kv,
//     // 2 requests from the same IP in 600 seconds
//     limiter: Ratelimit.slidingWindow(2, '600s'),
//     prefix: "ratelimit:contact",
//     timeout: 5000
//   })
// };

// export default async function middleware(request: NextRequest) {
//   // You could alternatively limit based on user ID or similar
//   const ip = request.ip ?? '127.0.0.1';
//   if (request.nextUrl.pathname === "/contact" && request.method === 'POST') {
//     const { success } = await ratelimit.contact.limit(
//       ip
//     );
//     return success ? NextResponse.next() : new NextResponse("Too many requests.", { status: 429 });
//   }
//   const { success } = await ratelimit.read.limit(
//     ip
//   );
//   return success
//     ? NextResponse.next()
//     : new NextResponse("Too many requests.", { status: 429 });
// }