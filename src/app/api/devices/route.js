import fs from 'fs';
import yaml from 'js-yaml';
const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));

export async function GET() {
  try {
    return Response.json({ devices: ymlData.devices });
  } catch (error) {
    console.log(error);
    return new Response({}, { status: 500 });
  }
}
