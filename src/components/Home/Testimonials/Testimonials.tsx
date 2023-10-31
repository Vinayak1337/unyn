import { StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';

const Testimonials = () => (
	<section className='wrapper flex flex-col gap-15'>
		<div className='flex flex-col gap-1'>
			<h1 className='text-5xl font-bold leading-[3.5rem]'>
				Member Testimonials
			</h1>
			<p className=''>
				Here what our members have to say about their experience with UNYN
			</p>
		</div>

		<div className='flex justify-between w-full'>
			{testimonialsData.map(({ stars, text, name, position, image }, i) => (
				<div key={image + i + '-testimonial'} className='flex flex-col gap-4'>
					<div className='flex gap-1'>
						{Array.from({ length: 5 }, (_, i) => (
							<StarIcon
								key={i + image + '-star'}
								className={clsx('w-6 h-6', {
									'text-brand-300': i < stars,
									'text-gray-300': i >= stars
								})}
							/>
						))}
					</div>
					<p className='text-lg font-semibold leading-snug max-w-[31.75rem]'>
						{text}
					</p>
					<div className='flex gap-1'>
						<Image
							alt={name}
							src={image}
							width={60}
							height={60}
							className='rounded-full'
						/>
						<div className='flex flex-col gap-1'>
							<p className='text-base leading-tight'>{name}</p>
							<p className='text-xs'>{position}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	</section>
);

const testimonialsData = [
	{
		stars: 4,
		text: 'UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.',
		name: 'John Doe',
		position: 'Marketing Manager, XYZ Company',
		image: '/john-doe.png'
	},
	{
		stars: 4,
		text: 'UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.',
		name: 'John Doe',
		position: 'Marketing Manager, XYZ Company',
		image: '/john-doe-2.png'
	}
];

export default Testimonials;
