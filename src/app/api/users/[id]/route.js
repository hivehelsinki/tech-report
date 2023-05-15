import { prisma } from '@/lib/db.js';

export async function GET(request, { params }) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response('', { status: 500 });
  }
}
