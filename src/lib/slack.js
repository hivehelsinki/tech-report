async function send_payload(uri, payload) {
  return fetch(uri, {
    method: 'POST',
    body: payload,
  });
}

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
