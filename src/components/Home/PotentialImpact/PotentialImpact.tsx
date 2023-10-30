import Image from 'next/image';

const PotentialImpact = () => (
	<div className='wrapper flex gap-8 mt-40'>
		<div className='flex flex-col justify-center'>
			<h1 className='text-5xl font-bold leading-[3.5rem]'>
				Unlock Your Potential and Make a Lasting Impact with UNYN
			</h1>
			<p className='text-lg leading-snug text-neutral-300'>
				Joining UNYN offers a unique opportunity for personal growth,
				professional development, and making a positive difference in the world.
				Our dynamic and impactful international student society is dedicated to
				nurturing the talents and potential of young individuals across colleges
				and universities worldwide. Through our diverse range of programs,
				events, and initiatives, we empower the youth today to create a brighter
				and more promising future for tomorrow.
			</p>
		</div>

		<Image
			alt='Potential Impact'
			src='/potential.png'
			width={555}
			height={544}
		/>
	</div>
);

export default PotentialImpact;
