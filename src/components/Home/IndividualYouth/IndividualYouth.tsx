import Image from 'next/image';

const IndividualYouth: React.FC<IndividualYouthProps> = ({
	title: [titleLeft, titleRight],
	description,
	image
}) => (
	<section className='wrapper flex flex-col gap-15'>
		<div className='flex justify-between'>
			<h1 className='text-5xl font-bold leading-[3.5rem] w-[38rem]'>
				{titleLeft} <span className='text-secondary-300'>{titleRight}</span>
			</h1>
			<p className='text-neutral-300 text-lg leading-snug w-[31rem]'>
				{description}
			</p>
		</div>
		<Image width={1140} height={690} src={image} alt='individual-youth' />
	</section>
);

export default IndividualYouth;

interface IndividualYouthProps {
	title: [string, string];
	description: string;
	image: string;
}
