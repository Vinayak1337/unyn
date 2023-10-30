import { NavLinks } from '@lib/Navbar';
import Logo from '@ui/Logo/Logo';
import NavItem from './NavItem';
import NavDrop from './NavDrop';
import CtaButton from '@ui/CtaButton/CtaButton';

const Navbar = () => (
	<nav className='mt-10 center-container'>
		<div className='wrapper flex justify-between items-center'>
			{/* Left Nav */}
			<div className='flex gap-12 items-center'>
				<NavItem href='/'>
					<Logo />
				</NavItem>
				<div className='flex gap-8'>
					{NavLinks.map(link => (
						<NavItem {...link} key={'nav-item-' + link.label} />
					))}
					<NavItem>
						<NavDrop label='More' items={NavLinks} />
					</NavItem>
				</div>
			</div>

			{/* Right Nav */}
			<CtaButton href='#contact-us'>Contact us</CtaButton>
		</div>
	</nav>
);

export default Navbar;
