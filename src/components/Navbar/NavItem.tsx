import Link from 'next/link';

const NavItem: React.FC<NavItemProps> = ({ label, href, children }) => {
	const getChild = () => {
		if (href) return <Link href={href}>{label || children}</Link>;

		return label || children;
	};

	return (
		<div className='text-lg leading-snug font-normal cursor-pointer hover:text-brand text-black'>
			{getChild()}
		</div>
	);
};

export default NavItem;

type NavItemProps = WithLink | WithChildren;
