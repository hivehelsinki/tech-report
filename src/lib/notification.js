import { slack_notification } from './slack';
import { discord_notification } from './discord';

export function notification(type, data) {
  slack_notification(type, data);
  discord_notification(type, data);
}
