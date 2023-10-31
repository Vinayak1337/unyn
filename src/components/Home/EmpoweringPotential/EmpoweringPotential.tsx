import CtaButton from '@ui/CtaButton/CtaButton';

const EmpoweringPotential = () => (
	<section className='w-full bg-brand-300 flex justify-center items-center py-27 px-5'>
		<div className='flex flex-col gap-12 items-center'>
			<div className='flex flex-col gap-1 text-white items-center'>
				<h1 className='text-5xl font-bold leading-[3.5rem]'>
					Empowering Your Potential with UNYN
				</h1>
				<p className='text-lg leading-snug'>
					Join UNYN and unlock endless opportunities for growth
				</p>
			</div>
			<div className='flex gap-8'>
				<CtaButton reverseColor href='?popup=join'>
					Join
				</CtaButton>
				<CtaButton href='#contact-us'>Get evolved</CtaButton>
			</div>
		</div>
	</section>
);

export default EmpoweringPotential;
