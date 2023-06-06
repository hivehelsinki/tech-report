import { slack_notification } from './slack';
import { discord_notification } from './discord';

/**
 * Function to send a notification to Slack and Discord
 * @param type The type of notification to send
 * @param data The data to send in the notification
 * @returns null
 */
export function notification(type, data) {
  slack_notification(type, data);
  discord_notification(type, data);
}
