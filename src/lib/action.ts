import { z } from 'zod';
import validator from 'validator';

export const JoinSchema = z.object({
	name: z
		.string()
		.min(1, 'Please enter your name.')
		.min(3, 'Name should be at least 3 characters long.'),
	email: z
		.string()
		.min(1, 'Please enter your email.')
		.refine(validator.isEmail, 'Please enter a valid email address.'),
	college: z
		.string()
		.min(1, 'Please enter your college name.')
		.min(7, 'College name should be at least 7 characters long.'),
	phone: z
		.string()
		.min(1, 'Please enter your phone number.')
		.refine(validator.isMobilePhone, 'Please enter a valid phone number.')
});
