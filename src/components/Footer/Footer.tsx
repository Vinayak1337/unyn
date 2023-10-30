import Logo from '@ui/Logo/Logo';
import ContactUs from './ContactUs';
import Subscribe from './Subscribe';
import Link from 'next/link';
import FooterMenu from './FooterMenu';

const Footer = () => (
	<footer
		id='contact-us'
		className='w-full flex flex-col items-center relative self-end'>
		<ContactUs />

		<div className='bg-secondary-300 center-container'>
			<div className='wrapper flex flex-col gap-8 text-white pt-62 pb-20'>
				{/* Top */}
				<div className='flex justify-between'>
					{/* Left */}
					<div className='flex flex-col gap-6 w-[28.5rem]'>
						<Logo isWhite />

						<div className='flex flex-col gap-4'>
							<p className='text-lg leading-snug'>
								Stay up to date on the latest features and releases by joining
								our newsletter.
							</p>
							<Subscribe />
							<p className='text-sm'>
								By subscribing, you agree to our Privacy Policy and consent to
								receive updates from our company.
							</p>
						</div>
					</div>

					{/* Right */}
					<FooterMenu />
				</div>

				{/* Bottom */}
				<div className='flex flex-col w-full gap-6'>
					<hr />
					<div className='flex justify-between text-sm'>
						<div className='flex gap-6'>
							<p>© 2023 UNYN. All rights reserved.</p>
							<Link href='/privacy-policy'>Privacy Policy</Link>
							<Link href='/terms-of-service'>Terms of Service</Link>
						</div>
						<p>Design and Developed by InGelt Pvt. Ltd.</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
