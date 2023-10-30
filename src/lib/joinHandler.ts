import { JoinSchema } from './actions';
import { redirect } from 'next/navigation';
import { promiseToast } from './promise-toast';

export type State = {
	errors?: {
		email?: string[];
		name?: string[];
		college?: string[];
		phone?: string[];
	};
	message?: string | null;
};

export const joinCommunity = async (_: State, formData: FormData) => {
	const validatedFields = JoinSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		college: formData.get('college'),
		phone: formData.get('phone')
	});

	if (!validatedFields.success)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields.'
		};

	promiseToast('join-comminuty', 'Sending...');

	const response = await fetch('/join-community', {
		method: 'POST',
		body: JSON.stringify(validatedFields.data),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (response.status !== 200) {
		promiseToast('join-comminuty', data.message, 'rejected');

		return {
			errors: data.errors,
			message: data.message
		};
	}

	promiseToast('join-comminuty', 'Sent Successfully!', 'resolved');

	redirect('/');
};
