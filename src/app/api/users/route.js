import { prisma } from '@/lib/db.js';

export async function GET() {
  try {
    const users = await prisma.User.findMany();
    return new Response(JSON.stringify({ 'GET /users': users }), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response(JSON.stringify({ 'GET /users': error.message }), {
      status: 500,
    });
  }
}

export async function POST(request, response) {
  try {
    const user = await request.json();
    const userExists = await prisma.User.findFirst({
      where: {
        id: user.id,
        login: user.login,
      },
    });
    if (userExists) {
      return new Response(
        JSON.stringify({ 'GET /users': 'User already exists' }),
        { status: 409 }
      );
    } else {
      const userCreation = await prisma.User.create({
        data: {
          id: user.id,
          login: user.login,
          admin: user.admin,
        },
      });
      return new Response(JSON.stringify({ 'GET /users': userCreation }), {
        status: 201,
      });
    }
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response(JSON.stringify({ 'GET /users': error.message }), {
      status: 500,
    });
  }
}
// curl -d '{"id": 1, "login": "testuser", "admin": false}' localhost:3000/api/users
