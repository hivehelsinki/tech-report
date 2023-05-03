import { prisma } from '@/lib/db.js';

export async function GET() {
  return new Response('GET USER');
}
export async function POST(request) {
  // const res = await request.json();
  // console.log(res);
  console.log(prisma); // check that the connection is working somehow
  return Response.json({ 'GET /users': 'Not implemented' });
}
// curl -d '{"id": 1, "login": "testuser", "admin": false}' localhost:3000/api/users
