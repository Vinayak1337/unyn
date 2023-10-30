interface Secrets {
	SMPT_HOST?: string;
	SMPT_PORT: number;
	SMPT_USER?: string;
	SMPT_PASS?: string;
	[key: string]: string | number | undefined;
}

export const SECRETS: Secrets = {
	SMPT_HOST: process.env.SMPT_HOST,
	SMPT_PORT: Number(process.env.SMPT_PORT),
	SMPT_USER: process.env.SMTP_MAIL,
	SMPT_PASS: process.env.SMTP_PASSWORD
};
