'use client';
import { ContactReducer } from '@lib/contactHandler';
import CtaButton from '@ui/CtaButton/CtaButton';
import { useFormState } from 'react-dom';
import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

const ContactForm = () => {
	const [state, dispatch] = useFormState(ContactReducer, {
		errors: {},
		message: ''
	});

	return (
		<div className='p-10 flex flex-col gap-6 shadow z-10 bg-white'>
			<p className='text-5xl font-bold leading-[3.5rem]'>Say something</p>
			<form className='flex flex-col gap-4' action={dispatch}>
				<FormItem
					id='name'
					name='name'
					type='text'
					placeholder='Your Name...'
					required
					errors={state.errors?.name}
				/>
				<FormItem
					id='email'
					type='email'
					name='email'
					placeholder='Your Email...'
					required
					errors={state.errors?.email}
				/>
				<FormItem
					id='message'
					name='message'
					placeholder='Your Message...'
					isTextArea
					required
					minLength={10}
					maxLength={3000}
					errors={state.errors?.message}
				/>

				<CtaButton fullWidth type='submit'>
					Send
				</CtaButton>
			</form>
		</div>
	);
};

const FormItem: FC<FormItemProps> = ({
	isTextArea = false,
	className = '',
	errors,
	...props
}) => {
	const similarClassName =
		'w-[30rem] outline-none h-13 px-5 border rounded-xlm shadow-inner border-secondary-300 caret-secondary-300 placeholder-neutral-400 text-base leading-tight';

	return (
		<div
			className='flex flex-col gap-1 items-center'
			aria-describedby={`${props.name}-error`}>
			{isTextArea ? (
				<textarea
					{...(props as TextAreaProps)}
					className={clsx(similarClassName, 'resize-none h-47 py-4', className)}
				/>
			) : (
				<input
					{...(props as InputProps)}
					className={clsx(similarClassName, className)}
				/>
			)}
			{errors ? (
				<div
					id={`${props.name}-error`}
					aria-live='polite'
					className='mt-2 text-sm text-warning-500'>
					{errors.map((error: string) => (
						<p key={error}>{error}</p>
					))}
				</div>
			) : null}
		</div>
	);
};

interface BaseProps {
	errors?: string[];
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
	isTextArea?: false;
}

interface TextAreaProps
	extends BaseProps,
		TextareaHTMLAttributes<HTMLTextAreaElement> {
	isTextArea: true;
}

type FormItemProps = InputProps | TextAreaProps;

export default ContactForm;
