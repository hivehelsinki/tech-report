/**
 * Function to send a payload to a URI
 * @param uri The URI to send the payload to
 * @param payload The payload to send
 * @returns The response from the URI
 */
function send_payload(uri, payload) {
  return fetch(uri, {
    method: 'POST',
    body: payload,
  });
}

/**
 * Function to send a notification to Slack
 * @param type The type of notification to send
 * @param data The data to send in the notification
 * @returns null
 * @example
 * slack_notification('insert', {
 *  login: 'user',
 * host: 'host',
 * device: 'device',
 * description: 'description',
 * });
 *
 * @example
 * slack_notification('update', {
 *  login: 'user',
 *  host: 'host',
 *  device: 'device',
 *  description: 'description',
 *  status: 'status',
 * });
 */
export function slack_notification(type, data) {
  const SlackURI = process.env.SLACK_URL;
  if (!SlackURI) return;

  let payload = {};

  if (type === 'insert') {
    payload = {
      attachments: [
        {
          fallback: `New report created by ${data.login}`,
          color: '#FADE4B',
          title: `${data.device} at ${data.host}`,
          text: data.description,
        },
      ],
    };
  } else if (type === 'update') {
    payload = {
      attachments: [
        {
          fallback: `Report updated by ${data.login}`,
          color: '#FADE4B',
          title: `${data.device} at ${data.host}`,
          text: `Status set to \`${data.status}\`\n\n${data.description}`,
        },
      ],
    };
  } else {
    return;
  }

  send_payload(SlackURI, JSON.stringify(payload));
}
