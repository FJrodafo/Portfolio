import { Resend } from 'resend';

let resend;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req) {
    if (!resend) {
        return new Response(JSON.stringify({
            success: false,
            error: "RESEND_API_KEY not set"
        }), { status: 500 });
    }

    try {
        const { name, email, project } = await req.json();

        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'fjrodafo@gmail.com',
            subject: name,
            replyTo: email,
            text: project,
        });

        return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
}
