import CtaButton from '@ui/CtaButton/CtaButton';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { homeBannerData } from '@lib/home';
import BannerCarousel from './BannerCarousel';

// Passing context through props so the component can be reusable through multiple pages with different context but same UI
const Banner: React.FC<typeof homeBannerData> = ({
	title,
	description,
	cta,
    learnMore,
    carousel
}) => (
	<div className='wrapper items-center flex gap-10'>
		<div className='w-[543px] flex flex-col gap-12'>
			<div className='flex flex-col gap-4'>
				<h1 className='max-w- text-black text-6.5xl font-bold'>{title}</h1>
				<p className='text-neutral-400 text-lg leading-snug'>{description}</p>
			</div>

			<div className='flex gap-8'>
				<CtaButton href={cta.href}>{cta.text}</CtaButton>

				<Link
					className='text-brand text-lg leading-snug flex self-center'
					href={learnMore}>
					Learn More <ChevronRightIcon className='w-6 h-6' />
				</Link>
			</div>
		</div>

		<BannerCarousel
			{...carousel}
		/>
	</div>
);

export default Banner;
