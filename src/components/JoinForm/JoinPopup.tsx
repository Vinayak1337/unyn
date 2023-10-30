'use client';
import clsx from 'clsx';
import type { Route } from 'next';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import JoinForm from './JoinForm';
import Logo from '@ui/Logo/Logo';

const JoinPopup = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname() as Route;

	const isOpen = searchParams.get('popup') === 'join';

	const closePopup = () => router.push(pathname);

	return (
		<div
			className={clsx(
				'flex justify-center items-center absolute w-screen h-screen top-0 left-0 z-50',
				{
					hidden: !isOpen,
					block: isOpen
				}
			)}>
			<div
				onClick={closePopup}
				className='w-full h-full bg-black bg-opacity-50 fixed top-0 left-0'
			/>

			<div className='relative z-10 w-fit h-fit bg-white px-13 py-10 flex items-center gap-10 flex-col'>
				<Logo />
				<p className='text-3.5xl font-bold'>Fill details to join</p>
				<JoinForm />
			</div>
		</div>
	);
};

export default JoinPopup;
