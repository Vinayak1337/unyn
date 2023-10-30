import { ChevronRightIcon } from '@heroicons/react/20/solid';
import CtaButton from '@ui/CtaButton/CtaButton';
import Link from 'next/link';

// No time to implement this component with props & reusable components
const Empower = () => (
	<div className='wrapper mt-40 flex flex-col gap-15'>
		{/* Top */}
		<div className='flex flex-col gap-1 justify-center'>
			<p className='text-lg font-semibold leading-snug'>Empower</p>
			<h1 className='text-5xl font-bold leading-[3.5rem]'>
				Unlock Your Potential with UNYN
			</h1>
			<p className='text-neutral-300 text-lg leading-snug'>
				At UNYN, we offer a range of impactful programs and events designed to
				empower young individuals. From mentorship programs to networking events
				and international collaborations, we provide the resources and support
				needed to help you thrive.
			</p>
		</div>

		{/* Bottom */}
		<div className='flex flex-col gap-12 justify-center'>
			<div className='flex justify-evenly'></div>
			<div className='flex gap-8'>
				<CtaButton href='?popup=join'>Join</CtaButton>

				<Link
					className='text-brand text-lg leading-snug flex self-center'
					href='/'>
					Learn More <ChevronRightIcon className='w-6 h-6' />
				</Link>
			</div>
		</div>
	</div>
);

const data = [
	{
		image: '/mentorship-programs.png',
		title: 'Mentorship Programs',
		description:
			'Connect with experienced mentors who will guide you towards success.'
	},
	{
		image: '/networking-events.png',
		title: 'Networking Events',
		description:
			'Expand your network and forge valuable connections with like- minded individual.'
	},
	{
		image: '/international-collaborations.png',
		title: 'International Collaborations',
		description:
			'Gain global exposure and collaborate with students from different countries.'
	}
];

export default Empower;
