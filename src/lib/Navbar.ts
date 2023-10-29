import type { Route } from 'next';

export const NavLinks: {
	label: string;
	href: Route | __next_route_internal_types__.RouteImpl<string>;
}[] = [
	{
		label: 'About us',
		href: '/about-us'
	},
	{
		label: 'Services',
		href: '/services'
	},
	{
		label: 'Events',
		href: '/events'
	}
];
