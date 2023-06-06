/**
 * Function to send a payload to a URI
 * @param uri The URI to send the payload to
 * @param payload The payload to send
 * @returns The response from the URI
 */
function send_payload(uri, payload) {
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
}

/**
 * Function to send a notification to Discord
 * @param type The type of notification to send
 * @param data The data to send in the notification
 * @returns null
 * @example
 * discord_notification('insert', {
 *  login: 'user',
 * host: 'host',
 * device: 'device',
 * description: 'description',
 * });
 *
 * @example
 * discord_notification('update', {
 *  login: 'user',
 *  host: 'host',
 *  device: 'device',
 *  description: 'description',
 *  status: 'status',
 * });
 */
export function discord_notification(type, data) {
  const DiscordURI = process.env.DISCORD_URL;
  if (!DiscordURI) return;

  let payload = {};

  if (type === 'insert') {
    payload = {
      content: `New report created by ${data.login}`,
      embeds: [
        {
          title: `${data.device} at ${data.host}`,
          description: data.description,
          color: 0xfade4b,
        },
      ],
    };
  } else if (type === 'update') {
    payload = {
      content: `Report updated by ${data.login}`,
      embeds: [
        {
          title: `${data.device} at ${data.host}`,
          description: `Status set to \`${data.status}\`\n\n${data.description}`,
          color: 0xfade4b,
        },
      ],
    };
  } else {
    return;
  }

  send_payload(DiscordURI, JSON.stringify(payload));
}
