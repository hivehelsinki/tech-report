import { prisma } from '@/lib/db.js';
import { getCurrentUser } from '@/lib/session';
import { slack_notification } from '@/lib/slack';

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
    return new Response('', { status: 500 });
  }
}

const issueUpdate = async (prisma, params, issue) => {
  return prisma.Issue.update({
    where: {
      id: Number(params.id),
    },
    data: {
      status: issue.status,
      closed: issue.status === 'resolved' ? new Date() : null,
    },
  });
};

export async function PATCH(request, { params }) {
  const user = await getCurrentUser(request);
  const issue = await request.json();
  const userCan = ['resolved'];

  if (userCan.includes(issue.status)) {
    if (user && user.id === issue.user_id) {
      try {
        await issueUpdate(prisma, params, issue);
        if (issue.status === 'resolved') {
          slack_notification('update', { ...issue });
        }
        return new Response('', { status: 200 });
      } catch (error) {
        console.log(`#########\n ${error.message} \n#########`);
        return new Response('', { status: 500 });
      }
    } else {
      return new Response('', { status: 401 });
    }
  }

  if (user && user.admin) {
    try {
      await issueUpdate(prisma, params, issue);
      if (issue.status === 'resolved') {
        slack_notification('update', { ...issue });
      }
      return new Response('', { status: 200 });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response('', { status: 500 });
    }
  } else {
    console.log(`#########\n UNAUTORISED \n#########`);
    return new Response('', { status: 401 });
  }
}

export async function DELETE(request, { params }) {
  const user = await getCurrentUser(request);
  if (user && user.admin) {
    try {
      await prisma.Issue.delete({
        where: {
          id: Number(params.id),
        },
      });
      return new Response('', { status: 200 });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response('', { status: 500 });
    }
  }
}
