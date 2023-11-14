import { ContactLinks } from '@lib/Footer';
import type { Route } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

const ContactUs = () => (
	<div className='wrapper flex justify-between relative -bottom-40'>
		{/* Contact Left */}
		<div className='flex flex-col gap-8'>
			{/* Top */}
			<div className='flex flex-col gap-1'>
				<h1 className='text-5xl font-bold leading-[3.5rem]'>Get in touch</h1>
				<p className='text-lg text-neutral-400 max-w-[25rem]'>
					<span className='text-semibold text-secondary-400'>
						Contact with our team
					</span>{' '}
					to talk about how we can help your business process at scale, or sign
					up for more info
				</p>
			</div>

			{/* Bottom */}
			<div className='flex flex-col gap-4'>
				{ContactLinks.map(link => (
					<ContactItem {...link} key={'contact-item-' + link.label} />
				))}
			</div>
		</div>

		{/* Contact Right - Form */}
		<ContactForm />
	</div>
);

const ContactItem: React.FC<ContactItemProps> = ({ Icon, label, href }) => (
	<Link
		href={(href + encodeURIComponent(label)) as Route}
		className='flex gap-5'>
		<Icon className='w-6 h-6' />
		<p className='max-w-xs text-lg leading-snug'>{label}</p>
	</Link>
);

interface ContactItemProps {
	Icon: React.FC<{
		className?: string;
	}>;
	label: string;
	href: Route;
}

export default ContactUs;
