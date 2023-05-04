import { prisma } from '@/lib/db.js';
import { getCurrentUser } from '@/lib/session';

// TODO: checking users could be an option, let it uncheck for now so can be pulled by other services (slack notif?)
export async function GET(request, { params }) {
  try {
    const issue = await prisma.Issue.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return new Response(JSON.stringify({ 'GET /issue': issue }), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response(JSON.stringify({ 'GET /issues': error.message }), {
      status: 500,
    });
  }
}

export async function PATCH(request, { params }) {
  const user = await getCurrentUser(request);
  if (user && user.admin) {
    try {
      const issue = await request.json();
      console.log('issue :', `issue`);

      const issueUpdate = await prisma.Issue.update({
        where: {
          id: Number(params.id),
        },
        data: {
          status: issue.status,
          closed: issue.status === 'resolved' ? new Date() : null,
        },
      });
      return new Response(JSON.stringify({ 'PATCH /issue': issueUpdate }), {
        status: 200,
      });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response(JSON.stringify({ 'PATCH /issue': error.message }), {
        status: 500,
      });
    }
  } else {
    console.log(`#########\n UNAUTORISED \n#########`);
    return new Response(JSON.stringify({ 'PATCH /issue': 'unautorised' }), {
      status: 401,
    });
  }
}
