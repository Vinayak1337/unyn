const FormItem: React.FC<FormItemProps> = ({ label, error, ...restProps }) => (
	<div className='flex flex-col items-center'>
		<fieldset className='w-[23.5rem] border-neutral-400 border pl-5 rounded-xl'>
			<legend className='text-neutral-400 text-base leading-tight'>
				{label}
			</legend>
			<input
				{...restProps}
				required
				className='w-full h-9 placeholder-neutral-400 rounded-xl border-none outline-none text-base leading-tight'
				aria-describedby={`${restProps.name}-error`}
			/>
		</fieldset>
		{error ? (
			<div
				id={`${restProps.name}-error`}
				aria-live='polite'
				className='mt-2 text-sm text-warning-500'>
				{error.map((error: string) => (
					<p key={error}>{error}</p>
				))}
			</div>
		) : null}
	</div>
);

export default FormItem;

interface FormItemProps
	extends Omit<
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		'className' | 'required'
	> {
	label: string;
	error?: string[];
}
