import type { Route } from 'next';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export const ContactLinks: {
	Icon: React.FC<{
		className?: string;
	}>;
	href: Route;
	label: string;
}[] = [
	{
		label: '1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 110032',
		href: 'https://www.google.com/maps/search/?api=1&query=',
		Icon: MapPinIcon
	},
	{
		label: '+91-8888888888',
		href: 'tel:',
		Icon: PhoneIcon
	},
	{
		label: 'info@unyn.com',
		href: 'mailto:',
		Icon: EnvelopeIcon
	}
];
