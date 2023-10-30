'use client';
import Image from 'next/image';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

const BannerCarousel: React.FC<BannerCarouselProps> = ({
	description,
	images,
	title
}) => {
	const [index, setIndex] = useState(1);

	useEffect(() => {
		const timeout = setTimeout(
			() => setIndex(index === images.length ? 1 : index + 1),
			3000
		);

		return () => clearTimeout(timeout);
	}, [index, images.length]);

	const getXPosition = useCallback(
		(itemIndex: number) => (itemIndex - (index - 1)) * 100,
		[index]
	);

	const incrementIndex = () =>
			setIndex(prevIndex => {
				const newIndex = prevIndex + 1;
				if (newIndex > images.length) return 1;
				return newIndex;
			}),
		decrementIndex = () =>
			setIndex(prevIndex => {
				const newIndex = prevIndex - 1;
				if (newIndex < 1) return images.length;
				return newIndex;
			});

	return (
		<div className='w-[555px] flex-col '>
			<div className='flex w-full overflow-x-hidden'>
				{images.map((image, i) => (
					<div
						key={image + i + 'banner-carousel'}
						className='w-full h-full -mr-[100%]'>
						<div className='transform-position w-full h-full flex relative justify-center -mr-[100%]'>
							<Image
								width={555}
								height={639}
								src={image}
								alt='banner-carousel'
							/>
						</div>
						<style jsx>{`
							.transform-position {
								transform: translateX(${getXPosition(i)}%);
								transition: transform 0.6s ease-in-out;
							}
						`}</style>
					</div>
				))}
			</div>
			<div className='flex flex-col pt-4 pl-4 pr-6 pb-6 bg-brand-50 gap-10'>
				<div className='flex flex-col'>
					<p className='text-xl font-semibold leading-normal'>{title}</p>
					<p className='text-base font-light leading-tight text-neutral-500'>
						{description}
					</p>
				</div>

				<div className='flex justify-between'>
					<div className='flex gap-0.5 self-center'>
						{images.map((image, i) => (
							<div
								key={image + i + 'banner-carousel-point'}
								className={clsx('w-2 h-2 rounded-full', {
									'bg-secondary-300': i + 1 === index,
									'bg-secondary-75': i + 1 !== index
								})}
							/>
						))}
					</div>

					<div className='flex gap-4'>
						<ArrowLeftCircleIcon
							onClick={decrementIndex}
							className='cursor-pointer w-6 h-6 text-secondary-300'
						/>
						<ArrowLeftCircleIcon
							onClick={incrementIndex}
							className='cursor-pointer w-6 h-6 rotate-180 text-secondary-300'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerCarousel;

interface BannerCarouselProps {
	images: string[];
	title: string;
	description: string;
}
