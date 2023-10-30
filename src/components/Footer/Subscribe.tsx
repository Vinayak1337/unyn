'use client';
import { SubscribeReducer } from '@lib/subscribeHandler';
import CtaButton from '@ui/CtaButton/CtaButton';
import { useFormState } from 'react-dom';

const Subscribe = () => {
	const [state, dispatch] = useFormState(SubscribeReducer, {
		errors: {},
		message: ''
	});

	return (
		<form action={dispatch} className='flex gap-8'>
			<div className='flex flex-col gap-1 items-center'>
				<input
					name='email'
					id='subscribe-email'
					type='email'
					className='w-66 h-12 outline-none text-lg leading-snug text-neutral-50 placeholder-neutral-50 bg-secondary-300 border border-white rounded-3xl pl-6'
					placeholder='Enter your email'
					aria-describedby='subscribe-email-error'
					defaultValue=''
				/>
				{state.errors?.email ? (
					<div
						id='subscribe-email-error'
						aria-live='polite'
						className='mt-2 text-sm text-warning-300'>
						{state.errors?.email.map((error: string) => (
							<p key={error}>{error}</p>
						))}
					</div>
				) : null}
			</div>
			<CtaButton
				className='border-secondary-300 text-secondary-300'
				type='submit'
				revserseColor>
				Subscribe
			</CtaButton>
		</form>
	);
};

export default Subscribe;
