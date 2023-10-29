import { JoinSchema } from './action';
import { redirect } from 'next/navigation';

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

	console.log(validatedFields.data, validatedFields);

	redirect('/');
};
