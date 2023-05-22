async function send_payload(uri, payload) {
  return await fetch(uri, {
    method: 'POST',
    body: payload,
  });
}

export async function slack_notification(type, data) {
  const SlackURI = process.env.SLACK_URL;
  if (!SlackURI) return;

  if (type === 'add') {
    var payload = {
      attachments: [
        {
          pretext: `*New report created by ${data.login}*`,
          fallback: `New report created by ${data.login}`,
          color: '#FADE4B',
          title: `${data.host} - ${data.device}`,
          text: data.description,
        },
      ],
    };
  }

  const res = await send_payload(SlackURI, JSON.stringify(payload));

  return {
    status: res.status,
    body: await res.text(),
  };
}
