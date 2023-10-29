'use client';
import { joinCommunity } from '@lib/joinHandler';
import CtaButton from '@ui/CtaButton/CtaButton';
import { useFormState } from 'react-dom';
import FormItem from './FormItem';

const JoinForm = () => {
	const initialState = { message: null, errors: {} };

	const [state, dispatch] = useFormState(joinCommunity, initialState);

	return (
		<form className='flex flex-col items-center gap-6' action={dispatch}>
			<FormItem
				type='text'
				label='Name'
				id='name'
				name='name'
				defaultValue=''
				aria-describedby='name-error'
				placeholder='Enter your name'
				error={state.errors?.name}
			/>
			<FormItem
				type='email'
				label='Email'
				id='email'
				name='email'
				defaultValue=''
				error={state.errors?.email}
				placeholder='Enter your email'
			/>
			<FormItem
				type='tel'
				label='Phone Number'
				id='phone'
				name='phone'
				defaultValue=''
				error={state.errors?.phone}
				placeholder='Enter your phone number'
			/>
			<FormItem
				type='text'
				label='College'
				id='college'
				name='college'
				defaultValue=''
				error={state.errors?.college}
				placeholder='Enter your college name'
			/>

			<CtaButton type='submit'>Submit</CtaButton>
		</form>
	);
};

export default JoinForm;
