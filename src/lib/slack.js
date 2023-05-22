export async function slack_notification() {
    const SlackURI = process.env.SLACK_URL;
    if (!SlackURI) return ;

    const res = await fetch(SlackURI, {
        method: 'POST',
        body: JSON.stringify({
            text: 'Hello from Vercel!',
        }),
    });

    return {
        status: res.status,
        body: await res.text(),
    };
}