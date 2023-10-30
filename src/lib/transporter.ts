import { SECRETS } from '@lib/config';
import nodemailer from 'nodemailer';

const requireProperties: { [x: string]: string } = {
	SMPT_HOST: 'Missing SMTP host',
	SMPT_PORT: 'Missing SMTP port',
	SMPT_USER: 'Missing SMTP user',
	SMPT_PASS: 'Missing SMTP password'
};

Object.keys(requireProperties).forEach(key => {
	if (!SECRETS[key]) {
		throw new Error(requireProperties[key]);
	}
});

export const transporter = nodemailer.createTransport({
	host: SECRETS.SMPT_HOST,
	port: SECRETS.SMPT_PORT,
	secure: false,
	auth: {
		user: SECRETS.SMPT_USER,
		pass: SECRETS.SMPT_PASS
	}
});
