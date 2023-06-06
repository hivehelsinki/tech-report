export async function discord_notification(type, data) {
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

  const res = await send_payload(DiscordURI, JSON.stringify(payload));

  return {
    status: res.status,
    body: await res.text(),
  };
}

async function send_payload(uri, payload) {
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  });
}
