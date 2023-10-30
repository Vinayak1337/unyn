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

export const FooterResources: {
	category: string;
	links: {
		href: Route;
		label: string;
		icon_name?: string;
	}[];
}[] = [
	{
		category: 'Quick Links',
		links: [
			{
				label: 'Home',
				href: '/'
			},
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
		]
	},
	{
		category: 'Updates',
		links: [
			{
				label: 'News',
				href: '/news'
			},
			{
				label: 'Blog',
				href: '/blog'
			},
			{
				label: 'FAQ’s',
				href: '/faqs'
			},
			{
				label: 'Contact us',
				href: '#contact-us'
			}
		]
	},
	{
		category: 'Follow us',
		links: [
			{
				label: 'Twitter',
				href: 'https://twitter.com/',
				icon_name: 'twitter'
			},
			{
				label: 'Facebook',
				href: 'https://www.facebook.com/',
				icon_name: 'facebook'
			},
			{
				label: 'Instagram',
				href: 'https://www.instagram.com/',
				icon_name: 'instagram'
			}
		]
	}
];
