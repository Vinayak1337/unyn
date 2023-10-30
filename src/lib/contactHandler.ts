import { ContactSchema } from './actions';
import { redirect, RedirectType } from 'next/navigation';
import { promiseToast } from './promise-toast';

export type State = {
	errors?: {
		email?: string[];
		name?: string[];
		message?: string[];
	};
	message?: string | null;
};

export const ContactReducer = async (_: State, formData: FormData) => {
	const validatedFields = ContactSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message')
	});

	if (!validatedFields.success)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields.'
		};

	promiseToast('contact-us', 'Sending...');

	const response = await fetch('/contact-us', {
		method: 'POST',
		body: JSON.stringify(validatedFields.data),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (response.status !== 200) {
		promiseToast('contact-us', data.message, 'rejected');

		return {
			errors: data.errors,
			message: data.message
		};
	}

	promiseToast('contact-us', 'Sent Successfully!', 'resolved');

	redirect('/', RedirectType.replace);
};
