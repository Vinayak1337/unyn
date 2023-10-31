import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => (
	<section className='wrapper flex justify-between gap-8'>
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-1'>
				<h1 className='text-5xl font-bold leading-[3.5rem]'>
					Stay Updated with UNYN Newsletter
				</h1>
				<p className='text-lg text-neutral-300 leading-snug'>
					Gets the latest updates, news and exciting opportunities for UNYN.
				</p>
			</div>
            <div className='flex flex-col gap-1'>
                <NewsletterForm />
				<p className='text-neutral-300 text-sm'>
					By signing up, you agree to our Term and Conditions.
				</p>
			</div>
		</div>
		<Image
			alt='newsletter group image'
			src='/newsletter.png'
			width={555}
			height={310}
		/>
	</section>
);

export default Newsletter;
