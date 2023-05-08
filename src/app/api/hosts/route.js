import fs from 'fs';
import yaml from 'js-yaml';

export async function GET() {
  try {
    const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));
    return Response.json({ hosts: ymlData.hosts });
  } catch (error) {
    console.log(error);
    return new Response({}, { status: 500 });
  }
}
