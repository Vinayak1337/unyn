import { SubscribeSchema } from './actions';
import { RedirectType, redirect } from 'next/navigation';
import { promiseToast } from './promise-toast';

export type State = {
	errors?: {
		email?: string[];
	};
	message?: string | null;
};

export const SubscribeReducer = async (_: State, formData: FormData) => {
	const validatedFields = SubscribeSchema.safeParse({
		email: formData.get('email')
	});

	if (!validatedFields.success)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields.'
		};

	promiseToast('subscribe-email', 'Subscribing...');

	const response = await fetch('/subscribe', {
		method: 'POST',
		body: JSON.stringify(validatedFields.data),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (response.status !== 200) {
		promiseToast('subscribe-email', data.message, 'rejected');

		return {
			errors: data.errors,
			message: data.message
		};
	}

	promiseToast('subscribe-email', 'Subscribed Successfully!', 'resolved');

	redirect('/', RedirectType.replace);
};
