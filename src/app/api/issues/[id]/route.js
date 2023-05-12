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
    return new Response(JSON.stringify(issue), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response({}, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const user = await getCurrentUser(request);
  if (user && user.admin) {
    try {
      const issue = await request.json();
      await prisma.Issue.update({
        where: {
          id: Number(params.id),
        },
        data: {
          status: issue.status,
          closed: issue.status === 'resolved' ? new Date() : null,
        },
      });
      return new Response({}, { status: 200 });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response({}, { status: 500 });
    }
  } else {
    console.log(`#########\n UNAUTORISED \n#########`);
    return new Response({}, { status: 401 });
  }
}
