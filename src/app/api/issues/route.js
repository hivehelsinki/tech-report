import { prisma } from '@/lib/db.js';
import { getCurrentUser } from '@/lib/session';
import fs from 'fs';
import yaml from 'js-yaml';

export async function GET() {
  try {
    const issues = await prisma.Issue.findMany({
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
    return new Response(JSON.stringify(issues), {
      status: 200,
    });
  } catch (error) {
    console.log(`#########\n ${error.message} \n#########`);
    return new Response({}, { status: 500 });
  }
}

export async function POST(request) {
  const user = await getCurrentUser(request);
  if (!user) {
    console.log(`#########\n UNAUTORISED \n#########`);
    return new Response({}, { status: 401 });
  } else {
    try {
      const issue = await request.json();
      const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));
      if (ymlData.hosts.includes(issue.host) === false) {
        return new Response({ status: 400 });
      }
      const issueCreation = await prisma.Issue.create({
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
      return new Response({}, { status: 201 });
    } catch (error) {
      console.log(`#########\n ${error.message} \n#########`);
      return new Response({}, { status: 500 });
    }
  }
}
// curl -d '{"host": "c1r1p1", "device": "iMac", "description": "need to reinstall CLI", "user": "2"}' localhost:3000/api/issues
