import fs from 'fs';
import yaml from 'js-yaml';

export async function GET() {
  try {
    const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));
    return Response.json({ devices: ymlData.devices });
  } catch (error) {
    console.log(error);
  }
}
