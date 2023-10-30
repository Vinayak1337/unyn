import clsx from 'clsx';
import type { Route } from 'next';
import Link from 'next/link';

const CtaButton: React.FC<CtaBtnProps> = ({
	children,
	revserseColor = false,
	href,
	fullWidth = false,
	className: extraCls,
	...restProps
}) => {
	const className = clsx(
		'h-12 flex justify-center items-center text-lg font-normal leading-snug',
		{
			'bg-brand-300 text-white border border-white': !revserseColor,
			'bg-white text-brand-300 border border-brand-300': revserseColor,
			'w-full rounded-xlm': fullWidth,
			'w-44 rounded-[3rem]': !fullWidth
		},
		extraCls
	);

	if (href)
		return (
			<Link className={className} href={href}>
				{children}
			</Link>
		);

	return (
		<button {...restProps} className={className}>
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
	fullWidth?: boolean;
} & (WithLink | ButtonProps);
