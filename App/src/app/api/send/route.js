import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, project } = await req.json();

        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'fjrodafo@gmail.com',
            subject: name,
            replyTo: email,
            text: project,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ success: false, error }, { status: 500 });
    }
}
