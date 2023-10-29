import Image from 'next/image';

const Logo: React.FC<LogoProps> = ({ isWhite = false }) => (
	<Image
		width={100}
		height={31}
		src={`/${isWhite ? 'WHITE' : 'BLUE'}-LOGO.png`}
		alt='UNYN Logo'
	/>
);

export default Logo;

interface LogoProps {
	isWhite?: boolean;
}
