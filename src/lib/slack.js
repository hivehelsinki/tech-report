async function send_payload(uri, payload) {
  return await fetch(uri, {
    method: 'POST',
    body: payload,
  });
}

export async function slack_notification(type, ...args) {
    const SlackURI = process.env.SLACK_URL;
    if (!SlackURI) return ;
    
    if (type === 'add') {
      var payload = {
        "fallback": "New report added",
        "blocks": [{
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `:heavy_plus_sign: new report added by *${args[0]}* about *${args[1]}* \`\`\`${args[2]}\`\`\``
          }
        }]
      }
    }

    const res = await send_payload(SlackURI, JSON.stringify(payload));

    return {
        status: res.status,
        body: await res.text(),
    };
}