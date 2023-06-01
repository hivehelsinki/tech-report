import { prisma } from '@/lib/db.js';
import { getCurrentUser } from '@/lib/session';
import { slack_notification } from '@/lib/slack';
import fs from 'fs';
import yaml from 'js-yaml';
const ymlData = yaml.load(fs.readFileSync('./config.yml', 'utf8'));

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    console.log('#########\n UNAUTORISED \n#########');
    return new Response('', { status: 401 });
  } else {
    try {
      let issues = [];
      if (user.admin === true) {
        issues = await prisma.Issue.findMany({
          orderBy: {
            id: 'desc',
          },
          include: {
            user: {
              select: {
                login: true,
              },
            },
          },
        });
      } else {
        issues = await prisma.Issue.findMany({
          where: {
            userId: user.user_id,
          },
          orderBy: {
            id: 'desc',
          },
          include: {
            user: {
              select: {
                login: true,
              },
            },
          },
        });
      }
      issues = issues.sort((a, b) => {
        if (a.status === b.status) return 0;
        if (a.status === 'resolved') return -1;
        if (b.status === 'resolved') return 1;
        if (a.status === 'ongoing') return -1;
        if (b.status === 'ongoing') return 1;
        else return 0;
      });
      return new Response(JSON.stringify(issues), {
        status: 200,
      });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response('', { status: 500 });
    }
  }
}

export async function POST(request) {
  const user = await getCurrentUser();
  if (!user) {
    console.log('#########\n UNAUTORISED \n#########');
    return new Response('', { status: 401 });
  } else {
    try {
      const issue = await request.json();

      if (ymlData.hosts.includes(issue.host) === false) {
        return new Response('', { status: 400 });
      }
      await prisma.Issue.create({
        data: {
          host: issue.host,
          device: issue.device,
          description: issue.description,
          user: {
            connect: {
              id: user.user_id,
            },
          },
        },
      });
      await slack_notification('insert', {
        login: user.login,
        host: issue.host,
        device: issue.device,
        description: issue.description,
      });
      return new Response('', { status: 201 });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response('', { status: 500 });
    }
  }
}
