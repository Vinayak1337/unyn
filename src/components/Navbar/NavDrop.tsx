'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';
import NavItem from './NavItem';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const NavDrop: FC<NavDropProps> = ({ label, items }) => {
	const [open, setOpen] = useState(false);

	const togglePopup = () => setOpen(p => !p),
		openPopup = () => setOpen(true);

	return (
		<div
			onMouseEnter={togglePopup}
			onMouseLeave={togglePopup}
			className='flex gap-1 relative'>
			<p>{label}</p>
			<ChevronUpIcon
				className={clsx('w-6 h-6 transition-all duration-300 ', {
					'rotate-180': open
				})}
			/>

			<div
				onMouseEnter={openPopup}
				className={clsx(
					'absolute -left-5 bg-white px-3 py-2 w-28 items-center rounded-xl border z-50 flex flex-col gap-2 transition-all duration-300',
					{
						'-top-40': !open,
						'top-6': open
					}
				)}>
				{items.map(item => (
					<NavItem {...item} key={'nav-item-' + item.label} />
				))}
			</div>
		</div>
	);
};

export default NavDrop;

export interface NavDropProps {
	label: string;
	items: WithLink[];
}
