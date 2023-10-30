import { JoinSchema } from '@lib/actions';
import { SECRETS } from '@lib/config';
import { flatErrors } from '@lib/response';
import { transporter } from '@lib/transporter';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const validatedData = JoinSchema.safeParse(body);

		if (!validatedData.success)
			return new Response(flatErrors(validatedData.error), {
				status: 400,
				statusText: 'Bad Request',
				headers: {
					'Content-Type': 'application/json'
				}
			});

		const { name, email, college, phone } = validatedData.data;

		const mailOptions = {
			to: email,
			from: SECRETS.SMPT_USER,
			subject: `Join Community form submission from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\nCollege: ${college}\nPhone: ${phone}`
		};

		const info = await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({
				status: 'success',
				message: 'Message sent successfully.',
				data: info
			}),
			{
				status: 200,
				statusText: 'OK',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error: any) {
		console.error(error);

		return new Response(
			JSON.stringify({
				status: 'error',
				message: error.message
			}),
			{
				status: 500,
				statusText: 'Internal Server Error',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
