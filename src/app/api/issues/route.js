import { prisma } from '@/lib/db.js';
import { getCurrentUser } from '@/lib/session';

export async function GET() {
  try {
    const issues = await prisma.Issue.findMany({
      include: {
        user: {
          select: {
            login: true,
          },
        },
      },
    });
    return new Response(JSON.stringify(issues), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response(JSON.stringify({ 'GET /issues': error.message }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  const user = await getCurrentUser(request);
  if (!user) {
    console.log(`#########\n UNAUTORISED \n#########`);
    return new Response(JSON.stringify({ 'POST /issues': 'unautorised' }), {
      status: 401,
    });
  } else {
    try {
      const issue = await request.json();

      const issueCreation = await prisma.Issue.create({
        data: {
          host: issue.host,
          device: issue.device,
          description: issue.description,
          user: {
            connect: {
              id: issue.user,
            },
          },
        },
      });
      return new Response(JSON.stringify({ 'POST /issues': issueCreation }), {
        status: 201,
      });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response(JSON.stringify({ 'POST /issues': error.message }), {
        status: 500,
      });
    }
  }
}
// curl -d '{"host": "c1r1p1", "device": "iMac", "description": "need to reinstall CLI", "user": "2"}' localhost:3000/api/issues
