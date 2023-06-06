import { slack_notification } from './slack';
import { discord_notification } from './discord';

export async function notification(type, data) {
  await slack_notification(type, data);
  await discord_notification(type, data);
}
