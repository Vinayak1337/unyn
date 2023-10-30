import { z } from 'zod';

export const flatErrors = (errors: z.ZodError) => {
	const errorMessages = errors.formErrors.fieldErrors;

	const flatErrors = {
		status: 'error',
		message: 'Validation failed.',
		errors: errorMessages
	};

	return JSON.stringify(flatErrors);
};
