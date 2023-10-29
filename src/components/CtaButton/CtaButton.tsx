import clsx from 'clsx';
import type { Route } from 'next';
import Link from 'next/link';

const CtaButton: React.FC<CtaBtnProps> = ({
	children,
	revserseColor = false,
	href,
	...restProps
}) => {
	if (href)
		return (
			<Link
				className={clsx(
					'w-44 h-12 flex justify-center items-center text-lg font-normal leading-snug rounded-[3rem]',
					{
						'bg-brand-300 text-white border border-white': !revserseColor,
						'bg-white text-brand-300 border border-brand-300': revserseColor
					}
				)}
				href={href}>
				{children}
			</Link>
		);

	return (
		<button
			{...restProps}
			className={clsx(
				'w-44 h-12 flex justify-center items-center text-lg font-normal leading-snug rounded-[3rem]',
				{
					'bg-brand-300 text-white border border-white': !revserseColor,
					'bg-white text-brand-300 border border-brand-300': revserseColor
				}
			)}>
			{children}
		</button>
	);
};

export default CtaButton;

interface WithLink
	extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
	href: Route;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	href?: Route;
}

type CtaBtnProps = {
	children: React.ReactNode;
	revserseColor?: boolean;
} & (WithLink | ButtonProps);
