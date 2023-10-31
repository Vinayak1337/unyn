import { ChevronRightIcon } from '@heroicons/react/20/solid';
import CtaButton from '@ui/CtaButton/CtaButton';
import Link from 'next/link';
import Image from 'next/image';

// No time to implement this component with props or make reusable components
const Empower = () => (
	<section className='wrapper flex flex-col gap-15 items-center'>
		{/* Top */}
		<div className='flex flex-col gap-1 items-center'>
			<p className='text-lg font-semibold leading-snug'>Empower</p>
			<h1 className='text-5xl font-bold leading-[3.5rem]'>
				Unlock Your Potential with UNYN
			</h1>
			<p className='text-neutral-300 text-lg leading-snug text-center max-w-[44.5rem]'>
				At UNYN, we offer a range of impactful programs and events designed to
				empower young individuals. From mentorship programs to networking events
				and international collaborations, we provide the resources and support
				needed to help you thrive.
			</p>
		</div>

		{/* Bottom */}
		<div className='flex flex-col gap-12 justify-center w-full'>
			<div className='flex justify-between w-full'>
				{data.map(({ image, description, title }, i) => (
					<div key={title + i} className='flex flex-col items-center gap-4'>
						<Image
							width={60}
							height={60}
							className='rounded-full'
							alt={title}
							src={image}
						/>
						<p className='text-2xl font-bold'>{title}</p>
						<p className='text-neutral-300 text-lg leading-snug text-center max-w-xs'>
							{description}
						</p>
					</div>
				))}
			</div>
			<div className='flex gap-8 justify-center'>
				<CtaButton href='?popup=join'>Join</CtaButton>

				<Link
					className='text-brand text-lg leading-snug flex self-center'
					href='/'>
					Learn More <ChevronRightIcon className='w-6 h-6' />
				</Link>
			</div>
		</div>
	</section>
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
