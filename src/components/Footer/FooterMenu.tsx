import { FooterResources } from '@lib/Footer';
import type { Route } from 'next';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import Image from 'next/image';

const FooterMenu = () => (
	<div className='flex gap-33'>
		{FooterResources.map((category, i) => (
			<Category key={`footer-category-${i}`} {...category} />
		))}
	</div>
);

const Category: FC<CategoryProps> = ({ category, links }) => (
	<div className='flex flex-col gap-6'>
		<Title>{category}</Title>

		<div className='flex flex-col gap-4'>
			{links.map((item, i) => (
				<Item key={`${category}-item-${i}`} {...item} />
			))}
		</div>
	</div>
);

const Title: FC<{ children: ReactNode }> = ({ children }) => (
	<h2 className='text-xl text-bold leading-normal'>{children}</h2>
);

const Item: FC<LinkProps> = ({ label, icon_name, href }) => (
	<Link href={href} className='text-base leading-tight flex gap-4'>
		{icon_name && (
			<Image alt={icon_name} src={`/${icon_name}.png`} width={24} height={24} />
		)}
		<span>{label}</span>
	</Link>
);

interface LinkProps {
	icon_name?: string;
	label: string;
	href: Route;
}

interface CategoryProps {
	category: string;
	links: LinkProps[];
}

export default FooterMenu;
